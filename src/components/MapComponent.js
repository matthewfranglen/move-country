'use strict';

import React from 'react';
import { GeoJson, Map, TileLayer } from 'react-leaflet';
import { toColor } from '../lib/statistics';

require('styles/Map.scss');

class MapComponent extends React.Component {

  static displayName = 'MapComponent';

  static propTypes = {
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    zoom: React.PropTypes.number,
    maxZoom: React.PropTypes.number,
    geoData: React.PropTypes.object,
    feature: React.PropTypes.object,
    type: React.PropTypes.string,
    onClick: React.PropTypes.func
  }

  constructor(props) {
    super(props);

    this.geoData = [];

    this.events = this.events.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateCountryLayer = this.updateCountryLayer.bind(this);
  }

  componentWillMount() {
    var position = [this.props.x, this.props.y];

    this.map = (
      <Map className="map-component" center={position} zoom={this.props.zoom} maxZoom={this.props.maxZoom}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJson data={this.props.geoData} onEachFeature={this.events} />
      </Map>
    );
  }

  render() {
    this.updateLayers();

    return this.map;
  }

  events(feature, layer) {
    var country = { feature: feature, layer: layer };
    this.geoData.push(country);

    layer.bindPopup(feature.properties.name);
    layer.on('click', () => this.handleClick(feature));

    this.updateCountryLayer(country);
  }

  handleClick(feature) {
    this.props.onClick(feature);
  }

  updateLayers() {
    this.geoData.forEach(this.updateCountryLayer);
  }

  updateCountryLayer(country) {
    if (! this.props.feature) {
      country.layer.setStyle({
        stroke: false,
        color: '#333'
      });

      return;
    }

    if (! this.props.type) {
      country.layer.setStyle({
        stroke: this.isSelected(country),
        color: '#333'
      });

      return;
    }

    country.layer.setStyle({
      stroke: this.isSelected(country),
      color: this.getColor(country)
    });

  }

  isSelected(country) {
    return country.feature.properties.name === this.props.feature.name;
  }

  getColor(country) {
    return toColor(country.feature.properties[this.props.type], this.props.type);
  }


}

export default MapComponent;
