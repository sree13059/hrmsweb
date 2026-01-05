const express = require("express");
const router = express.Router();
const {
  createSection,
  getSections,
  deleteSection
} = require("../controllers/sectionController");

router.post("/add", createSection);
router.get("/", getSections);
router.delete("/:id", deleteSection);

module.exports = router;
