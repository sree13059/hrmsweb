const mongoose = require("mongoose");

const studentPromotionSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
    },
    currentClass: {
      type: String,
    },
    promotedClass: {
      type: String,
    },
    promotionDate: {
      type: Date,
    },
    remarks: {
      type: String,
    },
    entryBy: {
      type: String,
      enum: ["admin", "superadmin"],
    },
    entryDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("StudentPromotion", studentPromotionSchema);
