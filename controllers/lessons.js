const Lesson = require("../models/Lesson");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const lessons = await Lesson.find({ user: req.user.id });
      res.render("profile.ejs", { lessons: lessons, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getLessons: async (req, res) => {
    try {
      const lessons = await Lesson.find().sort({ createdAt: "desc" }).lean();
      res.render("library.ejs", { lessons: lessons, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getLesson: async (req, res) => {
    try {
      const lesson = await Lesson.findById(req.params.id);
      res.render("lesson.ejs", { lessons: lessons});
    } catch (err) {
      console.log(err);
    }
  },
  createLesson: async (req, res) => {
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
  likeLesson: async (req, res) => {
    try {
      await Lesson.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/lesson/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteLesson: async (req, res) => {
    try {
      // Find lesson by id
      let lesson = await Lesson.findById({ _id: req.params.id });
      // Delete lesson from db
      await Lesson.remove({ _id: req.params.id });
      console.log("Deleted lesson");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};