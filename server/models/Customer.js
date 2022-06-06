const poolConnection = require("../config/connectDB");
const bcrypt = require("bcryptjs");

class Customer {
  #firstname;
  #lastname;
  #email;
  #password;
  #phoneNo;
  #address;
  #birthdate;
  constructor(ctorCustomer) {
    const {
      firstname = "",
      lastname = "",
      email = "",
      password = "",
      phoneNo = "",
      address = "",
      birthdate = "",
    } = ctorCustomer;

    this.#firstname = firstname;
    this.#lastname = lastname;
    this.#email = email;
    this.#password = password;
    this.#phoneNo = phoneNo;
    this.#address = address;
    this.#birthdate = birthdate;
  }

  findOneById = async (id) => {
    try {
      const findOneById = `SELECT * FROM customer WHERE customerID = ?`;
      const [customer, _] = await poolConnection.execute(findOneById, [id]);
      return customer[0];
    } catch (error) {
      console.error(error.message);
    }
  };

  checkIfExistByPhoneEmail = async () => {
    const checkEmailPhone = `SELECT * FROM customer WHERE email = ? OR phoneNo = ?`;
    const [customer, _] = await poolConnection.execute(checkEmailPhone, [
      this.#email,
      this.#phoneNo,
    ]);

    return customer.length > 0;
  };

  insertOne = async () => {
    try {
      const hashedPassword = await bcrypt.hash(this.#password, 6);
    //   const { firstname, lastname, email, phoneNo, address, birthdate } = this;
      

      const insertOne = `INSERT INTO customer 
            (firstname, lastname, email, phoneNo, address, birthdate, password)
            VALUES
            (?, ?, ?, ?, ?, ?, ?)`;

      const [result, _] = await poolConnection.execute(insertOne, [
        this.#firstname,
        this.#lastname,
        this.#email,
        this.#phoneNo,
        this.#address,
        this.#birthdate,
        hashedPassword,
      ]);
      return result;
    } catch (error) {
      console.error(error.message);
      return false;
    }
  };

  selectOneByEmail = async () => {
    try {
      const selectOne = `SELECT * FROM customer WHERE email = ?;
            `;

      const [result, _] = await poolConnection.execute(selectOne, [this.#email]);

      return result.length > 0 ? result[0] : false;
    } catch (error) {
      console.error(error.message);
    }
  };
}

module.exports = Customer;
