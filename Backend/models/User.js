const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    },
    permittedSections: {
      type: [String],
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

module.exports = mongoose.model("User", UserSchema);
