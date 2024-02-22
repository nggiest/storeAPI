const mongoose = require("mongoose");

const VariationSchema = mongoose.Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  variation: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
});

const Variations = mongoose.model("Variation", VariationSchema);

module.exports = Variations;
