const cloudinary = require("../config/cloudinary");


module.exports.uploadOneLiveStream = async (videoUrl) => {
  try {
    const cloudinaryUpload = await cloudinary.uploader.upload(
      videoUrl,
      {
        upload_preset: "topnotch_livestream_record",
        resource_type: "video",
      }
    );
  return cloudinaryUpload;
  } catch (error) {
    console.error('upload record', error.message)
  }
}


module.exports.deleteOneLiveStream = async (videoUrl) => {
    const cloudinaryDelete = await cloudinary.uploader.destroy(
        videoUrl,
        {
          upload_preset: "topnotch_livestream_record",
        }
      );
      return cloudinaryDelete
}