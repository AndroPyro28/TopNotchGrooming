const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.post('/signup', customerController.signup)
router.post('/login', customerController.login)

module.exports = router;