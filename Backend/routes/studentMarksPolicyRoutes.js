const express = require("express");
const router = express.Router();

const {
  createMarksPolicy,
  getAllMarksPolicies,
  getPolicyByFilter,
  deleteMarksPolicy
} = require("../controllers/studentMarksPolicyController");

router.post("/", createMarksPolicy);
router.get("/", getAllMarksPolicies);
router.get("/filter", getPolicyByFilter);
router.delete("/:id", deleteMarksPolicy);

module.exports = router;
