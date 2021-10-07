import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{ fontSize: '32px' }}>{text}</div>
);

export const SimpleMap = () => {
  const defaultProps = {
    center: {
      lat: -27.487808,
      lng: -55.86,
    },
    zoom: 16,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCGaWFenwst0v8pf6B0oUXddPL3D8tey2c' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={-27.4876} lng={-55.86002} text="↖" />
      </GoogleMapReact>
    </div>
  );
};
