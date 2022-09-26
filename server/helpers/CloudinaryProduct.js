const cloudinary = require("../config/cloudinary");


module.exports.uploadOneProduct = async (imageUrl) => {
    const cloudinaryUpload = await cloudinary.uploader.upload(
      imageUrl,
        {
          upload_preset: "topnotch_productImg",
        }
      );
    return cloudinaryUpload;
}

module.exports.deleteOneProduct = async (imageId) => {
  const cloudinaryDelete = await cloudinary.uploader.destroy(
    imageId,
    {
      upload_preset: "topnotch_productImg",
    }
  );
}


