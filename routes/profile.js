const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes 
router.get("/newLesson", ensureAuth, profileController.newLesson)
router.post("/postNewLesson", ensureAuth, profileController.postNewLesson);

module.exports = router;
