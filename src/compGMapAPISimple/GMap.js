// import React, { useState } from "react";
import React from "react";
import "./GMap.css"; //direct CSS import - not component encapsulated, apply to whole app
import GoogleMapReact from "google-map-react"; //npm i google-map-react used-installed
//not installing iconify - use cdn instead
// import { Icon } from '@iconify/react';   
// import locationIcon from '@iconify-icons/mdi/map-marker';

//not exporting this func as it is being used inside Map
const MarkerPin = ({ addy }) => (  //omitting { return ...}
  <div className="pinDiv">
    {/* <Icon icon={locationIcon} className="pin" /> //not installing iconify - use cdn instead*/}
    <span className="iconify pinIcon" data-icon="mdi:map-marker" data-inline="false"></span>
    <p className="pinText">{addy}</p>
  </div>
);

const Map = ({ location }) => {  // const Map = ({ location, zoom, addy }) => {
  return (
    <div className="googleMap">
      <GoogleMapReact
      //bootstrapURLKeys={{ key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' }}
        bootstrapURLKeys={{ key: process.env.REACT_APP_APIKEY_GMAP }}
        defaultCenter={location}
        defaultZoom={location.zoom} //1:World  10:City  20:Buildings
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

/**
 * the GoogleMapReact component takes in a child, MarkerPin, 
 * note that it can take in any number of children. 
 * MarkerPin will render the text prop on top of the map 
 * at the location we specify with the lat and lng props. 
 */