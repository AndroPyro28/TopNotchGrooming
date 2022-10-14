import styled from "styled-components";

export const StorePageContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.section`
  width: 100%;
  height: 500px;
  background: url("/images/storePicEdited2.png");
  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  width: fit-content;
  height: fit-content;
  margin: auto auto auto auto;
  font-size: 20px;
  color: white;
  text-align: center;
  text-shadow: 1px 3px 5px black;

  & > h1 {
    font-family: "league spartan", sans-serif;
    text-transform: uppercase;
    opacity: 0.7;
  }
`;

export const PetFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin: 50px;
  box-shadow: 3px 0px 26px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 0px 26px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 0px 26px -10px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  /* width: ; */
  padding: 50px;

  & > h1 {
    margin-top: 60px;
    margin-bottom: 50px;

    color: rgb(141, 124, 87);
    font-size: 30px;
    font-family: "league spartan", sans-serif;
    text-transform: uppercase;

    @media(max-width: 500px) {
    & {
      margin-top: 0;
      font-size: 20px;
      text-align: center;
    }
  }
  }

  @media(max-width: 600px) {
    & {
      margin: 0;
      width: 100%;
      padding: 20px;
    }
  }
`;

export const PetFilterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width:800px) {
    justify-content: center;
  }
`;

export const PetContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  position: relative;
  width: 300px;
  height: 450px;
  overflow: hidden;
  cursor: pointer;
  transition: all .3s ease-in-out;
  box-shadow: ${({ active }) => (active ? "1px 3px 5px gray" : "none")};

  @media(max-width: 600px) {
    & {
      max-width: 150px;

      height: 450px;
      margin: 10px;
    }
  }

  @media(max-width: 460px) {
    & {
      max-width: 100px;
    }
  }

  &:hover {
    box-shadow: 1px 3px 5px lightgray;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  & > h3 {
    z-index: 2;
    color: rgb(141, 124, 87);
    margin: 10px;
  }

  & > img {
    width: 100%;
    height: 50%;
    z-index: 2;
    object-position: top;
    object-fit: cover;
  }

  & > p {
    color: gray;
    font-size: 100%;
    z-index: 2;
    @media (max-width:800px) {
      font-size: 0.8em;
    }

  }
  
`;

export const CircleBackground = styled.div`
  border-radius: 50%;
  position: absolute;
  height: 200px;
  width: 200px;
  margin: auto;
  background: lightgoldenrodyellow;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  margin-top: 80px;
  position: relative;
  & > h1 {
    color: rgb(141, 124, 87);
    font-size: 30px;
    font-family: "league spartan", sans-serif;
    text-transform: uppercase;
    margin-bottom: 50px;
  }

  
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 20px;
  position: relative;
  padding: 20px;

  @media (max-width: 900px) {
  grid-template-columns: repeat(3, 1fr);

  }

  @media (max-width: 700px) {
  grid-template-columns: repeat(2, 1fr);

  }

  @media (max-width: 450px) {
  grid-template-columns: repeat(1, 1fr);

  }
`;
// produc item

export const ProductItem = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 30px;
  padding: 20px;
  transition: all 0.3s ease-in-out;
  max-height: 400px;
  cursor: pointer;
  opacity: ${({isOutOfStock}) => isOutOfStock ? '0.5' : '1'};
  pointer-events: ${({isOutOfStock}) => isOutOfStock ? 'none' : 'all'};
  & > .add__to__cart {
    border-radius: 10px;
    border: solid 1px black;
    background: white;
    color: black;
    padding: 5px 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: rgb(255, 231, 147);
      color: black;
    }

    &:active {
      transition: all 0s ease-in-out;
      color: white;
      background: rgb(240, 175, 76);
    }
  }

  &:hover {
    box-shadow: 1px 3px 5px rgb(240, 175, 76);
  }

  @media (max-width:800px) {
    &:hover {
    box-shadow: none;
    }
  }
`;
export const ProductItemImg = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain;
  object-position: center;
  border-radius: 20px;
`;

export const ProductItemName = styled.h3`
  font-size: 15px;
  color: rgb(54, 54, 54);
  text-transform: capitalize;
  margin: 10px;
`;

export const ProductItemPrice = styled.h4`
  font-size: 15px;
  color: rgb(94, 94, 94);
  margin: 10px 0px 20px 0px;
`;

export const ProductItemDescription = styled.p`
  color: gray;
  font-size: 0.9em;
  margin: 20px;
  overflow: hidden;
  /* white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis; */
      max-height: 60px;
      
`;

export const FilterProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0px 100px 0px;
`;

export const Filter = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 10px;
  border: solid 1px gray;
  margin-inline: 10px;
  align-items: center;

  

  & > span {
    font-size: 0.9em;
    @media (max-width:800px) {
      display:none;
  }
  }
  & > select {
    border-radius: 1px;
    border: none;
    text-align: center;
    font-size: 0.8em;
    background: none;
    outline: none;
    color: gray;

    @media (max-width:800px) {
      width: 150px;
  }

  @media (max-width:600px) {
      width: 100px;
  }
  @media (max-width:500px) {
      width: 80px;
  }

  @media (max-width:430px) {
      display:none;
  }
    
  }

  & > input {
    border: none;
    font-size: 0.8em;
    background: none;
    outline: none;
    color: gray;
    
    @media (max-width:800px) {
      width: 150px;
  }

  @media (max-width:600px) {
      width: 100px;
  }

  @media (max-width:500px) {
      width: 80px;
  }

  @media (max-width:430px) {
    width: 120px;

  }

  
  }

  & > i {
    color: gray;
    @media (max-width:800px) {
  }
  }

  & > input[type="text"] {
    height: 100%;
    margin: 0px 10px 0px 10px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;

  & > .productRefreshBtn {

    @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

    font-size: 1.5em;
    margin: 10px;
    cursor: pointer;
    &:hover {
      animation: rotate infinite 1.5s;
    }
  }

  
`;


export const PaginationNumber = styled.div`

& > .left,
  .right {
    width: fit-content;
    height: fit-content;
    margin: auto 0;
    padding: 15px;
    border-radius: 50%;
    background: rgb(216, 216, 216);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 1;
  }

  & > .left {
    margin: auto auto auto 20px;
  }
  & > .right {
    margin: auto 20px auto auto;
  }

  & > :is(.left, .right):hover {
    background: black;
    color: white;
  }

`