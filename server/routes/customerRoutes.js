const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');
const {verifyUser} = require('../middlewares/verifyUser')
router.post('/signup', customerController.signup)
router.post('/login', customerController.login)
router.post('/updateInfo', verifyUser, customerController.updateInfo)
router.post('/addItemsToCart', verifyUser, customerController.addItemsToCart)

module.exports = router;