'use strict';

import React from 'react';
import { GeoJson, Map, TileLayer } from 'react-leaflet';

require('styles/Map.scss');

class MapComponent extends React.Component {

  static propTypes = {
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    zoom: React.PropTypes.number,
    maxZoom: React.PropTypes.number,
    countryBorders: React.PropTypes.object,
    onCountryClick: React.PropTypes.func
  }

  static displayName = 'MapComponent';

  constructor(props) {
    super(props);

    this.data = [];

    this.events = this.events.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    var position = [this.props.x, this.props.y];

    this.map = (
      <Map className="map-component" center={position} zoom={this.props.zoom} maxZoom={this.props.maxZoom}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJson data={this.props.countryBorders} onEachFeature={this.events} />
      </Map>
    );
  }

  render() {
    return this.map;
  }

  events(feature, layer) {
    this.data.push({
        feature: feature,
        layer: layer
      });

    layer.setStyle({ color: '#333' });
    layer.bindPopup(feature.properties.name);
    layer.on('click', () => this.handleClick(feature, layer));
  }

  handleClick(feature, layer) {
    this.props.onCountryClick(feature, layer, this.data);
  }

}

export default MapComponent;
