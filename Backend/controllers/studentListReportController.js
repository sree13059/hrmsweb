const StudentListReport = require("../models/studentlistReport");

// CREATE REPORT
exports.createStudentListReport = async (req, res) => {
  try {
    const report = new StudentListReport(req.body);
    await report.save();

    res.status(201).json({
      success: true,
      message: "Student List Report saved successfully",
      data: report
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error saving Student List Report",
      error: error.message
    });
  }
};

// GET ALL REPORTS
exports.getStudentListReports = async (req, res) => {
  try {
    const reports = await StudentListReport.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: reports
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching Student List Reports",
      error: error.message
    });
  }
};

// DELETE REPORT
exports.deleteStudentListReport = async (req, res) => {
  try {
    const { id } = req.params;

    await StudentListReport.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Student List Report deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting Student List Report",
      error: error.message
    });
  }
};
