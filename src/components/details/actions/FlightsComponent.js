'use strict';

import React from 'react';
import IconComponent from '../../IconComponent';

require('styles/details/actions/Flights.scss');

class FlightsComponent extends React.Component {

  static displayName = 'FlightsComponent';

  static propTypes = {
    feature: React.PropTypes.object
  };

  render() {
    if (! this.props.feature) {
      return (<div className="flights-component"></div>);
    }

    var keyword = this.props.feature.flight || this.props.feature.name;
    var url = 'http://www.cheapflights.co.uk/flights/' + keyword;

    return (
      <a className="flights-component" target="_blank" href={url}>
        <IconComponent className="flights-component__icon" name="plane"></IconComponent>
        <br />
        <div className="flights-component__label">Flights</div>
      </a>
    );
  }

}

export default FlightsComponent;
