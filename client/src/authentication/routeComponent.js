import styled, {createGlobalStyle }from "styled-components";

export const CustomerRoute = styled.main`
  margin-top:  ${({giveMargin}) => giveMargin ? "135px" : "0px"};
`;

export const CustomerGlobalStyles = createGlobalStyle`
/* body {
  overflow:hidden;
} */
    &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px grey;
  }

  &::-webkit-scrollbar-thumb {
    background: goldenrod;
    border-radius: 10px;
  }
`

export const AdminRoute = styled.main`
  /* margin-top:  ${({giveMargin}) => giveMargin ? "135px" : "0px"}; */
`;

export const AdminGlobalStyles = createGlobalStyle`
body {
  /* overflow: hidden; */
}
    &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px grey;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(0,109,143);
    border-radius: 10px;
  }
`