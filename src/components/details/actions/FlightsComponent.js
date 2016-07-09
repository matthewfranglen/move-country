'use strict';

import React from 'react';
import TileComponent from '../../TileComponent';

require('styles/details/actions/Flights.scss');

class FlightsComponent extends React.Component {

  static displayName = 'FlightsComponent';

  static propTypes = {
    feature: React.PropTypes.object
  };

  render() {
    return (
      <TileComponent icon="plane" url={this.getUrl()} label="Flights" className="flights-component" />
    );
  }

  getUrl() {
    var keyword = this.props.feature.flight || this.props.feature.name;
    return 'http://www.cheapflights.co.uk/flights/' + keyword;
  }

}

export default FlightsComponent;
