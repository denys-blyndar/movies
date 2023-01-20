const express = require('express');
const router = express.Router();
const Movie = require('../models');
const ObjectId = require('mongodb').ObjectId;

router.get('/movies', (req, res) => {
  Movie.find().then((result) => res.json(result));
});

router.post('/add-movie', (req, res) => {
  const movie = {
    _id: new ObjectId(),
    title: req.body.title,
    year: req.body.year,
    format: req.body.format,
    stars: req.body.stars,
  };

  Movie.create(movie)
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});

router.delete('/movies/:id', (req, res) => {
  Movie.findOneAndDelete({ _id: ObjectId(req.params.id) })
    .then((result) => res.send({ id: result._id }))
    .catch((error) => res.send(error));
});

module.exports = router;
