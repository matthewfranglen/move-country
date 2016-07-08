'use strict';

import React from 'react';
import IconComponent from '../../IconComponent';

require('styles/details/actions/Airbnb.scss');

class AirbnbComponent extends React.Component {

  static displayName = 'DetailsActionsAirbnbComponent';

  static propTypes = {
    feature: React.PropTypes.object
  };

  render() {
    if (! this.props.feature) {
      return (<div className="airbnb-component"></div>);
    }

    var keyword = this.props.feature.airbnb || this.props.feature.name;
    var url = 'https://www.airbnb.co.uk/s/' + keyword;

    return (
      <a className="airbnb-component" target="_blank" href={url}>
        <IconComponent className="airbnb-component__icon" name="bed"></IconComponent>
        <br />
        <div className="airbnb-component__label">Accommodation</div>
      </a>
    );
  }

}

export default AirbnbComponent;
