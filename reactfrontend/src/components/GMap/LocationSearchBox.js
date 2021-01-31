//Some of this code can be attributed to the below citation.
//[1]K. Hibino, "react-places-autocomplete", npm, 2020. [Online]. Available: https://www.npmjs.com/package/react-places-autocomplete. [Accessed: 15- Jan- 2021].

import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng, } from 'react-places-autocomplete';

const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY
const SECRET_KEY = process.env.REACT_APP_AWS_SECRET_KEY

//Creation of logger for LocationSearchBox.js
const { Logger } = require('aws-cloudwatch-log-browser')
const config = {
    logGroupName: 'cc-a2-logger', 
	logStreamName: 'cc-a2-map-stream', 
	region: 'us-east-1', 
	accessKeyId: ACCESS_KEY, 
	secretAccessKey: SECRET_KEY, 
	uploadFreq: 2000,
	local: false
}
const logger = new Logger(config)

const searchOptions = {
    location: new window.google.maps.LatLng(-37.815570,144.962960),
    radius: 2000,
    types: ['establishment']
}

class LocationSearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
        };
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = (address: string, placeId: ?string, suggestion: ?object) => {
        //Placing both the { lat, lng } AND placeId of the selected location into local storage
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {localStorage.setItem('currentPos', JSON.stringify(latLng))})
            .catch(error => console.error('Error:', error));
        localStorage.setItem('placeID', placeId);
        
        //Adding/updating area just under "Cafe Map" to display what address you have selected
        var selectionMessage = "Selected cafe is: " + address;
        document.getElementById('currentPlaceID').innerHTML = selectionMessage;

        //Then moving the lat/lng location from the parent component GMap, hence moving the map.
        this.props.moveMap();
        
        //Logs to relevant Log Stream
        logger.log("Location Searched: " + address + " with placeId: " + localStorage.getItem('placeID') + " and coordinates: " + localStorage.getItem('currentPos'));
    };

    render() {
        return(
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect.bind(this)}
                searchOptions={searchOptions}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <input
                    {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input',
                    })}
                    />
                    <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                        const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                        const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };

                        suggestion.isCafe = false;

                        for (var i = 0; i < suggestion.types.length; i++) {
                            if (suggestion.types[i] === 'cafe') {
                                suggestion.isCafe = true;
                            }
                        }

                        return (
                        <div
                            {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                            })}
                        >
                            {suggestion.isCafe === true && <span>{suggestion.description}</span>}
                        </div>
                        );
                    })}
                    </div>
                </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

export default LocationSearchBox;