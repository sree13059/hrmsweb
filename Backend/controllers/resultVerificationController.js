const ResultVerification = require("../models/ResultVerification");

/**
 * Get Result Verification List (with filters)
 */
exports.getResults = async (req, res) => {
  try {
    const { studentId, className, subject, status } = req.query;

    const query = {};

    if (studentId) query.studentId = studentId;
    if (className) query.className = className;
    if (subject) query.subject = new RegExp(subject, "i");
    if (status) query.status = status;

    const results = await ResultVerification.find(query).sort({
      createdAt: -1
    });

    res.status(200).json({
      success: true,
      data: results
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Backend error",
      error: error.message
    });
  }
};

/**
 * Create Result Entry (optional – admin use)
 */
exports.createResult = async (req, res) => {
  try {
    const result = new ResultVerification(req.body);
    await result.save();

    res.status(201).json({
      success: true,
      message: "Result added successfully",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
