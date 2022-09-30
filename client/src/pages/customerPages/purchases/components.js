import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: #EAEAEA;
    }
`;
export const PurchasesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
`;

export const LinksContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  margin: 20px;

  @media (max-width:650px) {
  width: 80%;

    }
  & > a {
    text-align: center;
    font-weight: 500;
    color: rgb(141, 124, 87);
    border-bottom: solid 2px transparent;
    margin: 10px 0px;
    &:hover {
      border-bottom: solid 2px rgb(141, 124, 87);
    }

    @media (max-width:650px) {
      margin: 10px;
      font-size: 1em;
    }
  }
`;

