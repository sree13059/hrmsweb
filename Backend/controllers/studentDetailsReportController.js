const StudentDetailsReport = require("../models/studentdetailsReport");

exports.createStudentDetailsReport = async (req, res) => {
  try {
    const data = {
      ...req.body,
      studentPhoto: req.files?.studentPhoto
        ? req.files.studentPhoto[0].path
        : null,
      guardianPhoto: req.files?.guardianPhoto
        ? req.files.guardianPhoto[0].path
        : null
    };

    const report = new StudentDetailsReport(data);
    await report.save();

    res.status(201).json({
      success: true,
      message: "Student Details Report saved successfully",
      data: report
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error saving student details",
      error: error.message
    });
  }
};

exports.getAllStudentDetailsReports = async (req, res) => {
  try {
    const reports = await StudentDetailsReport.find().sort({ createdAt: -1 });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStudentDetailsReportById = async (req, res) => {
  try {
    const report = await StudentDetailsReport.findById(req.params.id);
    if (!report) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteStudentDetailsReport = async (req, res) => {
  try {
    await StudentDetailsReport.findByIdAndDelete(req.params.id);
    res.json({ message: "Student record deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
