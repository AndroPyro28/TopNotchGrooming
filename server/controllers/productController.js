const Product = require("../models/product");
const {
  uploadOneProduct,
  deleteOneProduct,
} = require("../helpers/CloudinaryProduct");
const Category = require("../models/Category");
const ProductAgeLimit = require("../models/ProductAgeLimit");
module.exports.addItem = async (req, res) => {
  try {
    if (
      req.body.values?.productImg?.length > 0 &&
      req.body.values?.productImg?.includes("image")
    ) {
      const cloudinary = await uploadOneProduct(req.body.values.productImg);
      req.body.values.productImg = cloudinary.url;
      req.body.values.productImgId = cloudinary.public_id;
    }

    const newProduct = req.body.values
    let category_id = newProduct.productCategory.split('-|-')[0];
    let categoryname = newProduct.productCategory.split('-|-')[1];

    let age_limit_id = newProduct.productAgeGap.split('-|-')[0];
    let age_limit = newProduct.productAgeGap.split('-|-')[1];

    newProduct.productCategory = category_id;
    newProduct.productAgeGap = age_limit_id;

    const product = new Product(newProduct);
    const result = await product.insertProduct();
    newProduct.productAgeGap = age_limit;
    newProduct.productCategory = categoryname;

    if (result.insertId) {
      newProduct.id = result.insertId;
      return res.status(200).json({
        msg: "Product added",
        newProduct,
        success: true,
      });
    }

    throw new error("product did not update");
  } catch (error) {
    console.error(error.message);

    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.getAllItems = async (req, res) => {
  try {
    const product = new Product({});
    const allProducts = await product.getAllItems();
    return res.status(200).json({
      products: allProducts,
      success: true,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = new Product({});
    const item = await product.selectItemById(id);
    deleteOneProduct(item.product_image_id);
    const deleteResponse = await product.deleteItemById(id);

    if (deleteResponse.affectedRows) {
      return res.status(200).json({
        msg: "Product Deleted",
        success: true,
      });
    }
  } catch (error) {
    console.error(error.message);

    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.updateItem = async (req, res) => {
  try {
    const { imageDisplay } = req.body.values;
    if (imageDisplay?.length > 0 && imageDisplay?.includes("image")) {
      deleteOneProduct(req.body.values.item.product_image_id);
      const cloudinary = await uploadOneProduct(imageDisplay);
      req.body.values.item.product_image_url = cloudinary.url;
      req.body.values.item.product_image_id = cloudinary.public_id;
    }
    if(Object.values(req.body.values.item).some(value => value == '')) {
      throw new Error('All fields are required to update the product')
    }
    const {
      id,
      product_name,
      product_stocks,
      product_price,
      age_limit,
      category,
      product_description,
      product_image_url,
      product_image_id,
      pet_type,
    } = req.body.values.item;
    if(product_price <= 0 || product_stocks < 0) {
      throw new Error('Price or Stock Cannot be value of negative')
    }
    const product = new Product({
      id: id,
      productName: product_name,
      productStocks: product_stocks,
      productPrice: product_price,
      productCategory: category,
      productDescription: product_description,
      productAgeGap: age_limit,
      productImg: product_image_url,
      productImgId: product_image_id,
      petType: pet_type,
    });

    const result = await product.updateItem();

    if (result.affectedRows > 0) {
      return res.status(200).json({
        product: req.body.values.item,
        msg: "Product updated",
        success: true,
      });
    }
  } catch (error) {
    console.error("error", error.message);
    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.searchItems = async (req, res) => {
  const { petCategory, ageLimit, itemCategory, itemName } = req.body.values;
  try {
    const product = new Product({});
    const products = await product.searchItems(
      itemName,
      petCategory,
      itemCategory,
      ageLimit
    );

    return res.status(200).json({
      products,
      success: true,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.getAllCategory = async (req, res) => {
  try {
    const categoryModel = new Category({});

    const result = await categoryModel.getAllCategory();

    return res.status(200).json({
      data: result,
      success: true
    })

  } catch (error) {
    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.addCategory = async (req, res) => {
  try {
    const { category } = req.body.values;
    const categoryModel = new Category({
      category,
    });

    const result = await categoryModel.addCategory();
    if(!result) throw new Error('Category already exist');
    
    return res.status(200).json({
      msg: 'Category added!',
      insertId: result.insertId,
      success: true
    })
  } catch (error) {
    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
};













module.exports.getAllProductAgeLimit = async (req, res) => {
  try {
    const productAgeLimitModel = new ProductAgeLimit({
});
    const result = await productAgeLimitModel.getAllProductAgeLimit();

    return res.status(200).json({
      data: result,
      success: true
    })

  } catch (error) {
    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.addProductAgeLimit = async (req, res) => {
  try {
    const { age_limit } = req.body.values;
    const productAgeLimitModel = new ProductAgeLimit({
      age_limit,
    });

    const result = await productAgeLimitModel.addProductAgeLimit();

    if(!result) throw new Error('Product Age Limit already exist');

    return res.status(200).json({
      msg:'product age limit added!',
      insertId: result.insertId,
      success: true
    })
  } catch (error) {
    return res.status(200).json({
      msg:error.message,
      success: false
    })
  }
}

module.exports.updateAgeLimit = async (req, res) => {

  try {
    const {id} = req.params;
    const {age_limit} = req.body.values.ageLimitData;

    const productAgeLimitModel = new ProductAgeLimit({
      age_limit,
    })

    const result = await productAgeLimitModel.updateAgeLimit(id);

    if(!result) {
      throw new Error('age limit did not update, age limit cannot be duplicated!')
    }
      return res.status(200).json({
          result, 
          success: true
        })

  } catch (error) {
    console.error(error.message)
    return res.status(400).json({
      msg:error.message,
      success: false
    })
  }

}

module.exports.updateCategory = async (req, res) => {
  try {
    const {id} = req.params;
    const {category} = req.body.values.categoryData;

    const productCategoryModel = new Category({
      category
    });

    const result = await productCategoryModel.updateCategory(id)
    if(!result) {
      throw new Error('category did not update, category cannot be duplicated!');
    }
    return res.status(200).json({
      result, 
      success: true
    })
  } catch (error) {
    console.error(error.message)
    return res.status(400).json({
      msg:error.message,
      success: false
    })
  }
}

module.exports.deleteCategory = async (req, res) => {
  try {
    const {id} = req.params;
    const productCategoryModel = new Category({});
    const result = await productCategoryModel.deleteCategory(id)
    if(!result) {
      throw new Error('category did not delete, something went wrong');
    }
    return res.status(200).json({
      result, 
      success: true
    })
  } catch (error) {
    console.error(error.message)
    return res.status(400).json({
      msg:error.message,
      success: false
    })
  }
}

module.exports.deleteAgeLimit = async (req, res) => {
  try {
    const {id} = req.params;
    const productAgeLimit = new ProductAgeLimit({});
    const result = await productAgeLimit.deleteAgeLimit(id)
    if(!result) {
      throw new Error('age limit did not delete, something went wrong');
    }
    return res.status(200).json({
      result,
      success: true
    })
  } catch (error) {
    console.error(error.message)
    return res.status(400).json({
      msg:error.message,
      success: false
    })
  }
}