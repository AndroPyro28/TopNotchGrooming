import React from 'react'
import Cookies from 'js-cookie';
import {AdminNavbarContainer, HamburgerMenu, AdminAvatar, LeftNav, RightNav, NavPages} from "./components"
import {NavLink} from "react-router-dom"
import {useSelector} from "react-redux";
import { useState } from 'react';
import HamburgerNavBar from '../shared/HamburgerNavBar';

function AdminNavbar() {

    const {currentUser} = useSelector(state => state.user);
      const handleLogout = () => {
        Cookies.remove("userToken");
        window.location.assign('/admin/login');
      };

      const [openMenu, setOpenMenu] = useState(false)

      const navLinkStyles = ({ isActive }) => {
        return {
          textDecoration: isActive ? "none" : "",
          background: isActive ? "rgb(20,29,53)" : "",
          color: isActive ? "white" : "rgb(20,29,53)",
        };
      };

      const routes = [
        {
          url:`/admin/#`,
          name:"Dashboard",
          icon:'fa-solid fa-chart-line'
        },
        {
          url:`/admin/record/appointments`,
          name:"Appointments",
          icon:'fa-solid fa-calendar-days'
        },
        {
          url:`/admin/record/sales`,
          name:"Sales",
          icon:'fa-solid fa-chart-pie'
        },
        {
          url:`/admin/orders`,
          name:"Orders",
          icon:'fa-solid fa-truck-fast'
        },
        {
          url:`/admin/liveStreamChannels`,
          name:"Live stream channels",
          icon:'fa-solid fa-tv'
        },
        {
          url:`/admin/inventory`,
          name:"Inventory",
          icon:'fa-solid fa-cart-flatbed'
        },

      ]

  return (
    <AdminNavbarContainer >
        
    <LeftNav>

      {
        openMenu && <HamburgerNavBar routes={routes} navLinkStyles={navLinkStyles} setOpenMenu={setOpenMenu} />
      }
      
    <HamburgerMenu className='fa-solid fa-bars' onClick={() => setOpenMenu(true)}>
        {/* {content for mobile here} */}
    </HamburgerMenu>

    <NavPages>
        <NavLink to="/admin/#">
          <i className="fa-solid fa-chart-line"></i> Dashboard
        </NavLink>

        <NavLink to="/admin/record/appointments">
          <i className="fa-solid fa-calendar-days"></i> Appointment
        </NavLink>

        <NavLink to="/admin/record/sales">
          <i className="fa-solid fa-chart-pie"></i> sales
        </NavLink>

        <NavLink to="/admin/orders">
          <i className="fa-solid fa-truck-fast"></i> To-Ship
        </NavLink>

        <NavLink to="/admin/liveStreamChannels">
          <i className="fa-solid fa-tv"></i> Live streams
        </NavLink>

        <NavLink to="/admin/inventory">
          <i className="fa-solid fa-cart-flatbed"></i> Inventory
        </NavLink>
    </NavPages>
    </LeftNav>

    <RightNav>
        <AdminAvatar>
            
            <img src={currentUser?.profile_image_url}/>
            <span className='admin__name'>{currentUser?.firstname} {currentUser?.lastname} </span>
            
        </AdminAvatar>
        <span className='admin__logout' onClick={handleLogout}>Logout</span>

    </RightNav>
        

    </AdminNavbarContainer>
  )
}

export default AdminNavbar