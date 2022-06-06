import React, { useEffect, useState, startTransition } from "react";
import { useNavigate, useLocation,  } from "react-router-dom";
import Cookies from "js-cookie";
import { CustomerRoute, AdminRoute } from "./routeComponent";
function AdminRoutes({ Component }) {
  const navigate = useNavigate();
    let userToken = Cookies.get("userToken");

    if (!userToken) return navigate("/", { replace: true });
    
    userToken = JSON.parse(userToken);

    if (userToken === undefined || userToken == null) return navigate("/", { replace: true });
      // return window.location.assign('/')
    
    if (userToken?.userType?.length <= 0 && userToken?.userToken?.length <= 0) return navigate("/", { replace: true });
      // return window.location.assign('/')
    

  return JSON.parse(Cookies.get("userToken"))?.userType === "admin" ? (
    <AdminRoute>{Component}</AdminRoute>
  ) : (
    navigate('/customer/profile', {replace: true})
  );
}

export default AdminRoutes;
