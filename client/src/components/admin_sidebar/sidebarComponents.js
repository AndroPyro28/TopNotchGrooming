import styled from "styled-components";

export const SideNavWrapper = styled.nav`
  position: fixed;
  left: 0px;
  top: 0px;
  background: rgb(52, 58, 64);
  background: rgb(52, 58, 64);
  /* background: rgb(52,58,64); */
  width: 80px;
  /* width: 450px; */
  z-index: 2;
  height: 100%;
  transition: all 0.5s ease;

  &:hover {
    width: 20%;
    transition: all 0.3s ease-in;
  }

  &:hover a {
    display: block !important;
  }

  &:hover .hamburger {
    display: none !important;
  }

  &:hover h1 {
    display: block !important;
  }
  &:hover .title {
    width: 100% !important;
  }
`;

export const SideNavContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.5s ease;
  overflow: hidden;

  &.close h1 {
    display: none;
  }

  &.close a {
    display: none;
    width: 13em;
  }

  /* &.close  i {
    display: none;
    width: 13em;
  } */

  & > a {
    margin: 5px;
    padding: 10px 15px;
    color: #d8d8d8;
    position: relative;
    transition: all 0.3s ease-in;
    /* border-radius: 10px; */
    cursor: pointer;
    text-align: start;
    &:hover {
      color: white;
      background: gray;
    }
  }
`;

export const Title = styled.div`
  height: 50px;
  margin-top: 50px;
  border: none;
  border-top: solid 1px gray;
  border-bottom: solid 1px gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  font-size: 1.1em;
  overflow: hidden;
  & > h1 {
    font-size: 0.9em !important;
    text-align: center;
    color: rgb(216, 216, 216);
    width: 100%;
    overflow: hidden;
  }

  & > i {
    color: white;
    padding: 10px;
    border: solid 1px gray;
    border-radius: 10px;
  }
`;
