const express = require("express");
const router = express.Router();
const {
  submitForm,
  getForms,
  getFormsByType
} = require("../controllers/formController");

router.post("/submit", submitForm);
router.get("/", getForms);
router.get("/:type", getFormsByType);

module.exports = router;