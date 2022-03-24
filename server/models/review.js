const { Schema } = require('mongoose');

const Review = new Schema(
  {
    description: { type: String, required: true },
    rating: { type: Number, required: true}
  },
  { timestamps: true }
)

module.exports = Review;