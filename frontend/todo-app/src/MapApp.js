import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as buildingData from "./Data/rmitBuilding.json";



// One-shot position request.
navigator.geolocation.getCurrentPosition(showMap);
function showMap(position) {
  return(
    <GoogleMap>
      <Marker>
      position={{
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }}
        icon={{
          url: `/building.svg`,
          
        }}
      </Marker>
    </GoogleMap>
  );
}


function Map() {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedBuilding(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap 
       defaultZoom={17} 
       defaultCenter={{lat: -37.807912, lng: 144.963102 }}
    >
      {buildingData.features.map(building => (
        <Marker 
          key={building.properties.Building_ID}
          position={{
          lat: building.geometry.coordinates[1],
          lng: building.geometry.coordinates[0]
        }}
        onClick={() => {
          setSelectedBuilding(building);
        }}
        icon={{
          url: `/building.svg`,
          scaledSize: new window.google.maps.Size(25, 25)
        }}
      />
    ))}
    {selectedBuilding && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedBuilding(null);
          }}
          position={{
            lat: selectedBuilding.geometry.coordinates[1],
            lng: selectedBuilding.geometry.coordinates[0]
          }}
        >
          <div>
            <h2>{selectedBuilding.properties.NAME}</h2>
            <p>{selectedBuilding.properties.DESCRIPTIO}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));


export default function App() {
  return (
  <div style={{width:'1200px', height: '800px' }}>
     <WrappedMap 
     googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAAen9e22aK-VzY8Rpq8RiOE0OEBjZVoFs`}
     loadingElement={<div style={{ height: "100%" }}/>}
     containerElement={<div style={{ height: "100%" }}/>}
     mapElement={<div style={{ height: "100%" }}/>}
     />
  </div>
  );
}