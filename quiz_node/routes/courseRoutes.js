const express = require("express");
const router = express.Router();
const multer = require("multer");
const courseController = require("../controllers/courseController");

// Configure Multer (store in "uploads" folder)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // save in /uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // unique name
  },
});

const upload = multer({ storage });

// Routes
router.post("/", upload.single("image"), courseController.createCourse);
router.get("/", courseController.getCourses);
router.get("/:id", courseController.getCourseById);
router.put("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);

module.exports = router;
