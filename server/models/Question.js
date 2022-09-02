const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  questionIdx: {
    type: Number,
  },
  userId: {
    // 프라이머리 키
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
});

const Question = mongoose.model('Question', questionSchema);

module.exports = { Question };
