const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  createAdmin,
  getAdmins
} = require("../controllers/adminController");
const {
  createShift,
  getShifts
} = require("../controllers/shiftController");
const {
  createClass,
  getClasses
} = require("../controllers/classController");
const {
  createSubject,
  getSubjects
} = require("../controllers/subjectController");
const {
  createSection,
  getSections,
  deleteSection
} = require("../controllers/sectionController");
const {
  createHoliday,
  getHolidays,
  deleteHoliday
} = require("../controllers/holidayController");

// Multer for admins
const adminStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/admins");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const adminUpload = multer({ storage: adminStorage });

router.post(
  "/create",
  adminUpload.fields([
    { name: "photo", maxCount: 1 }
  ]),
  createAdmin
);

router.get("/", getAdmins);

router.post("/shift", createShift);
router.get("/shifts", getShifts);

router.post("/class", createClass);
router.get("/classes", getClasses);

router.post("/subject", createSubject);
router.get("/subjects", getSubjects);

router.post("/section", createSection);
router.get("/sections", getSections);
router.delete("/section/:id", deleteSection);

router.post("/holiday", createHoliday);
router.get("/holidays", getHolidays);
router.delete("/holiday/:id", deleteHoliday);

module.exports = router;