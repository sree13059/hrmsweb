const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema(
  {
    className: {
      type: String,
      required: true
    },
    shortForm: {
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

module.exports = mongoose.model("Class", ClassSchema);