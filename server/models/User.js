const poolConnection = require('../config/connectDB');
const bcrypt = require('bcryptjs');

class Customer {
    constructor(ctorCustomer) {
        const {
            firstname,
            lastname,
            email,
            password,
            phoneNo,
            address,
            birthdate
        } = ctorCustomer;

        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.phoneNo = phoneNo;
        this.address = address;
        this.birthdate = birthdate;
    }

    findOneById = async (id) => {
        try {
            const findOneById = `SELECT * FROM customer WHERE customerID = ?`;
            const [customer, _] = await poolConnection.execute(findOneById, [id]);
            return customer[0];
            
        } catch (error) {
            console.error(error.message)
        }
    }

    checkIfExistByPhoneEmail = async () => {
        const checkEmailPhone = `SELECT * FROM customer WHERE email = ? OR phoneNo = ?`;
        const [customer, _] = await poolConnection.execute(checkEmailPhone, [this.email, this.phoneNo]);

        return customer.length > 0 ? true : false;
    }

    insertOne = async () => {

        try {
            const hashedPassword = await bcrypt.hash(this.password, 6);
            const {firstname, lastname, email, phoneNo, address, birthdate} = this;

            const insertOne = `INSERT INTO customer 
            (firstname, lastname, email, phoneNo, address, birthdate, password)
            VALUES
            (?, ?, ?, ?, ?, ?, ?)`;
            
            const [result, _] = await poolConnection.execute(
                insertOne, 
                [firstname, lastname, email, phoneNo, address, birthdate, hashedPassword]
            );
            return result;
            
        } catch (error) {
            console.error(error.message);
            return false;
        }
        
    }
}

module.exports = Customer;