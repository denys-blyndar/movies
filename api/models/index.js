const { Schema, model, Types } = require('mongoose');

const movieSchema = new Schema({
  _id: Types.ObjectId,
  title: String,
  year: Number,
  format: String,
  stars: Array,
});

module.exports = model('Movie', movieSchema);
