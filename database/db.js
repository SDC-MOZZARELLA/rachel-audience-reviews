const model = require('./model.js');

const save = (review, callback) => {
  model.Review.create(review).then((result) => {
    callback(null, result);
  }).catch((err) => callback(err));
};

const getReviews = (movie, callback) => {
  model.Review.find({ reviewMovie: movie }, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const reset = (callback) => {
  model.Review.deleteMany({}, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

module.exports = { save, getReviews, reset };
