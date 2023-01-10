const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const movies = require('./routes');

const app = express();
const port = 5000;
const dbURI = 'mongodb://localhost:27017/movies';

app.use(bodyParser.json());
app.use(cors());
app.use('/', movies);

mongoose
  .connect(dbURI, { useNewUrlParser: true })
  .then(() => console.log('Database connected'))
  .catch((error) => console.log('Database connection error', error));

app.listen(port, () => console.log(`Listening on port ${port}...`));
