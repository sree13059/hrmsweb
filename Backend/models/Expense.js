const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    headCode: { type: String, required: true },
    headName: { type: String, required: true },
    amount: { type: Number, required: true },
    expenseDate: { type: Date, required: true },
    description: { type: String },
    entryBy: { type: String },
    entryDate: { type: Date }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", expenseSchema);
