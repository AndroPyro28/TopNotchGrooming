import React from 'react'
import {  ImageContainer,
    ItemInfoContainer,
    T_DATA,
    ProductItem,
    ProductItemContainer,
    InfoRow,
  } from "./inventoryComponents";
  
function ProductItem() {
  return (
    <ProductItem>
            <TableRow className="table__data">
              <T_DATA className="table__image">
                <img src="/images/waggFoodSet.jpg" alt=""></img>{" "}
              </T_DATA>
              <T_DATA className="table__productName"> waggFood Set </T_DATA>
              <T_DATA className="table__petType">Dog</T_DATA>
              <T_DATA className="table__productCategory">Food</T_DATA>
              <T_DATA className="table__productAge">3 - 5 </T_DATA>
              <T_DATA className="table__productPrice">1200.00</T_DATA>
              <T_DATA className="table__productStock"> 55</T_DATA>
              <T_DATA className="table__action" onClick={() => setOpenItem(prev => !prev)}>
                <i class={ openItem ? `fa-solid fa-chevron-up openItemInfo` : `fa-solid fa-chevron-down openItemInfo`}></i>
              </T_DATA>
            </TableRow>

            <ProductItemContainer style={{
                display: openItem ? "flex":"none"
            }}>
              <ImageContainer>
                <img
                  src="/images/waggFoodSet.jpg"
                  alt=""
                  class="item__image"
                />
                <button>Delete</button>
              </ImageContainer>
              <ItemInfoContainer>
                <InfoRow>
                  <div class="info productName">
                    <label for="">Product Name</label>
                    <input type="text" value="wagFood Set" />
                  </div>

                  <div class="info">
                    <label for="">Product Price</label>
                    <input type="text" value="1200.00" />
                  </div>

                  <div class="info">
                    <label for="">Age</label>
                    <input type="text" value="2 - 3" />
                  </div>
                </InfoRow>

                <InfoRow>
                  <div class="info productName">
                    <label for="">Product Stock</label>
                    <input type="text" value="55" />
                  </div>

                  <div class="info">
                    <label for="">Product Category</label>
                    <select name="" id="">
                      <option value="">Food</option>
                      <option value="">Toy</option>
                      <option value="">Hygiene Kit</option>
                    </select>
                  </div>

                  <div class="info">
                    <label for="">Pet Type</label>
                    <select name="" id="">
                      <option value="">Dog</option>
                      <option value="">Cat</option>
                    </select>
                  </div>
                </InfoRow>
              </ItemInfoContainer>
            </ProductItemContainer>
          </ProductItem>
  )
}

export default ProductItem