import styled from "styled-components";

export const CustomerNavbarContainer = styled.nav`
    display: flex;
  backdrop-filter: blur(3px);
  background: white;
  /* justify-content: space-between; */
  /* border-bottom: solid 2px rgb(216, 216, 216); */
  /* background: rgb(248, 241, 231); */
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  z-index: 5;
  /* text-shadow: 1px 2px 3px gray; */
  flex-direction: column;
  /* background: black; */
`

export const TopNavbar = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 0px 10px;
  margin: 0px;
`

export const BrandLogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  transform: translateX(50px);
  color: gray;
  flex:1;
  & a > img {
    height: 50px;
    width: 50px;
    margin: 5px;
    cursor: pointer;
    background: rgb(255,231,147);
    border-radius: 50%;
    padding: 10px;
    object-fit: cover;
  }
  `;

  export const SearchBarContainer = styled.div`
    display: flex;
    height: 30px;
    flex:1;
    & > input {
        flex:1;
        height: 100%;
        border-radius: 5px;
        width: 100%;
        border: solid 2.5px rgb(8, 8, 8);
        font-size: 100%;
        padding-left: 10px;
        outline: none;
    }

    & > button {
        padding: 17px 20px;
        display: flex;
        align-items: center;
        font-size: 1em;
        background: black;
        color: white;
        border: none;
        margin-left: 5px;
        border-radius: 5px;
        cursor: pointer;
        transition: all .3s ease-in-out;

        &:hover {
            color: black;
            background: rgb(230, 230, 230);
        }
    }

    @media (max-width: 950px) {
          display: none;
        }
  `

  export const InfoAndCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    text-overflow: 1px 3px 5px black;
    flex:1;
  
    
    @media (max-width: 950px) {
         justify-content: flex-end;
         margin-inline: 50px;
        }
    & a > button {
        display: flex;
        align-items: center;
        padding: 17px 20px;
        font-size: 1em;
        background: white;
        border: solid 2.5px black;
        border-radius: 10px;
        height: 30px;
        margin-right: 50px;
        cursor: pointer;
        transition: all .3s ease-in-out;

        @media (max-width: 950px) {
          display: none;
        }

        

        & > .cart__number__item {
        padding: 0px 6px;
        background: rgb(172, 172, 172);
        color: white;
        transition: all .3s ease-in-out;
        border-radius: 50%;
    }

        &:hover {
            background: black;
            color: white;
        }

        &:hover > .cart__number__item {
            background: rgb(255, 255, 255);
            color: rgb(2, 2, 2);
        }
    }

    & a > .userProfile {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin: 0 5px 0 5px;
        cursor: pointer;
        object-fit: cover;
        border:solid 2px gray;
    }
  `

  export const BotNavbar = styled.section`

  margin-top: -5px;
  width: 100%;
  display: flex;
  justify-content: center;

  & > a {
    padding: 10px 20px;
    margin: 5px;
    color: black !important; 

    &:hover {
      border-bottom: solid 2px gray; 
    }
  }

  @media(max-width:580px) {
    &  > a > span {
      display:none;
    } 
  }
  `

  export const DropDown = styled.div`
    position: relative;

    & > .dropDownBtn {
      padding: 5px;
      cursor: pointer;
      border-radius: 50%;
      &:hover {
        background: rgb(255,231,147);
      }
    }


    & > .dropdown__content {
      position: absolute;
      display: flex;
      flex-direction: column;
      background: #EAEAEA;
      margin-left: -50px;
      margin-top: -5px;
      border-radius: 10px;
      overflow: hidden;
      & > a {
        padding: 10px 20px;
        cursor: pointer;
        color: black;
        &:hover {
          background: gray;
          color: white;
        }
      }
  }
  `