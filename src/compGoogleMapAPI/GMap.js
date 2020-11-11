import React, { useState } from "react";
import './GMap.css';
import GoogleMapReact from 'google-map-react';
//npm i google-map-react installed
//key=API_KEY: AIzaSyCNjBs0OIV3KrS7VwPXS8zu207g4lltFRo


const Map = ({location, zoom}) => {
    
    return (
        <div className="google-map"> 
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyCNjBs0OIV3KrS7VwPXS8zu207g4lltFRo'}}
                defaultCenter={location}
                defaultZoom={zoom}
            >
                {/* <MarkerPin 
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                /> */}
            </GoogleMapReact> 
        </div>
    );
};

export default Map;

