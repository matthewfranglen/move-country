require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import MapComponent from './MapComponent';
import DetailsComponent from './details/DetailsComponent';
import { toColor } from '../lib/statistics';

import countries from 'json!../data/europe.geo.json';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      feature: undefined,
      type: undefined
    };
    this.geoData = [];

    this.setCountry = this.setCountry.bind(this);
    this.setStatistic = this.setStatistic.bind(this);
  }

  render() {
    return (
      <div className="index">
        <HeaderComponent />
        <MapComponent x={51.505} y={-0.09} zoom={3} maxZoom={6} geoData={countries} onClick={this.setCountry} />
        <DetailsComponent feature={this.state.feature} setStatistic={this.setStatistic} />
        <FooterComponent />
      </div>
    );
  }

  setCountry(feature, layer, geoData) {
    this.geoData = geoData; // TODO: Don't do this

    geoData
      .map(d => d.layer)
      .forEach(l => l.setStyle({ color: '#333' }));
    layer.setStyle({ color: '#4A4' });

    this.setState({ feature: feature.properties });
  }

  setStatistic(type) {
    this.geoData.forEach(this.setStyle(type));

    this.setState({ type: type });
  }

  setStyle(type) {
    return (datum) => {
      var color = toColor(datum.feature.properties[type], type);
      datum.layer.setStyle({ color: color });
    };
  }

}

export default AppComponent;
