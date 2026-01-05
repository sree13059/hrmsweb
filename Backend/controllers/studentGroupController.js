const StudentGroup = require("../models/StudentGroup");

// CREATE STUDENT GROUP
exports.createStudentGroup = async (req, res) => {
  try {
    const group = new StudentGroup(req.body);
    await group.save();

    res.status(201).json({
      success: true,
      message: "Student Group created successfully",
      data: group,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL STUDENT GROUPS
exports.getStudentGroups = async (req, res) => {
  try {
    const groups = await StudentGroup.find().sort({ createdAt: -1 });
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE STUDENT GROUP
exports.deleteStudentGroup = async (req, res) => {
  try {
    await StudentGroup.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Student Group deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
