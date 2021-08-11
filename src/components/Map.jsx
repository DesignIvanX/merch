import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ data }) => {
  const mapContainerStyle = {
    height: "50vh",
    width: "100%",
  };
  const defaultCenter = {
    lat: parseFloat(data.latitude),
    lng: parseFloat(data.longitude),
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyBqtfdNws7OllPzejQzL4-XBNUYSeILzO4">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
