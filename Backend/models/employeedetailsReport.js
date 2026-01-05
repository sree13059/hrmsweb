const mongoose = require("mongoose");

const employeeDetailsReportSchema = new mongoose.Schema(
  {
    employeeId: { type: String, required: true },
    name: { type: String, required: true },
    designation: { type: String },
    department: { type: String },
    joindate: { type: Date },
    serviceperiod: { type: String },
    employeetype: { type: String },
    highestdegree: { type: String },

    phone: { type: String },
    email: { type: String },

    fatherName: { type: String },
    motherName: { type: String },
    presentAddress: { type: String },
    permanentAddress: { type: String },

    dob: { type: Date },
    age: { type: Number },
    gender: { type: String },
    maritalStatus: { type: String },
    nationality: { type: String },
    religion: { type: String },

    photo: { type: String },      // Base64 or file path
    signature: { type: String }   // Base64 or file path
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "EmployeeDetailsReport",
  employeeDetailsReportSchema
);
