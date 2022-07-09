const poolConnection = require("../config/connectDB");

class Appointment {
  #pet_name;
  #pet_type;
  #pet_breed;
  #birthdate;
  #appointment_type;
  #additional_details;
  #gender;
  #date_n_time;
  #live_stream_type;
  #archived = false;
  #customer_id;
  constructor(params) {
    this.#pet_name = params.pet_name;
    this.#pet_type = params.pet_type;
    this.#pet_breed = params.pet_breed;
    this.#birthdate = params.birthdate;
    this.#gender = params.gender;
    this.#appointment_type = params.appointment_type;
    this.#additional_details = params.additional_details;
    this.#date_n_time = params.date_n_time;
    this.#live_stream_type = params.live_stream_type;
    this.#customer_id = params.customer_id;
  }

  addAppointment = async () => {
    try {
      const insertQuery = `INSERT INTO appointments 
        (pet_name,
        pet_type,
        pet_breed, 
        birthdate, 
        appointment_type, 
        additional_details,
        gender,
        date_n_time, 
        live_stream_type, 
        customer_id) 
        VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;

        const [result, _] = await poolConnection.execute(insertQuery, 
            [
                this.#pet_name,
                this.#pet_type,
                this.#pet_breed,
                this.#birthdate,
                this.#appointment_type,
                this.#additional_details,
                this.#gender,
                this.#date_n_time,
                this.#live_stream_type,
                this.#customer_id
            ])

            return {
                success: true,
                result
            };
    } catch (error) {
        return {
            success: false
        };
        console.error(error.message)
    }
  };
}

module.exports = Appointment;
