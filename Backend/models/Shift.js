const mongoose = require("mongoose");

const ShiftSchema = new mongoose.Schema(
  {
    shiftName: {
      type: String,
      required: true
    },
    startTime: {
      type: String,
      required: true
    },
    endTime: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    entryBy: {
      type: String,
      required: true
    },
    entryDate: {
      type: Date
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shift", ShiftSchema);