const poolConnection = require("../config/connectDB");
const Product = require("./product");

class ProductDetails {
  #productId;
  #orderId;
  #customerId;
  #quantity;

  constructor(ctorProductDetails) {
    const {
      customer_id = "",
      product_id = "",
      order_id = "",
    } = ctorProductDetails;
    this.#productId = product_id;
    this.#orderId = order_id;
    this.#customerId = customer_id;
    this.#quantity = 1;
  }

  selectItemById = async () => {
    try {
          const selectQuery = `SELECT * FROM product_details WHERE product_id = ? AND customer_id = ? AND is_active = ?`;
    
          const [result, _] = await poolConnection.execute(selectQuery, [this.#productId, this.#customerId, true]);

          if(result.length > 0) {
            return result[0];
          }
          else {
            return null  
          }
        } catch (error) {
          console.error(error.message);
        }
  }

  addItem = async () => {
    try {

    const product = await this.selectItemById();
      if (!product) {
        const insertQuery = `INSERT INTO product_details (product_id, customer_id, quantity, is_active) VALUES (?, ?, ?, ?)`;

        const [result, _] = await poolConnection.execute(insertQuery, [
          this.#productId,
          this.#customerId,
          this.#quantity,
          true
        ]);
        return result;
      }
      else {
        const insertQuery = `UPDATE product_details SET quantity = ? WHERE product_id = ? AND customer_id = ? AND is_active = ?`;

        const [result, _] = await poolConnection.execute(insertQuery, 
            [
            product?.quantity + 1, 
            this.#productId,
            this.#customerId,
            true
        ]);
        return result;
      }
    } catch (error) {
      console.error(error.message);
    }
  };
}

module.exports = ProductDetails;
