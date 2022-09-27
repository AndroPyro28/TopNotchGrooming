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
}

module.exports = Feedback;
