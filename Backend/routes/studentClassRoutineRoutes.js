const express = require("express");
const router = express.Router();

const {
  createStudentClassRoutine,
  getStudentClassRoutine,
  deleteStudentClassRoutine
} = require(
  "../controllers/studentClassRoutineController"
);

// CREATE
router.post(
  "/studentclassroutine",
  createStudentClassRoutine
);

// READ
router.get(
  "/studentclassroutine",
  getStudentClassRoutine
);

// DELETE
router.delete(
  "/studentclassroutine/:id",
  deleteStudentClassRoutine
);

module.exports = router;
