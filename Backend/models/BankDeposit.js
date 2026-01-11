const mongoose = require("mongoose");

const BankDepositSchema = new mongoose.Schema(
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
    depositAmount: {
      type: Number,
      required: true
    },
    depositTime: {
      type: String,
      required: true
    },
    depositDate: {
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

module.exports = mongoose.model("BankDeposit", BankDepositSchema);
