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
}

module.exports = Feedback;
