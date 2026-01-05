const Form = require("../models/Form");

// SUBMIT FORM
exports.submitForm = async (req, res) => {
  try {
    const { formType, data, submittedBy } = req.body;

    if (!formType || !data || !submittedBy) {
      return res.status(400).json({ message: "Form type, data, and submittedBy are required" });
    }

    const form = new Form({
      formType,
      data,
      submittedBy
    });

    await form.save();

    res.status(201).json({
      message: "Form submitted successfully",
      form
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET FORMS
exports.getForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET FORM BY TYPE
exports.getFormsByType = async (req, res) => {
  try {
    const { type } = req.params;
    const forms = await Form.find({ formType: type });
    res.json(forms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};