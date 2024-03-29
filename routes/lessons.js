const express = require("express");
const router = express.Router();
const lessonsController = require("../controllers/lessons");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes

router.get("/:id", lessonsController.getLesson);
router.get("/:id/editLesson/", ensureAuth, lessonsController.getEditableLesson);

router.put("/likeLesson/:id", lessonsController.likeLesson);
router.put("/:id/editLesson", ensureAuth, lessonsController.updateLesson);

router.delete("/deleteLesson/:id", lessonsController.deleteLesson);

module.exports = router;
