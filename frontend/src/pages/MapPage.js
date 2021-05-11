import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import MyGoogleMap from '../components/GoogleMap'
import mapLocations from '../utils/MapLocations'

const center = {
  lat: 51.205,
  lng: 16.82,
}

const options = {
  draggable: true,
}

const zoom = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  let zoom
  width > 800 && height > 400 ? (zoom = 12) : (zoom = 11)
  return zoom
}

class MapPage extends React.Component {
  render() {
    return (
      <div>
        <section id='mapPage' className='section-map'>
          <div className='map'>
            <div className='map-container'>
              <LoadScript
                id='WeselnaMap'
                googleMapsApiKey={process.env.REACT_APP_MAP_KEY}
                version={'weekly'}>
                <GoogleMap
                  id='WeselnaMap'
                  center={center}
                  zoom={zoom()}
                  mapContainerClassName='google-map__container'
                  mapContainerStyle={{ height: '100%' }}
                  options={options}>
                  {mapLocations.map((location) => {
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
}

export default MapPage
