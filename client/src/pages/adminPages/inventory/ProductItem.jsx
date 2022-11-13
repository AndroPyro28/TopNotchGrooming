import React, { useEffect, useState } from "react";
import {
  ImageContainer,
  ItemInfoContainer,
  T_DATA,
  ProductItem,
  ProductItemContainer,
  InfoRow,
  TableRow,
} from "./inventoryComponents";
import ProductPriceFormatter from "../../../helpers/ProductPriceFormatter"

import productItemLogic from "./productItemLogic";

function Product({ product, setProducts, toast, categories, listProductAgeLimit }) {
  const [openItem, setOpenItem] = useState(false);
  const [item, setItem] = useState({});
  const [imageDisplay, setImageDisplay] = useState(null);
  const [disableUpdate, setDisableUpdate] = useState(true);

  useEffect(() => {
    setItem(product);
    console.log(product)
  }, []);
  const { deleteProduct, updateProduct, setProps } = productItemLogic({
    item,
    setItem,
    imageDisplay,
    setProducts,
    toast,
    setDisableUpdate,
    setImageDisplay,
    setOpenItem,
  });

  useEffect(() => {
    try {
      if (imageDisplay) {
        const reader = new FileReader();

        reader.readAsDataURL(imageDisplay);

        reader.onloadend = () => {
          setImageDisplay(reader.result);
        };
      }
    } catch (error) {
      console.error(error.message);
    }
  }, [imageDisplay]);


  if(!product) return <></>
  return (
    <ProductItem>
      <TableRow className="table__data">
        <T_DATA className="table__image">
          {imageDisplay ? (
            <img src={imageDisplay} alt=""></img>
          ) : (
            <img src={item?.product_image_url} alt=""></img>
          )}
        </T_DATA>
        <T_DATA className="table__productName"> {item?.product_name} </T_DATA>
        <T_DATA className="table__petType">{item?.pet_type}</T_DATA>
        <T_DATA className="table__productCategory">
          {item?.category}
        </T_DATA>
        <T_DATA className="table__productAge">
          {item?.age_limit} old
        </T_DATA>
        <T_DATA className="table__productPrice">{ProductPriceFormatter(item?.product_price)}</T_DATA>
        <T_DATA className="table__productStock"> Qty: {item?.product_stocks}</T_DATA>
        <T_DATA
          className="table__action"
          onClick={() => setOpenItem((prev) => !prev)}
        >
          <i
            class={
              openItem
                ? `fa-solid fa-chevron-up openItemInfo`
                : `fa-solid fa-chevron-down openItemInfo`
            }
          ></i>
        </T_DATA>
      </TableRow>

      <ProductItemContainer
        style={{
          display: openItem ? "flex" : "none",
        }}
      >
        <ImageContainer>
          <input
            type={"file"}
            className="imgUploader"
            onChange={(e) => setImageDisplay(e.target.files[0])}
            disabled={disableUpdate}
          />

          {
            !disableUpdate ? (
              imageDisplay ? <img src={imageDisplay} alt="" class="item__image" /> :
              <img src='/images/upload.png' alt="" class="item__image" />
            ) : (
              imageDisplay ? <img src={imageDisplay} alt="" class="item__image" /> :
              <img src={item?.product_image_url} alt="" class="item__image" />
            )
          }

          {disableUpdate ? (
            <button onClick={() => setDisableUpdate(false)}>Edit</button>
          ) : (
            <button onClick={updateProduct} classname="updateBtn">
              Save
            </button>
          )}

          <button onClick={() => deleteProduct(item?.id)} classname="deleteBtn">
            Delete
          </button>
        </ImageContainer>
        <ItemInfoContainer>
          <InfoRow>
            <div class="info productName">
              <label for="">
                <i
                  className={
                    disableUpdate ? "fa-solid fa-lock" : "fa-solid fa-lock-open"
                  }
                ></i>
                &nbsp; Product Name
              </label>

              <input
                type="text"
                value={item?.product_name}
                name="product_name"
                onChange={setProps}
                disabled={disableUpdate}
              />
            </div>

            <div class="info">
              <label for="">
                <i
                  className={
                    disableUpdate ? "fa-solid fa-lock" : "fa-solid fa-lock-open"
                  }
                ></i>{" "}
                &nbsp; Product Price
              </label>
              <input
                type="text"
                value={item?.product_price}
                name="product_price"
                onChange={setProps}
                disabled={disableUpdate}
              />
            </div>

            <div class="info">
              <label for="">
                <i
                  className={
                    disableUpdate ? "fa-solid fa-lock" : "fa-solid fa-lock-open"
                  }
                ></i>
                &nbsp; Age Limit
              </label>
              <select
                type="text"
                value={item?.age_limit}
                name="age_limit"
                onChange={setProps}
                disabled={disableUpdate}
              >
                {listProductAgeLimit.map((option) => {
                  return (
                    <option key={option.id} value={option.age_limit}>
                      {option.age_limit}
                    </option>
                  );
                })}
              </select>
            </div>
          </InfoRow>

          <InfoRow>
            <div class="info productName">
              <label for="">
                <i
                  className={
                    disableUpdate ? "fa-solid fa-lock" : "fa-solid fa-lock-open"
                  }
                ></i>
                &nbsp; Product Stock
              </label>
              <input
                type="text"
                value={item?.product_stocks}
                name="product_stocks"
                onChange={setProps}
                disabled={disableUpdate}
              />
            </div>

            <div class="info">
              <label for="">
                <i
                  className={
                    disableUpdate ? "fa-solid fa-lock" : "fa-solid fa-lock-open"
                  }
                ></i>{" "}
                &nbsp; Product Category
              </label>
             
              <select
                id=""
                value={item?.category}
                name="category"
                onChange={setProps}
                disabled={disableUpdate}
              >
                {categories?.map((option) => {
                  return (
                    <option key={option.id} value={`${option.category}`}>
                      {option.category}
                    </option>
                  );
                })}
              </select>
            </div>

            <div class="info">
              <label for="">
                <i
                  className={
                    disableUpdate ? "fa-solid fa-lock" : "fa-solid fa-lock-open"
                  }
                ></i>{" "}
                &nbsp; Pet Type
              </label>
              <select
                id=""
                value={item?.pet_type}
                name="pet_type"
                onChange={setProps}
                disabled={disableUpdate}
              >
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Both">Both</option>
              </select>
            </div>
          </InfoRow>

          <InfoRow>
            <div class="info ">
              <label for="">
                <i
                  className={
                    disableUpdate ? "fa-solid fa-lock" : "fa-solid fa-lock-open"
                  }
                ></i>
                &nbsp; Product Description
              </label>
              
              <textarea
                type="text"
                rows="6" 
                value={item?.product_description}
                name="product_description"
                onChange={setProps}
                disabled={disableUpdate}
              />
            </div>
          </InfoRow>
        </ItemInfoContainer>
      </ProductItemContainer>
    </ProductItem>
  );
}

export default Product;
