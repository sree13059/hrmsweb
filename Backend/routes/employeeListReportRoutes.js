const express = require("express");
const router = express.Router();

const {
  createEmployeeListReport,
  getAllEmployeeListReports,
  deleteEmployeeListReport
} = require("../controllers/employeeListReportController");

router.post("/", createEmployeeListReport);
router.get("/", getAllEmployeeListReports);
router.delete("/:id", deleteEmployeeListReport);

module.exports = router;
