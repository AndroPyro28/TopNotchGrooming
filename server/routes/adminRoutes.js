const express = require('express');
const router = express.Router();
const {verifyUser} = require('../middlewares/verifyUser')

const adminController = require('../controllers/adminController');

router.post('/login', adminController.login)
router.get('/appointments/:status', verifyUser, adminController.getSchedule)
router.post('/getOrders/', verifyUser, adminController.getOrders)
router.get('/getOrderDetails/:reference', verifyUser, adminController.getOrderDetails);
router.patch('/orderNextStage/:reference',verifyUser, adminController.orderNextStage);
router.get('/getAppointment/:id', verifyUser, adminController.getAppointment);
router.patch('/approveAppointment/:id', verifyUser, adminController.approveAppointment)
router.get('/generateVerifiedLink/', verifyUser, adminController.generateVerifiedLink)
router.get('/getScheduleToday/:date', verifyUser, adminController.getScheduleToday)
router.post('/startStreaming', verifyUser, adminController.startStreaming)

module.exports = router;