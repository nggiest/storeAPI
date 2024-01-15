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
  },
  {
    timestamp: true,
  }
);

const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
