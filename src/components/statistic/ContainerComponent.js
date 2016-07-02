'use strict';

import React from 'react';
import StatisticResultComponent from './ResultComponent';
import { getTypes } from '../../lib/statistics';

require('styles/statistic/Container.scss');

class StatisticContainerComponent extends React.Component {

  static displayName = 'StatisticContainerComponent';

  static propTypes = {
    feature: React.PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    if (! this.props.feature) {
      return (
        <div className="statistic-container-component"></div>
      );
    }

    var feature = this.props.feature.properties;
    var results = getTypes()
      .filter(type => type in feature)
      .map(type => (
          <StatisticResultComponent key={type} type={type} feature={feature} onClick={this.props.onStatisticClick} />
        ));

    return (
      <div className="statistic-container-component">
        <div className="statistic-container-component__title">
          {this.props.feature.properties.name}
        </div>
        <div className="statistic-container-component__content">
          {results}
        </div>
      </div>
    );
  }

}

export default StatisticContainerComponent;
