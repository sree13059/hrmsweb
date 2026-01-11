const mongoose = require("mongoose");

const StudentMarksSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true
  },
  subjective: {
    type: Number,
    default: 0
  },
  sba: {
    type: Number,
    default: 0
  },
  objective: {
    type: Number,
    default: 0
  },
  practical: {
    type: Number,
    default: 0
  },
  absent: {
    type: Boolean,
    default: false
  }
});

const SubjectWiseMarksSchema = new mongoose.Schema(
  {
    shift: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    group: {
      type: String,
      required: true
    },
    examTerm: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    studentMarks: {
      type: [StudentMarksSchema],
      required: true
    },
    entryBy: {
      type: String
    },
    entryDate: {
      type: Date
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "SubjectWiseMarks",
  SubjectWiseMarksSchema
);
