import React, { useEffect } from "react";
import { FooterContainer, Links, Socials } from "./components";
import {useLocation} from "react-router-dom";
function Footer() {
  const {pathname} = useLocation();

  const marginTopRoutes = [
    '/contact',
    '/about',
    '/customer/profile',
    '/customer/store',
    '/admin/sales',
    '/admin/orders'
  ]
  return (
    <FooterContainer pathname={pathname} giveMarginTop={marginTopRoutes.includes(pathname)}>
      <img src="/images/logo.png" />

      <Links pathname={pathname}>
        <a href="#">About us</a>
        <a href="#">Careers</a>
        <a href="#">Locations</a>
        <a href="#">FAQ</a>
        <a href="#">Contact Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms and condition</a>
      </Links>

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
    </FooterContainer>
  );
}

export default Footer;
