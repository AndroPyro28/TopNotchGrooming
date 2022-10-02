const express = require('express');
const router = express.Router();
const publicController = require('../controllers/publicController')

router.get('/getFirstThreeFeedback', publicController.getFirstThreeFeedback)

module.exports = router;