const mongoose = require("mongoose");

const studentListSchema = new mongoose.Schema(
  {
    rollno: String,
    class: String,
    section: String,
    name: String,
    group: String,
    guardianname: String,
    photo: String,
    guardianPhoto: String,
    guardianSignature: String,
    status: {
      type: String,
      enum: ["active", "inactive"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("StudentList", studentListSchema);
