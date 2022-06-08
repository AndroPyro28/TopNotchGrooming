import React, { useEffect, useState } from 'react'
import {  ImageContainer,
    ItemInfoContainer,
    T_DATA,
    ProductItem,
    ProductItemContainer,
    InfoRow,
    TableRow
  } from "./inventoryComponents";
  
function Product({product}) {

  const [openItem, setOpenItem] = useState(false);
  const [item, setItem] = useState();

  useEffect(() => {
    setItem(product)
  }, []);


  return (
    <ProductItem>
            <TableRow className="table__data">
              <T_DATA className="table__image">
                <img src={item?.product_image_url} alt=""></img>{" "}
              </T_DATA>
              <T_DATA className="table__productName"> {item?.product_name} </T_DATA>
              <T_DATA className="table__petType">{item?.pet_type}</T_DATA>
              <T_DATA className="table__productCategory">{item?.product_category}</T_DATA>
              <T_DATA className="table__productAge"> {item?.product_age_limit} </T_DATA>
              <T_DATA className="table__productPrice">{item?.product_price}</T_DATA>
              <T_DATA className="table__productStock"> {item?.product_stocks}</T_DATA>
              <T_DATA className="table__action" onClick={() => setOpenItem(prev => !prev)}>
                <i class={ openItem ? `fa-solid fa-chevron-up openItemInfo` : `fa-solid fa-chevron-down openItemInfo`}></i>
              </T_DATA>
            </TableRow>

            <ProductItemContainer style={{
                display: openItem ? "flex":"none"
            }}>
              <ImageContainer>
                <input type={"file"} className="imgUploader" />
                <img
                  src={item?.product_image_url}
                  alt=""
                  class="item__image"
                />
                <button>Delete</button>
              </ImageContainer>
              <ItemInfoContainer>
                <InfoRow>
                  <div class="info productName">
                    <label for="">Product Name</label>
                    <input type="text" value={item?.product_name} />
                  </div>

                  <div class="info">
                    <label for="">Product Price</label>
                    <input type="text" value={item?.product_price} />
                  </div>

                  <div class="info">
                    <label for="">Age Limit</label>
                    <input type="text"  value={item?.product_age_limit} />
                  </div>
                </InfoRow>

                <InfoRow>
                  <div class="info productName">
                    <label for="">Product Stock</label>
                    <input type="text" value={item?.product_stocks} />
                  </div>

                  <div class="info">
                    <label for="">Product Category</label>
                    <select name="" id="" value={item?.product_category} >
                      
                      <option value="Food">Food</option>
                      <option value="Toy">Toy</option>
                      <option value="Hygiene Kit">Hygiene Kit</option>
                    </select>
                  </div>

                  <div class="info">
                    <label for="">Pet Type</label>
                    <select name="" id="" value={item?.pet_type} >
                      <option value="Dog">Dog</option>
                      <option value="Cat">Cat</option>
                    </select>
                  </div>
                </InfoRow>

                <InfoRow>
                  <div class="info ">
                    <label for="">Product Description</label>
                    <textarea type="text" value={item?.product_description} />
                  </div>
                </InfoRow>
              </ItemInfoContainer>
            </ProductItemContainer>
          </ProductItem>
  )
}

export default Product