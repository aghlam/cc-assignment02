import React, { Component, Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationSearchBox from './LocationSearchBox';
import './GMap.css'

const LatLngMarker = ({ text }) => <div>{text}</div>; 

class GMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCenter: {
        lat: -37.840935,
        lng: 144.946457
      }
    };
  }

  /**
   * Updates this.state.currentCenter, which then moves the map. PLS FIX THIS AT SOME POINT CUZ IDK
   * HOW TO MAKE IT AUTOMATIC WHEN U CLICK ON AN ADDRESS ;-;
   */
  handleClick() {
    this.setState(prevState => ({
      currentCenter: {
        ...prevState.currentCenter,
        lat: (JSON.parse(localStorage.getItem('currentPos'))).lat,
        lng: (JSON.parse(localStorage.getItem('currentPos'))).lng
      }
    }))
  }

  static defaultProps = {
    center: {
      lat: -37.840935,
      lng: 144.946457
    },
    zoom: 11
  };

  render() {
    return (
        <Fragment>
            <div>
                <h1>Cafe Map</h1>
                <p id="currentPlaceID"></p>
            </div>

            <div id="map" onLoad={this.handeLoad}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBr0tSPg4hwyEsxxhrRoNuBMFeLh8TQSHU',
                                    libraries: 'places' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                center={this.state.currentCenter}
                onClick={this.handleClick.bind(this)} //Change this soon to something that happens with onSelect in LocationSearchBox.js
                >
                <LatLngMarker
                    lat={this.state.currentCenter.lat}
                    lng={this.state.currentCenter.lng}
                    text="Next Location!"
                />
                </GoogleMapReact>
                <LocationSearchBox></LocationSearchBox>
            </div>
        </Fragment>
      
    );
  }
}
 
export default GMap;