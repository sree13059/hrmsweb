const mongoose = require("mongoose");

const EmployeeListReportSchema = new mongoose.Schema(
  {
    department: {
      type: String,
      required: true,
      trim: true
    },

    designation: {
      type: String,
      required: true,
      trim: true
    },

    fromDate: {
      type: Date,
      required: true
    },

    toDate: {
      type: Date,
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
  {
    timestamps: true // adds createdAt & updatedAt
  }
);

module.exports = mongoose.model(
  "EmployeeListReport",
  EmployeeListReportSchema
);
