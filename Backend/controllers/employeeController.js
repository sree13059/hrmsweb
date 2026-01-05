const Employee = require("../models/Employee");

exports.createEmployee = async (req, res) => {
  try {
    const professionalPhoto = req.files?.professionalPhoto?.[0]?.filename || "";
    const personalPhoto = req.files?.personalPhoto?.[0]?.filename || "";

    const employee = new Employee({
      professional: {
        employeeId: req.body.employeeId,
        department: req.body.department,
        designation: req.body.designation,
        joiningDate: req.body.joiningDate,
        salary: req.body.salary,
        experience: req.body.experience,
        photo: professionalPhoto
      },
      personal: {
        name: req.body.name,
        fatherName: req.body.fatherName,
        dob: req.body.dob,
        gender: req.body.gender,
        email: req.body.email,
        phone: req.body.phone,
        presentAddress: req.body.presentAddress,
        permanentAddress: req.body.permanentAddress,
        photo: personalPhoto
      }
    });

    await employee.save();

    res.status(201).json({
      message: "Employee details saved successfully",
      employee
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL EMPLOYEES
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};