require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import HeaderComponent from './header/HeaderComponent';
import FooterComponent from './footer/FooterComponent';
import MapComponent from './content/MapComponent';
import StatisticsComponent from './content/StatisticsComponent';

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
        <StatisticsComponent visible={this.state.feature !== undefined} feature={this.state.feature}/>
        <FooterComponent />
      </div>
    );
  },

  setCountry: function (feature) {
    this.setState({
      feature: feature
    });
  }
});

export default AppComponent;
