const Income = require("../models/Income");

// ➤ Create Income
exports.createIncome = async (req, res) => {
  try {
    const income = new Income(req.body);
    await income.save();

    res.status(201).json({
      success: true,
      message: "Income saved successfully",
      data: income
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// ➤ Get All Incomes
exports.getAllIncomes = async (req, res) => {
  try {
    const incomes = await Income.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: incomes
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ➤ Get Single Income
exports.getIncomeById = async (req, res) => {
  try {
    const income = await Income.findById(req.params.id);
    if (!income) {
      return res.status(404).json({ success: false, message: "Income not found" });
    }
    res.status(200).json({ success: true, data: income });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ➤ Update Income
exports.updateIncome = async (req, res) => {
  try {
    const updatedIncome = await Income.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Income updated successfully",
      data: updatedIncome
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ➤ Delete Income
exports.deleteIncome = async (req, res) => {
  try {
    await Income.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Income deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
