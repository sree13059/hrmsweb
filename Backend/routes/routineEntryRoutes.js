const express = require("express");
const router = express.Router();
const {
  createRoutineEntry,
  getRoutineEntries,
  deleteRoutineEntry
} = require("../controllers/routineEntryController");

router.post("/create", createRoutineEntry);
router.get("/list", getRoutineEntries);
router.delete("/delete/:id", deleteRoutineEntry);

module.exports = router;
