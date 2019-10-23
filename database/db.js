var mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/ARList`, {useNewUrlParser:true});
var faker = require('faker');

// create schema
const AReviewSchema = new mongoose.Schema({
  reviewId: Number,
  reviewMovie: String,
  reviewRating: Number,
  reviewDate: String,
  reviewText: String,
  reviewerName: String,
})

// create model
var AReview = mongoose.model('review', AReviewSchema);

// random movie title generator
var RandomMovieGenerator = () => {
  let movieName = ["Harry-Potter","Star-Wars","Lord-of-The-Rings","The-Matrix","Dumb-and-dumber"]
  return `${movieName[Math.floor(Math.random() * 5)]}`;
};

// fake data generator
var generateFakeData = (count) => {
  var reviewArray = [];
    for (var i = 0; i < count; i++) {
      var firstName = faker.fake("{{name.firstName}}")
      var lastName = faker.fake("{{name.lastName}}").slice(0,1);

      var newReview = new AReview ({
        reviewId: i+1,
        reviewMovie: RandomMovieGenerator(),
        reviewRating: Math.ceil(Math.random() * 5),
        reviewDate: faker.fake("{{date.past}}").toString().substring(4, 15),
        reviewText: faker.fake("{{lorem.paragraphs}}"),
        reviewerName: firstName + " " + lastName,
      })
      reviewArray.push(newReview);
    }
  return reviewArray;
};

// seeding function
const save = (data => {
  data.forEach(review => {
    var newReview = new AReview ({
      reviewId: review.reviewId,
      reviewMovie: RandomMovieGenerator(),
      reviewRating: Math.ceil(Math.random() * 5),
      reviewDate: review.reviewDate,
      reviewText: review.reviewText,
      reviewerName: review.reviewerName,
    })
    newReview.save(data);
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
module.exports.generateFakeData = generateFakeData;