const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema(
  {
    headCode: {
      type: String,
      required: true,
      trim: true
    },
    headName: {
      type: String,
      required: true,
      trim: true
    },
    amount: {
      type: Number,
      required: true
    },
    incomeDate: {
      type: Date,
      required: true
    },
    description: {
      type: String
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

module.exports = mongoose.model("Income", IncomeSchema);
