const PaymentType = require("../models/paymentTypeModels");
const asyncHandler = require("express-async-handler");

const getPaymentType = asyncHandler(async (req, res) => {
  try {
    const paymentType = await PaymentType.find();
    if (!role) {
      return res.status(400).json({ message: "Empty Data" });
    }
    return res.status(200).json(paymentType);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const createPaymentType = asyncHandler(async (req, res) => {
  try {
    const paymentType = await PaymentType.create(req.body);
    return res.status(200).json(paymentType);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const getPaymentTypebyId = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const paymentType = await ProductStatus.findById(id);
    if (!paymentType) {
      return res.status(404).json({ message: "can't find product status" });
    }
    return res.status(200).json(paymentType);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const editPaymentType = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const paymentType = await ProductStatus.findByIdAndUpdate(id);
    if (!paymentType) {
      return res.status(404).json({ message: "can't find product status" });
    }
    const updatedPaymentType = await PaymentType.findById(id);
    return res.status(200).json(updatedPaymentType);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const deletePaymentType = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const paymentType = await ProductStatus.findByIdAndUpdate(id, {
      deleted: 1,
    });
    if (paymentType.deleted) {
      return res.status(404).json({ message: "can't find product status" });
    }
    return res.status(200).json(paymentType, { message: "Deleted Success" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = {
  getPaymentType,
  createPaymentType,
  getPaymentTypebyId,
  deletePaymentType,
  editPaymentType,
};
