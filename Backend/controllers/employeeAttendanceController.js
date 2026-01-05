const EmployeeAttendance = require("../models/EmployeeAttendance");

// SAVE
exports.saveAttendance = async (req, res) => {
  try {
    let list = req.body;
    if (!Array.isArray(list)) list = [list];

    const ops = list.map(item => ({
      updateOne: {
        filter: {
          employeeId: item.employeeId,
          attendanceDate: item.attendanceDate
        },
        update: { $set: item },
        upsert: true
      }
    }));

    await EmployeeAttendance.bulkWrite(ops);

    res.json({ success: true, message: "Attendance saved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Save failed" });
  }
};

// VIEW
exports.viewAttendance = async (req, res) => {
  try {
    const {
      attendanceDate,
      department,
      designation,
      employeeId,
      employeeName,
      status
    } = req.query;

    const filter = {};
    if (attendanceDate) filter.attendanceDate = attendanceDate;
    if (department) filter.department = department;
    if (designation) filter.designation = designation;
    if (employeeId) filter.employeeId = employeeId;
    if (status) filter.status = status;
    if (employeeName)
      filter.employeeName = { $regex: employeeName, $options: "i" };

    const data = await EmployeeAttendance.find(filter).sort({ attendanceDate: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed" });
  }
};
