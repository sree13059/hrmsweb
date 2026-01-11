const express = require("express");
const router = express.Router();
const {
  createRoutineSlot,
  getRoutineSlots,
  deleteRoutineSlot
} = require("../controllers/routineSlotController");

// Save slot
router.post("/create", createRoutineSlot);

// Get slots
router.get("/list", getRoutineSlots);

// Delete slot
router.delete("/delete/:id", deleteRoutineSlot);

module.exports = router;
