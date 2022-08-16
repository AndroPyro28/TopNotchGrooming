import React from "react";
import * as yup from "yup";
import axios from "axios";
import Cookies from "js-cookie";
import CustomAxios from "../../../customer hooks/CustomAxios";

function inventoryLogic({ toast, img, imgError, setOpenItem, setImgError, setProducts, setDisabled }) {
  const onSubmit = async (values) => {

    if (imgError.length > 0 || img == null || img == undefined ||!img?.includes("image")) {
      return setImgError("Please set an image to this product");
    }

    values.productImg = img;
    setDisabled(true)

    const response = await CustomAxios({METHOD:"POST", uri:`/api/products/addItem`, values})
    

    const { msg, success, newProduct } = response;

    if(msg?.includes('session expired') && !success) {
      toast(msg, { type: "error" });
      return window.location.reload();
    }
    
    if (!success) {
      return toast(msg, { type: "error" });
    }

     toast(msg, { type: "success" });
     const {
      productName,
      productStocks,
      productPrice,
      productCategory,
      productDescription,
      productAgeGap,
      productImg,
      productImgId,
      petType,
    } = newProduct;

     setProducts(prev => [...prev, {
       id: newProduct.id,
       product_name: productName,
      product_stocks: productStocks,
      product_price: productPrice,
      product_category:productCategory,
      product_description: productDescription,
      product_age_limit: productAgeGap,
      product_image_url: productImg,
      product_image_id: productImgId,
      pet_type: petType
     }])
     setDisabled(false)
     return setOpenItem(false);
  };

  const initialValues = () => {
    return {
      productName: "",
      productPrice: "",
      productDescription: "",
      productCategory: "",
      productAgeGap: "",
      productStocks: "",
      petType: "",
    };
  };

  const validationSchema = yup.object({
    productName: yup.string().required("Product name is required"),
    productPrice: yup
      .number()
      .required("product price is required")
      .min(1, "Please set a value to this item"),
    productDescription: yup
      .string()
      .required("product description is required"),
    productStocks: yup
      .number()
      .required("Product stocks is required")
      .min(1, "Please set a stock to this item"),
    productCategory: yup
      .string()
      .required("please set a category to this item")
      .min(1, "please set a category to this item"),
    productAgeGap: yup.string().required("Pet age gap is required"),
    petType: yup.string().required("Pet Type is required"),
  });

  return {
    onSubmit,
    initialValues,
    validationSchema,
  };
}

export default inventoryLogic;
