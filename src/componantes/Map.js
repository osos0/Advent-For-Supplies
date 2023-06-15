import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "yyyyyyyyyyyyyyyyyyyy",
  });

  if (!isLoaded) return <div>Loading .... </div>;
  return (
    <>
      <GoogleMap
        zoom={10}
        center={{ lat: 30.0444, lng: 31.2357 }}
        mapContainerClassName="mapCon"
      ></GoogleMap>
    </>
  );
}

export default Map;
