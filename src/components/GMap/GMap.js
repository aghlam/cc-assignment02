import React, { Component, Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationSearchBox from './LocationSearchBox';
import './GMap.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GMap extends Component {
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
            </div>

            <div id="map">
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBr0tSPg4hwyEsxxhrRoNuBMFeLh8TQSHU',
                                    libraries: 'places' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                <AnyReactComponent
                    lat={-37.840935}
                    lng={144.946457}
                    text="My Marker"
                />
                </GoogleMapReact>
                <LocationSearchBox></LocationSearchBox>
            </div>
        </Fragment>
      
    );
  }
}
 
export default GMap;