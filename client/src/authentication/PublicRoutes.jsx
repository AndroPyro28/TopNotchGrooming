import React, { useEffect } from "react";
import Cookies from "js-cookie";

function PublicRoutes({ Component }) {

  useEffect(() => {
    let userToken = Cookies.get("userToken");

    if (userToken) {
      userToken = JSON.parse(userToken);
    }

    if (userToken != undefined || userToken != null || userToken) {
        if(userToken?.userToken?.length > 0 && userToken?.userType === "customer") {
            return window.location.assign('/customer')
        }

        if(userToken?.userToken?.length > 0 && userToken?.userType === "admin") {
            return window.location.assign('/admin')
            ;
        }
    }
  }, []);


  return <>{Component}</>;
}

export default PublicRoutes;
