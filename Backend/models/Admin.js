const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    adminName: String,
    fatherName: String,
    email: String,
    password: String,
    role: String,
    permissions: [String],
    department: String,
    presentAddress: String,
    permanentAddress: String,
    religion: String,
    nationality: String,
    accessLevel: String,
    photo: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", AdminSchema);