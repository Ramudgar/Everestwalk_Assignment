// middlewares to upload files
const multer = require("multer");

// import the RegExp to eliminate white spaces from the file name
const re = new RegExp("\\s+", "g");

// the function below is to eliminate white spaces from the file name
function eliminateWhitespace(imageName) {
  return imageName.replace(re, "-");

}

// now we will create a function to upload the file
const filename = (req, file, next) => {
  let lastIndexof = file.originalname.lastIndexOf(".");
  let originalname = file.originalname.substring(0, lastIndexof);
  let ext = file.originalname.substring(lastIndexof);
  next(null, `${eliminateWhitespace(originalname)}-${Date.now()}${ext}`);
};
// Define a file filter function for multer middleware
const filter = (req, file, next) => {
  // Check if the uploaded file's mimetype matches accepted types
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "video/mp4" ||
    file.mimetype === "video/gif" ||
    file.mimetype === "video/avi" ||
    file.mimetype === "video/webm" ||
    file.mimetype === "video/mkv"
  ) {
    // If it's a valid file type, continue with the upload
    next(null, true);
  } else {
    // If it's not a valid file type, reject the upload and provide an error message
    next(null, false);
    return next(
      new Error("Only .jpeg, .jpg, .png, .mp4, and .gif format allowed!")
    );
  }
};

// function to set the destination of the file
const ImageDestination = (req, file, next) => {
  next(null, `${__dirname}/../../public/images`);
};

// Configure multer middleware for handling image uploads
const userImage = multer({
  storage: multer.diskStorage({
    destination: ImageDestination,
    filename,
  }),
  fileFilter: filter,
});

module.exports = {
  userImage,
};
