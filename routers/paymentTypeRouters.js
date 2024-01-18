const express = require("express");
const {
  getPaymentType,
  createPaymentType,
  getPaymentTypebyId,
  editPaymentType,
  deletePaymentType,
} = require("../controllers/paymentTypeControllers");

const router = express.Router();

router.get("/", getPaymentType);
router.post("/", createPaymentType);
router.get("/:id", getPaymentTypebyId);
router.put("/:id", editPaymentType);
router.delete("/delete/:id", deletePaymentType);

module.exports = router;
