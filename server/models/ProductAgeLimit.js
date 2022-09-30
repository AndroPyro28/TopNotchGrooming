const poolConnection = require("../config/connectDB");

class ProductAgeLimit {
  #age_limit;

  constructor({ age_limit = null}) {
    this.#age_limit = age_limit;
  }

  getAllProductAgeLimit = async () => {
    try {
      const selectQuery = `SELECT * FROM product_age_limit`;
      const [result, _] = await poolConnection.execute(selectQuery);

      return result;
    } catch (error) {
      console.log(error.message);
    }
  };

  getProductAgeLimitByAgeLimit = async () => {
    try {
      const selectQuery = `SELECT id as age_limit_id FROM product_age_limit WHERE age_limit = ?;`
      const [result, _ ] = await  poolConnection.execute(selectQuery, [this.#age_limit])

      if(result.length <= 0) {
        return null;
      }

      return result;
    } catch (error) {
      console.error('here error', error.message)
    }
  }

  addProductAgeLimit = async () => {
    try {
      const queryResult = await this.getProductAgeLimitByAgeLimit();
      if(queryResult == null || queryResult == undefined || queryResult?.length <= 0) {
        const insertQuery = `INSERT INTO product_age_limit (age_limit) VALUES (?);`
        const [result, _ ] = await poolConnection.execute(insertQuery, [this.#age_limit]);
        return result;
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  updateAgeLimit = async (id) => {
    try {
      const queryResult = await this.getProductAgeLimitByAgeLimit();
      if(queryResult == null || queryResult == undefined || queryResult?.length <= 0) {
      const updateQuery = `UPDATE product_age_limit SET age_limit = ? WHERE id = ?`;
      const [result, _] = await poolConnection.execute(updateQuery, [this.#age_limit, id]);
      return result;
    }
    } catch (error) {
      console.error(error);
    }
  }

  deleteAgeLimit = async (id) => {
    try {
      const deleteQuery = `
     
      DELETE FROM product_age_limit WHERE id = ?
`;
        const [result, _ ] = await poolConnection.execute(deleteQuery, [id]);
        return result;
    } catch (error) {
      console.error(error.message)
    }
  }
}

module.exports = ProductAgeLimit;
