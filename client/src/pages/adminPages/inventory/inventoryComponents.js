import styled, { createGlobalStyle } from "styled-components";

export const PageGlobal = createGlobalStyle`
    body {
        background: aliceblue;
    overflow: hidden;
    }
`;
export const AdminInventoryWrapper = styled.section`
  display: flex;
  height: 100vh;
  padding: 10px;
  justify-content: space-evenly;
`;
export const InventoryLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  & > :is(h1, small) {
    margin: 5px 0;
  }

  & > h1 {
    font-weight: 500;
  }

  & > small {
    color: gray;
  }
`;
export const SearchItemContainer = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  border: solid 1px gray;
  border-radius: 10px;
  margin: 10px 0;
  background: white;

  & > i {
    font-size: 1.1;
    padding: 5px;
  }

  & > input {
    padding: 5px 10px;
    width: 90%;
    border: none;
    outline: none;
    background: none;
  }
`;
export const ProductStatisticContainer = styled.div`
  padding: 10px;
  background: white;
  border-radius: 10px;
  height: 80%;
  & > .product__info {
    display: flex;
    justify-content: space-between;

    & > .product__label {
      font-size: 0.7em;
    }
  }
`;

export const ProductStatistic = styled.div`
  width: 100%;
  height: 500px;
`;

export const InventoryRightContent = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 80%;
  margin: 10px;
  border-radius: 10px;
  height: 95%;
`;

export const FilterItemsContainer = styled.div`
  display: flex;
  margin: 20px 10px;
  align-items: center;
  justify-content: center;
  & > button {
    color: white;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 10px 40px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    background: rgb(0, 109, 143);

    &:hover {
      background: rgb(1, 59, 77);
    }
  }

  & > .pagination {
    & > span {
      font-weight: 1000;
      font-size: 1.1em;
    }

    & > :is(.left, .right) {
      background: rgb(0, 109, 143);
      padding: 10px;
      border-radius: 10px;
      color: white;
      margin-inline: 5px;
      cursor: pointer;
      transition: all 0.3s ease-in;
    }

    & > :is(.left, .right):hover {
      background: rgb(1, 59, 77);
    }
  }
`;
export const FilterContainer = styled.div`
  display: flex;
  border-radius: 10px;
  border: solid 1px gray;
  padding: 10px 20px;
  align-items: center;
  margin-inline: 5px;

  & > span {
    font-size: 0.8em;
    color: gray;

    &::after {
      content: ": ";
    }
  }

  & > select {
    border: none;
    outline: none;
    border-radius: 10px;
    text-align: center;
    
  }
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;

  & > div {
    flex: 1;
  }

  &.table__header {
    padding: 15px 0;
    color: rgb(99, 98, 98);
  }

  &.table__data {
    padding: 0px 0px 15px 0px;
  }

  & > .table__productName {
    flex: 2;
  }

  & > .table__image {
    display: flex;
    justify-content: center;
  }

  & > .table__action > i {
    color: rgb(1, 59, 77);
    padding: 10px;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      background: aliceblue;
      color: black;
    }
  }
`;

export const T_HEAD = styled.div`
  margin-top: 50px;
  color: gray;
`;

export const T_DATA = styled.div`
  margin-top: 20px;
  & > img {
    width: 50px;
    object-fit: contain;
    padding: 5px;
    border-radius: 10px;
    border: solid 1px gray;
    height: 50px;
  }
`;

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: auto;
  overflow-x: hidden;
`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  cursor: default;
  border-bottom: solid 1px gray;
  /* &:hover {
    background: rgb(219, 236, 238);
  } */
  &:nth-child(even) {
    background: rgb(240,248,255);
  }
`;

export const ProductItemContainer = styled.div`
  display: none;
  padding: 20px;
  width: 100%;
  transition: all 0.3s ease-in-out;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  position: relative;

  & > .imgUploader {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    opacity: 0;
    height: 37%;
    background: black;
    cursor: pointer;
  }

  & > button {
    color: white;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 10px 40px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin: 10px;
    background: gray;
  }

  & > .deleteBtn {  
    background-color: maroon !important;
  }

  & > .updateBtn {
    background: lightgreen !important;
  }

  & > .item__image {
    width: 100px;
    object-fit: cover;
    padding: 15px;
    border-radius: 10px;
    border: solid 1px gray;
    height: 100px;
    align-self: center;
    cursor: pointer;
  }
`;
export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 20px 0 10px;
`;

export const InfoRow = styled.div`
  display: flex;
  width: 100%;
  text-align: star;
  & > .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;

    & > label {
      font-size: 0.8em;
      color: gray;
      margin: 5px;
    }

    & > input {
      padding: 10px;
      margin: 5px;
      border: none;
      border-bottom: solid 1px gray;
      outline: none;
      background: none;

      &:disabled {
        color: rgb(187, 187, 187) !important;
        /* background: rgb(187, 187, 187); */
      }
    }

    & > textarea {
      padding: 10px;
      margin: 5px;
      border: none;
      border: solid 1px gray;
      outline: none;
      background: none;
      border-radius: 10px;
      resize: none;
      &:disabled {
        color: rgb(177, 177, 177) !important;
        /* background: rgb(187, 187, 187); */
      }
    }

    & > select {
      padding: 10px;
      background: none;
      margin: 5px;
      border: none;
      border-bottom: solid 1px gray;
      outline: none;
      border-radius: 1px;
      &:disabled {
        color: rgb(150, 150, 150) !important;
        /* background: rgb(187, 187, 187); */
      }
    }
  }
`;

