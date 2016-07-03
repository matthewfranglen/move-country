'use strict';

import React from 'react';
import StatisticsResultComponent from './ResultComponent';
import { getTypes } from '../../../lib/statistics';

require('styles/details/statistics/Container.scss');

class StatisticsContainerComponent extends React.Component {

  static displayName = 'StatisticsContainerComponent';

  static propTypes = {
    feature: React.PropTypes.object.isRequired,
    type: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    var feature = this.props.feature;
    var results = getTypes()
      .filter(type => type in feature)
      .map(type => {
          var selected = this.props.type === type;
          var key = [type, feature[type], selected ? '-s' : '-ns'].join('-');

          return (
            <StatisticsResultComponent
                key={key}
                type={type}
                feature={feature}
                selected={selected === type}
                onClick={this.props.onClick}
                />
          );
        });

    return (
      <div className="statistics-container-component">
        <div className="statistics-container-component__title">
          is {feature.name} any good?
        </div>
        <div className="statistics-container-component__content">
          {results}
        </div>
      </div>
    );
  }

}

export default StatisticsContainerComponent;
