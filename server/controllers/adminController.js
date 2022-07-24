const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const Appointment = require("../models/Appointment");
const { assignToken } = require("../helpers/AuthTokenHandler");
const Order = require("../models/Order");

const { sendTextMessageByStatus } = require("../helpers/TextMessage");

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(200).json({
        msg: "Invalid Credentials",
        success: false,
      });
    }

    const admin = new Admin(req.body);

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
    const token = assignToken(adminUser.id);

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
  const { status, textSearch } = req.body;
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
  const { deliveryStatus, data } = req.body;

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
