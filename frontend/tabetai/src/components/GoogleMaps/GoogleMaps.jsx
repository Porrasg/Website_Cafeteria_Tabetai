import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 9.9847551,
    lng: -84.7337431,
  };

  return (
    <LoadScript googleMapsApiKey="TU_API_KEY">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={18}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
