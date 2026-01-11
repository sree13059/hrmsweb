const StudentMarksPolicy = require("../models/StudentMarksPolicy");

// CREATE POLICY
exports.createMarksPolicy = async (req, res) => {
  try {
    const policy = new StudentMarksPolicy(req.body);
    const savedPolicy = await policy.save();

    res.status(201).json({
      success: true,
      message: "Student Marks Policy saved successfully",
      data: savedPolicy
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error saving Student Marks Policy",
      error: error.message
    });
  }
};

// GET ALL POLICIES
exports.getAllMarksPolicies = async (req, res) => {
  try {
    const policies = await StudentMarksPolicy.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: policies
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// GET BY CLASS / SESSION / GROUP (OPTIONAL FILTER)
exports.getPolicyByFilter = async (req, res) => {
  try {
    const { className, session, group } = req.query;

    const policy = await StudentMarksPolicy.findOne({
      class: className,
      session,
      group
    });

    res.status(200).json({
      success: true,
      data: policy
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// DELETE POLICY
exports.deleteMarksPolicy = async (req, res) => {
  try {
    await StudentMarksPolicy.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Student Marks Policy deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
