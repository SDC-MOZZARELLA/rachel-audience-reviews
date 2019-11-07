/* eslint-disable no-unused-vars */
const generateReview = require('../generateReview.js');
const db = require('./mongo-db.js');
// const fakeData = require('./fakeData.json');

const seed = (count) => {
  for (let i = 0; i < count; i += 1) {
    db.createReview(generateReview(i), (err, results) => {
      if (err) {
        console.log('err', err);
      }
    });
  }
  console.log('seeding complete :)');
};

db.resetAllReviews((err) => {
  if (err) {
    console.log('error deleting data', err);
  } else {
    seed(100);
  }
});
