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

    getSalesReport = async (from=getDateToday(), to=getDateToday()) => {
        try {

            if(!from) {
                from = getDateToday();
            }
            if(!to) {
                to = getDateToday()
            }
            const selectQuery = `
                SELECT 
                od.*,
                c.firstname,
                c.lastname,
                c.profile_image_url
                FROM order_details od
                INNER JOIN customer c  
                ON c.id = od.customer_id
                WHERE od.order_date between ? and ? and od.order_status = ?
                ORDER BY od.order_date DESC
            `
            const [result, _] = await poolConnection.execute(selectQuery, 
                [from, to, 'completed']
            );
            return result;
        } catch (error) {
            console.error(error.message)
        }
    }
}

module.exports = MultipleTable;