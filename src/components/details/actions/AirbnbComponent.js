'use strict';

import React from 'react';

require('styles/details/actions/Airbnb.scss');

const airbnbLogo = require('../../../images/airbnb.png');

class AirbnbComponent extends React.Component {

  static displayName = 'DetailsActionsAirbnbComponent';

  static propTypes = {
    feature: React.PropTypes.object
  };

  render() {
    var keyword = this.props.feature.airbnb || this.props.feature.name;
    var url = 'https://www.airbnb.co.uk/s/' + keyword;

    return (
      <div className="airbnb-component">
        <a href={url}>
          <img src={airbnbLogo} alt={'Airbnb for ' + this.props.feature.name} />
        </a>
      </div>
    );
  }

}

export default AirbnbComponent;
