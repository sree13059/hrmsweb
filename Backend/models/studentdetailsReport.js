const mongoose = require("mongoose");

const StudentDetailsReportSchema = new mongoose.Schema(
  {
    rollno: { type: String, required: true },
    section: { type: String },
    class: { type: String },
    group: { type: String },

    studentnameEnglish: { type: String },
    studentnameBengali: { type: String },

    studentPhoto: { type: String }, // image path

    fatherName: { type: String },
    motherName: { type: String },

    presentAddress: { type: String },
    permanentAddress: { type: String },

    guardianName: { type: String },
    guardianPhoto: { type: String } // image path
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "StudentDetailsReport",
  StudentDetailsReportSchema
);
