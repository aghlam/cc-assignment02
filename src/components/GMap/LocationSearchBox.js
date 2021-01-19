//Most of this code can be attributed to the below citation.
//[1]K. Hibino, "react-places-autocomplete", npm, 2020. [Online]. Available: https://www.npmjs.com/package/react-places-autocomplete. [Accessed: 15- Jan- 2021].

import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng, } from 'react-places-autocomplete';

const searchOptions = {
    location: new window.google.maps.LatLng(-37.840935,144.946457),
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
    };

    render() {
        return(
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
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