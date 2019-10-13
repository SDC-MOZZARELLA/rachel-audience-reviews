var mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/ARList`, {useNewUrlParser:true});
// create schema
const AReviewSchema = new mongoose.Schema({
  reviewId: Number,
  reviewRating: Number,
  reviewDate: String,
  reviewText: String,
  reviewerName: String
})

// create model
var AReview = mongoose.model('review', AReviewSchema);

// random name generator
var RandomNameGenerator = () => {
  let firstName = ["Julia", "Rob", "Jenny", "Kai", "Jon"],
    lastName = ["Gens", "Nolan", "Shamoo", "Dong", "Yang"]

  return `${firstName[Math.floor(Math.random() * 5)]} ${lastName[Math.floor(Math.random() * 5)]}`;
};

// random date generator
var RandomDateGenerator = () => {
  let months = ['Jan','Feb','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];

  let randomMonth = months[Math.floor(Math.random() * 12)];
  return `${randomMonth} ${Math.ceil(Math.random() * 31)}, ${Math.ceil(Math.random() * 2) + 2017}`;
};


// seeding function
const save = (data => {
  data.forEach(review => {
    var newReview = new AReview ({
      reviewId: review.reviewId,
      reviewRating: Math.ceil(Math.random() * 5),
      reviewDate: RandomDateGenerator(),
      reviewText: review.reviewText,
      reviewerName: RandomNameGenerator()
    })
    newReview.save();
    console.log(newReview)
  })
});

// database find
const getReviews = (callback) => {
  AReview.find({}, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

// export model
module.exports.AReview = AReview;
module.exports.save = save;
module.exports.getReviews = getReviews;
