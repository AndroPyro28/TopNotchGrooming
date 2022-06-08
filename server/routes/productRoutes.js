const express = require("express");

const router = express.Router();
const productController = require("../controllers/productController");
const {verifyUser} = require('../middlewares/verifyUser');

router.post("/addItem", verifyUser,productController.addItem);
router.get("/getAllItems",verifyUser ,productController.getAllItems);

module.exports = router;
