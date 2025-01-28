import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Set the map container size
const containerStyle = {
  width: '100%',
  height: '400px',
};

// Set the default map center (latitude and longitude)
const center = {
  lat: 37.7749, // Example: San Francisco
  lng: -122.4194,
};
// Get API Key from Vite's environment variable
const googleApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="googleApiKey">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10} // Adjust zoom level
      >
        {/* Example Marker */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
