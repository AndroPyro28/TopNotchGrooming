import React from 'react'
import {
    AdminListWrapper,
    ListNavigationButton,
    GlobalStyles,
  } from "../appointment/components";

  import {Outlet, NavLink} from "react-router-dom";

function Record() {

    const navLinkStyles = ({isActive}) => {
        return {
            borderBottom: isActive ? 'solid 2px rgb(99, 98, 98)' : ''
        }
    }
  return (
    <AdminListWrapper>
      <GlobalStyles />
      <h1>RECORDS</h1>

      <ListNavigationButton>
        <NavLink to={'appointments'} style={navLinkStyles} >
          Appointments
        </NavLink>
        <NavLink to={'sales'} style={navLinkStyles} >
          Sales
        </NavLink>
      </ListNavigationButton>

      <Outlet />

    </AdminListWrapper>
  )
}

export default Record