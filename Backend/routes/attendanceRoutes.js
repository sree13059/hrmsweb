const express = require("express");
const router = express.Router();
const {
  addAttendance,
  getAttendance,
} = require("../controllers/attendanceController");

router.post("/add", addAttendance);
router.get("/view", getAttendance);

module.exports = router;
