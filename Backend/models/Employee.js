const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    professional: {
      employeeId: String,
      department: String,
      designation: String,
      joiningDate: Date,
      salary: Number,
      experience: Number,
      photo: String
    },
    personal: {
      name: String,
      fatherName: String,
      dob: Date,
      gender: String,
      email: String,
      phone: String,
      presentAddress: String,
      permanentAddress: String,
      photo: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", EmployeeSchema);