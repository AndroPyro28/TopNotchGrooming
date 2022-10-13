import React, { useEffect } from "react";
import { FooterContainer, Links, Socials, Socials2 } from "./components";
import {useLocation, Link} from "react-router-dom";
function Footer() {
  const {pathname} = useLocation();

  const marginTopRoutes = [
    '/contact',
    '/about',
    '/customer/profile',
    '/customer/store',
    '/admin/sales',
    '/admin/orders',
    '/customer/purchases'
  ]
  return (
    <FooterContainer pathname={pathname} giveMarginTop={marginTopRoutes.includes(pathname)}>
      {/* <img src="/images/logo.png" /> */}

      <Links pathname={pathname}>
        <Link to={'/about'}>About us</Link>
        <Link to="#">Terms and condition</Link>
        <Link to="#">Privacy Policy</Link>
        <Link to="/contact">Return and Exchange Policy</Link>

        <Socials pathname={pathname}>
        <a href="https://www.facebook.com/TopNotchDogGrooming/">
          {/* <i className="fa-brands fa-facebook"></i> */}
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/topnotch.grooming/?fbclid=IwAR1vOqujXiDM8iTdTS0dkD761elEsRnrM4hwkXxEToMu7LoIpORujGW_m5c">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwPxWjgnMHKrvXRntQLxZRbhmDPjNZKXrWhQwQJmFFvlGcCWdfMbVGFkjfshMSTDzGjdGjr">
          {/* <i className="fa-solid fa-envelope"></i> */}
          <i className="fa-regular fa-envelope"></i>
        </a>
      </Socials>
      </Links>

      <Socials2>
        <span><i className="fa-regular fa-envelope"></i> &nbsp; Topnotchdoggrooming.tndg@gmail.com </span>
        <span><i className="fa-solid fa-phone"></i> &nbsp; +639157358899 / (044) 305 2370 </span>
        <span><i className="fa-solid fa-location-dot"></i> &nbsp; Macarthur Highway, San Pablo 3000 Malolos</span>
      </Socials2>
    </FooterContainer>
  );
}

export default Footer;
