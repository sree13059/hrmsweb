const express = require("express");
const router = express.Router();
const {
  createGroupSubject,
  getGroupSubjects,
  deleteGroupSubject,
} = require("../controllers/groupSubjectController");

router.post("/add", createGroupSubject);
router.get("/", getGroupSubjects);
router.delete("/:id", deleteGroupSubject);

module.exports = router;
