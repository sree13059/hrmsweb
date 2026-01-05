const mongoose = require("mongoose");

const EmployeeRegisterSchema = new mongoose.Schema(
  {
    employeeId: { type: String, required: true, unique: true },
    name: String,
    fatherName: String,
    motherName: String,

    presentAddress: String,
    presentPoliceStation: String,
    presentCell: String,
    presentPostOffice: String,
    presentDistrict: String,
    presentEmail: String,

    permanentAddress: String,
    permanentPoliceStation: String,
    permanentCell: String,
    permanentPostOffice: String,
    permanentDistrict: String,

    dob: Date,
    highestDegree: String,
    nationality: String,
    experience: Number,
    designation: String,
    employeeStatus: String,
    employeeType: String,

    dateOfJoin: Date,
    maritalStatus: String,
    religion: String,
    gender: String,
    bloodGroup: String,
    conductClass: Boolean,

    photo: String,
    signature: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("EmployeeRegister", EmployeeRegisterSchema);
