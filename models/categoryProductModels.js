const mongoose = require("mongoose");

const categoryProductSchema = mongoose.Schema({
  name: {
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
});

const CategoryProduct = mongoose.model(
  "CategoryProduct",
  categoryProductSchema
);

module.exports = CategoryProduct;
