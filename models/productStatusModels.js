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
    deleted: {
      type: Boolean,
      default: 1,
    },
  },
  {
    timestamp: true,
  }
);

const ProductStatus = mongoose.model("ProductStatus", productStatusSchema);

module.exports = ProductStatus;
