const poolConnection = require('../config/connectDB');

class Customer {
    constructor(firstname, lastname, email, password, phoneNo, address) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.phoneNo = phoneNo;
        this.address = address;
    }

    findOneById = async (id) => {
        try {
            const findOneById = `SELECT * FROM customer WHERE customerID = ?`;
            const [customer, _] = await poolConnection.execute(findOneById, [id]);
            return customer[0] 
        } catch (error) {
            console.error(error.message)
        }
    }
}

module.exports = Customer;