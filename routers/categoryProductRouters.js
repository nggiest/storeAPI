const express = require("express");
const {
  getCategoryProduct,
  createCategoryProduct,
} = require("../controllers/categoryProductController");

const router = express.Router();

router.get("/", getCategoryProduct);
router.post("/", createCategoryProduct);

module.exports = router;
