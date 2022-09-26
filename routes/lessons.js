const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const lessonsController = require("../controllers/lessons");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, lessonsController.getLesson);

router.post("/createLesson", upload.single("file"), lessonsController.createLesson);

router.put("/likeLesson/:id", lessonsController.likeLesson);

router.delete("/deleteLesson/:id", lessonsController.deleteLesson);

module.exports = router;
