const EmployeeListReport = require("../models/EmployeeListReport");

// CREATE REPORT
exports.createEmployeeListReport = async (req, res) => {
  try {
    const report = new EmployeeListReport(req.body);
    const savedReport = await report.save();

    res.status(201).json({
      success: true,
      message: "Employee List Report created successfully",
      data: savedReport
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating Employee List Report",
      error: error.message
    });
  }
};

// GET ALL REPORTS
exports.getAllEmployeeListReports = async (req, res) => {
  try {
    const reports = await EmployeeListReport.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: reports
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// DELETE REPORT
exports.deleteEmployeeListReport = async (req, res) => {
  try {
    await EmployeeListReport.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Employee List Report deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
