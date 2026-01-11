const mongoose = require("mongoose");

const RoutineSlotSchema = new mongoose.Schema(
  {
    shift: { type: String, required: true },
    year: { type: String, required: true },
    day: { type: String, required: true },

    slotTitle: { type: String, required: true },
    timeFrom: { type: String, required: true },
    timeTo: { type: String, required: true },

    description: { type: String },
    isBreak: { type: Boolean, default: false },

    entryBy: { type: String },
    entryDate: { type: Date }
  },
  { timestamps: true }
);

module.exports = mongoose.model("RoutineSlot", RoutineSlotSchema);
