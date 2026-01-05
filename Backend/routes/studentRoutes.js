const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { createStudent } = require("../controllers/studentController");

/* Multer Storage */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

/* Routes */
router.post("/create", upload.single("photo"), createStudent);

module.exports = router;
