const poolConnection = require("../config/connectDB");
const { DataJsonParser } = require("../helpers/DataJsonParser");
const {
  orderProductParserList,
  orderProductParserOne,
} = require("../helpers/orderProductParser");
const moment = require('moment');
const FormateDateLocal = require('../helpers/FormatDatelocal')
class Order {
  #reference;
  #customer_id;
  #order_date;
  #order_status;
  #total_amount;
  #payment_type;
  #monthly_id;
  #billing_address;
  #contact;
  #zip_code;
  #courrier_type;
  constructor({
    reference = "",
    customer_id = "",
    order_date = "",
    order_status = "",
    total_amount = "",
    payment_type = "",
    monthly_id = "",
    billing_address = "",
    contact = "",
    zip_code = "",
    courrier_type = "",
  }) {
    this.#reference = reference;
    this.#customer_id = customer_id;
    this.#order_date = order_date;
    this.#order_status = order_status;
    this.#total_amount = total_amount;
    this.#payment_type = payment_type;
    this.#monthly_id = monthly_id;
    this.#billing_address = billing_address;
    this.#contact = contact;
    this.#zip_code = zip_code;
    this.#courrier_type = courrier_type;
  }

  addNewOrder = async () => {
    try {

      const insertQuery = `INSERT INTO order_details 
      (reference, customer_id, order_date, total_amount, payment_type, billing_address, contact, zip_code, courrier_type)
      VALUES (?,?,?,?,?,?,?,?,?);`;
      const timeStamp = FormateDateLocal(`${moment().format()}`);
      console.log('after formatting', timeStamp);
      const [result, _] = await poolConnection.execute(insertQuery, [
        this.#reference,
        this.#customer_id,
        timeStamp,
        this.#total_amount,
        this.#payment_type,
        this.#billing_address,
        this.#contact,
        this.#zip_code,
        this.#courrier_type,
      ]);

      return result;
    } catch (error) {
      console.error(error.message);
    }
  };

  getOrders = async (search = "") => {
    try {
      const selectQuery = `SELECT 
        od.*,

        JSON_OBJECT('userId', c.id, 'firstname', c.firstname, 'lastname', c.lastname) as customer,
        
        JSON_ARRAYAGG(JSON_OBJECT('product_id', p.id, 'product_name', p.product_name)) as products

       FROM order_details od
       INNER JOIN product_details pd
       INNER JOIN products p
       ON od.id = pd.order_id AND p.id = pd.product_id
       INNER JOIN customer c
       ON c.id = od.customer_id
       WHERE ${
         this.#order_status == "all"
           ? `od.order_status LIKE ? AND od.reference LIKE ? OR od.order_status LIKE ? AND od.reference LIKE ?`
           : `od.order_status LIKE ? AND od.reference LIKE ?`
       } 
       GROUP BY od.id
       ORDER BY od.order_date DESC`;
      const [result, _] = await poolConnection.execute(
        selectQuery,

        this.#order_status == "all"
          ? [`%${"pending"}%`, `%${search}%`, `%${"onGoing"}%`, `%${search}%`]
          : [`%${this.#order_status}%`, `%${search}%`]
      );

      return result
    } catch (error) {
      console.error(error.message);
    }
  };

  getOrderDetails = async () => {
    try {
      const selectQuery = `SELECT 
    od.*,

    JSON_OBJECT('userId', c.id, 'firstname', c.firstname, 'lastname', c.lastname, 'email', c.email, 'phone', c.phoneNo, 'address', c.address) as customer,
      
    JSON_ARRAYAGG(JSON_OBJECT('product_id', p.id, 'product_name', p.product_name, 'imageUrl', p.product_image_url, 'product_description', p.product_description, 'product_price', p.product_price, 'quantity', pd.quantity)) as products

     FROM order_details od
     INNER JOIN product_details pd
     INNER JOIN products p
     ON od.id = pd.order_id AND p.id = pd.product_id
     INNER JOIN customer c
     ON c.id = od.customer_id
     WHERE od.reference = ?
     GROUP BY od.id`;

      const [result, _] = await poolConnection.execute(selectQuery, [
        this.#reference,
      ]);
      if (result.length > 0) {
        // result[0].customer = DataJsonParser(result[0].customer);
        return result[0];
      }
      return false;
    } catch (error) {
      console.error(error.message);
    }
  };

  orderNextStage = async (deliver_status) => {
    try {
      const updateQuery = `UPDATE order_details SET order_status = ?, delivery_status = ? WHERE reference = ?`;

      const [result, _] = await poolConnection.execute(updateQuery, [
        this.#order_status,
        deliver_status,
        this.#reference,
      ]);
      return result;
    } catch (error) {
      console.error(console.error);
    }
  };

  getOrderByStatus = async (status) => {
    try {
      const selectQuery = `SELECT order_details.*,
      JSON_ARRAYAGG(JSON_OBJECT('product_id', p.id, 'product_name', p.product_name, 'imageUrl', p.product_image_url, 'product_description', p.product_description, 'product_price', p.product_price, 'quantity', pd.quantity)) as products
      FROM order_details
      INNER JOIN product_details pd
      INNER JOIN products p
      ON order_details.id = pd.order_id AND p.id = pd.product_id
      WHERE order_details.customer_id = ? ${
        status === "pending"
          ? "AND delivery_status = 0 OR delivery_status = 1 OR delivery_status = 2"
          : `AND delivery_status = ${status}`
      }
      GROUP BY order_details.id`;

      const [result, _] = await poolConnection.execute(selectQuery, [
        this.#customer_id,
      ]);
      return result
    } catch (error) {
      console.error(error.message);
    }
  };

  dashboardData = async () => {
    try {
      const selectQuery = `
      SELECT * FROM order_details;
      `;

      const [result, _] = await poolConnection.execute(selectQuery);

      return result;
    } catch (error) {
      console.error(error.message);
    }
  };

  getAllOrderByUserId = async (id) => {
    try {
      const selectQuery = `SELECT * FROM order_details WHERE customer_id = ? ORDER BY order_date DESC;`;
      const [result, _] = await poolConnection.execute(selectQuery, [id]);
      return result;
    } catch (error) {
      console.error(error.message);
    }
  };

  findOrderById = async (id) => {
    try {
      const selectQuery = `SELECT * FROM order_details WHERE id = ?`;
      const [result, _] = await poolConnection.execute(selectQuery, [id]);
      return result;
    } catch (error) {
      console.error(error)
    }
  }

  cancelOrder = async (id, reason) => {
    try {
      const order = await this.findOrderById(id);
      if(order.length > 0 && order[0].delivery_status <= 2) {
        const updateQuery = `UPDATE order_details SET order_status = ?, delivery_status = ?, cancel_message = ? WHERE id = ?;`;
        const [result, _] = await poolConnection.execute(updateQuery, ['cancelled', -1, reason, id]);
        console.log(result)
        return result;
      } else {
        throw new Error('cannot cancel order')
      }
    } catch (error) {
      console.error(error.message);
    }
  }
}

module.exports = Order;
