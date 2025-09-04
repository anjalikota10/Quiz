const express = require("express");
const router = express.Router();
const quizAnswerController = require("../controllers/quizAnswerController");

router.post("/", quizAnswerController.saveAnswer);
router.get("/:user_id/:course_id", quizAnswerController.getUserAnswers);

module.exports = router;