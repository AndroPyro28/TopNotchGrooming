const poolConnection = require("../config/connectDB");
const {getDateToday} = require('../helpers/DateFormatter')
const getTime = require("../helpers/getTime");
class MultipleTable {

    liveStreamCompleted = async ({video_url="", reference_id=""}) => {
        
        try {
            const end_time = getTime() // video url later
            const updateQuery = `
            UPDATE live_streams SET end_time = ?, video_url = ? WHERE reference_id = ?; 

            UPDATE appointments a
            INNER JOIN live_streams ls
            ON a.live_stream_id = ls.id
            SET a.status = ? 
            WHERE ls.reference_id = ? AND a.status = ?
            `;

            const [result, _] = await poolConnection.query(updateQuery, 
                [
                end_time, video_url, reference_id, // first query
                'completed', reference_id, 'onGoing'
            ]);

            return result
        } catch (error) {
            console.log(error.message);
        }
    }

    getSalesReport = async (from='', to='') => {
        try {

            if(!from && to) {
                from = new Date()
            }
            if(!to && from) {
                to = new Date()
            }
            console.log({from, to});
            const selectQuery = `
                SELECT 
                od.*,
                c.firstname,
                c.lastname,
                c.profile_image_url
                FROM order_details od
                INNER JOIN customer c  
                ON c.id = od.customer_id
                ${!to && !from ? `WHERE od.order_status IN (?)` : `WHERE od.order_date between ? and ? and od.order_status IN (?) `}
                ORDER BY od.order_date DESC
            `
            const [result, _] = await poolConnection.query(selectQuery, 
               !to && !from ? [['completed', 'cancelled']] : [from, to, ['completed', 'cancelled']]
            );
            return result;
        } catch (error) {
            console.error(error.message)
        }
    }

    findEmail = async (email) => {
        try {
            const selectQuery = `SELECT * FROM customer WHERE email = ?;
            SELECT * FROM admin WHERE email = ?;`

            const [result, _] = await poolConnection.query(selectQuery, [email, email])
            return result
        } catch (error) {
            console.error(error)
        }
    }

    updateHashReset = async (token, id, table) => {
        try {
            const updateQuery = `UPDATE ${table} SET passwordresettoken = ? WHERE id = ?`;
            const [result, _] = await poolConnection.query(updateQuery, [token, id])
            return result;
        } catch (error) {
            console.error(erroor)            
        }
    }

    removeHashReset = async (table, id) => {
        try {
            const updateQuery = `UPDATE ${table} SET passwordresettoken = NULL WHERE id = ?`;
            const [result, _] = await poolConnection.query(updateQuery, [id])
            return result
        } catch (error) {
            console.error(error)
        }
    }


    updateUserPassword = async (id, table, password) => {
        try {
            const updateQuery = `UPDATE ${table} SET password = ? WHERE id = ?`;
            const [result, _] = await poolConnection.query(updateQuery, [password, id])
            return result
        } catch (error) {
            console.error(error)
        }
    }

    getEmployeeOfTheMonth = async () => {
        try {
            const date = new Date();
            const month = date.getMonth();
            const year = date.getFullYear();
            const selectQuery = `SELECT admin.firstname, admin.lastname, admin.profile_image_url, appointments.date_n_time, count(appointments.admin_id) as appointmentCounts
            FROM appointments
            INNER JOIN admin
            ON admin.id = appointments.admin_id
            GROUP BY appointments.admin_id
            `;
            const [result, _] = await poolConnection.query(selectQuery)
            return result;
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = MultipleTable;