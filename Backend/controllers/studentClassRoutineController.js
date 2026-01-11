const StudentClassRoutine = require(
  "../models/studentClassRoutine"
);

/**
 * CREATE ROUTINE
 */
exports.createStudentClassRoutine = async (req, res) => {
  try {
    const routine = new StudentClassRoutine(req.body);
    await routine.save();

    res.status(201).json({
      success: true,
      message: "Student Class Routine saved successfully",
      data: routine
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to save routine",
      error: error.message
    });
  }
};

/**
 * GET ROUTINE
 */
exports.getStudentClassRoutine = async (req, res) => {
  try {
    const {
      shift,
      className,
      section,
      year,
      group,
      day
    } = req.query;

    const filter = {};
    if (shift) filter.shift = shift;
    if (className) filter.className = className;
    if (section) filter.section = section;
    if (year) filter.year = year;
    if (group) filter.group = group;
    if (day) filter.day = day;

    const routine = await StudentClassRoutine.find(filter).sort({
      day: 1,
      slot: 1
    });

    res.status(200).json({
      success: true,
      data: routine
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch routine",
      error: error.message
    });
  }
};

/**
 * DELETE ROUTINE
 */
exports.deleteStudentClassRoutine = async (req, res) => {
  try {
    await StudentClassRoutine.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Routine deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete routine",
      error: error.message
    });
  }
};
