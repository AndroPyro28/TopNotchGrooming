import React, { useState } from 'react'
import {
  InventoryRightContent,
  FilterItemsContainer,
  FilterContainer,
  TableRow,
  T_HEAD,
  ProductListContainer,
  } from "./inventoryComponents";

function InventoryRightPage() {

    const [openItem, setOpenItem] = useState(false);

  return (
    <InventoryRightContent>
        <FilterItemsContainer>
          <FilterContainer>
            <span>Category</span>
            <select name="" id="">
              <option value="">Dog</option>
              <option value="">Cat</option>
            </select>
          </FilterContainer>

          <FilterContainer>
            <span>Age</span>
            <select name="" id="">
              <option value="">2-4</option>
              <option value="">5-8</option>
            </select>
          </FilterContainer>

          <FilterContainer>
            <span>Item Category</span>
            <select name="" id="">
              <option value="">Food</option>
              <option value="">Toy</option>
              <option value="">Hygiene kit</option>
            </select>
          </FilterContainer>

          <button>
            Add Item <i className="fa-solid fa-plus"></i>
          </button>

          <div className="pagination">
            <i className="fa-solid fa-chevron-left left "></i>
            <span>1</span>
            <i className="fa-solid fa-chevron-right right "></i>
          </div>
        </FilterItemsContainer>

        <TableRow class="table__header">
          <T_HEAD className="table__image"></T_HEAD>
          <T_HEAD className="table__productName">Name</T_HEAD>
          <T_HEAD className="table__petType">Pet Type</T_HEAD>
          <T_HEAD className="table__productCategory">Category</T_HEAD>
          <T_HEAD className="table__productAge">Age</T_HEAD>
          <T_HEAD className="table__productPrice">Price</T_HEAD>
          <T_HEAD className="table__productStock">Stock</T_HEAD>
          <T_HEAD className="table__action"></T_HEAD>
        </TableRow>

        <ProductListContainer>
        {/* products here */}
          
        </ProductListContainer>
      </InventoryRightContent>
  )
}

export default InventoryRightPage