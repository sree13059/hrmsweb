const express = require("express");
const router = express.Router();
const {
  createDesignation,
  getDesignations,
  deleteDesignation,
} = require("../controllers/designationController");

router.post("/add", createDesignation);
router.get("/", getDesignations);
router.delete("/:id", deleteDesignation);

module.exports = router;
