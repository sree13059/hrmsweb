const mongoose = require("mongoose");

const BankWithdrawSchema = new mongoose.Schema(
  {
    bankName: {
      type: String,
      required: true,
      trim: true
    },
    branchName: {
      type: String,
      required: true,
      trim: true
    },
    withdrawAmount: {
      type: Number,
      required: true
    },
    withdrawTime: {
      type: String,
      required: true
    },
    withdrawDate: {
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

module.exports = mongoose.model("BankWithdraw", BankWithdrawSchema);
