const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const Appointment = require('../models/Appointment')
const {assignToken} = require('../helpers/AuthTokenHandler')
const Order = require("../models/Order");
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(200).json({
      msg: "Invalid Credentials",
      success: false,
    });
  }

  const admin = new Admin(req.body);

  const adminUser = await admin.selectOneByEmail();

  if(!adminUser) {
    return res.status(200).json({
        msg: "Invalid Credentials",
        success: false,
      });
  }

//   const isExist = await bcrypt.compare(password, adminUser.password);

  const isExist = password == adminUser.password;

  if(!isExist) {
    return res.status(200).json({
        msg: "Invalid Credentials",
        success: false,
      });
  }
  const token = assignToken(adminUser.id);

  return res.status(200).json({
    token,
    success: true,
    msg: "Login Successful"
})
};

module.exports.getSchedule = async (req, res) => {
  try {
      const appointment = new Appointment({});
      const results = await appointment.getSchedule(req.params.status);

     return res.status(200).json({
      results,
      success: true
     })

  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      msg: 'something went wrong',
      success: false
    })
  }
}

module.exports.getOrders = async (req, res) => {
  const {status, textSearch} = req.body;
  try {
    const orderModel = new Order({
      order_status: status
    })

    const orders = await orderModel.getOrders(textSearch)
    return res.status(200).json({
      orders
    })
  } catch (error) {
    
  }
}

module.exports.getOrderDetails = async (req, res) => {
  try {
    const {reference} = req.params;

    const orderModel = new Order({
      reference: reference
    });

    const order = await orderModel.getOrderDetails();
    
    if(!order) {
      return res.status(200).json({
        success: false
      })
    }
    
    return res.status(200).json({
      order,
      success: true
    })
    
  } catch (error) {
    console.error(error.message)
  }
}