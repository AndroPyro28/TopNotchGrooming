const Customer = require("../models/Customer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ProductDetails = require("../models/ProductDetails");
const Product = require("../models/product");
const { assignToken } = require("../helpers/AuthTokenHandler");
const { deleteOne, uploadOne } = require("../helpers/CloudinaryUser");
const Appointment = require("../models/Appointment");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Order = require("../models/Order");
const { getDateToday } = require("../helpers/DateFormatter");

module.exports.signup = async (req, res) => {
  try {
    const customer = new Customer(req.body.values);

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
  const { email, password } = req.body.values;
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
    const assignedToken = assignToken(User.id, 'customer');

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
      req.body.values?.profileImg?.length > 0 &&
      req.body.values?.profileImg?.includes("image") &&
      req.body.values.user.profile_image_url?.length > 0 &&
      req.body.values?.user.profile_image_id !=
        "topnotch_profilepic/eadlgosq2pioplvi6lfs"
    ) {
      deleteOne(req.body.values.user.profile_image_id);
    }

    if (
      req.body.values?.profileImg?.length > 0 &&
      req.body.values?.profileImg?.includes("image")
    ) {
      const cloudinaryResponse = await uploadOne(req.body.values?.profileImg);
      req.body.values.user.profile_image_url = cloudinaryResponse.url;
      req.body.values.user.profile_image_id = cloudinaryResponse.public_id;
    }

    const customer = new Customer(req.body.values.user);

    const updateResult = await customer.updateInfo();
    if (updateResult.affectedRows > 0) {
      return res.status(200).json({
        success: true,
        msg: "Profile update successful",
        user: req.body.values.user,
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
    const { id } = req.body.values;
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
    const { action, product } = req.body.values;
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
  const { checkoutProducts, totalAmount } = req.body.values;

  try {
    if (checkoutType === "gcash") {
      var request = require("request");

      var options = {
        method: "POST",
        url: "https://g.payx.ph/payment_request",
        formData: {
          "x-public-key": process.env.GCASH_API_KEY,
          amount: `1`,
          description: "Payment for services rendered",
          redirectsuccessurl: `${process.env.CLIENT_URL_PROD}/customer/payment`,
          redirectfailurl: `${process.env.CLIENT_URL_PROD}/customer/cart`,
          customeremail: `${req.currentUser?.email}`,
          customermobile: `${req.currentUser?.phoneNo}`,
          customername: `${req.currentUser?.firstname} ${req.currentUser?.lastname}`,
          webhooksuccessurl:`${process.env.SERVER_URI_PROD}/api/customer/paymentsuccess`
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
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: checkoutProducts.map((item) => {
          return {
            price_data: {
              currency: "php",
              product_data: {
                name: item.product_name,
              },
              unit_amount: Number(
                (item.product_price) * 100
              ).toFixed(0),
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${process.env.CLIENT_URL_PROD}/customer/payment`,
        cancel_url: `${process.env.CLIENT_URL_PROD}/customer/cart`,
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
    console.error('hotdog', error.message);
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
      dateNtime,
      additional_details,
      image
    } = req.body.values;


    const cloudinaryResponse = await uploadOne(image);
    image = cloudinaryResponse.url;
    const appointment = new Appointment({
      pet_name: petName,
      pet_type: petType,
      pet_breed: breed,
      gender: gender,
      birthdate: birthdate,
      appointment_type: appointmentType,
      date_n_time: dateNtime,
      additional_details: additional_details,
      customer_id: req.currentUser.id,
      image
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
    console.log('called:::::::::::::::::::')
    const { checkoutProducts, method, orderId, totalAmount, billingInfo } =
      req.body.values;
    const productModel = new Product({});
    const { billingAddress, contactNo, zipCode, courierType } = billingInfo;

    productModel.updatePaidItems(checkoutProducts);

    const OrderModel = new Order({
      reference: orderId,
      customer_id: req.currentUser.id,
      order_date: getDateToday(),
      total_amount: totalAmount,
      payment_type: method,
      billing_address: billingAddress,
      contact: contactNo,
      zip_code: zipCode,
      courrier_type: courierType,
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

module.exports.orders = async (req, res) => {
  const { orderStatus } = req.params;
  try {
    const orderModel = new Order({});

    const result = await orderModel.getOrderByStatus(orderStatus)

    return res.status(200).json({
      orders: result,
      success: true
    })
    
  } catch (error) {
    console.log(error.message);

    return res.status(200).json({
      msg:error.message
    })
  }
};


module.exports.getOrderByReference = async (req, res) => {
  const {reference} = req.params
  
  try {
    const orderModel = new Order({
      reference
    });

    const result = await orderModel.getOrderDetails();
    
    if(!result) {
      throw new Error('Cannot find order');
    }
    return res.status(200).json({
      order: result,
      success: true
    })
    
  } catch (error) {
    console.error(error);
    return res.status(200).json({
      msg:'Cannot find order',
      success: false
    })
  }
}

module.exports.paymentsuccess = async (req, res) => {
  console.log(':::::GCASH API POST::::', req.body)
}