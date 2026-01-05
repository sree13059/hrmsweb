const Class = require("../models/Class");

exports.createClass = async (req, res) => {
  try {
    const newClass = new Class({
      className: req.body.className,
      shortForm: req.body.shortForm,
      entryBy: req.body.entryBy,
      entryDate: req.body.entryDate ? new Date(req.body.entryDate) : new Date()
    });

    await newClass.save();

    res.status(201).json({
      message: "Class created successfully",
      class: newClass
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL CLASSES
exports.getClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};