const express = require("express");
const router = express.Router();

const {
  createBankDeposit,
  getAllBankDeposits,
  getBankDepositById,
  updateBankDeposit,
  deleteBankDeposit
} = require("../controllers/bankDepositController");

router.post("/create", createBankDeposit);
router.get("/", getAllBankDeposits);
router.get("/:id", getBankDepositById);
router.put("/:id", updateBankDeposit);
router.delete("/:id", deleteBankDeposit);

module.exports = router;
