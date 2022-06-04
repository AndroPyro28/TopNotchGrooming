import React, {useState} from "react";
import Product from "./Product";
import {
  StorePageContainer,
  Banner,
  PetFilterWrapper,
  PetFilterContainer,
  PetContainer,
  ProductsWrapper,
  ProductsContainer,
  Content,
  CircleBackground
  
} from "./storeComponents";


function Store() {
    const [testProduct] = useState({
        productImg:"/images/puppy-food2.png",
        productName: "Pedigree Daily Food And Chicken",
        productDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        productPrice: "150.99"
    })

    const [activeFilter, setActiveFilter] = useState("")
    const switchFilter = (e) => {
        const {id} = e.target;

        setActiveFilter(id);
    }
  return (
    <StorePageContainer>
      <Banner>
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

          <PetContainer active={activeFilter.toLowerCase() === "dog"} id="Dog" onClick={switchFilter}>
            <CircleBackground id="dog" />
            <img src="/images/dog7.png" id="dog" />
            <h3 id="dog">Dog</h3>
            <p id="dog">Healthy food for active woof</p>
          </PetContainer>

          <PetContainer active={activeFilter.toLowerCase() === "cat"} id="cat" onClick={switchFilter}>
            <CircleBackground id="cat"/>
            <img src="/images/cat1.png" id="cat" />
            <h3 id="cat">Cat</h3>
            <p id="cat">Healthy food for active meow</p>
          </PetContainer>

        </PetFilterContainer>
        <h1> P l e a s e &nbsp; C h o o s e &nbsp; H e r e </h1>
      </PetFilterWrapper>

      <ProductsWrapper>
        <h1>P r o d u c t s</h1>
        <i class="fa-solid fa-chevron-left left"></i>
        <i class="fa-solid fa-chevron-right right"></i>
        <ProductsContainer>
          {/* products here */}

          <Product product={testProduct}/>
          <Product product={testProduct}/>
          <Product product={testProduct}/>
          <Product product={testProduct}/>
          <Product product={testProduct}/>
          <Product product={testProduct}/>
          <Product product={testProduct}/>

        </ProductsContainer>

        <div class="pageNumber">
          <span class="activePage">1</span> / <span class="maxPage">2</span>{" "}
        </div>
      </ProductsWrapper>
    </StorePageContainer>
  );
}

export default Store;
