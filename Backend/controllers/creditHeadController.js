const CreditHead = require("../models/CreditHead");

// ➤ Create Credit Head
exports.createCreditHead = async (req, res) => {
  try {
    const creditHead = new CreditHead(req.body);
    await creditHead.save();

    res.status(201).json({
      success: true,
      message: "Credit Head created successfully",
      data: creditHead
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// ➤ Get All Credit Heads
exports.getAllCreditHeads = async (req, res) => {
  try {
    const creditHeads = await CreditHead.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: creditHeads
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ➤ Get Single Credit Head
exports.getCreditHeadById = async (req, res) => {
  try {
    const creditHead = await CreditHead.findById(req.params.id);
    if (!creditHead) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.status(200).json({ success: true, data: creditHead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ➤ Update Credit Head
exports.updateCreditHead = async (req, res) => {
  try {
    const updated = await CreditHead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Credit Head updated",
      data: updated
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ➤ Delete Credit Head
exports.deleteCreditHead = async (req, res) => {
  try {
    await CreditHead.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Credit Head deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
