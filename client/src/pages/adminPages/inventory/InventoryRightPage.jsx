import React, { useEffect, useState, useTransition } from "react";
import {
  InventoryRightContent,
  FilterItemsContainer,
  FilterContainer,
  TableRow,
  T_HEAD,
  ProductListContainer,
  ButtonContainer
} from "./inventoryComponents";

import InventoryModal from "../../../components/modals/admin_modals/add-products/InventoryModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductItem from "./ProductItem";
import Sign_Products from "../../../components/sign/Sign_Products";
import CustomAxios from "../../../customer hooks/CustomAxios";
import CategoryModal from "../../../components/modals/admin_modals/add-category/CategoryModal";
import ProductAgeLimitModal from "../../../components/modals/admin_modals/add-ageLimit/ProductAgeLimitModal";

function InventoryRightPage({ searchItem, setSearchItem }) {
  const [openAddItemModal, setOpenAddItemModal] = useState(false);
  const [openAddCategoryModal, setOpenAddCategoryModal] = useState(false);
  const [openAddAgeLimitModal, setOpenAddAgeLimitModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState(1)
  const [categories, setCategories] = useState([])
  const [productAgeLimit,setProductAgeLimit] = useState([])
  
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

  useEffect(() => {
    (async () => {
      try {
        const result = await CustomAxios({METHOD: "GET", uri:'/api/products/getAllCategory'});

        const {success, data, msg} = result;
        if(!success && msg?.includes("session expired")) {
          return window.location.reload();
        }
        setCategories(data);
        
      } catch (error) {
        console.error(error.message);
      }
    })()
  }, [])

  useEffect(() => {
    (async () => {
      try {
        const result = await CustomAxios({METHOD: "GET", uri:'/api/products/getAllProductAgeLimit'});

        const {success, data, msg} = result;
        if(!success && msg?.includes("session expired")) {
          return window.location.reload();
        }
        setProductAgeLimit(data);
        
      } catch (error) {
        console.error(error.message);
      }
    })()
  }, [])

  const fetchProducts = products?.slice(8 * currentPage, 8 * currentPage + 8).map(product => {
    return (
      <ProductItem
      
        product={product}
        key={product.id}
        setProducts={setProducts}
        toast={toast}
        categories={categories}
        listProductAgeLimit={productAgeLimit}
      />
    );
  })


  const setProps = (e) => {
    setSearchItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <InventoryRightContent>
      {openAddItemModal && (
        <InventoryModal
          setOpenItem={setOpenAddItemModal}
          openItem={openAddItemModal}
          toast={toast}
          
          setProducts={setProducts}
        />
      )}

      {openAddCategoryModal && (
        <CategoryModal
          setOpenItem={setOpenAddCategoryModal}
          openItem={openAddCategoryModal}
          toast={toast}
          setCategories={setCategories}
        />
      )}
        {openAddAgeLimitModal && (
        <ProductAgeLimitModal
          setOpenItem={setOpenAddAgeLimitModal}
          openItem={openAddAgeLimitModal}
          toast={toast}
          setProductAgeLimit={setProductAgeLimit}
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
            <option value="both">Both</option>
          </select>
        </FilterContainer>

        <FilterContainer>
          <span>Age</span>
          <select name="ageLimit" id="" onChange={setProps}>
          <option value="">Select age limit</option>
            {productAgeLimit.map((option) => {
              return (
                <option key={option.id} value={option.id}>
                  {option.age_limit}
                </option>
              );
            })}
          </select>
        </FilterContainer>

        <FilterContainer>
          <span>Category: </span>
          <select name="itemCategory" id="" onChange={setProps}>
          <option value="">Select Category</option>
            {categories.map((option) => {
              return (
                <option key={option.id} value={option.id}>
                  {option.category}
                </option>
              );
            })}
          </select>
        </FilterContainer>

        <div className="pagination">
          
        <button onClick={() => setOpenAddItemModal(true)}>
            Add products <i className="fa-solid fa-plus"></i>
          </button>

        <i className="fa-solid fa-chevron-left left " onClick={() => setCurrentPage(prev => prev !== 0 ? prev -1 : prev)}></i>
          <span>{`${currentPage + 1} / ${maxPage}`} </span>
        <i className="fa-solid fa-chevron-right right " onClick={() => setCurrentPage(prev => prev + 1 < maxPage ? prev +1 : prev)}></i>
        </div>
      </FilterItemsContainer>

        <ButtonContainer>
          <button onClick={() => setOpenAddCategoryModal(true)} >
            Add category for products
          </button>
          <button onClick={() => setOpenAddAgeLimitModal(true)}>
            Add age limit for products
          </button>
        </ButtonContainer>

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
      {/* products here */}
      <ProductListContainer>
        

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
