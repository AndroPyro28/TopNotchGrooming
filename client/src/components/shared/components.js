import styled from "styled-components"

export const MenuBackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.548);
  width: 100vw;
  height: 100vh;
  z-index: 500;

  @media (min-width:950px) {
    display: none;
  }

  @media (max-width:949px) {
    display: block;
  }

  & > .closeBtn {
    position: fixed;
    top:20px;
    right: 10px;
    font-size: 2em;
    color: white;
    cursor: pointer;
    padding: 10px;
  }
`
export const MenuList = styled.div`
  flex-direction: column;
  display: flex;
  background: white;
  height: 100vh;
  width: 70%;
  justify-content: space-evenly;
  & > a {
    font-size: 1.2em;
    font-weight: 500;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: #EAEAEA;
    }
  }
`