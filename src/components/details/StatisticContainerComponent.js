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
    var feature = this.props.feature.properties;
    var results = getTypes()
      .filter(type => type in feature)
      .map(type => (
          <StatisticComponent key={type + '-' + feature[type]} type={type} feature={feature} onClick={this.props.onClick} />
        ));

    return (
      <div className="statistic-container-component">
        {results}
      </div>
    );
  }

}

export default StatisticContainerComponent;
