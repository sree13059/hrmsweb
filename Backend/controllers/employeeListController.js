const EmployeeList = require("../models/EmployeeList");

/* CREATE */
exports.createEmployeeList = async (req, res) => {
  try {
    const employee = new EmployeeList({
      ...req.body,
      photo: req.files?.photo?.[0]?.path || "",
      signature: req.files?.signature?.[0]?.path || ""
    });

    await employee.save();
    res.status(201).json({ message: "Employee List saved", employee });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* READ */
exports.getEmployeeList = async (req, res) => {
  const data = await EmployeeList.find().sort({ createdAt: -1 });
  res.json(data);
};

/* DELETE */
exports.deleteEmployeeList = async (req, res) => {
  await EmployeeList.findByIdAndDelete(req.params.id);
  res.json({ message: "Employee removed" });
};
