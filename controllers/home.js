const Lesson = require("../models/Lesson");
const User = require("../models/User");

module.exports = {
  getIndex: async(req, res) => {
    try{
      const lessons = await Lesson.find()
      .populate('userId')
      .lean()

      res.render('index.ejs', {user: req.user})
  }catch(err){
      console.log(err)
  }
  },
};


