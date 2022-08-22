import React, { useEffect, useState } from "react";
import {
  CustomerNavbarContainer,
  TopNavbar,
  SearchBarContainer,
  BrandLogoContainer,
  InfoAndCart,
  BotNavbar,
  DropDown,
} from "./navbarComponents";

import Cookies from "js-cookie";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartPopup from "../cartComponents/CartPopup";
import deviceType from "../../helpers/DeviceType";

function CustomerNavbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "solid 2px gray" : "",
    };
  };
  const handleLogout = () => {
    Cookies.remove("userToken");
    window.location.assign('/customer/login');
  };
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [nocartItems, setNoCartItems] = useState(0);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    (async () => {
      setNoCartItems(cart?.length);
    })();
  }, [cart]);
 
  useEffect(() => {
    (async () => {
      setOpenCart(false);
    })();
  }, [pathname]);

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
          <a>
            <button onClick={
              () => {
                const currentDevice = deviceType() 
                if(currentDevice === "desktop") {
                  setOpenCart(prev => !prev)
                } else {
                  navigate(`/customer/cart`)
                }
              }
              }>
              <i class="fa-solid fa-cart-shopping"></i> &nbsp; Cart &nbsp;
              <span class={`cart__number__item ${nocartItems && "active"}`}>
                {nocartItems}
              </span>
            </button>
          </a>
          <Link to="/customer/profile">
            <img
              src={currentUser?.profile_image_url}
              alt=""
              class="userProfile"
            />
          </Link>

          <DropDown>
            <i
              class="fa-solid fa-chevron-down dropDownBtn"
              onClick={() => setOpenDropdown(prev => !prev)}
            ></i>
            {openDropdown && (
              <div className="dropdown__content">
                <Link to={"/customer/profile"}>Profile</Link>
                <a onClick={handleLogout}>Logout</a>
              </div>
            )}
          </DropDown>

          {/* will move to a component base tommorow */}

          {openCart && <CartPopup nocartItems={nocartItems} /> } 


        </InfoAndCart>
      </TopNavbar>

      <BotNavbar>
        <NavLink style={navLinkStyles} to="/customer/">
          <i className="fa-solid fa-house"></i> <span>Home</span>
        </NavLink>
        <NavLink style={navLinkStyles} to="/customer/store">
          <i className="fa-solid fa-store"></i> <span>Store</span>
        </NavLink>
        <NavLink style={navLinkStyles} to="/customer/liveStreamChannels">
          <i class="fa-solid fa-tower-broadcast"></i> <span>Live Streams</span>{" "}
        </NavLink>
        <NavLink style={navLinkStyles} to="/customer/appointment">
          <i className="fa-solid fa-calendar-days"></i> <span>Appointment</span>
        </NavLink>
        <NavLink style={navLinkStyles} to="/customer/purchases">
        <i className="fa-solid fa-bag-shopping"></i> <span>My purchases</span>
        </NavLink>
      </BotNavbar>
    </CustomerNavbarContainer>
  );
}

export default CustomerNavbar;
