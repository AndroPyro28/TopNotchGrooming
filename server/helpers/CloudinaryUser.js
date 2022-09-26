const cloudinary = require("../config/cloudinary");


module.exports.uploadOneUser = async (imageUrl) => {
    const cloudinaryUpload = await cloudinary.uploader.upload(
      imageUrl,
        {
          upload_preset: "topnotch_profilepic",
        }
      );
    return cloudinaryUpload;
}


module.exports.deleteOneUser = async (imageId) => {
    const cloudinaryDelete = await cloudinary.uploader.destroy(
        imageId,
        {
          upload_preset: "topnotch_profilepic",
        }
      );
      return cloudinaryDelete
}