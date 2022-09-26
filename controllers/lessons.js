const Lesson = require("../models/Lesson");
const Comment = require("../models/Comment");

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
      res.render("feed.ejs", { lessons: lessons });
    } catch (err) {
      console.log(err);
    }
  },
  getLesson: async (req, res) => {
    try {
      const lesson = await Lesson.findById(req.params.id);
      const comments = await Comment.find({lesson: req.params.id}).sort({ createdAt: "desc"}).lean();
      res.render("lesson.ejs", { bookTitle: bookTitle, bookAuthor: bookAuthor, lessonIntro: lessonIntro, lessonActivity: lessonActivity, user: req.user,});
    } catch (err) {
      console.log(err);
    }
  },
  createLesson: async (req, res) => {
    try {
         await Lesson.create({
        title: req.body.title,
        caption: req.body.caption,
        likes: 0,
        user: req.user.id,
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
