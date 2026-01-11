const SubjectWiseMarks = require("../models/SubjectWiseMarks");

/**
 * Save Subject Wise Marks
 */
exports.saveSubjectWiseMarks = async (req, res) => {
  try {
    const {
      shift,
      class: className,
      year,
      group,
      examTerm,
      subject,
      studentMarks,
      entryBy,
      entryDate
    } = req.body;

    // ✅ Basic validation
    if (!shift || !className || !year || !group || !examTerm || !subject) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing"
      });
    }

    if (!studentMarks || Object.keys(studentMarks).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Student marks not provided"
      });
    }

    // ✅ Convert object → array safely
    const formattedMarks = Object.entries(studentMarks).map(
      ([studentId, marks]) => ({
        studentId,
        subjective: Number(marks.subjective) || 0,
        sba: Number(marks.sba) || 0,
        objective: Number(marks.objective) || 0,
        practical: Number(marks.practical) || 0,
        absent: marks.absent === true
      })
    );

    const marksEntry = new SubjectWiseMarks({
      shift,
      className,
      year,
      group,
      examTerm,
      subject,
      studentMarks: formattedMarks,
      entryBy,
      entryDate
    });

    await marksEntry.save();

    res.status(201).json({
      success: true,
      message: "Subject wise marks saved successfully",
      data: marksEntry
    });

  } catch (error) {
    console.error("SAVE MARKS ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Backend error",
      error: error.message
    });
  }
};

/**
 * Get Subject Wise Marks
 */
exports.getSubjectWiseMarks = async (req, res) => {
  try {
    const data = await SubjectWiseMarks.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
