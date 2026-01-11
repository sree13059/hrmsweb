const Debit = require("../models/Debit");

// CREATE
exports.createDebit = async (req, res) => {
  try {
    const debit = new Debit(req.body);
    await debit.save();

    res.status(201).json({
      success: true,
      message: "Debit saved successfully",
      data: debit
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// GET ALL
exports.getAllDebits = async (req, res) => {
  try {
    const data = await Debit.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteDebit = async (req, res) => {
  try {
    await Debit.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Debit deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
