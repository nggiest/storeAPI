const ProductStatus = require("../models/productStatusModels");
const asyncHandler = require("express-async-handler");

const getProductStatus = asyncHandler(async (req, res) => {
  try {
    const productStatus = await ProductStatus.find();
    if (!role) {
      return res.status(400).json({ message: "Empty Data" });
    }
    return res.status(200).json(productStatus);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const createProductStatus = asyncHandler(async (req, res) => {
  try {
    const productStatus = await ProductStatus.create(req.body);
    return res.status(200).json(productStatus);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const getProductStatusbyId = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const productStatus = await ProductStatus.findById(id);
    if (!productStatus) {
      return res.status(404).json({ message: "can't find product status" });
    }
    return res.status(200).json(productStatus);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const editProductStatus = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const productStatus = await ProductStatus.findByIdAndUpdate(id);
    if (!productStatus) {
      return res.status(404).json({ message: "can't find product status" });
    }
    const updatedProductStatus = await ProductStatus.findById(id);
    return res.status(200).json(updatedProductStatus);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const deleteProductStatus = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const productStatus = await ProductStatus.findByIdAndUpdate(id, {
      deleted: 1,
    });
    if (productStatus.deleted) {
      return res.status(404).json({ message: "can't find product status" });
    }
    return res.status(200).json(productStatus, { message: "Deleted Success" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = {
  getProductStatus,
  createProductStatus,
  editProductStatus,
  deleteProductStatus,
  getProductStatusbyId,
};
