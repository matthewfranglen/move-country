'use strict';

import React from 'react';
import StatisticComponent from './StatisticComponent';
import { getTypes } from '../../lib/statistics';

require('styles/details/StatisticContainer.scss');

class StatisticContainerComponent extends React.Component {

  static displayName = 'StatisticContainerComponent';

  static propTypes = {
    feature: React.PropTypes.object,
    onClick: React.PropTypes.func
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
          <StatisticComponent key={type + '-' + feature[type]} type={type} feature={feature} onClick={this.props.onClick} />
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
