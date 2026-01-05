const Attendance = require("../models/Attendance");

// SAVE ATTENDANCE
exports.addAttendance = async (req, res) => {
  try {
    const attendance = new Attendance(req.body);
    await attendance.save();
    res.status(201).json({ message: "Attendance saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ATTENDANCE WITH FILTERS
exports.getAttendance = async (req, res) => {
  try {
    const {
      attendanceDate,
      class: className,
      section,
      studentId,
      studentName,
      status,
    } = req.query;

    let filter = {};

    if (attendanceDate) filter.attendanceDate = attendanceDate;
    if (className) filter.class = className;
    if (section) filter.section = section;
    if (studentId) filter.studentId = studentId;
    if (studentName)
      filter.studentName = { $regex: studentName, $options: "i" };
    if (status) filter.status = status;

    const data = await Attendance.find(filter).sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
