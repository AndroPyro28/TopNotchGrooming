const poolConnection = require("../config/connectDB");

class Product {
  #productName;
  #productStocks;
  #productPrice;
  #productCategory;
  #productDescription;
  #productAgeGap;
  #productImgUrl;
  #productImgId;
  #petType;

  constructor(ctorProduct) {
    const {
      productName = "",
      productStocks = "",
      productPrice = "",
      productCategory = "",
      productDescription = "",
      productAgeGap = "",
      productImg = "",
      productImgId = "",
      petType = "",
    } = ctorProduct;

    this.#productName = productName;
    this.#productStocks = productStocks;
    this.#productPrice = productPrice;
    this.#productCategory = productCategory;
    this.#productDescription = productDescription;
    this.#productAgeGap = productAgeGap;
    this.#productImgUrl = productImg;
    this.#productImgId = productImgId;
    this.#petType = petType;
  }

  getDateToday = () => new Date().toLocaleDateString().replace("/", "-").replace("/", "-");

  insertProduct = async () => {
    try {
      const insertQuery = `
                INSERT INTO products 
                (product_name, product_price, product_description, 	product_date_added, product_stocks, product_age_limit, product_category, product_image_url, product_image_id, pet_type)
                VALUES
                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
            `;

      const [result, _] = await poolConnection.execute(insertQuery, [
        this.#productName,
        this.#productPrice,
        this.#productDescription,
        this.getDateToday(),
        this.#productStocks,
        this.#productAgeGap,
        this.#productCategory,
        this.#productImgUrl,
        this.#productImgId,
        this.#petType,
      ]);
      return result;
    } catch (error) {
      console.error(error.message);
    }
  };

  getAllItems = async () => {
    try {
      const selectQuery = `SELECT * FROM products;`;
      const [result, _] = await poolConnection.execute(selectQuery);

      return result;
    } catch (error) {
      console.error(error.message);
    }
  };


deleteItemById = async (id) => {
  try {
      const deleteQuery = `DELETE FROM products WHERE id = ?`;
      const [result, _] = await poolConnection.execute(deleteQuery, [id]);

      return result;
  } catch (error) {
    console.error(error.message)
  }
}
}

module.exports = Product;
