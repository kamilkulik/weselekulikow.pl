import React from 'react';
import { Marker, InfoBox } from '@react-google-maps/api';

const infoBoxOptions = {
  closeBoxURL: '',
  
}

export default class MyGoogleMap extends React.Component {
  constructor(props) {
    super(props)
    this.markerClick = this.markerClick.bind(this)
    this.closeClick = this.closeClick.bind(this)
    this.state = {
      show: true,
    }
  }
  markerClick(e) {
    this.setState({ show: !this.state.show });
  }
  closeClick(e) {
    this.setState({ show: false })
  }
  render() {
    return (
      <div>
        <Marker
          position={this.props.markerPosition}
          id={this.props.id}
          onClick={this.markerClick}
          />
        {this.state.show && <InfoBox
          position={this.props.infoBoxPosition}
          onCloseClick={this.closeClick}
          options={infoBoxOptions}
        >
          <div className="google-map__label">
            <h2>{this.props.place}</h2>
            <h4>{this.props.title}</h4>
            <p>{this.props.address}</p>
            <a href={this.props.url}>Pokaż w Google Maps</a>
          </div>
        </InfoBox>}
      </div>
    )
  }
}