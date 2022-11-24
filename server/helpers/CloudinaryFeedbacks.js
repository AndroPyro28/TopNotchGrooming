const cloudinary = require("../config/cloudinary");

module.exports.uploadOneFeedback = async (imageUrl) => {
    const cloudinaryUpload = await cloudinary.uploader.upload(
      imageUrl,
        {
          upload_preset: "topnotch_feedback",
        }
      );
    return cloudinaryUpload;
}

module.exports.deleteOneFeedback = async (imageId) => {
  const cloudinaryDelete = await cloudinary.uploader.destroy(
    imageId,
    {
      upload_preset: "topnotch_feedback",
    }
  );
}
