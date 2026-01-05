const mongoose = require("mongoose");

const employeeAttendanceSchema = new mongoose.Schema(
  {
    employeeId: { type: String, required: true },
    employeeName: { type: String, required: true },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    status: {
      type: String,
      enum: ["Present", "Absent"],
      required: true
    },
    attendanceDate: { type: String, required: true }
  },
  { timestamps: true }
);

employeeAttendanceSchema.index(
  { employeeId: 1, attendanceDate: 1 },
  { unique: true }
);

module.exports = mongoose.model("EmployeeAttendance", employeeAttendanceSchema);
