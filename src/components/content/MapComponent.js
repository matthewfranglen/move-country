'use strict';

import React from 'react';
import { GeoJson, Map, TileLayer } from 'react-leaflet';

require('styles/content/Map.scss');

class MapComponent extends React.Component {
  getInitialState = () => {
    return {layers: []};
  }

  render = () => {
    var position = [this.props.x, this.props.y];

    this.map = (
      <Map center={position} zoom={this.props.zoom} maxZoom={this.props.maxZoom}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJson data={this.props.countryBorders} onEachFeature={this.events} />
      </Map>
    );

    return this.map;
  }

  componentWillMount = () => {
    this.layers = [];
  }

  events = (feature, layer) => {
    this.layers.push(layer);
    layer.bindPopup(feature.properties.name);
    layer.on('click', () => this.handleClick(feature, layer));
  }

  handleClick = (feature, layer) => {
    this.layers.forEach(l => l.setStyle({ color: '#333' }));
    layer.setStyle({ color: '#4A4' });
    this.props.onCountryClick(feature);
  }
}

MapComponent.displayName = 'ContentMapComponent';

// Uncomment properties you need
// MapComponent.propTypes = {};
// MapComponent.defaultProps = {};

export default MapComponent;
