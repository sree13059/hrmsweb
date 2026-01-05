const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  formType: {
    type: String,
    required: true
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  submittedBy: {
    type: String,
    required: true
  },
  entryDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Form", formSchema);