const express = require("express");
const router = express.Router();
const {
  saveAttendance,
  viewAttendance
} = require("../controllers/employeeAttendanceController");

router.post("/save", saveAttendance);
router.get("/view", viewAttendance);

module.exports = router;
