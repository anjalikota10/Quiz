const express = require("express");
const router = express.Router();
const resultController = require("../controllers/resultController");

router.post("/", resultController.saveResult);
router.get("/user/:user_id", resultController.getUserResults);
router.get("/course/:course_id", resultController.getCourseResults);
router.get("/test-details/:user_id/:course_id",resultController.getUserTestDetails);
router.get("/check/:user_id/:course_id", resultController.checkTestAttempt);

module.exports = router;