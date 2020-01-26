import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import MyGoogleMap from '../components/GoogleMap';
import mapLocations from '../utils/MapLocations';

class MapPage extends React.Component {
  render() {
    return (
      <div>
        <section id="mapPage" className="section-map">
          <div className='map'>
            <div className='map-container'>
              <LoadScript
                  id="WeselnaMap"
                  googleMapsApiKey={process.env.REACT_APP_MAP_KEY}
                  version={'weekly'}
              >
              <GoogleMap
                id='WeselnaMap'
                center={{ lat: 51.1055089, lng: 17.0685462 }}
                zoom={13}
                mapContainerClassName="google-map__container"
              >
                {mapLocations.map(location => {
                  return (
                    <div key={location.place}>
                    <MyGoogleMap
                      markerPosition={location.markerPosition}
                      infoBoxPosition={location.infoBoxPosition}
                      place={location.place}
                      title={location.title}
                      address={location.address}
                      url={location.url}
                    />
                    </div>
                  )
                })}
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </section>
      </div>
    )
  }
};

export default MapPage;