const express = require('express'),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      PORT = process.env.PORT || 8080;

const movies = require('./models/movie-model');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Allows cross-origin posting
app.use(cors());

app.get("/all", (req, res) => {
  movies.findAll()
    .then(results => res.json({status: "success", results: results}))
    .catch((err) => res.json({status: "No Movies Stored Yet"}));
});

app.get("/:id", (req, res) => {
  movies.findOne(req.params.id)
    .then(result => res.json({status: "success", results: results}))
    .catch(err => res.json({status: "Movie Not Found"}));
});

app.delete('/:id', (req, res) => {
  movies.delete(req.params.id)
    .then(() => res.json({status: "success"}))
    .catch(() => res.json({status: "error"}))
});

app.post('/', (req, res) => {
  // CHECK IF THIS IS THE RIGHT THING FIRST
  const movieInfo = req.body;
  movies.create(movieInfo)
    .then(results => res.json({status: "success", results: results}))
    .catch(err => res.json({status: "Error When Adding Movie To Database"}));
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});