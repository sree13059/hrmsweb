const mongoose = require("mongoose");

const holidaySchema = new mongoose.Schema({
  holidayName: {
    type: String,
    required: true
  },
  holidayDate: {
    type: String, // YYYY-MM-DD or null for recurring
  },
  isRecurring: {
    type: Boolean,
    default: false
  },
  dayOfWeek: {
    type: String,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  remarks: {
    type: String
  },
  entryBy: {
    type: String,
    required: true
  },
  entryDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Holiday", holidaySchema);