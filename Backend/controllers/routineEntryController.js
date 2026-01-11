const RoutineEntry = require("../models/RoutineEntry");

/**
 * Create Routine Entry
 */
exports.createRoutineEntry = async (req, res) => {
  try {
    const routine = new RoutineEntry({
      className: req.body.class,
      section: req.body.section,
      day: req.body.day,
      slot: req.body.slot,
      subject: req.body.subject,
      teacher: req.body.teacher,
      entryBy: req.body.entryBy,
      entryDate: req.body.entryDate
    });

    await routine.save();

    res.status(201).json({
      success: true,
      message: "Routine entry saved successfully",
      data: routine
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to save routine entry",
      error: error.message
    });
  }
};

/**
 * Get All Routine Entries
 */
exports.getRoutineEntries = async (req, res) => {
  try {
    const data = await RoutineEntry.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Delete Routine Entry
 */
exports.deleteRoutineEntry = async (req, res) => {
  try {
    await RoutineEntry.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Routine entry deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
