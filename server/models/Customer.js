const poolConnection = require("../config/connectDB");
const bcrypt = require("bcryptjs");

class Customer {
  #id;
  #firstname;
  #lastname;
  #email;
  #password;
  #phoneNo;
  #address;
  #birthdate;
  #profile_image_url;
  #profile_image_id;
  constructor(ctorCustomer) {
    const {
      id = "",
      firstname = "",
      lastname = "",
      email = "",
      password = "",
      phoneNo = "",
      address = "",
      birthdate = "",
      profile_image_url = "",
      profile_image_id = ""

    } = ctorCustomer;
    this.#id = id;
    this.#firstname = firstname;
    this.#lastname = lastname;
    this.#email = email;
    this.#password = password;
    this.#phoneNo = phoneNo;
    this.#address = address;
    this.#birthdate = birthdate;
    this.#profile_image_id = profile_image_id;
    this.#profile_image_url = profile_image_url;
    
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
    const checkEmailPhone = `SELECT * FROM customer WHERE email = ? OR phoneNo = ?;
                             SELECT * FROM admin WHERE email = ?;`;
    const [customerAndAdmin, _] = await poolConnection.query(checkEmailPhone, [
      this.#email,
      this.#phoneNo,
      this.#email,
    ]);

    return customerAndAdmin[0].length > 0 || customerAndAdmin[1].length > 0
  };

  checkIfExistByPhoneEmail2 = async () => {
    const checkEmailPhone = `SELECT * FROM customer WHERE email = ? OR phoneNo = ?;
                             SELECT * FROM admin WHERE email = ?;`;
    const [customerAndAdmin, _] = await poolConnection.query(checkEmailPhone, [
      this.#email,
      this.#phoneNo,
      this.#email,
    ]);
    console.log(customerAndAdmin, this.#id, customerAndAdmin[0][0]?.id)
    if(customerAndAdmin[0][0]?.id == this.#id && customerAndAdmin[1].length == 0) {
      return false
    }
    return customerAndAdmin[0].length > 0 || customerAndAdmin[1].length > 0
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

      const [result, _] = await poolConnection.execute(selectOne, [
        this.#email,
      ]);
      return result.length > 0 ? result[0] : false;
    } catch (error) {
      console.error(error.message);
    }
  };
  updateInfo = async () => {
    try {
      const updateInfo = `UPDATE customer 
      SET firstname = ?, lastname = ?, address = ?, phoneNo = ?, birthdate = ?, email = ?, profile_image_url = ?, profile_image_id = ?
      WHERE id = ?`;

      const [result, _] = await poolConnection.execute(updateInfo, [
        this.#firstname,
        this.#lastname,
        this.#address,
        this.#phoneNo,
        this.#birthdate,
        this.#email,
        this.#profile_image_url,
        this.#profile_image_id,
        this.#id,
      ]);

      return result;
    } catch (error) {
      console.log(error.message);
    }
  };

  selectAllCustomer = async () => {
    try {
      const selectQuery = `SELECT * FROM customer`;
      const [result, _] = await poolConnection.execute(selectQuery);
      return result
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = Customer;
