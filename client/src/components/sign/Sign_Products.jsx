import React from "react";
import styled from "styled-components";
function Sign_Products() {

  const Sign = styled.label`
    color: gray;
    text-align: center;
    margin-top: 100px;
    font-size: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: cursive;
    & > img {
      width: 120px;
    }
  `;

  return (
    <Sign>
      <img src="/images/emptyCart.png" alt="" /> &nbsp; No Products
    </Sign>
  );
}

export default Sign_Products;
