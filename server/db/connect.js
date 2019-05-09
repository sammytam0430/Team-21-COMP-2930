const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const config = require('../knexfile')[environment];    // require environment's settings from knexfile
const db = require('knex')(config);

module.exports = db;