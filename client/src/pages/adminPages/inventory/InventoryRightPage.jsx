import React, { useEffect, useState } from "react";
import { ModalBackdrop } from "../../../components/modals/admin_modals/modalComponent";
import {
  InventoryRightContent,
  FilterItemsContainer,
  FilterContainer,
  TableRow,
  T_HEAD,
  ProductListContainer,
  Sign
} from "./inventoryComponents";

import InventoryModal from "../../../components/modals/admin_modals/InventoryModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "js-cookie";
import ProductItem from "./ProductItem";
function InventoryRightPage({ searchItem, setSearchItem }) {
  const [openItem, setOpenItem] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const { petCategory, itemCategory, ageLimit, itemName} = searchItem;
      if (!petCategory && !itemCategory && !ageLimit && !itemName) {
        console.log("not search");

        const res = await axios.get("/api/products/getAllItems", {
          headers: {
            userinfo: Cookies.get("userToken"),
          },
        });
        const { products } = res.data;
        setProducts(products);
      } else {
        console.log("search");
        const res = await axios.post(
          "/api/products/searchItems",
          searchItem,
          {
            headers: {
              userinfo: Cookies.get("userToken"),
            },
          }
        );

        const {success, products} = res.data;
        setProducts(products)
      }
    })();
  }, [searchItem.petCategory, searchItem.itemCategory, searchItem.ageLimit, searchItem.itemName]);

  const setProps = (e) => {
    setSearchItem(prev => ({...prev, [e.target.name] : e.target.value}))
  }


  return (
    <InventoryRightContent>
      {openItem && (
        <InventoryModal
          setOpenItem={setOpenItem}
          openItem={openItem}
          toast={toast}
          setProducts={setProducts}
        />
      )}
      <ToastContainer autoClose={1500} />
      <FilterItemsContainer>
        <FilterContainer>
          <span>Category</span>
          <select name="petCategory" id="" value={setSearchItem.petCategory} onChange={setProps}>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select>
        </FilterContainer>

        <FilterContainer>
          <span>Age</span>
          <select name="ageLimit" id="" onChange={setProps}>
            <option value="2-4">2-4</option>
            <option value="5-9">5-9</option>
          </select>
        </FilterContainer>

        <FilterContainer>
          <span>Item Category</span>
          <select name="itemCategory" id="" onChange={setProps}>
            <option value="Food">Food</option>
            <option value="Toy">Toy</option>
            <option value="Hygiene">Hygiene kit</option>
            <option value="Utility">Utility</option>
          </select>
        </FilterContainer>

        <button onClick={() => setOpenItem(true)}>
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

        {products?.length > 0 ?
          products.map((product, index) => {
            return (
              <ProductItem
                product={product}
                key={index}
                setProducts={setProducts}
                toast={toast}
              />
            );
          }) : 
          <Sign> <img src="/images/emptyCart.png" alt="" /> No Products</Sign>}
      </ProductListContainer>
    </InventoryRightContent>
  );
}

export default InventoryRightPage;
