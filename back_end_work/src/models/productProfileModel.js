const mongoose = require('mongoose');

const productProfileSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    avatar: { type: String, required: true },
    premiumPrice: { type: String },
    discount: { type: String, default: 0 },
    rating: { type: String, default: 1 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model('productprofile', productProfileSchema);
