const PaymentType = require("../models/paymentTypeModels");
const asyncHandler = require("express-async-handler");

const getPaymentType = asyncHandler(async (req, res) => {
  try {
    const paymentType = await PaymentType.find({ deleted: false });
    if (paymentType.length === 0) {
      return res.status(200).json({ message: "Empty Data" });
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
    if (paymentType.length === 0) {
      return res.status(404).json({ message: "can't find payment type" });
    }
    return res.status(200).json(paymentType);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const editPaymentType = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    req.body.updatedAt = new Date();
    const paymentType = await PaymentType.findByIdAndUpdate(id, req.body);
    if (paymentType.length === 0) {
      return res.status(404).json({ message: "can't find payment type" });
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
    const paymentType = await PaymentType.findByIdAndUpdate(id, {
      deleted: true,
      updatedAt: new Date(),
    });
    if (paymentType.deleted) {
      return res.status(404).json({ message: "can't find payment type" });
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
