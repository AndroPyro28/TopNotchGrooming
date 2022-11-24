import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: #EAEAEA;
    }
`;
export const OrderContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  background: #eaeaea;
  overflow-y: auto;
  overflow-x: hidden;
  & > h1 {
    color: gray;
    margin: 10px;
  }
`;

export const Order = styled.div`
  background: white;
  width: 80%;
  display: grid;
  grid-template-columns: 150px 100%;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 10px;
  @media (max-width: 750px) {
    width: 100%;
    padding: 10px;
    margin: 10px 0px;
  }
  & > img {
    align-self: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    @media (max-width: 650px) {
      width: 70%;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 650px) {
    font-size: 0.9em;
  }
`;

export const Row = styled.div`
  display: flex;
  padding-inline: 10px;
  margin: 5px;
  @media (max-width: 650px) {
    /* font-size: 0.9em; */
    padding-inline: 5px;
    margin: 5px 0px;
    flex-direction: column;
    width: fit-content;
  }
  & > h1 {
    color: rgb(101, 104, 87);
    @media (max-width: 650px) {
      font-size: 0.9em;
    }
    & > span {
      font-weight: normal;

      color: rgb(141, 124, 87);
    }
  }

  & > h3 {
    color: #181818;
    font-size: 1em;
    font-weight: normal;
  }

  & > h4 {
    color: #181818;
    font-size: 0.9em;
    font-weight: normal;
  }

  & > button {
    cursor: pointer;
    margin: 5px;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    @media (max-width: 650px) {
      padding: 5px 5px;
    }
  }
`;

export const CancelButton = styled.button`
  background: red;
`;
export const ViewButton = styled.button`
  background: green;
`;

export const ReceivedButton = styled.button`
  background: rgb(107,153,255);
`