import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./googleMap.scss";

function GoogleMapTest() {
  const containerStyle = {
    width: "300px",
    height: "300px",
  };

  const center = {
    lat: 10.80369,
    lng: 106.64275,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyBPz7RH24y96gHdnsEi096JekVQp1zI9mc">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={19}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapTest;
