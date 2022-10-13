const express = require('express');
const router = express.Router();
const publicController = require('../controllers/publicController');
const { verifyUser } = require('../middlewares/verifyUser');

router.get('/getFirstThreeFeedback', publicController.getFirstThreeFeedback)
router.post('/findAccountAndSendEmail', publicController.findAccountAndSendCode)
router.post('/verifyCode', publicController.verifyCode)
router.post('/updatePassword', verifyUser, publicController.updatePassword)
module.exports = router;