var mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/ARList`, {useNewUrlParser:true});
// create schema
const AReviewSchema = new mongoose.Schema({
  reviewId: { type: Number, unique: true },
  reviewRating: Number,
  reviewDate: Date(),
  reviewText: String,
  reviewerName: String
})

// create model
const AReview = mongoose.model('Review', AReviewSchema);


// export model
module.exports.AReview;