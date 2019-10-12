const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');
const db = require('../database/db.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/audienceReviews', (req,res) => {
  db.getReviews((err, results) => {
    if (err) {
      console.log('error occurred', err);
    } else {
      res.send(results);
    }
  });
});

app.use(express.static('client/dist'));
app.listen(PORT, console.log(`Server started on port ${PORT}`));