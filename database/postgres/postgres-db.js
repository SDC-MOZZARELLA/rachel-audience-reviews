const { Pool } = require('pg');

const pool = new Pool({
  user: 'rachel',
  host: 'localhost',
  database: 'reviews',
  password: 'Heylo123',
  port: 5432,
});
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});

module.exports = pool;
