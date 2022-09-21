import React, { useEffect, useState, useTransition } from "react";
import {
  InventoryRightContent,
  FilterItemsContainer,
  FilterContainer,
  TableRow,
  T_HEAD,
  ProductListContainer,
} from "./inventoryComponents";

import InventoryModal from "../../../components/modals/admin_modals/InventoryModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductItem from "./ProductItem";
import Sign_Products from "../../../components/sign/Sign_Products";
import Loader from "../../../components/loader/Loader";
import CustomAxios from "../../../customer hooks/CustomAxios";

function InventoryRightPage({ searchItem, setSearchItem }) {
  const [openItem, setOpenItem] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState(1)
  
  useEffect(() => {
    (async () => {

      try {
      setProducts([])
      setLoading(true)
      const { petCategory, itemCategory, ageLimit, itemName } = searchItem;
      
      if (!petCategory && !itemCategory && !ageLimit && !itemName) {

        const response = await CustomAxios({METHOD:"GET", uri:`/api/products/getAllItems`})
        
        const { products, msg, success } = response

        if(msg?.includes('session expired') && !success) {
          toast(msg, { type: "error" });
          return window.location.reload();
        }
        setProducts(products);
        setMaxPage(Math.ceil(products.length / 8))
      } else {

        const response = await CustomAxios({METHOD:"POST", uri:`/api/products/searchItems`, values:searchItem})

        const { success, products, msg } = response;

        if(msg?.includes('session expired') && !success) {
          toast(msg, { type: "error" });
          return window.location.reload();
        }
        setProducts(products);
        setMaxPage(Math.ceil(products.length / 8))
      }
      } catch (error) {
        console.error(error.message);
      }

      finally {
        setLoading(false)
      }
      
    })();
  }, [
    searchItem.petCategory,
    searchItem.itemCategory,
    searchItem.ageLimit,
    searchItem.itemName,
  ]);

  const fetchProducts = products?.slice(8 * currentPage, 8 * currentPage + 8).map(product => {
    return (
      <ProductItem
        product={product}
        key={product.id}
        setProducts={setProducts}
        toast={toast}
      />
    );
  })

  const dropDownAgeGap = [
    {
      key: "Select age limit",
      value: "",
    },
    {
      key: "1-2 (yrs old)",
      value: "1-2",
    },
    {
      key: "2-4 (yrs old)",
      value: "2-4",
    },
    {
      key: "5-7 (yrs old)",
      value: "5-7",
    },
    {
      key: "Above 7+ (yrs old)",
      value: "7+",
    },
  ];

  const setProps = (e) => {
    setSearchItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
          <span>Pet</span>
          <select
            name="petCategory"
            id=""
            value={setSearchItem.petCategory}
            onChange={setProps}
          >
            <option value="">Select Pet</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select>
        </FilterContainer>

        <FilterContainer>
          <span>Age</span>
          <select name="ageLimit" id="" onChange={setProps}>
            {dropDownAgeGap.map((option) => {
              return (
                <option key={option.key} value={option.value}>
                  {option.key}
                </option>
              );
            })}
          </select>
        </FilterContainer>

        <FilterContainer>
          <span>Category: </span>
          <select name="itemCategory" id="" onChange={setProps}>
          <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Toy">Toy</option>
            <option value="Hygiene">Hygiene kit</option>
            <option value="Utility">Utility</option>
          </select>
        </FilterContainer>

        <div className="pagination">
          
        <button onClick={() => setOpenItem(true)}>
          Add Item <i className="fa-solid fa-plus"></i>
        </button>

        <i className="fa-solid fa-chevron-left left " onClick={() => setCurrentPage(prev => prev !== 0 ? prev -1 : prev)}></i>
          <span>{`${currentPage + 1} / ${maxPage}`} </span>
        <i className="fa-solid fa-chevron-right right " onClick={() => setCurrentPage(prev => prev + 1 < maxPage ? prev +1 : prev)}></i>
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

        {loading ? <h2 style={{marginBlock:50, color:"gray"}}>Loading products...</h2> : products?.length > 0 ? (
          fetchProducts
        ) : (
          <Sign_Products />
        )}
      </ProductListContainer>
    </InventoryRightContent>
  );
}

export default InventoryRightPage;
