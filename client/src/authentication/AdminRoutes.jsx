import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { AdminRoute, AdminGlobalStyles} from "./routeComponent";
function AdminRoutes({ Component }) {
  const navigate = useNavigate();
  const {pathname} = useLocation();
    let userToken = Cookies.get("userToken");
    const removeMargin = pathname?.includes('liveStreamChannels/room=')

    if (!userToken) return navigate("/", { replace: true });
    
    userToken = JSON.parse(userToken);

    if (userToken === undefined || userToken == null) return navigate("/", { replace: true });
    
    if (userToken?.userType?.length <= 0 && userToken?.userToken?.length <= 0) return navigate("/", { replace: true });

  return JSON.parse(Cookies.get("userToken"))?.userType === "admin" ? (
    <AdminRoute removeMargin={removeMargin}>
      <AdminGlobalStyles />
      {Component}
      </AdminRoute>
  ) : (
    navigate('/customer/profile', {replace: true})
  );
}

export default AdminRoutes;
