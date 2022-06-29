import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import {
  ContactPageContainer,
  MapContainer,
  BannerContainer,
  BannerContent,
  DogImage,
  GetInTouchContainer,
  OurLocationContainer,
} from "./contact";

import {motion} from "framer-motion";

mapboxgl.accessToken =
  process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function Contact() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = [120.84209846945171, 14.84324365723167];

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: 15,
    });

    const locator = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      showUserHeading: true,
      trackUserLocation: true,
    });
    new mapboxgl.Marker({ color: "red" }).setLngLat(center).addTo(map.current);
    map.current.addControl(locator);
    map.current.addControl(new mapboxgl.AttributionControl());
  });

  const childVariants = {
    initial: {
      x:"-100vw"
    },
    animate: {
      x:0,
      transition: {
        delay:0.2,
        type:"tween",
        duration:0.6
      }
    }
  }

  const dogVariants = {
    initial: {
      opacity:0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay:1
      }
    }
  }

  return (
    <ContactPageContainer>
      <BannerContainer>
        <BannerContent>
          <motion.h1
          variants={childVariants}
          animate="animate"
          initial="initial"
          >C o n t a c t &nbsp; U s</motion.h1>
          <motion.p
          variants={childVariants}
          animate="animate"
          initial="initial">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo a quis
            culpa doloremque quaerat. Optio?
          </motion.p>

          <motion.div class="address_and__phone"
          variants={childVariants}
          animate="animate"
          initial="initial"
          >
            <div class="address">
              <h3>Address</h3>
              <p>Macarthur Highway, San Pablo 3000 Malolos,</p>
            </div>

            <div class="Phone">
              <h3>Phone</h3>
              <p>+639157358899 / (044) 305 2370</p>
            </div>
          </motion.div>

          <motion.div class="email"
          variants={childVariants}
          animate="animate"
          initial="initial"
          >
            <h3>Email</h3>
            <p>topnotchdoggrooming.tndg@gmail.com</p>
          </motion.div>
        </BannerContent>
          <motion.img src="/images/dog6.png" 
            variants={dogVariants}
            animate="animate"
            initial="initial"
          />
      </BannerContainer>

      <GetInTouchContainer>
        <motion.h1
        variants={childVariants}
        animate="animate"
        initial="initial"
        >G e t &nbsp; i n &nbsp; t o u c h</motion.h1>

        <motion.p
        variants={dogVariants}
        animate="animate"
        initial="initial">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          obcaecati ex voluptas <br /> inventore alias aliquid reiciendis libero
          amet. Magnam, harum.
        </motion.p>

        <motion.button
          variants={dogVariants}
          animate="animate"
          initial="initial"
        >Get An Appointment</motion.button>
      </GetInTouchContainer>

      <OurLocationContainer>
        <motion.h1
        variants={dogVariants}
          animate="animate"
          initial="initial"
        >O u r &nbsp; L o c a t i o n</motion.h1>
        <motion.h1
        variants={dogVariants}
          animate="animate"
          initial="initial"
        >___</motion.h1>

        <MapContainer ref={mapContainer} />
      </OurLocationContainer>
    </ContactPageContainer>
  );
}

export default Contact;
