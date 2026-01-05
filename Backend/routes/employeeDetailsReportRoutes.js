const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");

const {
  createEmployeeDetailsReport
} = require("../controllers/employeeDetailsReportController");

router.post(
  "/create",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "signature", maxCount: 1 }
  ]),
  createEmployeeDetailsReport
);

module.exports = router;
