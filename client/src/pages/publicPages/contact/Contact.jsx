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

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5kcm9weXJvMjgiLCJhIjoiY2wyOXlxcWJ2MDBhYzNjczV6dGp2OGx3MiJ9.A8TYyGaDsKLqwqtyy5XjVA";

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

  return (
    <ContactPageContainer>
      <BannerContainer>
        <BannerContent>
          <h1>C o n t a c t &nbsp; U s</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo a quis
            culpa doloremque quaerat. Optio?
          </p>

          <div class="address_and__phone">
            <div class="address">
              <h3>Address</h3>
              <p>Macarthur Highway, San Pablo 3000 Malolos,</p>
            </div>

            <div class="Phone">
              <h3>Phone</h3>
              <p>+639157358899 / (044) 305 2370</p>
            </div>
          </div>

          <div class="email">
            <h3>Email</h3>
            <p>topnotchdoggrooming.tndg@gmail.com</p>
          </div>
        </BannerContent>

        <DogImage src="/images/dog6.png" />
      </BannerContainer>

      <GetInTouchContainer>
        <h1>G e t &nbsp; i n &nbsp; t o u c h</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          obcaecati ex voluptas <br /> inventore alias aliquid reiciendis libero
          amet. Magnam, harum.
        </p>

        <button>Get An Appointment</button>
      </GetInTouchContainer>

      <OurLocationContainer>
        <h1>O u r &nbsp; L o c a t i o n</h1>
        <h1>___</h1>

        <MapContainer ref={mapContainer} />
      </OurLocationContainer>
    </ContactPageContainer>
  );
}

export default Contact;
