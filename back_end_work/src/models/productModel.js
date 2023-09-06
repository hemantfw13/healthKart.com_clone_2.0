const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    avatar: { type: String, required: true },
    premiumPrice: { type: String, required: true },
    discount: { type: String, required: true },
    rating: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model('product', productSchema);
