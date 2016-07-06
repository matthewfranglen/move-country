require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import MapComponent from './MapComponent';
import DetailsComponent from './details/DetailsComponent';

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
        <MapComponent feature={this.state.feature} type={this.state.type} x={51.505} y={-0.09} zoom={3} maxZoom={6} geoData={countries} onClick={this.setCountry} />
        <DetailsComponent feature={this.state.feature} type={this.state.type} setStatistic={this.setStatistic} />
        <FooterComponent />
      </div>
    );
  }

  setCountry(feature) {
    if (feature.properties === this.state.feature) {
      this.setState({ feature: undefined });
    }
    else {
      this.setState({ feature: feature.properties });
    }
  }

  setStatistic(type) {
    if (type === this.state.type) {
      this.setState({ type: undefined });
    }
    else {
      this.setState({ type: type });
    }
  }

}

export default AppComponent;
