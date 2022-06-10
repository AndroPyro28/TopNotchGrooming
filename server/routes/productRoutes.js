const express = require("express");

const router = express.Router();
const productController = require("../controllers/productController");
const {verifyUser} = require('../middlewares/verifyUser');

router.post("/addItem", verifyUser,productController.addItem);
router.get("/getAllItems",verifyUser ,productController.getAllItems);
router.delete("/deleteProduct/:id",verifyUser ,productController.deleteProduct);
router.post("/updateItem",verifyUser ,productController.updateItem);
router.post('/searchItems/', verifyUser, productController.searchItems)

module.exports = router;
