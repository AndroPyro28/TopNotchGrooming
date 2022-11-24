import React, { useEffect, useState } from "react";
import {
  ButtonContainer,
  DropdownBtn,
  Logo,
  PublicNavbarContainer,
  DropDownContainer,
  HamburgerMenu,
} from "./navbarComponents";
import { NavLink, useLocation } from "react-router-dom";
import HamburgerNavBar from "../shared/HamburgerNavBar";

function PublicNavbar() {
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState(false)
  useEffect(() => {
    if (
      pathname === "/customer/login" ||
      pathname === "/admin/login" ||
      pathname === "/customer/signup"
    ) {
      return setDropdownToggle(true);
    }

    return setDropdownToggle(false);
  }, [pathname]);

  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "",
      background: isActive ? "rgb(142,112,101)" : "",
      color: isActive ? "white" : "rgb(142,112,101)",
    };
  };

  const [dropdownToggle, setDropdownToggle] = useState(false);

  const routesArr = [
    {
      url:'/contact',
      name:'Contact Us'
    },
    {
      url:'/about',
      name:'About Us'
    },
    {
      url:'/public/liveStreamChannels',
      name:'Watch Live'
    },
    {
      url:'/customer/login',
      name:'Login as customer'
    },
    {
      url:'/admin/login',
      name:'Login as admin'
    },
    ]

  return (
    <PublicNavbarContainer>

        {
          openMenu && <HamburgerNavBar routes={routesArr} setOpenMenu={setOpenMenu} navLinkStyles={navLinkStyles} />
        }


      <NavLink to="/">
        <Logo src="/images/logo.png" />
      </NavLink>

      <ButtonContainer>

        <HamburgerMenu className="fa-solid fa-bars" onClick={() => setOpenMenu(true)} />

        <NavLink to={"/contact"} style={navLinkStyles}>
          Contact Us
        </NavLink>
        <NavLink to={"/about"} style={navLinkStyles}>
          About Us
        </NavLink>
        <NavLink to={"/public/liveStreamChannels"} style={navLinkStyles}>
          Watch Live
        </NavLink>
        <DropdownBtn>
          <center onClick={() => setDropdownToggle(!dropdownToggle)}>
            Login as &nbsp;{" "}
            <i
              className={
                dropdownToggle
                  ? `fa-solid fa-chevron-up`
                  : `fa-solid fa-chevron-down`
              }
            ></i>
          </center>

          <DropDownContainer display={dropdownToggle}>
            <NavLink to={"/customer/login"} style={navLinkStyles}>
              Customer
            </NavLink>
            <NavLink to={"/admin/login"} style={navLinkStyles}>
              Admin
            </NavLink>
          </DropDownContainer>
        </DropdownBtn>
      </ButtonContainer>
    </PublicNavbarContainer>
  );
}

export default PublicNavbar;
