const mongoose = require('mongoose');
const model = require('./model.js');

mongoose.connect('mongodb://localhost/ARList', { useNewUrlParser: true });


const createReview = (review, callback) => {
  model.Review.create(review).then((result) => {
    callback(null, result);
  }).catch((err) => callback(err));
};

const readAllReviews = (movie, callback) => {
  model.Review.find({ reviewMovie: movie }).then((result) => {
    callback(null, result);
  }).catch((err) => callback(err));};

const updateReview = (id, changes, callback) => {
  model.Review.updateOne({ reviewId: id }, changes).then((result) => {
    callback(null, result);
  }).catch((err) => callback(err));
};

const deleteReview = (id, callback) => {
  model.Review.deleteOne({ reviewId: id }).then((result) => {
    callback(null, result);
  }).catch((err) => callback(err));
};

const resetAllReviews = (callback) => {
  model.Review.deleteMany({}).then((result) => {
    callback(null, result);
  }).catch((err) => callback(err));
};

module.exports = {
  createReview,
  readAllReviews,
  updateReview,
  deleteReview,
  resetAllReviews,
};
