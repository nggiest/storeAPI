const OrderStatus = require("../models/orderStatusModels");
const asyncHandler = require("express-async-handler");

const getOrderStatus = asyncHandler(async (req, res) => {
  try {
    const orderStatus = await OrderStatus.find({ deleted: false });
    if (orderStatus.length === 0) {
      return res.status(200).json({ message: "Empty Data" });
    }
    return res.status(200).json(orderStatus);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const createOrderStatus = asyncHandler(async (req, res) => {
  try {
    const orderStatus = await OrderStatus.create(req.body);
    return res.status(200).json(orderStatus);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const getOrderStatusbyId = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const orderStatus = await OrderStatus.findById(id);
    if (orderStatus.length === 0) {
      return res.status(404).json({ message: "Can't find order status" });
    }
    return res.status(200).json(orderStatus);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const editOrderStatus = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    req.body.updatedAt = new Date();
    const orderStatus = await OrderStatus.findByIdAndUpdate(id, req.body);
    if (orderStatus.length === 0) {
      return res.status(404).json({ message: "Can't find order status" });
    }
    const updatedOrderStatus = await OrderStatus.findById(id);
    return res.status(200).json(updatedOrderStatus);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const deleteOrderStatus = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const orderStatus = await OrderStatus.findByIdAndUpdate(id, {
      deleted: true,
      updatedAt: new Date(),
    });
    if (orderStatus.deleted) {
      return res.status(404).json({ message: "can't find order status" });
    }
    return res.status(200).json(orderStatus, { message: "Deleted Success" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = {
  getOrderStatus,
  createOrderStatus,
  getOrderStatusbyId,
  deleteOrderStatus,
  editOrderStatus,
};
