const BankWithdraw = require("../models/BankWithdraw");

// ➤ Create Withdraw
exports.createBankWithdraw = async (req, res) => {
  try {
    const withdraw = new BankWithdraw(req.body);
    await withdraw.save();

    res.status(201).json({
      success: true,
      message: "Bank Withdraw saved successfully",
      data: withdraw
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// ➤ Get All Withdraws
exports.getAllBankWithdraws = async (req, res) => {
  try {
    const withdraws = await BankWithdraw.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: withdraws
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ➤ Get Single Withdraw
exports.getBankWithdrawById = async (req, res) => {
  try {
    const withdraw = await BankWithdraw.findById(req.params.id);
    if (!withdraw) {
      return res.status(404).json({ success: false, message: "Withdraw not found" });
    }
    res.status(200).json({ success: true, data: withdraw });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ➤ Update Withdraw
exports.updateBankWithdraw = async (req, res) => {
  try {
    const updatedWithdraw = await BankWithdraw.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Bank Withdraw updated successfully",
      data: updatedWithdraw
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ➤ Delete Withdraw
exports.deleteBankWithdraw = async (req, res) => {
  try {
    await BankWithdraw.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Bank Withdraw deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
