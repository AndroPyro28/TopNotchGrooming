import React, { useEffect, useState } from "react";
import { 
    ProfilePageContainer,
    ProfileAvatar,
    ListNavigationButton
} from "./profileComponents";
import {useSelector} from "react-redux";
import {NavLink, Outlet } from "react-router-dom"
function Profile() {
  const {currentUser} = useSelector(state => state.userReducer)
  const [user, setUser] = useState(null) 

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser])

  const NavStyles = ({isActive}) => {
    return {
      borderBottom: isActive ? "solid 2px rgb(99, 98, 98)" : ""
    }
  }
  return (
    <ProfilePageContainer>
      <ProfileAvatar>
        <img src="/images/logo.png" alt="" />
        <span>{user?.firstname} {user?.lastname}</span>
      </ProfileAvatar>

      <ListNavigationButton>
        <NavLink to="personal" style={NavStyles}>Personal Info</NavLink>
        <NavLink to="activities" style={NavStyles}>Activities</NavLink>
      </ListNavigationButton>

      <Outlet />

    </ProfilePageContainer>
  );
}

export default Profile;
