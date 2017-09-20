const pgp = require('pg-promise')();

const db = pgp(process.env.DATABASE_URL || 'postgres://sabrina@localhost:5432/movie_haus');

module.exports = db;