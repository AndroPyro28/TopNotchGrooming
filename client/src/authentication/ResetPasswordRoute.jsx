import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

 function ResetPassword({ Component }) {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URI_PROD}/api/auth`,
          {
            headers: {
              userinfo: Cookies.get("reset_token"),
          }
        }
        );
        const { success, msg } = res.data;
        if (!success && msg?.includes("session expired")) {
          Cookies.remove("reset_token");
          return window.location.assign('/');
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  if(loading) return <h1>loading...</h1>

    return JSON.parse(Cookies.get("reset_token"))
    ? Component
    : navigate("/", { replace: true });
}

export default ResetPassword;
