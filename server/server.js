require('newrelic');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// DATABASES
// mongo db
// const db = require('../database/mongo/mongo-db.js');
// postgres db
const db = require('../database/postgres/postgres-db.js');

const json = bodyParser.json();
const app = express();
const PORT = process.env.PORT || 8100;
app.use(cors());
app.use(json);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create
app.post('/api/audienceReviews', (req, res) => {
  console.log('recieved post request to server');
  db.createReview(req.body, (err, results) => {
    if (err) {
      console.log('error occurred', err);
    } else {
      res.status(200).send(results).end();
    }
  });
});

// read
app.get('/api/audienceReviews', (req, res) => {
  // console.time('get');
  console.log('recieved get request to server');
  db.readAllReviews(Number(req.query.movie), (err, results) => {
    if (err) {
      console.log('error occurred', err);
    } else {
      // results = results.map((el) => el.review_text);
      const formattedResults = [];
      results.forEach((el) => {
        formattedResults.push({
          reviewDate: el.review_date,
          reviewId: el.review_id,
          reviewMovieId: el.review_movie_id,
          reviewMovieName: el.review_movie_name,
          reviewRating: el.review_rating,
          reviewText: el.review_text,
          reviewerName: el.reviewer_name,
        });
      });
      // console.log('results', formattedResults);
      res.status(200).send(formattedResults).end();
      // console.timeEnd('get');
    }
  });
});

// update
app.put('/api/audienceReviews', (req, res) => {
  db.updateReview(req.body.reviewId, req.body.changes, (err, results) => {
    if (err) {
      console.log('error occurred', err);
    } else {
      res.status(200).send(results).end();
    }
  });
});

// delete
app.delete('/api/audienceReviews', (req, res) => {
  db.deleteReview(req.body.reviewId, (err, results) => {
    if (err) {
      console.log('error occurred', err);
    } else {
      res.status(200).send(results).end();
    }
  });
});

app.use(express.static('client/dist'));
app.listen(PORT, console.log(`Server started on port ${PORT}`));
