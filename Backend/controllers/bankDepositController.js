const BankDeposit = require("../models/BankDeposit");

// ➤ Create Bank Deposit
exports.createBankDeposit = async (req, res) => {
  try {
    const deposit = new BankDeposit(req.body);
    await deposit.save();

    res.status(201).json({
      success: true,
      message: "Bank Deposit saved successfully",
      data: deposit
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// ➤ Get All Bank Deposits
exports.getAllBankDeposits = async (req, res) => {
  try {
    const deposits = await BankDeposit.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: deposits
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ➤ Get Single Deposit
exports.getBankDepositById = async (req, res) => {
  try {
    const deposit = await BankDeposit.findById(req.params.id);
    if (!deposit) {
      return res.status(404).json({ success: false, message: "Deposit not found" });
    }
    res.status(200).json({ success: true, data: deposit });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ➤ Update Deposit
exports.updateBankDeposit = async (req, res) => {
  try {
    const updatedDeposit = await BankDeposit.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Bank Deposit updated successfully",
      data: updatedDeposit
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ➤ Delete Deposit
exports.deleteBankDeposit = async (req, res) => {
  try {
    await BankDeposit.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Bank Deposit deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
