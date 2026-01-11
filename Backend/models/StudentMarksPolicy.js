const mongoose = require("mongoose");

const SubjectPolicySchema = new mongoose.Schema({
  haveClassTest: {
    type: Boolean,
    default: false
  },
  classTestTotalMarks: {
    type: Number,
    default: 0
  },
  passMarks: {
    type: Number,
    default: 0
  },
  isHandwritingSpelling: {
    type: Boolean,
    default: false
  },
  writtenPassMarks: {
    type: Number,
    default: 0
  },
  totalPassMarks: {
    type: Number,
    default: 0
  }
});

const StudentMarksPolicySchema = new mongoose.Schema(
  {
    class: {
      type: String,
      required: true
    },
    session: {
      type: String,
      required: true
    },
    group: {
      type: String,
      required: true
    },
    subjects: {
      type: Map,
      of: SubjectPolicySchema,
      required: true
    },
    entryBy: {
      type: String,
      enum: ["admin", "superadmin"],
      required: true
    },
    entryDate: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "StudentMarksPolicy",
  StudentMarksPolicySchema
);
