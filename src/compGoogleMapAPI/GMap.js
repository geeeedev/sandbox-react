import React, { useState } from "react";
import "./GMap.css";
import GoogleMapReact from "google-map-react";
//npm i google-map-react used-installed


//not exporting this func as it is being used inside Map
const MarkerPin = ({ addy }) => (  //omitting { return ...}
  <div className="pin">
    {/* <Icon icon={locationIcon} className="pin-icon" /> */}
    <p>{addy}</p>
  </div>
);

const Map = ({ location, zoom }) => {
  return (
    <div className="google-map">
      <GoogleMapReact
        
        bootstrapURLKeys={{ key: "..." }}
        defaultCenter={location}
        defaultZoom={zoom}
      >
        <MarkerPin
          lat={location.lat}
          lng={location.lng}
          addy={location.address}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
