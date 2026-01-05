const StudentPromotion = require("../models/StudentPromotion");

// CREATE Promotion
exports.createPromotion = async (req, res) => {
  try {
    const promotion = new StudentPromotion(req.body);
    await promotion.save();

    res.status(201).json({
      success: true,
      message: "Student promoted successfully",
      data: promotion,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating promotion",
      error: error.message,
    });
  }
};

// GET All Promotions
exports.getPromotions = async (req, res) => {
  try {
    const promotions = await StudentPromotion.find().sort({ createdAt: -1 });
    res.status(200).json(promotions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE Promotion
exports.deletePromotion = async (req, res) => {
  try {
    await StudentPromotion.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Promotion deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
