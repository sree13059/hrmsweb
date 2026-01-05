const Designation = require("../models/Designation");

// CREATE DESIGNATION
exports.createDesignation = async (req, res) => {
  try {
    const designation = new Designation(req.body);
    await designation.save();

    res.status(201).json({
      success: true,
      message: "Designation created successfully",
      data: designation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL DESIGNATIONS
exports.getDesignations = async (req, res) => {
  try {
    const list = await Designation.find().sort({ createdAt: -1 });
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE DESIGNATION
exports.deleteDesignation = async (req, res) => {
  try {
    await Designation.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Designation deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
