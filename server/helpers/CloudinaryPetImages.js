const cloudinary = require("../config/cloudinary");

module.exports.uploadOnePetImage = async (imageUrl) => {
    const cloudinaryUpload = await cloudinary.uploader.upload(
      imageUrl,
        {
          upload_preset: "topnotch_petIImages",
        }
      );
    return cloudinaryUpload;
}

module.exports.deleteOnePetImage = async (imageId) => {
  const cloudinaryDelete = await cloudinary.uploader.destroy(
    imageId,
    {
      upload_preset: "topnotch_petIImages",
    }
  );
}
