require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import HeaderComponent from './header/HeaderComponent';
import FooterComponent from './footer/FooterComponent';
import MapComponent from './content/MapComponent';
import StatisticsComponent from './content/StatisticsComponent';
import { toColor } from './content/statistics';

import countryBorders from 'json!./data/europe.geo.json';

var AppComponent = React.createClass({
  getInitialState: function() {
    return {
      feature: undefined
    };
  },

  render: function() {
    return (
      <div className="index">
        <HeaderComponent />
        <MapComponent x={51.505} y={-0.09} zoom={3} maxZoom={6} countryBorders={countryBorders} onCountryClick={this.setCountry} />
        <StatisticsComponent visible={this.state.feature !== undefined} feature={this.state.feature} onStatisticClick={this.setStatistic} />
        <FooterComponent />
      </div>
    );
  },

  setCountry: function (feature, layer, data) {
    this.data = data; // TODO: Don't do this

    data
      .map(d => d.layer)
      .forEach(l => l.setStyle({ color: '#333' }));
    layer.setStyle({ color: '#4A4' });

    this.setState({
      feature: feature
    });
  },

  setStatistic: function (type) {
    this.data.forEach(this.setStyle(type));
  },

  setStyle: function (type) {
    return (datum) => {
      var color = toColor(datum.feature.properties[type], type);
      datum.layer.setStyle({ color: color });
    };
  }
});

export default AppComponent;
