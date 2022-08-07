const poolConnection = require("../config/connectDB");
const { DataJsonParser } = require("../helpers/DataJsonParser");

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
  #status;
  #customer_id;
  #image;
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
    this.#status = params.status;
    this.#image = params.image;
  }

  getSchedule = async (filter) => {
    try {
      const selectQuery = `
      SELECT 
      appointments.*,
      customer.firstname as firstname,
      customer.lastname as lastname,
      customer.profile_image_url as profile_image_url
      FROM appointments 
      INNER JOIN customer
      ON customer.id = appointments.customer_id
      ${filter != "all" ? "WHERE appointments.status = ?" : ""}
      ORDER BY appointments.id ASC`;

      const [results, _] = await poolConnection.execute(selectQuery, [filter]);
      return results;
    } catch (error) {
      console.error(error.message);
    }
  };

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
        customer_id, 
        pet_image)
        VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;
      const [result, _] = await poolConnection.execute(insertQuery, [
        this.#pet_name,
        this.#pet_type,
        this.#pet_breed,
        this.#birthdate,
        this.#appointment_type,
        this.#additional_details,
        this.#gender,
        this.#date_n_time,
        this.#live_stream_type,
        this.#customer_id,
        this.#image,
      ]);

      return {
        success: true,
        result,
      };
    } catch (error) {
      console.error(error.message);

      return {
        success: false,
      };
    }
  };

  getAppointmentById = async (id) => {
    try {
      const selectQuery = `SELECT 

      JSON_OBJECT(
        'id', appointments.id, 'pet_name', appointments.pet_name, 'pet_type', appointments.pet_type,
        'pet_breed', appointments.pet_breed, 'birthdate', appointments.birthdate, 'gender', appointments.gender,
        'appointment_type', appointments.appointment_type, 'date_n_time', appointments.date_n_time, 
        'live_stream_type', appointments.live_stream_type, 'status', appointments.status, 'additional_details', appointments.additional_details,
        'pet_image',  appointments.pet_image
      ) as appointment,

      JSON_OBJECT(
        'id', customer.id, 'firstname', customer.firstname, 'lastname', customer.lastname,
        'address', customer.address, 'contact', customer.phoneNo, 'email', customer.email,
        'birthdate', customer.birthdate
      ) as customer
      
      FROM appointments 
      INNER JOIN customer
      ON customer.id = appointments.customer_id
      WHERE appointments.id = ?`;

      const [result, _] = await poolConnection.execute(selectQuery, [id]);
      result[0].customer = DataJsonParser(result[0].customer);
      result[0].appointment = DataJsonParser(result[0].appointment);
      return result[0];
    } catch (error) {
      console.error(error.message);
    }
  };

  approveAppointment = async (id) => {
    try {
      this.#status = "approved";
      const updateQuery = `UPDATE appointments SET date_n_time = ?, status = ? WHERE id = ?;`;

      const [result, _] = await poolConnection.execute(updateQuery, [
        this.#date_n_time,
        this.#status,
        id,
      ]);

      return result;
    } catch (error) {
      console.error(error.message);
    }
  };

  getScheduleByDate = async (date) => {
    try {
      const selectQuery = `SELECT 
      JSON_OBJECT(
        'id', appointments.id,
        'appointment_type', appointments.appointment_type,
        'pet_name', appointments.pet_name,
        'date_n_time', appointments.date_n_time
        ) as appointment,

      JSON_OBJECT(
        'id', customer.id, 'firstname', customer.firstname, 'lastname', customer.lastname, 'email', customer.email,
        'profile_image_url', customer.profile_image_url
      ) as customer
      
      FROM appointments
      INNER JOIN customer
      ON customer.id = appointments.customer_id
      WHERE appointments.date_n_time LIKE ?`;

      const [result, _] = await poolConnection.query(selectQuery, [
        `%${date}%`,
      ]);

      const formattedData = result?.map(data => {
        data.customer = DataJsonParser(data.customer);
        data.appointment = DataJsonParser(data.appointment);
        return data;
      })

      return formattedData;
    } catch (error) {
      console.error(error.message);
    }
  };
}

module.exports = Appointment;
