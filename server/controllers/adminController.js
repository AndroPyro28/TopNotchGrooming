const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const Appointment = require("../models/Appointment");
const { assignToken } = require("../helpers/AuthTokenHandler");
const Order = require("../models/Order");
const generateId = require("../helpers/GenerateId");
const { sendTextMessageByStatus, sendTextMessageByAppointment } = require("../helpers/TextMessage");
const { getDateToday } = require("../helpers/DateFormatter");
const LiveStreams = require("../models/LiveStreams");
const getTime = require("../helpers/getTime");
const MultipleTable = require("../models/MultipleTable");
const { uploadOneLiveStream } = require("../helpers/CloudinaryLiveStream");
const Feedback = require("../models/Feedback");

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
    const token = assignToken(adminUser.id, "admin");

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

module.exports.getToShipOrders = async (req, res) => {
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
    const { id } = req.params;
    const appointment = new Appointment({});
    const result = await appointment.getAppointmentById(id);

    if (!result) {
      throw new Error("Appointment not found!");
    }
    return res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports.updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { appointment, customer, status } = req.body.values;
    const appointmentModel = new Appointment(appointment);
    const result = await appointmentModel.updateAppointment(id, status);
    sendTextMessageByAppointment(appointment, customer, status)
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports.generateVerifiedLink = async (req, res) => {
  try {
    const liveStreamModel = new LiveStreams({});
    let linkReference = generateId()();
    let result = await liveStreamModel.selectByReferenceId(linkReference);

    while (result.length > 0) {
      linkReference = generateId()();

      result = await liveStreamModel.selectByReferenceId(linkReference);
    }

    return res.status(200).json({
      linkId: linkReference,
      success: true,
    });
  } catch (error) {
    console.log("hotdog", error.message);
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports.getScheduleToday = async (req, res) => {
  try {
    const { date } = req.params;

    if (!date) {
      throw new Error("Invalid date");
    }

    const appointmentModel = new Appointment({});

    const result = await appointmentModel.getScheduleByDate(date);

    return res.status(200).json({ result });
  } catch (error) {
    console.error(error.message);

    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports.startStreaming = async (req, res) => {
  try {
    const { linkId, scheduleInfo } = req.body.values;
    const { customerId, appointmentId } = scheduleInfo;
    const startTime = getTime();
    const streamDate = getDateToday();
    if (!linkId || !scheduleInfo) {
      throw new Error("Invalid id");
    }

    const liveStreamModel = new LiveStreams({
      customer_id: customerId,
      admin_id: req.currentUser.id,
      reference_id: linkId,
      start_time: startTime,
      date: streamDate,
      appointment_id: appointmentId,
    });

    const liveStreamQueryResult = await liveStreamModel.insertOne();
    const liveStreamId = liveStreamQueryResult.insertId;

    const appointmentModel = new Appointment({
      live_stream_id: liveStreamId,
      status: "onGoing",
      admin_id: req.currentUser.id,
    });

    const appointmentQueryResult =
      appointmentModel.addLiveStreamId(appointmentId);

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.appointmentCompleted = async (req, res) => {
  try {
    const { link: reference_id } = req.params;
    const { video_url } = req.body.values;
    const cloudinaryResult = await uploadOneLiveStream(video_url);

    const multipleTable = new MultipleTable();
    const multipleQueryResult = await multipleTable.liveStreamCompleted({
      reference_id,
      video_url: cloudinaryResult.url,
    });

    if (multipleQueryResult?.affectedRows <= 0) {
      throw new Error("something went wrong...");
    }

    return res.status(200).json({
      msg: "completed",
      success: true,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.dashboardData = async (req, res) => {
  try {
    const orderModel = new Order({});

    const data = await orderModel.dashboardData();
    const dataObj = {};
    let overAllSales = 0;
    let totalSalesToday = 0;
    const dateToday = getDateToday();
    const totalTransactionsPerMonth = {};
    data.forEach((sale) => {
      const date = new Date(sale.order_date);

      const totalAmount = sale.total_amount;

      const currentMonth = date.getMonth();

      let salesOfTheMonth = dataObj[currentMonth];
      if (!totalTransactionsPerMonth[currentMonth]) {
        totalTransactionsPerMonth[currentMonth] = 1;
      } else {
        totalTransactionsPerMonth[currentMonth] += 1;
      }
      if (salesOfTheMonth == null || salesOfTheMonth == undefined) {
        salesOfTheMonth = 0;
      }

      if (date.toISOString().slice(0, 10) == dateToday) {
        totalSalesToday += totalAmount;
      }

      salesOfTheMonth += totalAmount;
      overAllSales += totalAmount;
      dataObj[currentMonth] = salesOfTheMonth;
    });
    return res.status(200).json({
      success: true,
      data: {
        monthlySales: dataObj,
        overAllSales,
        totalSalesToday,
        totalNumberOfAllTransactions: data.length,
        totalTransactionsPerMonth,
      },
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports.markComplete = async (req, res) => {
  const { id } = req.params;
  try {
    const appointmentModel = new Appointment({});

    const response = await appointmentModel.markScheduleAsComplete(id);

    if (!response) {
      throw new Error("Something went wrong...");
    }

    return res.status(200).json({
      success: true,
      msg: "Schedule completed",
    });
  } catch (error) {
    console.error(error.message);

    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports.getAllFeedback = async (req, res) => {
  try {
    const feedbackModel = new Feedback({});
    const result = await feedbackModel.getAllFeedback();
    return res.status(200).json({
      data: result,
      success: true,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports.saleReport = async (req, res) => {
  try {
    const multipleTable = new MultipleTable({});
    const {filterDateFrom, filterDateTo} = req.body.values
    const queryResult = await multipleTable.getSalesReport(filterDateFrom, filterDateTo);
    return res.status(200).json({
      data: queryResult,
      success: true,
    });
  } catch (error) {
    return res.status(200).json({
      msg: "something went wrong",
      success: false,
    });
  }
};

module.exports.pinFeedback = async (req, res) => {
  try {
    const {id} = req.params;
    const {pin} = req.body.values
    const feedbackModel = new Feedback({});
    const result = await feedbackModel.pinFeedback(id, pin)
    return res.status(200).json(result);
  } catch (error) {
    console.error(error.message)
    return res.status(400).json({
      msg: "something went wrong",
      success: false,
    });
  }
}

module.exports.deleteFeedback = async (req, res) => {
  try {
    const {id} = req.params;
    const feedbackModel = new Feedback({});
    const result = await feedbackModel.deleteFeedback(id)
    return res.status(200).json(result);
  } catch (error) {
    console.error(error.message)
    return res.status(400).json({
      msg: "something went wrong",
      success: false,
    });
  }
}

module.exports.deleteAppointment = async (req, res) => {
  try {
    const {id} = req.params;
    const appointmentId = id.split('=')[0];
    const liveStreamId = id.split('=')[1];
    const appointmentModel = new Appointment({});
    const result = await appointmentModel.deleteAppointment(appointmentId, liveStreamId);
    console.log(result)
    return res.status(200).json(result);
  } catch (error) {
    console.error('controller error', error.message)
    return res.status(400).json({
      msg: "something went wrong",
      success: false,
    });
  }
}