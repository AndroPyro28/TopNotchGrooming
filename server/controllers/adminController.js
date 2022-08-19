const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const Appointment = require("../models/Appointment");
const { assignToken } = require("../helpers/AuthTokenHandler");
const Order = require("../models/Order");
const generateId = require('../helpers/GenerateId');
const { sendTextMessageByStatus } = require("../helpers/TextMessage");
const {getDateToday} = require("../helpers/DateFormatter")
const LiveStreams = require("../models/LiveStreams");
const getTime = require("../helpers/getTime");
const MultipleTable = require("../models/MultipleTable");
const {uploadOne} = require('../helpers/CloudinaryLiveStream')

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body.values;
    if (!email || !password) {
      return res.status(200).json({
        msg: "Invalid Credentials",
        success: false,
      });
    }

    const admin = new Admin(req.body.values);

    const adminUser = await admin.selectOneByEmail();

    if (!adminUser) {
      return res.status(200).json({
        msg: "Invalid Credentials",
        success: false,
      });
    }

    //   const isExist = await bcrypt.compare(password, adminUser.password);

    const isExist = password == adminUser.password;

    if (!isExist) {
      return res.status(200).json({
        msg: "Invalid Credentials",
        success: false,
      });
    }
    const token = assignToken(adminUser.id, 'admin');

    return res.status(200).json({
      token,
      success: true,
      msg: "Login Successful",
    });
  } catch (error) {
    console.error(error.message);

    return res.status(200).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports.getSchedule = async (req, res) => {
  try {
    const appointment = new Appointment({});
    const results = await appointment.getSchedule(req.params.status);

    return res.status(200).json({
      results,
      success: true,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(200).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports.getOrders = async (req, res) => {
  const { status, textSearch } = req.body.values;
  try {
    const orderModel = new Order({
      order_status: status,
    });

    const orders = await orderModel.getOrders(textSearch);
    return res.status(200).json({
      orders,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(200).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports.getOrderDetails = async (req, res) => {
  try {
    const { reference } = req.params;

    const orderModel = new Order({
      reference: reference,
    });

    const order = await orderModel.getOrderDetails();

    if (!order) {
      throw new error("something went wrong");
    }

    return res.status(200).json({
      order,
      success: true,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(200).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports.orderNextStage = async (req, res) => {
  const { reference } = req.params;
  const { deliveryStatus, data } = req.body.values;

  let orderStatus = "";

  try {
    if (deliveryStatus >= 1 && deliveryStatus <= 3) {
      orderStatus = "onGoing";
    }

    if (deliveryStatus == 4) {
      orderStatus = "completed";
    }
    if (deliveryStatus == 5) {
      throw new Error("someting went wrong");
    }
    sendTextMessageByStatus(deliveryStatus, data, reference);

    const orderModel = new Order({
      reference,
      order_status: orderStatus,
    });

    const order = await orderModel.orderNextStage(deliveryStatus);

    return res.status(200).json({
      msg: "Order proceeded to next stage",
      success: true,
    });
  } catch (error) {
    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.getAppointment = async (req, res) => {
  try {
    const {id} = req.params;
    const appointment = new Appointment({});
    const result = await appointment.getAppointmentById(id);
    
    if(!result) {
      throw new Error('Appointment not found!');
    }
    return res.status(200).json({
      success:true,
      result
    })
  } catch (error) {
    console.error(error.message);

    return res.status(400).json({
      success:false,
      msg:error.message
    })
  }
}

module.exports.approveAppointment = async (req, res) => {
  try {
    const {id} = req.params;
    const {appointment} = req.body.values;
    const appointmentModel = new Appointment(appointment);
    const result = await appointmentModel.approveAppointment(id);

  } catch (error) {
    console.error(error.message)
    return res.status(400).json({
      success:false,
      msg:error.message
    })
  }
}

module.exports.generateVerifiedLink = async (req, res) => {
  try {
    const liveStreamModel = new LiveStreams({})
    let linkReference = generateId()();
    let result = await liveStreamModel.selectByReferenceId(linkReference);

    while(result.length > 0) {
      linkReference = generateId()();

      result = await liveStreamModel.selectByReferenceId(linkReference);
    }
    
    return res.status(200).json({
      linkId: linkReference,
      success: true
    })
  } catch (error) {
    console.log('hotdog', error.message)
    return res.status(400).json({
      success:false,
      msg:error.message
    })
  }
}

module.exports.getScheduleToday = async (req, res) => {
  try {
    const {date} = req.params;
    
    if(!date) {
      throw new Error("Invalid date");
    }

    const appointmentModel = new Appointment({})

    const result = await appointmentModel.getScheduleByDate(date);

    return res.status(200).json({result})
  } catch (error) {
    console.error(error.message)

    return res.status(400).json({
      success:false,
      msg:error.message
    })
  }
}

module.exports.startStreaming = async (req, res) => {
  try {
    const {linkId, scheduleInfo} = req.body.values;
    const {customerId, appointmentId} = scheduleInfo;
    const startTime = getTime()
    const streamDate = getDateToday()
    if(!linkId || !scheduleInfo) {
      throw new Error("Invalid id")
    }
    
    const liveStreamModel = new LiveStreams({
      customer_id:customerId,
      admin_id: req.currentUser.id,
      reference_id: linkId,
      start_time: startTime,
      date:streamDate,
      appointment_id: appointmentId
    });

    const liveStreamQueryResult = await liveStreamModel.insertOne();
    const liveStreamId = liveStreamQueryResult.insertId;
    
    const appointmentModel = new Appointment({
      live_stream_id: liveStreamId,
      status:'onGoing',
      admin_id: req.currentUser.id,
    });

    const appointmentQueryResult = appointmentModel.addLiveStreamId(appointmentId);

    return res.status(200).json(
      {
        success:true
      }
    )
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      msg:error.message,
      success:false
    })
  }
}

module.exports.appointmentCompleted = async (req, res) => {
  try {
    const {link:reference_id, } = req.params
    const {video_url} = req.body.values;
    const cloudinaryResult = await uploadOne(video_url);
    
    const multipleTable = new MultipleTable();
    const multipleQueryResult = await multipleTable.liveStreamCompleted({reference_id, video_url: cloudinaryResult.url})

    if(multipleQueryResult?.affectedRows <= 0) {
      throw new Error('something went wrong...')
    }

    return res.status(200).json({
      msg: 'completed',
      success:true
    })

  } catch (error) {
    console.error(error.message)
    return res.status(400).json({
      msg:error.message,
      success:false
    })
  }
}