const express = require("express");
const router = express.Router();
const {
  getResults,
  createResult
} = require("../controllers/resultVerificationController");

router.get("/list", getResults);
router.post("/create", createResult);

module.exports = router;
