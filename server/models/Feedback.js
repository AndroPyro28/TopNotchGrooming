const poolConnection = require("../config/connectDB");

class Feedback {
  #customer_id;
  #comments;
  #ratings;

  constructor({ customer_id = null, comments = null, ratings = null }) {
    this.#comments = comments;
    this.#ratings = ratings;
    this.#customer_id = customer_id;
  }

  getAllFeedback = async () => {
    try {
      const selectQuery = `SELECT 
      f.ratings,
      f.comments,
      f.id,
      f.pin,
      c.profile_image_url
      FROM feedback f
      INNER JOIN customer c
      ON c.id = f.customer_id
      ORDER BY f.ratings DESC
      `;
      const [result, _] = await poolConnection.execute(selectQuery);

      return result;
    } catch (error) {
      console.log(error.message);
    }
  };

  submitFeedback = async () => {
    try {
      const insertQuery = `INSERT INTO feedback (ratings, comments, customer_id) VALUES (?, ?, ?);`
      const [result, _ ] = poolConnection.execute(insertQuery, [this.#ratings, this.#comments, this.#customer_id]);

      return result;
    } catch (error) {
      console.error(error.message)
    }
  }

  pinFeedback = async (id, pin) => {
    try {
      const updateQuery = `UPDATE feedback SET pin = ? WHERE id = ?`
      const [result, _ ] = await poolConnection.execute(updateQuery, [pin, id]);
      return result;
    } catch (error) {
      console.error(error.message)
    }
  }

  deleteFeedback = async (id) => {
    try {
      const deleteQuery = `DELETE FROM feedback WHERE id = ?`
      const [result, _ ] = await poolConnection.execute(deleteQuery, [id]);
      return result;
    } catch (error) {
      console.error(error.message)
    }
  }

  getFirstThreeFeedback = async () => {
    try {
      const selectQuery = `SELECT 
      f.ratings,
      f.comments,
      f.id,
      f.pin,
      c.profile_image_url,
      c.firstname,
      c.lastname
      FROM feedback f
      INNER JOIN customer c
      ON c.id = f.customer_id
      WHERE f.pin = ?
      ORDER BY f.ratings DESC
      LIMIT 3
      `;
      const [result, _] = await poolConnection.execute(selectQuery, [true]);

      return result;
    } catch (error) {
      console.log(error.message);
    }
  };
}

module.exports = Feedback;
