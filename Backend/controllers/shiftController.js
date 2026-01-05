const Shift = require("../models/Shift");

exports.createShift = async (req, res) => {
  try {
    const shift = new Shift({
      shiftName: req.body.shiftName,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      description: req.body.description,
      entryBy: req.body.entryBy,
      entryDate: req.body.entryDate ? new Date(req.body.entryDate) : new Date()
    });

    await shift.save();

    res.status(201).json({
      message: "Shift created successfully",
      shift
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL SHIFTS
exports.getShifts = async (req, res) => {
  try {
    const shifts = await Shift.find();
    res.json(shifts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};