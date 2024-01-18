const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const roleSchema = mongoose.Schema(
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
      default: false,
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

const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
