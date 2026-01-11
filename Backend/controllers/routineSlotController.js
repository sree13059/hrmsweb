const RoutineSlot = require("../models/RoutineSlot");

/**
 * SAVE ROUTINE SLOT
 */
exports.createRoutineSlot = async (req, res) => {
  try {
    const slot = new RoutineSlot(req.body);
    await slot.save();

    res.status(201).json({
      success: true,
      message: "Routine slot saved successfully",
      data: slot
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to save routine slot",
      error: error.message
    });
  }
};

/**
 * GET ALL ROUTINE SLOTS (with filters)
 */
exports.getRoutineSlots = async (req, res) => {
  try {
    const { shift, year, day } = req.query;

    let filter = {};
    if (shift) filter.shift = shift;
    if (year) filter.year = year;
    if (day) filter.day = day;

    const slots = await RoutineSlot.find(filter).sort({ createdAt: 1 });

    res.status(200).json({
      success: true,
      data: slots
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch routine slots",
      error: error.message
    });
  }
};

/**
 * DELETE ROUTINE SLOT
 */
exports.deleteRoutineSlot = async (req, res) => {
  try {
    await RoutineSlot.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Routine slot deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete routine slot",
      error: error.message
    });
  }
};
