import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { CustomerRoute , CustomerGlobalStyles} from "./routeComponent";

function CustomerRoutes({ Component }) {
  
  const {pathname} = useLocation();
    const navigate = useNavigate();
    let userToken = Cookies.get("userToken");

    if (!userToken) {
      return navigate("/", { replace: true });
    }

    userToken = JSON.parse(userToken);

    if (userToken === undefined || userToken == null) {
      navigate("/", { replace: true });
    }

    if (userToken?.userType?.length <= 0 && userToken?.userToken?.length <= 0) {
      navigate("/", { replace: true });
    }

  return JSON.parse(Cookies.get("userToken"))?.userType === "customer" ? (
    <CustomerRoute giveMargin={!pathname?.includes('room=')}>
      <CustomerGlobalStyles />
      {Component}
      </CustomerRoute>
  ) : (
    navigate('/admin/inventory', {replace: true})
  );
}

export default CustomerRoutes;
