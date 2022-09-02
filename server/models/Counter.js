const mongoose = require('mongoose');

const counterSchema = mongoose.Schema({
  questionIdx: {
    type: Number,
  },
  title: {
    type: String,
  },
});

const Counter = mongoose.model('Counter', counterSchema);

module.exports = { Counter };
