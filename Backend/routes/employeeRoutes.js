const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  createEmployee,
  getEmployees
} = require("../controllers/employeeController");

// Multer for employees
const employeeStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/employees");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const employeeUpload = multer({ storage: employeeStorage });

router.post(
  "/create",
  employeeUpload.fields([
    { name: "professionalPhoto", maxCount: 1 },
    { name: "personalPhoto", maxCount: 1 }
  ]),
  createEmployee
);

router.get("/", getEmployees);

module.exports = router;