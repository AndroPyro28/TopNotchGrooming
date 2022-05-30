import React, { useState } from 'react'
import { ButtonContainer, DropdownBtn, Logo, PublicNavbarContainer } from './navbarComponents'
import {NavLink} from "react-router-dom"
function PublicNavbar() {

  const navLinkStyles = ({isActive}) => {
    return {
        textDecoration: isActive ? "none" : "",
        background: isActive ? "rgb(142,112,101)" : "",
        color: isActive ? "white" : "",
    }
}

const [dropdownToggle, setDropdownToggle] = useState(false);

  return (
    <PublicNavbarContainer>
        <Logo src='/images/logo.png' onClick={() => window.location.assign('/')} />

        <ButtonContainer>
        <i className="fa-solid fa-bars"></i>
        <NavLink to={"/contact"} style={navLinkStyles} >Contact Us</NavLink>
        <NavLink to={"/about"} style={navLinkStyles} >About Us</NavLink>
        <DropdownBtn display={dropdownToggle}> 
          <center onClick={() => setDropdownToggle(!dropdownToggle)}>Login as <i className={dropdownToggle ? `fa-solid fa-chevron-up`: `fa-solid fa-chevron-down`}></i></center>

            <div className='dropDownContainer' >
              <NavLink to={"/customer/login"} style={navLinkStyles} >Customer</NavLink>
              <NavLink to={"/admin/login"} style={navLinkStyles} >Admin</NavLink>
            </div>
            
        </DropdownBtn>
        {/* <NavLink to={""}>Login As</NavLink> */}
        </ButtonContainer>
    </PublicNavbarContainer>
  )
}

export default PublicNavbar