const EmployeeRegister = require("../models/employeeregister");

exports.createEmployeeRegister = async (req, res) => {
  try {
    const data = { ...req.body };

    if (req.files?.photo) {
      data.photo = `/uploads/photos/${req.files.photo[0].filename}`;
    }

    if (req.files?.signature) {
      data.signature = `/uploads/signatures/${req.files.signature[0].filename}`;
    }

    const employee = new EmployeeRegister(data);
    await employee.save();

    res.status(201).json({
      success: true,
      message: "Employee registered successfully",
      data: employee,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Employee registration failed",
    });
  }
};
