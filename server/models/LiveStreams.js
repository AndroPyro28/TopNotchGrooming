const poolConnection = require("../config/connectDB");

class LiveStreams {
  #reference_id;
  #customer_id;
  #admin_id;
  #video_url;
  #date;
  #start_time;
  #end_time;
  #appointment_id
  constructor({
    reference_id = "",
    customer_id = "",
    admin_id = "",
    video_url = "",
    date = "",
    start_time = "",
    end_time = "",
    appointment_id= ""
  }) {
    this.#reference_id = reference_id;
    this.#customer_id = customer_id;
    this.#admin_id = admin_id;
    this.#video_url = video_url;
    this.#date = date;
    this.#start_time = start_time;
    this.#end_time = end_time;
    this.#appointment_id = appointment_id;
  }

  selectByReferenceId = async (referenceId) => {
    try {
      const selectQuery = ` SELECT * FROM live_streams WHERE reference_id = ?`;

      const [result, _] = await poolConnection.execute(selectQuery, [
        referenceId,
      ]);

      return result;
    } catch (error) {
      console.log(error.message);
    }
  };

  insertOne = async () => {
    try {
      const insertQuery = `INSERT INTO live_streams (reference_id, customer_id, appointment_id, admin_id, date, start_time) VALUES(?, ?, ?, ?, ?, ?)`;

      const [result, _] = await poolConnection.execute(insertQuery, [
        this.#reference_id,
        this.#customer_id,
        this.#appointment_id,
        this.#admin_id,
        this.#date,
        this.#start_time,
      ]);

      return result;
    } catch (error) {
      console.log(error.message);
    }
  };
}

module.exports = LiveStreams;
