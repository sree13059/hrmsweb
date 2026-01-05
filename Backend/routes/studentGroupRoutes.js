const express = require("express");
const router = express.Router();
const {
  createStudentGroup,
  getStudentGroups,
  deleteStudentGroup,
} = require("../controllers/studentGroupController");

router.post("/add", createStudentGroup);
router.get("/", getStudentGroups);
router.delete("/:id", deleteStudentGroup);

module.exports = router;
