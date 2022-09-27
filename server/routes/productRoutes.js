const express = require("express");

const router = express.Router();
const productController = require("../controllers/productController");
const {verifyUser} = require('../middlewares/verifyUser');

router.post("/addItem", verifyUser,productController.addItem);
router.get("/getAllItems",verifyUser ,productController.getAllItems);
router.delete("/deleteProduct/:id",verifyUser ,productController.deleteProduct);
router.post("/updateItem",verifyUser ,productController.updateItem);
router.post('/searchItems/', verifyUser, productController.searchItems)

router.post("/addCategory", verifyUser,productController.addCategory);
router.get("/getAllCategory",verifyUser ,productController.getAllCategory);
// router.delete("/deleteProduct/:id",verifyUser ,productController.deleteProduct);
// router.post("/updateItem",verifyUser ,productController.updateItem);
router.post('/searchItems/', verifyUser, productController.searchItems)

router.post('/addProductAgeLimit', verifyUser, productController.addProductAgeLimit)
router.get('/getAllProductAgeLimit', verifyUser, productController.getAllProductAgeLimit)


module.exports = router;
