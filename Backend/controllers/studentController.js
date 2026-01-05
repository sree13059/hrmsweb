const Student = require("../models/Student");

exports.createStudent = async (req, res) => {
  try {
    const studentData = { ...req.body };

    if (req.file) {
      studentData.photo = `/uploads/${req.file.filename}`;
    }

    const student = new Student(studentData);
    await student.save();

    res.status(201).json({
      success: true,
      message: "Student admission submitted successfully",
      data: student
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to submit student admission"
    });
  }
};
