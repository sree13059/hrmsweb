const express = require("express");
const router = express.Router();

const {
  createStudentListReport,
  getStudentListReports,
  deleteStudentListReport
} = require("../controllers/studentListReportController");

router.post("/create", createStudentListReport);
router.get("/list", getStudentListReports);
router.delete("/delete/:id", deleteStudentListReport);

module.exports = router;
