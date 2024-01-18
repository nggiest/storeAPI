const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const productStatusSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    codeName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: 0,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamp: true,
  }
);

const ProductStatus = mongoose.model("ProductStatus", productStatusSchema);

module.exports = ProductStatus;
