import React from 'react';
import { ReactComponent as MapIco} from '../assets/SVG/map-marker.svg';

const MapLocation = (props) => (
    <div>
      <MapIco />
      <div>{props.text}</div>
    </div>
);

export default MapLocation;