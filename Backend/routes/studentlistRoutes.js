const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const {
  createStudent,
  getStudents,
  deleteStudent,
} = require("../controllers/studentlistController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let dir = "uploads/students";

    if (file.fieldname === "guardianPhoto") dir = "uploads/guardians";
    if (file.fieldname === "guardianSignature") dir = "uploads/signatures";

    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post(
  "/create",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "guardianPhoto", maxCount: 1 },
    { name: "guardianSignature", maxCount: 1 },
  ]),
  createStudent
);

router.get("/", getStudents);
router.delete("/:id", deleteStudent);

module.exports = router;
