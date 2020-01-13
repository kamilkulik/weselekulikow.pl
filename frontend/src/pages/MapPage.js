import React from 'react';
import MyGoogleMap from '../components/GoogleMap';

const MapPage = () => (
  <div>
    <section id="mapPage" className="section-map">
      <MyGoogleMap 
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDm33ZvZMZ8Jrx_JaEzBCAxyFVmK4cr9lA&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      />
    </section>
  </div>
);

export default MapPage;