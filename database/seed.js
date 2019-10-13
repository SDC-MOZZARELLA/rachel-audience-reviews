const db = require('./db.js');
const fakeData = require('./fakeData.json');

db.save(fakeData, console.log('Seeding initiated'));