const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  shift: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  sectionCode: {
    type: String,
    required: true,
    unique: true,
  },
  sectionName: {
    type: String,
    required: true,
  },
  entryBy: {
    type: String,
    enum: ["admin", "superadmin"],
    required: true,
  },
  entryDate: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Section", sectionSchema);
