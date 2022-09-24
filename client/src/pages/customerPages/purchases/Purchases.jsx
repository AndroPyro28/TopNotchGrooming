import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import {PurchasesContainer, LinksContainer, GlobalStyles} from "./components"
function Purchases() {

  const navLinkStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "solid 2px rgb(141, 124, 87)" : "",
    };
  };
  return (
    <PurchasesContainer>
        <LinksContainer>
        <NavLink style={navLinkStyles} to={'preparing'}>Preparing</NavLink>
        <NavLink style={navLinkStyles} to={'to-receive'}>To Receive</NavLink>
        </LinksContainer>
        <Outlet />
    </PurchasesContainer>
  )
}

export default Purchases