/* eslint-disable no-unused-vars */
const faker = require('faker');
const db = require('./db.js');
// const fakeData = require('./fakeData.json');

const RandomMovieGenerator = () => {
  const movieName = ['Harry-Potter', 'Star-Wars', 'Lord-of-The-Rings', 'The-Matrix', 'Dumb-and-dumber'];
  return `${movieName[Math.floor(Math.random() * 5)]}`;
};

const generateReview = (id) => {
  const firstName = faker.fake('{{name.firstName}}');
  const lastName = faker.fake('{{name.lastName}}').slice(0, 1);
  const newReview = {
    reviewId: id,
    reviewMovie: RandomMovieGenerator(),
    reviewRating: Math.ceil(Math.random() * 5),
    reviewDate: faker.fake('{{date.past}}').toString().substring(4, 15),
    reviewText: faker.fake('{{lorem.paragraphs}}'),
    reviewerName: `${firstName} ${lastName}`,
  };
  return newReview;
};

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
