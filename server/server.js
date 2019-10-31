const express = require('express');
const app = express();
const PORT = process.env.PORT || 8100;
const path = require('path');
const cors = require('cors');
const db = require('../database/db.js');


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/audienceReviews', (req, res) => {
  db.getReviews(req.body, (err, results) => {
    if (err) {
      console.log('error occurred', err);
    } else {
      res.status(200).send(results).end();
    }
  });
});

app.get('/api/audienceReviews/:movie', (req, res) => {
  db.save(req.params.movie, (err, results) => {
    if (err) {
      console.log('error occurred', err);
    } else {
      res.status(200).send(results).end();
    }
  });
});

app.put('/api/audienceReviews/:reviewId', (req, res) => {
  console.log('movie from the server', req.params.movie);
  db.updateReview(req.params.reviewId, (err, results) => {
    if (err) {
      console.log('error occurred', err);
    } else {
      res.status(200).send(results).end();
    }
  });
});

app.delete('/api/audienceReviews/:reviewId', (req, res) => {
  console.log('movie from the server', req.params.movie);
  db.deleteReview(req.params.reviewId, (err, results) => {
    if (err) {
      console.log('error occurred', err);
    } else {
      res.status(200).send(results).end();
    }
  });
});

app.use(express.static('client/dist'));
app.listen(PORT, console.log(`Server started on port ${PORT}`));
