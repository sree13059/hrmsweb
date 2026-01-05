const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { createEmployeeRegister } = require("../controllers/employeeregister");

/* Multer storage */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "photo") {
      cb(null, "uploads/photos");
    } else if (file.fieldname === "signature") {
      cb(null, "uploads/signatures");
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post(
  "/create",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "signature", maxCount: 1 },
  ]),
  createEmployeeRegister
);

module.exports = router;
