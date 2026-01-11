const express = require("express");
const router = express.Router();

const {
  createBankWithdraw,
  getAllBankWithdraws,
  getBankWithdrawById,
  updateBankWithdraw,
  deleteBankWithdraw
} = require("../controllers/bankWithdrawController");

router.post("/create", createBankWithdraw);
router.get("/", getAllBankWithdraws);
router.get("/:id", getBankWithdrawById);
router.put("/:id", updateBankWithdraw);
router.delete("/:id", deleteBankWithdraw);

module.exports = router;
