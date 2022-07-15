const poolConnection = require('../config/connectDB');

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
}

module.exports = Order;
