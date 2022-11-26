const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');
const { validateProducts } = require('../middlewares/checkout');
const {verifyUser} = require('../middlewares/verifyUser')

router.post('/signup', customerController.signup)
router.post('/login', customerController.login)
router.post('/updateInfo', verifyUser, customerController.updateInfo)
router.post('/addItemsToCart', verifyUser, customerController.addItemsToCart)
router.get('/getItemsIncart', verifyUser, customerController.getItemsIncart)
router.delete('/deleteItemInCart/:id', verifyUser, customerController.deleteItemInCart);
router.patch('/updateItemQuantity/:id', verifyUser, customerController.updateItemQuantity)
router.post('/checkout/:checkoutType', verifyUser, validateProducts, customerController.checkout);
router.post('/paymentsuccess', customerController.paymentsuccess);
router.post('/appointment', verifyUser, customerController.addAppointment);
router.post('/payment', verifyUser, customerController.payment)
router.get('/orders/:orderStatus', verifyUser, customerController.orders)
router.get('/getOrderByReference/:reference', verifyUser, customerController.getOrderByReference)
router.get('/getAllAppointmentActivities', verifyUser, customerController.getAllAppointmentActivities);
router.get('/getAllOrderActivities', verifyUser, customerController.getAllOrderActivities);
router.post('/submitFeedback', verifyUser, customerController.submitFeedback)
router.patch('/cancelOrder/:id', verifyUser, customerController.cancelOrder);
router.get('/getAllAdmin', verifyUser, customerController.getAllAdmin);
router.patch('/updateSchedule/:id', verifyUser, customerController.updateSchedule)
router.get('/getAppointments', verifyUser, customerController.getAppointments);

module.exports = router;