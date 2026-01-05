const mongoose = require("mongoose");

const studentGroupSchema = new mongoose.Schema(
  {
    groupName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("StudentGroup", studentGroupSchema);
