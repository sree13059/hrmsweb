const express = require("express");
const router = express.Router();
const {
  createCreditHead,
  getAllCreditHeads,
  getCreditHeadById,
  updateCreditHead,
  deleteCreditHead
} = require("../controllers/creditHeadController");

router.post("/create", createCreditHead);
router.get("/", getAllCreditHeads);
router.get("/:id", getCreditHeadById);
router.put("/:id", updateCreditHead);
router.delete("/:id", deleteCreditHead);

module.exports = router;
