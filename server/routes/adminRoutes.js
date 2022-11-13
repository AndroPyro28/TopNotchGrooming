const express = require('express');
const router = express.Router();
const {verifyUser} = require('../middlewares/verifyUser')

const adminController = require('../controllers/adminController');

router.post('/login', adminController.login)
router.get('/appointments/:status', verifyUser, adminController.getSchedule)
router.post('/getToShipOrders/', verifyUser, adminController.getToShipOrders)
router.get('/getOrderDetails/:reference', verifyUser, adminController.getOrderDetails);
router.patch('/orderNextStage/:reference',verifyUser, adminController.orderNextStage);
router.get('/getAppointment/:id', verifyUser, adminController.getAppointment);
router.patch('/updateAppointment/:id', verifyUser, adminController.updateAppointment)
router.get('/generateVerifiedLink/', verifyUser, adminController.generateVerifiedLink)
router.get('/getScheduleToday/:date', verifyUser, adminController.getScheduleToday)
router.post('/startStreaming', verifyUser, adminController.startStreaming)
router.patch('/appointmentCompleted/:link', verifyUser, adminController.appointmentCompleted)
router.patch('/markComplete/:id', verifyUser, adminController.markComplete)
router.get('/dashboard', verifyUser, adminController.dashboardData)
router.get('/getAllFeedback', verifyUser, adminController.getAllFeedback)
router.post('/saleReport', verifyUser, adminController.saleReport)
router.patch('/togglePinFeedback/:id', verifyUser, adminController.pinFeedback)
router.delete('/deleteFeedback/:id', verifyUser, adminController.deleteFeedback)
router.delete('/deleteAppointment/:id', verifyUser, adminController.deleteAppointment)
router.post('/comment', verifyUser, adminController.comment)

module.exports = router;