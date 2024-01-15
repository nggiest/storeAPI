const express = require("express");
const {
  getProductStatus,
  createProductStatus,
  getProductStatusbyId,
  editProductStatus,
  deleteProductStatus,
} = require("../controllers/productStatusControllers");

const router = express.Router();

router.get("/", getProductStatus);
router.post("/", createProductStatus);
router.get("/:id", getProductStatusbyId);
router.put("/:id", editProductStatus);
router.put("/deleted/:id", deleteProductStatus);

module.exports = router;
