import React, { useEffect, useState } from "react";
import {
  CustomerNavbarContainer,
  TopNavbar,
  SearchBarContainer,
  BrandLogoContainer,
  InfoAndCart,
  BotNavbar,
  DropDown,
  FeedBackButtton,

} from "./navbarComponents";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartPopup from "../cartComponents/CartPopup";
import Logic from "./logic";
import HamburgerNavBar from "../shared/HamburgerNavBar";

function CustomerNavbar() {

  const [openDropdown, setOpenDropdown] = useState(false);
  const [nocartItems, setNoCartItems] = useState(0);
  const [openCart, setOpenCart] = useState(false);

  const { pathname } = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const {navLinkStyles, InfoAndCartClick, handleLogout, openFeedback} 
  = Logic({setOpenCart});

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

  const [openMenu, setOpenMenu] = useState(true)

  const routesArr = [
    {
      url:'/customer',
      name:'Home'
    },
    {
      url:'/customer/store',
      name:'Store'
    },
    {
      url:'/customer/liveStreamChannels',
      name:'Live Streams'
    },
    {
      url:'/customer/appointment',
      name:'Appointments'
    },
    {
      url:'/customer/purchases',
      name:'My purchases'
    },
    ]


  return (
    <CustomerNavbarContainer>
      
      
      <TopNavbar>
        <BrandLogoContainer>
          <Link to="/customer">
            <img src="/images/logo.png" />
          </Link>
        </BrandLogoContainer>

        {/* <SearchBarContainer>
          <input type="text" placeholder="search..." class="search" />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i> &nbsp; Search
          </button>
        </SearchBarContainer> */}
  
        {
          openMenu && <HamburgerNavBar routes={routesArr} setOpenMenu={setOpenMenu} navLinkStyles={navLinkStyles} />
        }

      {/* <HamburgerMenu className="fa-solid fa-bars" onClick={() => setOpenMenu(true)} /> */}

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


        <InfoAndCart>
          <a>
            <button onClick={InfoAndCartClick}>
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

      <BotNavbar className="hamburger">
              <i className="fa-solid fa-bars" onClick={() => setOpenMenu(true)}></i>
      </BotNavbar>

      {/* <FeedBackButtton className="fa-solid fa-envelope-open-text feedbackBtn" onClick={openFeedback}></FeedBackButtton> */}
    </CustomerNavbarContainer>
  );
}

export default CustomerNavbar;
