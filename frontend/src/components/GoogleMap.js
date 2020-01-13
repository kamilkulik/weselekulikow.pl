import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyGoogleMap = withScriptjs(withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 51.107883, lng: 17.038538 }}
    >
    {props.isMarkerShown && 
      <Marker
      position={{ lat: 51.1063753, lng: 17.0278022 }}
      label="Kościół pod wezwaniem św. Stanisława"
    />}
    {props.isMarkerShown && 
      <Marker 
      position={{ lat: 51.092872, lng: 17.1042674 }}
      label="Zajazd pod kasztanem" 
      />}
    {props.isMarkerShown && 
      <Marker 
      position={{ lat: 51.1117472, lng: 17.0093802 }}
      label="CITI Hotel's Wrocław"
      />}
  </GoogleMap>
)));
 
export default MyGoogleMap;