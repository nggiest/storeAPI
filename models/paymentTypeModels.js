const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const paymentTypeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    accountName: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      require: true,
      default: true,
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

const PaymentType = mongoose.model("PaymentType", paymentTypeSchema);

module.exports = PaymentType;
