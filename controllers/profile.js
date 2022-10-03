const Lesson = require("../models/Lesson");
const User = require("../models/User");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const lessons = await Lesson.find({ user: req.user.id });
      res.render("profile.ejs", { lessons: lessons, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  newLesson: async (req, res) => {
    try {
      res.render("newlesson.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  postNewLesson: async (req, res) => {
    try {
      await Lesson.create({
        bookTitle: req.body.bookTitle,
        bookAuthor: req.body.bookAuthor, 
        vocabSkill: req.body.vocabSkill,
        lessonIntro: req.body.lessonIntro, 
        lessonActivity: req.body.lessonActivity, 
        user: req.user,
    });
    console.log("Lesson has been added!");
    res.redirect("/profile");

    } catch (err) {
      console.log(err);
    }
  },
};
