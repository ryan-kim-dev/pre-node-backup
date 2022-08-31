const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  questionId: {
    type: String,
  },
  writer: {
    type: String,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  regdate: {
    type: String,
  },
  updatedate: {
    type: String,
  },
  member: {
    type: String,
  },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = { Question };
