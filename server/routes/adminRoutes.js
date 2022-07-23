const express = require('express');
const { verify } = require('jsonwebtoken');
const router = express.Router();

const adminController = require('../controllers/adminController');

router.post('/login', adminController.login)
router.get('/appointments/:status', verify, adminController.getSchedule)
router.post('/getOrders/', verify, adminController.getOrders)
router.get('/getOrderDetails/:reference', verify, adminController.getOrderDetails)
module.exports = router;