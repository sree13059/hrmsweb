const express = require("express");
const router = express.Router();
const { createSubject } = require("../controllers/subjectController");

// POST → Create Subject
router.post("/subject", createSubject);

module.exports = router;
