import React, { useEffect, useState, startTransition } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { CustomerRoute, AdminRoute } from "./routeComponent";
function ProtectedRoutes({ Component }) {
  const navigate = useNavigate();
  
    let userToken = Cookies.get("userToken");

    if (!userToken) {
      return navigate("/", { replace: true });
    }

    userToken = JSON.parse(userToken);

    if (userToken === undefined || userToken == null) {
      navigate("/", { replace: true });
      // return window.location.assign('/')
    }

    if (userToken?.userType?.length <= 0 && userToken?.userToken?.length <= 0) {
      navigate("/", { replace: true });
      // return window.location.assign('/')
    }

  return JSON.parse(Cookies.get("userToken"))?.userType === "customer" ? (
    <CustomerRoute>{Component}</CustomerRoute>
  ) : (
    <AdminRoute>{Component}</AdminRoute>
  );
}

export default ProtectedRoutes;
