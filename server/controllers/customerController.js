const Customer = require("../models/Customer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cloudinary = require("../config/cloudinary");
const ProductDetails = require('../models/ProductDetails');

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

const maxAge = 24 * 60 * 60;

const assignToken = (id) => {
  return jwt.sign({ id }, process.env.jwtSecret, {
    expiresIn: maxAge,
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
    let reset = false;
    if (
      req.body?.profileImg?.length > 0 &&
      req.body?.profileImg?.includes("image") &&
      req.body.user.profile_image_url?.length > 0 &&
      req.body?.user.profile_image_id != "topnotch_profilepic/eadlgosq2pioplvi6lfs"
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
      reset = true
    }

    const customer = new Customer(req.body.user);

    const updateResult = await customer.updateInfo();
    if (updateResult.affectedRows > 0) {
      return res.status(200).json({
        success: true,
        msg: "Profile update successful",
        reset
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
    const productDetails = new ProductDetails({
      product_id: req.body.id,
      customer_id: req.currentUser.id
    });

    const result = await productDetails.addItem();
    console.log(result)
    return res.status(200).json({

    })
  } catch (error) {
    console.error(error.message)
  }
}