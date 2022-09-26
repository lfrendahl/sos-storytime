const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: true,
  },
  bookAuthor: {
    type: String,
    require: true,
  },
  vocabSkill: {
    type: String,
    require: true,
  },
  lessonIntro: {
    type: String,
    required: true,
  },
  lessonActivity: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Lesson", LessonSchema);
