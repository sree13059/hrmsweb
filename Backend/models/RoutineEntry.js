const mongoose = require("mongoose");

const RoutineEntrySchema = new mongoose.Schema(
  {
    className: {
      type: String,
      required: true
    },
    section: {
      type: String
    },
    day: {
      type: String,
      required: true
    },
    slot: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    teacher: {
      type: String,
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

module.exports = mongoose.model("RoutineEntry", RoutineEntrySchema);
