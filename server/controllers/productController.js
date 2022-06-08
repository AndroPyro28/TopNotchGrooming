const Product = require("../models/product");
const cloudinary = require('../config/cloudinary');
module.exports.addItem = async (req, res) => {
  try {

    if (req.body?.productImg?.length > 0 && req.body?.productImg?.includes("image")) {
        const cloudinaryUpload = await cloudinary.uploader.upload(req.body.productImg, {
          upload_preset: "topnotch_productImg",
        });
        req.body.productImg = cloudinaryUpload.url;
        req.body.productImgId = cloudinaryUpload.public_id;
    }
    const product = new Product(req.body);

    const result = await product.insertProduct();
  
    if(result.insertId) {
      req.body.id = result.insertId
        return res.status(200).json({
            msg: "Product added to the database",
            newProduct: req.body,
            success: true
        })
    }

    return res.status(200).json({
        msg: "Product did not added to the database",
        success: false
    })
}
  catch (error) {
    console.error(error.message)
  }
};

module.exports.getAllItems = async (req, res) => {
    try {
    const product = new Product({});
    const allProducts = await product.getAllItems()
    return res.status(200).json({
      products: allProducts,
      success: true
    })
    } catch (error) {
      console.error(error.message)
    }
}