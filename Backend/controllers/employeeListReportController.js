const EmployeeListReport = require("../models/EmployeeListReport");

// CREATE EMPLOYEE LIST REPORT
exports.createEmployeeListReport = async (req, res) => {
  try {
    const {
      department,
      designation,
      fromDate,
      toDate,
      entryBy
    } = req.body;

    const newReport = new EmployeeListReport({
      department,
      designation,
      fromDate: new Date(fromDate),
      toDate: new Date(toDate),
      entryBy,
      entryDate: new Date()
    });

    const savedReport = await newReport.save();

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

// GENERATE / FILTER EMPLOYEE LIST REPORT
exports.getEmployeeListReport = async (req, res) => {
  try {
    const {
      department,
      designation,
      fromDate,
      toDate,
      entryBy,
      entryDate
    } = req.query; // ✅ USE req.query for report filters

    let filter = {};

    if (department) {
      filter.department = department;
    }

    if (designation) {
      filter.designation = designation;
    }

    if (entryBy) {
      filter.entryBy = entryBy;
    }

    if (entryDate) {
      filter.entryDate = new Date(entryDate);
    }

    // ✅ DATE RANGE FILTER
    if (fromDate && toDate) {
      filter.entryDate = {
        $gte: new Date(fromDate),
        $lte: new Date(toDate)
      };
    }

    const reports = await EmployeeListReport.find(filter).sort({
      createdAt: -1
    });

    res.status(200).json({
      success: true,
      count: reports.length,
      data: reports
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error generating Employee List Report",
      error: error.message
    });
  }
};
