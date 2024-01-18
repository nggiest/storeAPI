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

const PaymentType = mongoose.model("PaymentType", paymentTypeSchema);

module.exports = PaymentType;
