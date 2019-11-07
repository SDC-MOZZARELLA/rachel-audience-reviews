const { Client } = require('pg');
const config = require('./config.json');

const client = new Client({
  user: config.user,
  host: config.host,
  database: config.db,
  password: config.pw,
  port: config.port,
});

client.connect();

module.exports = client;
