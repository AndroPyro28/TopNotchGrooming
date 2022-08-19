import styled from "styled-components";

export const PublicNavbarContainer = styled.nav`
  display: flex;
  backdrop-filter: blur(2px);
  width: 100%;
  justify-content: space-between;
  /* font-family: 'league spartan'; */
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
`;

export const Logo = styled.img`
  padding: 10px;
  border-radius: 50%;
  background: rgb(255,231,147);
  width: 50px;
  height: 50px;
  margin: 10px 20px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px;
  & > a {
      margin: 10px;
      text-decoration: none;
      color: rgb(142,112,101);
      padding: 10px 15px;
      font-weight: 500;
      font-size: 1em;
      border-radius: 10px;
      transition: all .3s ease-in-out;
      /* text-shadow: 1px 3px 5px gray; */

      &:hover {
        background: rgb(142,112,101);
        color: white;
      }
  }


  @media(max-width: 949px) {
    & > a {
    display: none;
    }
  }
`;

export const HamburgerMenu = styled.i`
   color: rgb(142,112,101);
    padding: 10px 15px;
    font-size: 2em;
    cursor: pointer;
    display: none;

    @media(max-width: 949px) {
    & {
      display: block;
    }
    
  }
`
export const DropdownBtn = styled.div`
      text-decoration: none;
      color: rgb(142,112,101);
      cursor: pointer;
      padding: 10px 15px;
      border-radius: 10px;
      font-weight: 600;
      font-size: 1em;
      display: flex;
      flex-direction: column;
      position: relative;
      transition: all .3s ease-in-out;
      /* text-shadow: 1px 3px 5px gray; */

      &:hover {
        background: rgb(142,112,101);
        color: white;
      }

      @media(max-width: 949px) {
        & { 
            display: none;
        }
  }
`

export const DropDownContainer = styled.div`
          position: absolute;
          display: ${({display}) => display ? "flex" : "none"};
          flex-direction: column;
          top: 40px;
          backdrop-filter:blur(3px);
          margin-left: -20px;

          & i {
              font-size: 0.5em !important;
          }

          & > a {
            font-size: 0.9em;
            text-decoration: none;
            color: rgb(142,112,101);
            padding: 10px 20px;
            font-weight: 600;
            transition: all .3s ease-in;
            border-radius: 5px;
            margin: 10px;
            &:hover {
                background: rgb(142,112,101);
                color: white;
            }
          }
`

