const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageControllers')

// Routes
router.get('/', pageController.homePage)

module.exports = router;