const GroupSubject = require("../models/GroupSubject");

// CREATE
exports.createGroupSubject = async (req, res) => {
  try {
    const data = new GroupSubject(req.body);
    await data.save();

    res.status(201).json({
      success: true,
      message: "Group Subject saved successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL
exports.getGroupSubjects = async (req, res) => {
  try {
    const list = await GroupSubject.find().sort({ createdAt: -1 });
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteGroupSubject = async (req, res) => {
  try {
    await GroupSubject.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Group Subject deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
