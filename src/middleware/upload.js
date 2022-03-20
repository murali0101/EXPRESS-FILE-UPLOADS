const path = require("path");
const req = require("express/lib/request");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../my_files"));
  },
  filename: function (req, file, cb) {
    const uniqueprefix = Date.now();
    cb(null, uniqueprefix + "-" + file.originalname);
  },
});

function fileFilter(req, file, cb) {
  // The function should call `cb` with a boolean
  // to indicate if the file should be accepted
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    // To accept the file pass `true`, like so:
    cb(null, true);
  } else {
    // To reject this file pass `false`, like so:
    cb(new Error("Incorrect mime type"), false);
  }
}
const options = {
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
};

const uploadDoc = multer(options);

module.exports=uploadDoc