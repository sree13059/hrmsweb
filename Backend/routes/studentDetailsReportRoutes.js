const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  createStudentDetailsReport,
  getAllStudentDetailsReports,
  getStudentDetailsReportById,
  deleteStudentDetailsReport
} = require("../controllers/studentDetailsReportController");

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/students");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post(
  "/",
  upload.fields([
    { name: "studentPhoto", maxCount: 1 },
    { name: "guardianPhoto", maxCount: 1 }
  ]),
  createStudentDetailsReport
);

router.get("/", getAllStudentDetailsReports);
router.get("/:id", getStudentDetailsReportById);
router.delete("/:id", deleteStudentDetailsReport);

module.exports = router;
