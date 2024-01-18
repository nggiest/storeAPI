const express = require("express");
const {
  getOrderStatus,
  createOrderStatus,
  getOrderStatusbyId,
  editOrderStatus,
  deleteOrderStatus,
} = require("../controllers/orderStatusController");

const router = express.Router();

router.get("/", getOrderStatus);
router.post("/", createOrderStatus);
router.get("/:id", getOrderStatusbyId);
router.put("/:id", editOrderStatus);
router.delete("/delete/:id", deleteOrderStatus);

module.exports = router;
