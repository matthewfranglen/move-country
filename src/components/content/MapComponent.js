'use strict';

import React from 'react';
import { GeoJson, Map, TileLayer } from 'react-leaflet';

require('styles/content/Map.scss');

const position = [51.505, -0.09];

const style = {
  color: '#333',
  opacity: 0.3
};

class MapComponent extends React.Component {
  render = () => {
    var position = [this.props.x, this.props.y];

    this.map = (
      <Map center={position} zoom={this.props.zoom} maxZoom={this.props.maxZoom}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJson data={this.props.countryBorders} style={style} onEachFeature={this.events} />
      </Map>
    );

    return this.map;
  }

  events = (feature, layer) => {
    layer.bindPopup(feature.properties.name);
    layer.on('click', () => this.props.onCountryClick(feature));
  }
}

MapComponent.displayName = 'ContentMapComponent';

// Uncomment properties you need
// MapComponent.propTypes = {};
// MapComponent.defaultProps = {};

export default MapComponent;
