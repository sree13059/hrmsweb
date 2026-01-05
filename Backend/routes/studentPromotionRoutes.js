const express = require("express");
const router = express.Router();
const {
  createPromotion,
  getPromotions,
  deletePromotion,
} = require("../controllers/studentPromotionController");

router.post("/create", createPromotion);
router.get("/", getPromotions);
router.delete("/:id", deletePromotion);

module.exports = router;
