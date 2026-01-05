const express = require("express");
const multer = require("multer");
const router = express.Router();

const {
  createEmployeeList,
  getEmployeeList,
  deleteEmployeeList
} = require("../controllers/employeeListController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, file.fieldname === "photo" ? "uploads/photos" : "uploads/signatures");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  }
});

const upload = multer({ storage });

router.post(
  "/",
  upload.fields([{ name: "photo" }, { name: "signature" }]),
  createEmployeeList
);

router.get("/", getEmployeeList);
router.delete("/:id", deleteEmployeeList);

module.exports = router;
