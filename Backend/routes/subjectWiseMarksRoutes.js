const express = require("express");
const router = express.Router();
const {
  saveSubjectWiseMarks,
  getSubjectWiseMarks
} = require("../controllers/subjectWiseMarksController");

router.post("/save", saveSubjectWiseMarks);
router.get("/list", getSubjectWiseMarks);

module.exports = router;
