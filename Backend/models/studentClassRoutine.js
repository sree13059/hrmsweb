const mongoose = require("mongoose");

const StudentClassRoutineSchema = new mongoose.Schema(
  {
    shift: { type: String, required: true },
    className: { type: String, required: true },
    section: { type: String, required: true },
    year: { type: String, required: true },
    group: { type: String },
    day: { type: String, required: true },
    slot: { type: String, required: true },
    subject: { type: String, required: true },
    teacher: { type: String, required: true },
    entryBy: { type: String },
    entryDate: { type: Date }
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "StudentClassRoutine",
  StudentClassRoutineSchema
);
