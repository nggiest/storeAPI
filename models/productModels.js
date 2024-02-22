const mongoose = require("mongoose");
const Variations = require("./variationModels");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  description: {
    type: String,
  },
  photo: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  isPreOrder: {
    type: Boolean,
    default: false,
  },
  productStatus: {
    type: Schema.Types.ObjectId,
    ref: "ProductStatus",
  },
  isShow: {
    type: boolean,
    default: false,
  },
  price: {
    type: Number,
    default: NULL,
  },
  variations: [Variations.Schema],
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

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
