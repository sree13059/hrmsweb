const Subject = require("../models/Subject");

exports.createSubject = async (req, res) => {
  try {
    const { subjectCode, subjectName, subjectType } = req.body;

    if (!subjectCode) {
      return res.status(400).json({ message: "Subject code is required" });
    }

    const exists = await Subject.findOne({ subjectCode });
    if (exists) {
      return res.status(409).json({ message: "Subject code already exists" });
    }

    const subject = new Subject({
      subjectCode,
      subjectName,
      subjectType,
    });

    await subject.save();

    res.status(201).json({
      message: "Subject created successfully",
      subject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// GET ALL SUBJECTS
exports.getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
