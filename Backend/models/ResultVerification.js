const mongoose = require("mongoose");

const ResultVerificationSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true
    },
    studentName: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    marks: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ["Verified", "Pending", "Rejected"],
      default: "Pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ResultVerification",
  ResultVerificationSchema
);
