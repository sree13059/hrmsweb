const mongoose = require("mongoose");

const DebitSchema = new mongoose.Schema(
  {
    headName: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String
    },
    isParentHead: {
      type: Boolean,
      default: false
    },
    linkedWithClass: {
      type: Boolean,
      default: false
    },
    selectedClass: {
      type: String,
      default: ""
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

module.exports = mongoose.model("Debit", DebitSchema);
