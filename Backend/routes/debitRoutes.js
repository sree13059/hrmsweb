const express = require("express");
const router = express.Router();
const {
  createDebit,
  getAllDebits,
  deleteDebit
} = require("../controllers/debitController");

router.post("/add", createDebit);
router.get("/list", getAllDebits);
router.delete("/delete/:id", deleteDebit);

module.exports = router;
