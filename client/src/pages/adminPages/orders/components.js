import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    .status {
    width: fit-content;
    padding: 0px 1px;
    border-radius: 5px;
  }

.status__complete {
    background: rgb(235,249,244);
    color: rgb(159,220,198);
}

.status__pending {
    background: rgb(255,247,230);
    color: rgb(255,205,98);
}

.status__onGoing {
    background: rgb(242,244,248);
    color: rgb(64,101,149);
}

.status__cancelled {
    color: rgb(229,111,139);
    background: rgb(253,244,246);
}
`;
export const OrderDetailsContainer = styled.section`
  padding: 20px;

  & > :is(h3, p) {
    margin: 15px;
    text-align: start;
  }

  & > h3 {
    font-size: 2em;
    color: rgb(24, 41, 62);
  }

  & > p {
    font-size: 0.8em;
    color: rgb(131, 140, 151);
  }
`;

export const OrderDetailsList = styled.section``;

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 20px 10px 20px;

  & > .select {
    margin: 20px;
    border: none !important;
    outline: none !important;
    border-radius: 5px;
    padding: 10px 20px;
    color: rgb(131, 140, 151);
  }
`;

export const SearchBarContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  border: solid 1px rgb(131, 140, 151);
  border-radius: 5px;
  flex: 1;
  margin: 20px;

  & > input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }

  & > i {
    padding: 5px;
    color: rgb(131, 140, 151);
  }
`;

export const TableContainer = styled.section`
  display: flex;
  flex-direction: column;

  & > div {
    flex: 1;
    text-align: center;
  }
`;

export const TableRowHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0px;
  padding: 20px;
  color: rgb(58, 72, 90);
  font-weight: 500;
  font-size: 1.1em;
  border: solid 1px lightblue;
  border-left: none;
  border-right: none;
  margin: 20px 0;
`;

export const TableRowData = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0px;
  padding: 20px;
  font-size: 0.9em;
  color: rgb(85, 85, 85);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  align-items: center;

  &:hover {
    color: rgb(38, 67, 110);
    background: #EAEAEA;
  }

  &:hover > .status {
    background: rgb(243, 237, 237);
  }

  & > .status {
    width: fit-content;
    padding: 0px 1px;
    max-height: 25px;
    border-radius: 5px;
  }
`;
export const T_Head = styled.div`
  flex: 1;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;

 @media (max-width:800px) {
  & {
    font-size: 0.9em;
  }
  &.date, &.payment__method, &.payment__method, &.customer, &.products {
    display: none;
  }
 }
`;
export const T_Data = styled.div`
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;

   @media (max-width:800px) {
    &.date, &.payment__method, &.payment__method, &.customer, &.products {
    display: none;
  }
   }

  & > .actionBtn {
    cursor: pointer;
    font-size: 1.5em;
    padding: 10px 15px;
    color: black;
    border-radius: 50%;
  }
`;
