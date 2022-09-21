const poolConnection = require("../config/connectDB");
const { getDateToday } = require("../helpers/DateFormatter");

class Product {
  #id;
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
      id = "",
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
    this.#id = id;
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

  selectItemById = async (id = this.#id) => {
    try {
      const selectQuery = `SELECT * FROM products WHERE id = ?`;

      const [result, _] = await poolConnection.execute(selectQuery, [id]);

      if (result.length > 0) {
        return result[0];
      } else {
        return {};
      }
    } catch (error) {
      console.error(error.message);
    }
  };

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
        getDateToday(),
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
      this.selectItemById();
      const selectQuery = `SELECT * FROM products ORDER BY id DESC`;
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
      console.error(error.message);
    }
  };

  updateItem = async () => {
    try {
      const updateQuery = `UPDATE products 
    SET product_name = ?,  
    product_price = ?, 
    product_description = ?,
    pet_type = ?,
    product_stocks = ?,
    product_age_limit = ?,
    product_category = ?,
    product_image_url = ?,
    product_image_id = ?
    WHERE id = ?`;
      const [result, _] = await poolConnection.execute(updateQuery, [
        this.#productName,
        this.#productPrice,
        this.#productDescription,
        this.#petType,
        this.#productStocks,
        this.#productAgeGap,
        this.#productCategory,
        this.#productImgUrl,
        this.#productImgId,
        this.#id,
      ]);

      return result;
    } catch (error) {
      console.error(error.message);
    }
  };

  searchItems = async (
    itemName = "",
    petCategory = "",
    itemCategory = "",
    ageLimit = ""
  ) => {
    try {
      const selectQuery = `SELECT * FROM products 
      WHERE 
      product_name LIKE ? AND
      pet_type LIKE ? AND
      product_age_limit LIKE ? AND
      product_category LIKE ?
      ORDER BY id DESC`;

      const [result, _] = await poolConnection.execute(selectQuery, [
        `%${itemName}%`,
        `%${petCategory}%`,
        `%${ageLimit}%`,
        `%${itemCategory}%`,
      ]);
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };

  selectMany = async (productIds) => {
    try {
      const selectQuery = `
      SELECT * FROM products
      WHERE id IN (?)
    `;
      const [result, _] = await poolConnection.query(selectQuery, [productIds]);
      return result;
    } catch (error) {
      console.error(error.message);
    }
  };

  updatePaidItems = async (checkoutProducts) => {
    try {
      let updateQuery = `UPDATE products SET product_stocks = (
          case`;

      for (let i = 0; i < checkoutProducts.length; i++) {
        updateQuery += `
          WHEN id = ${checkoutProducts[i].product_id} THEN product_stocks - ${checkoutProducts[i].quantity}`;
      }

      updateQuery += `
        END),
        total_sales = (
          case 
        `;

      for (let i = 0; i < checkoutProducts.length; i++) {
        updateQuery += `
            WHEN id = ${checkoutProducts[i].product_id} THEN total_sales + ${checkoutProducts[i].quantity * checkoutProducts[i].product_price}`;
      }

      updateQuery += `
        END),
        unit_sales = (
          case
        `
        
        for (let i = 0; i < checkoutProducts.length; i++) {
          updateQuery += `
              WHEN id = ${checkoutProducts[i].product_id} THEN unit_sales + ${checkoutProducts[i].quantity}`;
        }

        updateQuery += `
        END)
        WHERE id IN (?)`

      const productIds = checkoutProducts.map((product) => product.product_id);

      const [result, _] = await poolConnection.query(updateQuery, [productIds]);
      console.log(updateQuery);
      console.log(result)
    } catch (error) {
      console.error(error.message);
    }
  };
}

module.exports = Product;
