const client = require('./postgres-client.js');

// const createReview = ({ _id, reviewId, reviewMovie, reviewRating, reviewDate, reviewText, reviewerName }, callback) => {
//   console.log('whats it recieving in the db??', arguments[0]);
//   const query = `INSERT INTO reviews (id, review_id, review_movie_id, review_movie_name, review_rating, review_date, review_text, reviewer_name)
//   VALUES (${_id}, ${reviewId}, 5, ${reviewMovie}, ${reviewRating}, ${reviewDate}, ${reviewText}, ${reviewerName})`;
//   client
//     .query(query)
//     .then((result) => callback(null, result.rows[0]))
//     .catch((err) => callback(err.stack));
// };

const readAllReviews = (movieId, callback) => {
  console.log(`recieved readAllReviews request for ${movieId}`);
  const query = `SELECT * FROM reviews
  WHERE reviews.review_movie_id = '${movieId}'`;
  client
    .query(query)
    .then((result) => {
      // console.log('result', result);
      callback(null, result.rows);
    })
    .catch((err) => callback(err.stack));
};

// REFACTOR FOR POSTGRES

// const updateReview = (id, changes, callback) => {
//   model.Review.updateOne({ reviewId: id }, changes).then((result) => {
//     callback(null, result);
//   }).catch((err) => callback(err));
// };

// const deleteReview = (id, callback) => {
//   model.Review.deleteOne({ reviewId: id }).then((result) => {
//     callback(null, result);
//   }).catch((err) => callback(err));
// };

// const resetAllReviews = (callback) => {
//   model.Review.deleteMany({}).then((result) => {
//     callback(null, result);
//   }).catch((err) => callback(err));
// };

module.exports = {
  // createReview,
  readAllReviews,
  // updateReview,
  // deleteReview,
  // resetAllReviews,
};
