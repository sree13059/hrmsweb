const express = require("express");
const router = express.Router();
const {
  createSuperAdmin,
  getSuperAdmins
} = require("../controllers/superAdminController");

router.post("/create", createSuperAdmin);
router.get("/", getSuperAdmins);

module.exports = router;
