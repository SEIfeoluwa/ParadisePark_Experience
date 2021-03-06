const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Review = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true}
  },
  { timestamps: true }
)

module.exports = Review