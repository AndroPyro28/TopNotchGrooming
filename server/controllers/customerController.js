const Customer = require("../models/Customer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cloudinary = require("../config/cloudinary");
const ProductDetails = require("../models/ProductDetails");
const { assignToken } = require("../helpers/AuthTokenHandler");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports.signup = async (req, res) => {
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
    return res.status(200).json({
      msg: "Something went wrong...",
      success: false,
    });
  }

  return res.status(200).json({
    msg: "Your account registered successfully!",
    success: true,
  });
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
      const cloudinaryDelete = await cloudinary.uploader.destroy(
        req.body.user.profile_image_id,
        {
          upload_preset: "topnotch_profilepic",
        }
      );
    }

    if (
      req.body?.profileImg?.length > 0 &&
      req.body?.profileImg?.includes("image")
    ) {
      const cloudinaryUpload = await cloudinary.uploader.upload(
        req.body?.profileImg,
        {
          upload_preset: "topnotch_profilepic",
        }
      );
      req.body.user.profile_image_url = cloudinaryUpload.url;
      req.body.user.profile_image_id = cloudinaryUpload.public_id;
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

    return res.status(200).json({
      success: false,
      msg: "something went wrong...",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(200).json({
      success: false,
      msg: "something went wrong...",
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
  }
};

module.exports.checkout = async (req, res) => {
  console.log(req.params); // card
  try {
    const storeItems = [
      {
        id: 1,
        price: 100,
        name: "Lean React Today",
        quantity: 1
      },
      {
        id: 2,
        price: 100,
        name: "Lean Css Today",
        quantity: 1
      },
    ];
  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: storeItems.map(item => {
        return {
          price_data: {
            currency:'usd',
            product_data: {
              name: item.name
            },
            unit_amount: item.price * 100
          },
          quantity:item.quantity,
        }
      }),
      success_url:`${process.env.CLIENT_URL}/customer/payment=success`,
      cancel_url:`${process.env.CLIENT_URL}/customer/cart`
    })
    return res.status(200).json({checkoutUrl:session.url})
  } catch (error) {
    console.error(error.message)
  }
  
};
