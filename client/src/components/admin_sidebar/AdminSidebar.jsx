import React from 'react'
import {NavLink} from "react-router-dom";
import {SideNavWrapper, SideNavContainer, Title} from "./sidebarComponents";
import Cookies from "js-cookie"
import { useSelector } from 'react-redux';
function AdminSidebar() {

    const handleLogout = () => {
        Cookies.remove("userToken");
        window.location.reload();
    }

    const {currentUser} = useSelector(state => state.user)

  return (
    <SideNavWrapper>
            <SideNavContainer className='close'>
            <Title className="title">
                <h1 className="elements"> <i className="fa-solid fa-user-shield"></i> {currentUser?.firstname} {currentUser?.lastname} </h1>
                <i className="fa-solid fa-bars hamburger"></i>
            </Title>

            <NavLink to="/admin/#">
                <i className="fa-solid fa-chart-line"></i> &nbsp; Dashboard
            </NavLink>

            <NavLink to="/admin/#">
                <i className="fa-solid fa-calendar-days"></i> &nbsp; Appointment
            </NavLink>

            <NavLink to="/admin/#">
                <i className="fa-solid fa-truck-fast"></i> &nbsp; To-Ship
            </NavLink>

            <NavLink to="/admin/#">
                <i className="fa-solid fa-clock-rotate-left"></i> &nbsp; Records
            </NavLink>
            <NavLink to="/admin/inventory">
                <i className="fa-solid fa-cart-flatbed"></i> &nbsp; Inventory
            </NavLink>

            <a onClick={handleLogout}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i> &nbsp; Logout
            </a>
            </SideNavContainer>
        </SideNavWrapper>
  )
}

export default AdminSidebar