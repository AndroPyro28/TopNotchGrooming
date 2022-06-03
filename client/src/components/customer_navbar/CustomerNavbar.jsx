import React from "react";
import {
  CustomerNavbarContainer,
  TopNavbar,
  SearchBarContainer,
  BrandLogoContainer,
  InfoAndCart,
  BotNavbar
} from "./navbarComponents";
import {Link, NavLink} from "react-router-dom"


function CustomerNavbar() {

  const navLinkStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "solid 2px gray" : ""
    };
  };


  return (
    <CustomerNavbarContainer>
      <TopNavbar>

      <BrandLogoContainer>
        <Link to="/customer">
          <img src="/images/logo.png" />
        </Link>
      </BrandLogoContainer>

        <SearchBarContainer>
          <input type="text" placeholder="search..." class="search" />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i> &nbsp; Search
          </button>
        </SearchBarContainer>

        <InfoAndCart>
          <Link to="/customer/cart">
          <button>
            <i class="fa-solid fa-cart-shopping"></i> &nbsp; Cart &nbsp;
            <span class="cart__number__item">5</span>
          </button>
          </Link>
          <Link to="/customer/profile">
            <img src="/images/nicePicture.jpg" alt="" class="userProfile" />
          </Link>
          <i class="fa-solid fa-chevron-down"></i>
        </InfoAndCart>
      </TopNavbar>

      <BotNavbar>
        <NavLink style={navLinkStyles} to="/customer/"><i className="fa-solid fa-house"></i> <span>Home</span></NavLink>
        <NavLink style={navLinkStyles} to="/customer/store"><i className="fa-solid fa-store"></i> <span>Store</span></NavLink>
        <NavLink style={navLinkStyles} to="/customer/liveStream-Channels"><i class="fa-solid fa-tower-broadcast"></i> <span>Live Streams</span> </NavLink>
        <NavLink style={navLinkStyles} to="/customer/appointment"><i className="fa-solid fa-calendar-days"></i> <span>Appointment</span></NavLink>
      </BotNavbar>
    </CustomerNavbarContainer>
  );
}

export default CustomerNavbar;
