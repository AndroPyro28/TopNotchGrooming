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
  #status;
  #customer_id;
  #live_stream_id;
  #image;
  #admin_id;
  constructor({
    pet_name = "",
    pet_type = "",
    pet_breed = "",
    birthdate = "",
    gender = "",
    appointment_type = "",
    additional_details = "",
    date_n_time = "",
    customer_id = "",
    status = "",
    image = "",
    live_stream_id = "",
    admin_id = "",
  }) {
    this.#pet_name = pet_name;
    this.#pet_type = pet_type;
    this.#pet_breed = pet_breed;
    this.#birthdate = birthdate;
    this.#gender = gender;
    this.#appointment_type = appointment_type;
    this.#additional_details = additional_details;
    this.#date_n_time = date_n_time;
    this.#customer_id = customer_id;
    this.#status = status;
    this.#image = image;
    this.#live_stream_id = live_stream_id;
    this.#admin_id = admin_id;
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
        customer_id, 
        pet_image)
        VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
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
        'status', appointments.status, 'additional_details', appointments.additional_details,
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
      WHERE appointments.date_n_time LIKE ? AND
      status = ?`;

      const [result, _] = await poolConnection.query(selectQuery, [
        `%${date}%`,
        "approved",
      ]);

      const formattedData = result?.map((data) => {
        data.customer = DataJsonParser(data.customer);
        data.appointment = DataJsonParser(data.appointment);
        return data;
      });

      return formattedData;
    } catch (error) {
      console.error(error.message);
    }
  };

  addLiveStreamId = async (id) => {
    try {
      const updateQuery = `UPDATE appointments SET live_stream_id = ?, status = ?, admin_id = ? WHERE id = ?`;
      const [result, _] = await poolConnection.execute(updateQuery, [
        this.#live_stream_id,
        this.#status,
        this.#admin_id,
        id,
      ]);

      return result;
    } catch (error) {
      console.log(error.message);
    }
  };

  appointmentCompleted = () => {
    
  }
}

module.exports = Appointment;
