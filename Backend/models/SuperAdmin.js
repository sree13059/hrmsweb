const mongoose = require("mongoose");

const SuperAdminSchema = new mongoose.Schema(
  {
    superAdminName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    permissions: {
      type: [String],
      default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("SuperAdmin", SuperAdminSchema);
