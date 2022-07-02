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
            (firstname, lastname, email, phoneNo, address, birthdate, password, profile_image_url, profile_image_id)
            VALUES
            (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      const [result, _] = await poolConnection.execute(insertOne, [
        this.#firstname,
        this.#lastname,
        this.#email,
        this.#phoneNo,
        this.#address,
        this.#birthdate,
        hashedPassword,
        this.#profile_image_url,
        this.#profile_image_id
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
}

module.exports = Customer;
