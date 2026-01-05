const Holiday = require("../models/Holiday");

// CREATE HOLIDAY
exports.createHoliday = async (req, res) => {
  try {
    const { holidayName, holidayDate, isRecurring, dayOfWeek, remarks, entryBy, entryDate } = req.body;

    if (!holidayName || !entryBy) {
      return res.status(400).json({ message: "Holiday name and entryBy are required" });
    }

    if (!isRecurring && !holidayDate) {
      return res.status(400).json({ message: "Holiday date is required for non-recurring holidays" });
    }

    if (isRecurring && !dayOfWeek) {
      return res.status(400).json({ message: "Day of week is required for recurring holidays" });
    }

    const holiday = new Holiday({
      holidayName,
      holidayDate: isRecurring ? null : holidayDate,
      isRecurring,
      dayOfWeek: isRecurring ? dayOfWeek : null,
      remarks,
      entryBy,
      entryDate
    });

    await holiday.save();

    res.status(201).json({
      message: "Holiday created successfully",
      holiday
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET HOLIDAYS
exports.getHolidays = async (req, res) => {
  try {
    const holidays = await Holiday.find();
    res.json(holidays);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE HOLIDAY
exports.deleteHoliday = async (req, res) => {
  try {
    await Holiday.findByIdAndDelete(req.params.id);
    res.json({ message: "Holiday deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};