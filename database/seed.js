const db = require('./db.js');
const fakeData = require('./fakeData.json');
var faker = require('faker');

db.save(db.generateFakeData(100), console.log('Seeding initiated'));
