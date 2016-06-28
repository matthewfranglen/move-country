'use strict';

import React from 'react';
import { GeoJson, Map, Marker, Popup, TileLayer } from 'react-leaflet';
import countryBorders from 'json!./europe.geo.json';

require('styles/content/Map.scss');

const position = [51.505, -0.09];

class MapComponent extends React.Component {
  render() {
    return (
      <Map center={position} zoom={3} maxZoom={5}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJson data={countryBorders} style={this.style} onEachFeature={this.events} />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }

  style (feature) {
    if (feature.selected) {
      return {
        color: '#777',
        opacity: 0.7
      };
    }
    return {
      color: '#333',
      opacity: 0.3
    };
  }

  events (feature, layer) {
    feature.properties.selected = false;
    layer.on('click', () => {
      feature.properties.selected = !feature.properties.selected;
      feature.setStyle(this.style);
    });
  }
}

MapComponent.displayName = 'ContentMapComponent';

// Uncomment properties you need
// MapComponent.propTypes = {};
// MapComponent.defaultProps = {};

export default MapComponent;
