//DOES NOT WORK CURRENTLY - DEPRECIATED BECAUSE OF LocationSearchBox.js WORKING - WILL REMOVE SOON

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const google = window.google;

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  static propTypes = {
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func
  }


  render() {
    return <input ref={this.myRef} placeholder={this.props.placeholder} type="text"/>
  }
  onPlacesChanged = () => {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
    }
  }
  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.myRef.input)
    this.searchBox = new google.maps.places.SearchBox(input);
    this.searchBoxListener = this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }
  componentWillUnmount() {
    google.maps.event.removeListener(this.searchBoxListener);
  }
}