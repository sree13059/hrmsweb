const Admin = require("../models/Admin");

exports.createAdmin = async (req, res) => {
  try {
    const photo = req.files?.photo?.[0]?.filename || "";

    const admin = new Admin({
      adminName: req.body.adminName,
      fatherName: req.body.fatherName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      permissions: req.body.permissions ? req.body.permissions.split(',') : [],
      department: req.body.department,
      presentAddress: req.body.presentAddress,
      permanentAddress: req.body.permanentAddress,
      religion: req.body.religion,
      nationality: req.body.nationality,
      accessLevel: req.body.accessLevel,
      photo: photo
    });

    await admin.save();

    res.status(201).json({
      message: "Admin created successfully",
      admin
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL ADMINS
exports.getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};