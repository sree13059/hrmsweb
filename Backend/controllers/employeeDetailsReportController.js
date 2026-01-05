const EmployeeDetailsReport = require("../models/employeedetailsReport");

// CREATE (UPDATED FOR FILE UPLOAD)
exports.createEmployeeDetailsReport = async (req, res) => {
  try {
    const reportData = {
      employeeId: req.body.employeeId,
      name: req.body.name,
      designation: req.body.designation,
      department: req.body.department,
      joindate: req.body.joindate,
      serviceperiod: req.body.serviceperiod,
      employeetype: req.body.employeetype,
      highestdegree: req.body.highestdegree,
      phone: req.body.phone,
      email: req.body.email,
      fatherName: req.body.fatherName,
      motherName: req.body.motherName,
      presentAddress: req.body.presentAddress,
      permanentAddress: req.body.permanentAddress,
      dob: req.body.dob,
      age: req.body.age,
      gender: req.body.gender,
      maritalStatus: req.body.maritalStatus,
      nationality: req.body.nationality,
      religion: req.body.religion,

      // FILES
      photo: req.files?.photo ? req.files.photo[0].filename : null,
      signature: req.files?.signature ? req.files.signature[0].filename : null
    };

    const report = new EmployeeDetailsReport(reportData);
    await report.save();

    res.status(201).json({
      success: true,
      message: "Employee Details Report saved successfully",
      data: report
    });
  } catch (error) {
    console.error("SAVE ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Error saving Employee Details Report",
      error: error.message
    });
  }
};

// GET ALL
exports.getEmployeeDetailsReports = async (req, res) => {
  try {
    const reports = await EmployeeDetailsReport.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: reports
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching Employee Details Reports",
      error: error.message
    });
  }
};

// GET BY ID
exports.getEmployeeDetailsReportById = async (req, res) => {
  try {
    const report = await EmployeeDetailsReport.findById(req.params.id);

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found"
      });
    }

    res.status(200).json({
      success: true,
      data: report
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching report",
      error: error.message
    });
  }
};

// DELETE
exports.deleteEmployeeDetailsReport = async (req, res) => {
  try {
    await EmployeeDetailsReport.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Employee Details Report deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting report",
      error: error.message
    });
  }
};
