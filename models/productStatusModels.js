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
    createdDate: {
      type: Date,
      required: true,
    },
    updatedDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const ProductStatus = mongoose.model("ProductStatus", productStatusSchema);

module.exports = ProductStatus;
