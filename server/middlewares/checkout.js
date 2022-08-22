const Product = require('../models/product');

module.exports.validateProducts = async (req, res, next) => {
  const { checkoutProducts } = req.body.values;
  try {
    const checkoutIds = checkoutProducts.map((item) => item.product_id);

      const product = new Product({});
      const selectedProducts = await product.selectMany(checkoutIds);

      const isNotOutOfStock = selectedProducts.every((products, index) => {
        for (let i = 0; i < checkoutProducts.length; i++) {
          if (products.id === checkoutProducts[i].product_id) {
            return checkoutProducts[i].quantity <= products.product_stocks;
          }
        }
      });
      
      if (!isNotOutOfStock) {
        return res.status(200).json({
          msg: "The Product is short of stocks",
          proceedPayment: false,
        });
      }
    
      next();
  } catch (error) {
    console.error('validate', error.message);
  }
}