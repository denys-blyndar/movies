const express = require('express');
const router = express.Router();
const fs = require('fs');
const mkdirp = require('mkdirp');
const Movie = require('../models');
const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');

const filePath = './api/uploads/file';
const { upload, selectInvalidYears } = require('../utils');

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

router.post('/import-movies', (req, res) => {
  mkdirp('./api/uploads', (error) => {
    if (error) {
      throw Error('Failed to create a directory');
    }
  });

  upload(req, res, (err) => {
    if (!err) {
      const lines = fs
        .readFileSync(filePath)
        .toString()
        .split('\n')
        .filter((el) => el !== '');
    } else {
      res.send('File upload error');
    }

    const invalidYears = selectInvalidYears(lines, 'Year');
    if (invalidYears.length) {
      res.send('Must be in the range of 1850-2022');
    }
  });
});

module.exports = router;
