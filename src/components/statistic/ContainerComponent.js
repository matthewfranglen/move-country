'use strict';

import React from 'react';
import StatisticResultComponent from './ResultComponent';
import { getTypes, getDescription, toEmoji } from '../../lib/statistics';

require('styles/statistic/Container.scss');

class StatisticContainerComponent extends React.Component {

  static displayName = 'StatisticContainerComponent';

  constructor(props) {
    super(props);
  }

  render() {
    if (! this.props.feature) {
      return (
        <div className="statistic-container-component"></div>
      );
    }

    var makeResult = (type) => {
      var description = getDescription(type);
      var value = toEmoji(feature[type], type);
      var click = this.props.onStatisticClick;

      return (
        <StatisticResultComponent key={description.name} type={type} name={description.name} value={value} citation={description.citation} onStatisticClick={click} />
      );
    };
    var feature = this.props.feature.properties;
    var results = getTypes()
      .filter(t => t in feature)
      .map(makeResult);

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
