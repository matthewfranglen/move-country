'use strict';

import React from 'react';
import StatisticsResultComponent from './ResultComponent';
import { getTypes } from '../../../lib/statistics';

require('styles/details/statistics/Container.scss');

class StatisticsContainerComponent extends React.Component {

  static displayName = 'StatisticsContainerComponent';

  static propTypes = {
    feature: React.PropTypes.object,
    type: React.PropTypes.string,
    onClick: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    var feature = this.props.feature;
    var results = getTypes()
      .filter(type => type in feature)
      .map(type => (<StatisticsResultComponent key={this.createKey(type)} type={type} feature={feature} selected={this.isSelected(type)} onClick={this.props.onClick} />));

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

  createKey(type) {
    return [type, this.props.feature[type], this.isSelected() ? 's' : 'ns'].join('-');
  }

  isSelected(type) {
    return this.props.type === type;
  }

}

export default StatisticsContainerComponent;
