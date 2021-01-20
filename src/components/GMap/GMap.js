import React, { Component, Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationSearchBox from './LocationSearchBox';
import './GMap.css'

//DEPRECIATED MARKER + HTML (As child of GoogleMapReact) BELOW
//const LatLngMarker = ({ text }) => <div>{text}</div>; 
// <LatLngMarker
// lat={this.state.currentCenter.lat}
// lng={this.state.currentCenter.lng}
// text="Next Location!"
// />

class GMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCenter: {
        lat: -37.815570,
        lng: 144.962960
      }
    };
  }

  moveMap = () => {
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
      lat: -37.815570,
      lng: 144.962960
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

            <div id="map">
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBr0tSPg4hwyEsxxhrRoNuBMFeLh8TQSHU',
                                    libraries: 'places' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                center={this.state.currentCenter}>
                <img
                  lat={this.state.currentCenter.lat}
                  lng={this.state.currentCenter.lng}
                  src={"https://cc-assignment02-bucket.s3.amazonaws.com/images/Cafe+Crusaders+Logo.png"}
                  alt="ERROR: Marker could not be loaded!"
                  height='40'
                  width='40'/>
                </GoogleMapReact>

                <LocationSearchBox moveMap={this.moveMap}></LocationSearchBox>
            </div>
        </Fragment>
    );
  }
}
 
export default GMap;