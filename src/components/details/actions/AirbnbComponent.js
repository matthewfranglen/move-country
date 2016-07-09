'use strict';

import React from 'react';
import TileComponent from '../../TileComponent';

require('styles/details/actions/Airbnb.scss');

class AirbnbComponent extends React.Component {

  static displayName = 'AirbnbComponent';

  static propTypes = {
    feature: React.PropTypes.object
  };

  render() {
    return (
      <TileComponent icon="bed" url={this.getUrl()} label="Accommodation" className="airbnb-component" />
    );
  }

  getUrl() {
    if (! this.props.feature) {
      return undefined;
    }

    var keyword = this.props.feature.airbnb || this.props.feature.name;
    return 'https://www.airbnb.co.uk/s/' + keyword;
  }

}

export default AirbnbComponent;
