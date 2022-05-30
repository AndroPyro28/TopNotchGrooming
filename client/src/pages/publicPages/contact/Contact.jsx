import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

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
    <div>
      <div
        ref={mapContainer}
        className="map-container"
        style={{ height: 400, width: "100%" }}
      ></div>
    </div>
  );
}

export default Contact;
