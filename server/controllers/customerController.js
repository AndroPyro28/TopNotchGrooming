const Customer = require("../models/Customer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cloudinary = require("../config/cloudinary");
const ProductDetails = require("../models/ProductDetails");
const Product = require("../models/product");
const { assignToken } = require("../helpers/AuthTokenHandler");
const { deleteOne, uploadOne } = require("../helpers/CloudinaryUser");
const Appointment = require("../models/Appointment");
const { DateFormatter } = require("../helpers/DateFormatter");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { v4: uuidv4 } = require("uuid");
const Order = require("../models/Order");
const {getDateToday} = require('../helpers/DateFormatter')
module.exports.signup = async (req, res) => {
  try {
    req.body.profile_image_url =
      "https://res.cloudinary.com/iamprogrammer/image/upload/v1654850599/topnotch_profilepic/eadlgosq2pioplvi6lfs.png";
    req.body.profile_image_id = "topnotch_profilepic/eadlgosq2pioplvi6lfs";
    const customer = new Customer(req.body);

    const isExists = await customer.checkIfExistByPhoneEmail();
    if (isExists) {
      return res.status(200).json({
        msg: "Phone number or email already exist",
        success: false,
      });
    }

    const result = await customer.insertOne();

    if (!result) {
      throw new Error("something went wrong");
    }

    return res.status(200).json({
      msg: "Your account registered successfully!",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const customer = new Customer({ email, password });

    const User = await customer.selectOneByEmail();

    if (!User) {
      return res.status(200).json({
        msg: "Invalid Credentials",
        success: false,
      });
    }
    const isMatch = await bcrypt.compare(password, User.password);

    if (!isMatch) {
      return res.status(200).json({
        msg: "Invalid Credentials",
        success: false,
      });
    }
    const assignedToken = assignToken(User.id);

    return res.status(200).json({
      assignedToken,
      success: true,
      msg: "Login Successful",
    });
  } catch (error) {
    console.error(error.message);

    return res.status(200).json({
      msg: "Something went wrong...",
      success: false,
    });
  }
};

module.exports.updateInfo = async (req, res) => {
  try {
    if (
      req.body?.profileImg?.length > 0 &&
      req.body?.profileImg?.includes("image") &&
      req.body.user.profile_image_url?.length > 0 &&
      req.body?.user.profile_image_id !=
        "topnotch_profilepic/eadlgosq2pioplvi6lfs"
    ) {
      deleteOne(req.body.user.profile_image_id);
    }

    if (
      req.body?.profileImg?.length > 0 &&
      req.body?.profileImg?.includes("image")
    ) {
      const cloudinaryResponse = await uploadOne(req.body?.profileImg);
      req.body.user.profile_image_url = cloudinaryResponse.url;
      req.body.user.profile_image_id = cloudinaryResponse.public_id;
    }

    const customer = new Customer(req.body.user);

    const updateResult = await customer.updateInfo();
    if (updateResult.affectedRows > 0) {
      return res.status(200).json({
        success: true,
        msg: "Profile update successful",
        user: req.body.user,
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.addItemsToCart = async (req, res) => {
  try {
    const { id } = req.body;
    const productDetails = new ProductDetails({
      product_id: id,
      customer_id: req.currentUser.id,
    });

    const { action, result } = await productDetails.addItem();
    return res.status(200).json({
      action,
      id: result.insertId,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.getItemsIncart = async (req, res) => {
  try {
    const { id } = req.currentUser;
    const productDetails = new ProductDetails({ customer_id: id });
    const cartItems = await productDetails.getItems();

    if (!cartItems) {
      return res.status(200).json({
        msg: "No products in cart yet",
        success: true,
        notFound: true,
      });
    }

    return res.status(200).json({
      items: cartItems,
      success: true,
      notFound: false,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.deleteItemInCart = async (req, res) => {
  try {
    const productDetails = new ProductDetails({
      customer_id: req.currentUser.id,
      product_id: req.params.id,
    });

    const isDeleted = await productDetails.deleteItem();

    return res.status(200).json({
      msg: isDeleted
        ? "Product removed to cart"
        : "Product did not removed to cart",
      success: isDeleted,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.updateItemQuantity = async (req, res) => {
  try {
    const productDetails = new ProductDetails({
      customer_id: req.currentUser.id,
      product_id: req.params.id,
    });
    const { action, product } = req.body;
    const { result, action: updateAction } =
      await productDetails.updateQuantity(action, product);

    if (result.affectedRows > 0) {
      return res.status(200).json({
        success: true,
        productId: req.params.id,
        updateAction,
      });
    } else {
      return res.status(200).json({
        success: false,
        productId: req.params.id,
        updateAction,
      });
    }
  } catch (error) {
    console.log(error.message);

    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.checkout = async (req, res) => {
  const { checkoutType } = req.params; // card
  const { checkoutProducts, totalAmount } = req.body;
  try {
    if (checkoutType === "gcash") {
      var request = require("request");

      var options = {
        method: "POST",
        url: "https://g.payx.ph/payment_request",
        formData: {
          "x-public-key": process.env.GCASH_API_KEY,
          amount: `1`, // ${totalAmount}
          description: "Payment for services rendered",
          redirectsuccessurl: `http://localhost:3000:3000/customer/payment=success`,
          redirectfailurl: `${process.env.CLIENT_URL}/customer/cart`,
          customeremail: `${req.currentUser?.email}`,
          customermobile: `${req.currentUser?.phoneNo}`,
          customername: `${req.currentUser?.firstname} ${req.currentUser?.lastname}`,
        },
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);

        const { data } = JSON.parse(response.body);

        const { checkouturl, hash } = data;
        return res.status(200).json({
          proceedPayment: true,
          method: checkoutType,
          checkoutProducts,
          checkoutUrl: checkouturl,
          orderId: hash,
          totalAmount,
        });
      });
    }
    if (checkoutType === "card") {
      const dollarRate = 56.39;

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: checkoutProducts.map((item) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.product_name,
              },
              unit_amount: Number(
                (item.product_price / dollarRate) * 100
              ).toFixed(0),
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${process.env.CLIENT_URL}/customer/payment=success`,
        cancel_url: `${process.env.CLIENT_URL}/customer/cart`,
      });

      return res.status(200).json({
        proceedPayment: true,
        method: checkoutType,
        checkoutProducts,
        checkoutUrl: session.url,
        sessionId: session.id,
        orderId: session.payment_intent,
        totalAmount,
      });
    }
    // return res.status(200).json({checkoutUrl:session.url})
  } catch (error) {
    console.error(error.message);
    return res.status(200).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports.addAppointment = async (req, res) => {
  try {
    let {
      petName,
      petType,
      birthdate,
      breed,
      gender,
      appointmentType,
      liveStreamType = "",
      dateNtime,
      additional_details,
    } = req.body;

    if (appointmentType != "grooming") {
      liveStreamType = null;
    }

    const appointment = new Appointment({
      pet_name: petName,
      pet_type: petType,
      pet_breed: breed,
      gender: gender,
      birthdate: birthdate,
      appointment_type: appointmentType,
      date_n_time: dateNtime,
      additional_details: additional_details,
      live_stream_type:
        typeof liveStreamType != undefined ? liveStreamType : null,
      customer_id: req.currentUser.id,
    });

    const { result, success } = await appointment.addAppointment();

    return res.status(201).json({
      msg: success ? "Appointment added" : "something went wrong...",
      success,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.payment = async (req, res) => {
  try {
    const { checkoutProducts, method, orderId, totalAmount } = req.body;
    const productModel = new Product({});

    productModel.updatePaidItems(checkoutProducts);

    const OrderModel = new Order({
      reference: orderId,
      customer_id: req.currentUser.id,
      order_date: getDateToday(),
      total_amount: totalAmount,
      payment_type: method,
    });

    const result = await OrderModel.addNewOrder();

    const ProductDetailModel = new ProductDetails({
      order_id: result.insertId,
    });

    ProductDetailModel.insertOrderId(checkoutProducts);

    return res.status(201).json({
      msg: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      msg: "Something went wrong",
      success: false,
    });
  }
};
