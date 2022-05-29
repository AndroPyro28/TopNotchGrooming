const express = require('express');

const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/findCustomerById/:id', customerController.customerSelectOne)

module.exports = router;