import React, { useEffect, useState } from "react";
import {
  CustomerNavbarContainer,
  TopNavbar,
  SearchBarContainer,
  BrandLogoContainer,
  InfoAndCart,
  BotNavbar,
  DropDown
} from "./navbarComponents";
import Cookies from "js-cookie";
import { Link, NavLink } from "react-router-dom";
import {useSelector} from "react-redux";


function CustomerNavbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "solid 2px gray" : "",
    };
  };

  const handleLogout = () => {
    Cookies.remove("userToken");
    window.location.reload();
}

const {currentUser} = useSelector((state) => state.userReducer)

  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {

  }, [currentUser])

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
            <img src={currentUser?.profile_image_url} alt="" class="userProfile" />
          </Link>
          <DropDown>
            <i class="fa-solid fa-chevron-down dropDownBtn" onClick={() => setOpenDropdown(!openDropdown)}></i>
            {
              openDropdown && <div className="dropdown__content">
              <Link to={"/customer/profile"}>Profile</Link>
              <a onClick={handleLogout}>Logout</a>
            </div>
            }
            
          </DropDown>
         
        </InfoAndCart>
      </TopNavbar>

      <BotNavbar>
        <NavLink style={navLinkStyles} to="/customer/">
          <i className="fa-solid fa-house"></i> <span>Home</span>
        </NavLink>
        <NavLink style={navLinkStyles} to="/customer/store">
          <i className="fa-solid fa-store"></i> <span>Store</span>
        </NavLink>
        <NavLink style={navLinkStyles} to="/customer/liveStream-Channels">
          <i class="fa-solid fa-tower-broadcast"></i> <span>Live Streams</span>{" "}
        </NavLink>
        <NavLink style={navLinkStyles} to="/customer/appointment">
          <i className="fa-solid fa-calendar-days"></i> <span>Appointment</span>
        </NavLink>
      </BotNavbar>
    </CustomerNavbarContainer>
  );
}

export default CustomerNavbar;
