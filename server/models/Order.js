const poolConnection = require('../config/connectDB');
const { jsonParser } = require('../helpers/JsonParser');

class Order {
  #reference;
  #customer_id;
  #order_date;
  #order_status;
  #total_amount;
  #payment_type;
  #monthly_id;
  constructor({
    reference = "",
    customer_id = "",
    order_date = "",
    order_status = "",
    total_amount = "",
    payment_type = "",
    monthly_id = "",
  }) {
    this.#reference = reference;
    this.#customer_id = customer_id;
    this.#order_date = order_date;
    this.#order_status = order_status;
    this.#total_amount = total_amount;
    this.#payment_type = payment_type;
    this.#monthly_id = monthly_id;
  }

  addNewOrder = async () => {
    try {
      const insertQuery = `INSERT INTO order_details 
      (reference, customer_id, order_date, total_amount, payment_type)
      VALUES (?,?,?,?,?);`;

      const [result,_] = await poolConnection.execute(insertQuery, [
        this.#reference,
        this.#customer_id,
        this.#order_date,
        this.#total_amount,
        this.#payment_type
      ])
     return result;
    } catch (error) {
        console.error(error.message)
    }
  };

  getOrders = async () => {
    try {
      const selectQuery = `SELECT 
        od.*,

        JSON_OBJECT('userId', c.id, 'firstname', c.firstname, 'lastname', c.lastname) as customer,
        
       GROUP_CONCAT(JSON_OBJECT('product_id', p.id, 'product_name', p.product_name),'*DIVIDER*') as products

       FROM order_details od
       INNER JOIN product_details pd
       INNER JOIN products p
       ON od.id = pd.order_id AND p.id = pd.product_id
       INNER JOIN customer c
       ON c.id = od.customer_id
       ${this.#order_status == 'all' ? '' : 'WHERE order_status = ?'} 
       GROUP BY od.id`;

      const [result,_] = await poolConnection.execute(selectQuery, [
        this.#order_status
      ]);
      return jsonParser(result)
    } catch (error) {
      console.error(error.message)
    }
  }
}

module.exports = Order;
