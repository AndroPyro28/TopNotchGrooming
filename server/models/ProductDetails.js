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
      const [result, _] = await poolConnection.execute(selectQuery, [
        this.#productId,
        this.#customerId,
        true,
      ]);
      if (result.length > 0) {
        return result[0];
      } else {
        return null;
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  addItem = async () => {
    try {
      const product = await this.selectItemById();
      if (!product?.id) {
        const insertQuery = `INSERT INTO product_details (product_id, customer_id, quantity, is_active) VALUES (?, ?, ?, ?)`;

        const [result, _] = await poolConnection.execute(insertQuery, [
          this.#productId,
          this.#customerId,
          this.#quantity,
          true,
        ]);
        return {
          result,
          action: "insert",
        };
      } else {
        const UpdateQuery = `UPDATE product_details SET quantity = ? WHERE id = ?`;

        const [result, _] = await poolConnection.execute(UpdateQuery, [
          product?.quantity + 1,
          product?.id,
        ]);
        return {
          result,
          action: "update",
        };
      }
    } catch (error) {
      console.error("...", error.message);
    }
  };

  getItems = async () => {
    try {
      const selectQuery = `SELECT 
          pd.id, 
          p.id as product_id,
          p.product_name,
          p.product_price,
          p.product_description,
          p.pet_type, 
          p.product_date_added,
          p.product_age_limit,
          p.product_category,
          p.product_image_url,
          p.product_image_id,
          pd.quantity
        FROM product_details pd
        INNER JOIN products p
        ON p.id = pd.product_id
        WHERE pd.customer_id = ? AND 
        pd.is_active = ?`;

      const [result, _] = await poolConnection.execute(selectQuery, [
        this.#customerId,
        true,
      ]);

      if (result.length > 0) {
        return result;
      }
      return false;
    } catch (error) {
      console.error(error.message);
    }
  };

  deleteItem = async () => {
    try {
      const deleteQuery = `
      DELETE FROM product_details WHERE id = ? AND customer_id = ? AND is_active = ?;
      `;
      const [result, _] = await poolConnection.execute(deleteQuery, [
        this.#productId,
        this.#customerId,
        true,
      ]);

      return result.affectedRows > 0;
    } catch (error) {
      console.error(error.message);
    }
  };

  updateQuantity = async (action, product) => {
    try {
      const { quantity } = product;

      if (quantity - 1 <= 0 && action === "decremeant") {
        const deleteQuery = `
      DELETE FROM product_details
      WHERE id = ?
      `;
        const [result, _] = await poolConnection.execute(deleteQuery, [
          this.#productId,
        ]);

        action = "delete";
        return {
          result,
          action,
        };
      }

      const updateQuery = `
      UPDATE product_details SET quantity = ?
      WHERE id = ?
      `;
      const [result, _] = await poolConnection.execute(updateQuery, [
        action === "incremeant" ? quantity + 1 : quantity - 1,
        this.#productId,
      ]);

      return {
        result,
        action,
      };
    } catch (error) {
      console.error(error.message);
    }
  };
}

module.exports = ProductDetails;
