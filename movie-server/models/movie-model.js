const db = require('../config/db');

const movies = {}

movies.findAll = () => {
  return db.many('SELECT * FROM movies');
}

movies.findOne = (id) => {
  return db.one('SELECT * FROM movies WHERE id=$1', [id]);
}

movies.create = (movieInfo) => {
  return db.one('INSERT INTO movies(title, poster, rating, runtime) VALUES($[title], $[poster], $[rating], $[runtime]) returning id', movieInfo);
}

movies.delete = (id) => {
  return db.none('DELETE FROM movies WHERE id=$1', [id]);
}

module.exports = movies;