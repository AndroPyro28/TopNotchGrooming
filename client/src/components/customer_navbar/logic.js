import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import deviceType from "../../helpers/DeviceType";
import { useDispatch } from "react-redux";
import { open, close } from "../../redux/feedbackSlice";

function Logic({ setOpenCart, paws, setPaws }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navLinkStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "solid 2px gray" : "",
    };
  };

  const handleLogout = () => {
    Cookies.remove("userToken");
    window.location.assign("/customer/login");
  };

  const InfoAndCartClick = () => {
    const currentDevice = deviceType();
    if (currentDevice === "desktop") {
      setOpenCart((prev) => !prev);
    } else {
      navigate(`/customer/cart`);
    }
  };
  const openFeedback = () => {
    dispatch(open());
  };
  const closeFeedback = () => {
    dispatch(close());
  };
  
  const stars = [1, 2, 3, 4, 5].map((star) => (
    <i className={`fa-solid fa-paw ${paws >= star ? "rated" : ""}`} onClick={() => setPaws(star)}></i>
  ));

  const submitFeedback = () => {
    try {
        
    } catch (error) {
        console.error(error.message);
    }
  }

  return {
    navLinkStyles,
    handleLogout,
    InfoAndCartClick,
    openFeedback,
    closeFeedback,
    stars,
    submitFeedback
  };
}

export default Logic;
