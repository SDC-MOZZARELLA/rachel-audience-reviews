const express = require('express');
const app = express();
const PORT = process.env.PORT || 8100;
const path = require('path');
const db = require('../database/db.js');
const cors = require('cors');


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('http://localhost:8100/api/audienceReviews', (req,res) => {
  db.getReviews((err, results) => {
    if (err) {
      console.log('error occurred', err);
    } else {
      res.status(200).send(results).end();
    }
  });
});

app.use(express.static('client/dist'));
app.listen(PORT, console.log(`Server started on port ${PORT}`));