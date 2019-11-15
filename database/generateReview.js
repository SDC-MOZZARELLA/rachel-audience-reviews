const faker = require('faker');

const generateMovieName = () => faker.lorem.words();

const generateReview = (id, movieId, movieName) => {
  const newReview = {
    reviewId: id,
    reviewMovieId: movieId,
    reviewMovieName: movieName,
    reviewRating: Math.ceil(Math.random() * 5),
    reviewDate: faker.fake('{{date.past}}').toString().substring(4, 15),
    reviewText: faker.lorem.paragraph().slice(0, 220),
    reviewerName: faker.name.findName(),
  };
  return newReview;
};

module.exports = { generateReview, generateMovieName };
