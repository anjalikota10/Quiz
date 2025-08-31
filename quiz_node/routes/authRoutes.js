const express = require('express');  // Imports Express.
const router = express.Router();//Creates a router object to define routes separately.
const Controller = require('../controllers/authController');
router.post('/', Controller.login);
module.exports = router;// Exports this router to be used in app.js.