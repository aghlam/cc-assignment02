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
        this.state = { address: '' };
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = (address: string, placeId: ?string, suggestion: ?object) => {
        /**
         * TODO Somehow send this information to like a global storage or something, so that if a user
         * decides to rate/review a place, it'll either bring up or create a new databse entry 
         * of said location, to be able to review it and save it to the databse.
         */
        console.log('success address:', address);
        console.log('success id', placeId);
        console.log('success object', suggestion);
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('success', latLng))
            .catch(error => console.error('Error:', error));
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
                        // inline style for demonstration purpose
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