// Import required modules
// const fs = require('fs');
// const path = require('path');
// const { Pool, Client} = require('pg');
// const copyFrom = require('pg-copy-streams').from;
// const config = require('.../config.json');
const client = require('./postgres-client');

// // inputfile & target table
// const inputFile = path.join('/Users/rachnovo/Desktop/HRR41/SDC/rachel-audience-reviews/database/reviews.csv');
// const table = 'reviews.reviews';

// // Getting connectin parameters from config.json
// const host = config.host;
// const user = config.user;
// const pw = config.pw;
// const db = config.db;
// const port = config.port;
// const conString = `postgres://${user}:${pw}@${host}:${port}/${db}`;

client
  .query(`COPY reviews FROM '../reviews.csv'`)
  .then((res) => console.log(res.rows[0]))
  .catch((e) => console.error(e.stack));
