const StudentList = require("../models/studentlist");

// CREATE
exports.createStudent = async (req, res) => {
  try {
    const student = new StudentList({
      ...req.body,
      photo: req.files?.photo?.[0]?.path || "",
      guardianPhoto: req.files?.guardianPhoto?.[0]?.path || "",
      guardianSignature: req.files?.guardianSignature?.[0]?.path || "",
    });

    await student.save();

    res.status(201).json({
      success: true,
      message: "Student saved successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL
exports.getStudents = async (req, res) => {
  try {
    const students = await StudentList.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteStudent = async (req, res) => {
  try {
    await StudentList.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
