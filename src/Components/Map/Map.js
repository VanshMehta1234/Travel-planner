import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Place from "./Place";
const Map = ({ setBounds, userLocation, data, setChild }) => {
  return (
    <div className="w-100" style={{ height: "100vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={userLocation}
        center={userLocation}
        defaultZoom={11}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setBounds({
            sw: { lat: e.bounds.sw.lat, lng: e.bounds.sw.lng },
            ne: { lat: e.bounds.ne.lat, lng: e.bounds.ne.lng },
          });
        }}
        onChildClick={(e) => {
          setChild(e);
        }}
      >
        {data?.map((el, i) => {
          return (
            <Place
              key={i}
              lat={el.latitude ? el.latitude : 0}
              lng={el.longitude ? el.longitude : 0}
              el={el}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

const Marker = ({ text }) => {
  return <div>{text}</div>;
};

export default Map;
