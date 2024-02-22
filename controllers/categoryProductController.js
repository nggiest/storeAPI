const CategoryProduct = require("../models/categoryProductModels");
const asyncHandler = require("express-async-handler");

const getCategoryProduct = asyncHandler(async (req, res) => {
  try {
    const categoryProduct = await CategoryProduct.find({ deleted: false });
    if (categoryProduct.length === 0) {
      return res.status(200).json({ message: "Empty Data" });
    }
    return res.status(200).json(categoryProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const createCategoryProduct = asyncHandler(async (req, res) => {
  try {
    const categoryProduct = await CategoryProduct.create(req.body);
    return res.status(200).json(categoryProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = {
  getCategoryProduct,
  createCategoryProduct,
};
