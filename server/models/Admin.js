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
            const selectQuery = `SELECT id, firstname, lastname FROM admin Where super = ?`;
            const [result, _] = await poolConnection.execute(selectQuery, [false]);

            return result
        } catch (error) {
            console.error(error)
        }
    }

    pinEmployee = async (id, pin) => {
        try {
            const updateQuery = `UPDATE admin SET pin = ? WHERE id = ?`;
            const [result, _] = await poolConnection.execute(updateQuery, [pin, id]);
            return result
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = Admin