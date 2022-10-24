const poolConnection = require('../config/connectDB');
const bcrypt = require('bcryptjs');

class Admin {

    #email;
    #password;
        constructor(ctorAdmin) {
        const {email="", password=""} = ctorAdmin;
        this.#email = email;
        this.#password = password;
    }

    selectOneByEmail = async () => {
        try {
            
            const selectQuery = `SELECT * FROM admin WHERE email = ?`;

            const [result, _] = await  poolConnection.execute(selectQuery, [this.#email]);

            if(result <= 0) return false;

            return result[0];

        } catch (error) {
            console.error(error.message);
            
        }
    }

    getAllAdmin = async () => {
        try {
            const selectQuery = `SELECT id, firstname, lastname FROM admin`;
            const [result, _] = await poolConnection.execute(selectQuery);

            return result
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = Admin