import React, { useEffect, useState, useTransition } from "react";
import Product from "./Product";
import Sign_Products from "../../../components/sign/Sign_Products";

import {
  StorePageContainer,
  Banner,
  PetFilterWrapper,
  PetFilterContainer,
  PetContainer,
  ProductsWrapper,
  ProductsContainer,
  Content,
  CircleBackground,
  FilterProductContainer,
  Filter,
  FilterContainer,
  PaginationNumber,
} from "./storeComponents";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import Cookies from "js-cookie";
import storeLogic from "./storeLogic";
import CustomAxios from "../../../customer hooks/CustomAxios";

function Store() {
  const [activeFilter, setActiveFilter] = useState({
    petCategory: "",
    ageLimit: "",
    itemCategory: "",
    itemName: "",
  });
  const [refresher, setRefresher] = useState(false);

  const { setProps, shuffleArray, dropDownItemCategory, dropDownAgeGap } =
    storeLogic({ setActiveFilter });
  const [loading, startTransition] = useTransition();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState();
  const [productCategories, setProductCategories] = useState([]);
  const [productAgeLimit, setProductAgeLimit] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await CustomAxios({METHOD: "GET", uri:'/api/products/getAllCategory'});

        const {success, data, msg} = result;
        if(!success && msg?.includes("session expired")) {
          return window.location.reload();
        }
        setProductCategories(data);
        
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


  useEffect(() => {
    (async () => {
      setProducts([]);
      try {
        const { petCategory, ageLimit, itemCategory, itemName } = activeFilter;
        if (!petCategory && !ageLimit && !itemCategory && !itemName) {

          const response = await CustomAxios({METHOD:"GET", uri:`/api/products/getAllItems`});

          const { products, success, msg } = response;

          if (msg?.includes("session expired") && !success) {
            toast(msg, { type: "error" });
            return window.location.reload();
          }

          setProducts(shuffleArray(products));
          setMaxPage(Math.ceil(products.length / 8));
          
        } else {

          const response = await CustomAxios({METHOD:"POST", uri:`/api/products/searchItems`, values:activeFilter});

          const { success, products, msg } = response;

          if (msg?.includes("session expired") && !success) {
            toast(msg, { type: "error" });
            return window.location.reload();
          }
          setProducts(shuffleArray(products));
          setMaxPage(Math.ceil(products.length / 8));
        }
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [
    activeFilter.petCategory,
    activeFilter.itemName,
    activeFilter.ageLimit,
    activeFilter.itemCategory,
    refresher,
  ]);
console.log(products);
  const fetchProducts = products
    ?.slice(8 * currentPage, 8 * currentPage + 8)
    .map((product, index) => {
      return <Product product={product} key={index} />;
    });

  return (
    <StorePageContainer>
      <Banner>
        <ToastContainer autoClose />
        <Content>
          <h1>
            W e &nbsp; p r o v i d e &nbsp; w h a t &nbsp; y o u &nbsp; n e e d
            &nbsp; f o r &nbsp; a f f o r d a b l e &nbsp; p r i c e.
          </h1>
        </Content>
      </Banner>

      <PetFilterWrapper>
        <h1> W e &nbsp; D e a l &nbsp; I n</h1>
        <PetFilterContainer>
          <PetContainer
            active={activeFilter.petCategory.toLowerCase() === "dog"}
            id="dog"
            onClick={(e) =>
              setActiveFilter((prev) => ({
                ...prev,
                petCategory:
                  prev.petCategory === e.target.id ? "" : e.target.id,
              }))
            }
          >
            <CircleBackground id="dog" />
            <img src="/images/dog7.png" id="dog" />
            <h3 id="dog">Dog</h3>
            <p id="dog">Healthy food for active woof</p>
          </PetContainer>

          <PetContainer
            active={activeFilter.petCategory.toLowerCase() === "cat"}
            id="cat"
            onClick={(e) =>
              setActiveFilter((prev) => ({
                ...prev,
                petCategory:
                  prev.petCategory === e.target.id ? "" : e.target.id,
              }))
            }
          >
            <CircleBackground id="cat" />
            <img src="/images/cat1.png" id="cat" />
            <h3 id="cat">Cat</h3>
            <p id="cat">Healthy food for active meow</p>
          </PetContainer>
        </PetFilterContainer>
        <h1> P l e a s e &nbsp; C h o o s e &nbsp; H e r e </h1>
      </PetFilterWrapper>

      <ProductsWrapper>
        <h1>P r o d u c t s</h1>

        <FilterProductContainer>
          <FilterContainer>
            <Filter>
              <i className="fa-solid fa-magnifying-glass"></i>{" "}
              <input
                type={"text"}
                onChange={setProps}
                name="itemName"
                value={activeFilter.itemName}
                placeholder="Search item by name"
              />
            </Filter>
            <i
              className={`fa-solid fa-rotate productRefreshBtn`}
              onClick={() => setRefresher(!refresher)}
            ></i>
          </FilterContainer>

          <FilterContainer>
            <Filter>
              <span>Category: &nbsp;</span>
              <select
                name="itemCategory"
                value={activeFilter.itemCategory}
                onChange={setProps}
              >
                <option value="">Select Category</option>
                {productCategories.map((option) => {
                  return (
                    <option key={option.id} value={option.id}>
                      {option.category}
                    </option>
                  );
                })}
              </select>
            </Filter>

            <Filter>
              <span>Age:&nbsp;</span>
              <select
                name="ageLimit"
                id=""
                value={activeFilter.ageLimit}
                onChange={setProps}
              >
                <option value="">Select age limit</option>
                {productAgeLimit.map((option) => {
                  return (
                    <option key={option.id} value={option.id}>
                      {option.age_limit}
                    </option>
                  );
                })}
              </select>
            </Filter>
          </FilterContainer>
        </FilterProductContainer>

        {loading ? (
          <h1>loading...</h1>
        ) : (
          <ProductsContainer>
            {products?.length > 0 ? fetchProducts : <Sign_Products />}
          </ProductsContainer>
        )}

        <PaginationNumber>
          <i
            class="fa-solid fa-chevron-left left"
            onClick={() =>
              setCurrentPage((prev) => (prev !== 0 ? prev - 1 : prev))
            }
          ></i>{" "}
          <span class="activePage">{currentPage + 1}</span> /{" "}
          <span class="maxPage">{maxPage} </span>{" "}
          <i
            class="fa-solid fa-chevron-right right"
            onClick={() =>
              setCurrentPage((prev) => (prev + 1 < maxPage ? prev + 1 : prev))
            }
          ></i>
        </PaginationNumber>
      </ProductsWrapper>
    </StorePageContainer>
  );
}

export default Store;
