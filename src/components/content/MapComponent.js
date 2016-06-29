'use strict';

import React from 'react';
import { GeoJson, Map, Marker, Popup, TileLayer, PropTypes as MapPropTypes } from 'react-leaflet';
import countryBorders from 'json!./europe.geo.json';

require('styles/content/Map.scss');

const position = [51.505, -0.09];

const style = {
  color: '#333',
  opacity: 0.3
};

const MyMarker = ({ children, position }) => (
  <Marker position={position}>
    <Popup>
      <span>{children}</span>
    </Popup>
  </Marker>
);
MyMarker.propTypes = {
  children: MapPropTypes.children,
  position: MapPropTypes.latlng
};

class MapComponent extends React.Component {
  render = () => {
    this.map = (
      <Map center={position} zoom={3} maxZoom={5}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJson data={countryBorders} style={style} onEachFeature={this.events} />
      </Map>
    );

    return this.map;
  }

  events = (feature, layer) => {
    var props = this.props;
    var callback = () => {
      props.onCountryClick(feature.properties);
    };

    layer.bindPopup(feature.properties.name);
    layer.on('click', callback);
  }
}

MapComponent.displayName = 'ContentMapComponent';

// Uncomment properties you need
// MapComponent.propTypes = {};
// MapComponent.defaultProps = {};

export default MapComponent;
