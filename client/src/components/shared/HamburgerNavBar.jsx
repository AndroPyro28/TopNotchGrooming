import React from "react";
import { MenuBackDrop, MenuList } from "./components";
import { NavLink} from "react-router-dom";

function HamburgerNavBar({ setOpenMenu, routes, navLinkStyles }) {

  return (
    <MenuBackDrop>
      <i
        class="fa-solid fa-xmark closeBtn"
        onClick={() => setOpenMenu(false)}
      ></i>

      <MenuList>
        {routes.map((route) => (
          <NavLink to={route.url} style={navLinkStyles}>
            {
                route?.icon && <i className={route?.icon}></i> 
            }
            &nbsp;{route.name}
          </NavLink>
        ))}
      </MenuList>
    </MenuBackDrop>
  );
}

export default HamburgerNavBar;
