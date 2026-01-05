const mongoose = require("mongoose");

const employeeListSchema = new mongoose.Schema({
  employeeid: String,
  name: String,
  joindate: Date,
  highestdegree: String,
  employeetype: String,
  photo: String,
  signature: String,
  status: String
}, { timestamps: true });

module.exports = mongoose.model("EmployeeList", employeeListSchema);
