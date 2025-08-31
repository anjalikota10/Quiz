const express = require('express');  // Imports Express.
const router = express.Router();     // Creates a router object to define routes separately.
const Controller = require('../controllers/registrationController');

// ✅ add multer
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');   // save files in uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// ✅ only this line updated to handle image upload
router.post('/', upload.single('image'), Controller.addRegistration);

module.exports = router;  // Exports this router to be used in app.js.