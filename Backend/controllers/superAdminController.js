const SuperAdmin = require("../models/SuperAdmin");
const bcrypt = require("bcryptjs");

// CREATE SUPER ADMIN
exports.createSuperAdmin = async (req, res) => {
  try {
    const { superAdminName, email, password, permissions } = req.body;

    // Check existing admin
    const existingAdmin = await SuperAdmin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newSuperAdmin = new SuperAdmin({
      superAdminName,
      email,
      password: hashedPassword,
      permissions
    });

    await newSuperAdmin.save();

    res.status(201).json({
      message: "Super Admin created successfully",
      superAdmin: newSuperAdmin
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL SUPER ADMINS
exports.getSuperAdmins = async (req, res) => {
  try {
    const admins = await SuperAdmin.find().select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
