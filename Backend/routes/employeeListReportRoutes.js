const express = require("express");
const router = express.Router();

const {
  createEmployeeListReport,
  getEmployeeListReport
} = require("../controllers/employeeListReportController");

// SAVE
router.post("/", createEmployeeListReport);

// GENERATE / FILTER
router.get("/", getEmployeeListReport);

module.exports = router;
