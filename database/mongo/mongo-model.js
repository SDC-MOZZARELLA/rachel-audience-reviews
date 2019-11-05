const mongoose = require('mongoose');

// create schema
const ReviewSchema = new mongoose.Schema({
  reviewId: Number,
  reviewMovie: String,
  reviewRating: Number,
  reviewDate: String,
  reviewText: String,
  reviewerName: String,
});

// create model
const Review = mongoose.model('review', ReviewSchema);

module.exports = { Review };
