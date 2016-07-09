'use strict';

import React from 'react';
import StatisticsResultComponent from './ResultComponent';
import StatisticsDescriptionComponent from './DescriptionComponent';
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
    var results = getTypes()
      .filter(type => type in this.props.feature)
      .map(type => (<StatisticsResultComponent key={this.createKey(type)} type={type} feature={this.props.feature} selected={this.isSelected(type)} onClick={this.props.onClick} />));

    return (
      <div className="statistics-container-component">
        <div className="statistics-container-component__title">
          is {this.props.feature.name} any good?
        </div>
        <div className="statistics-container-component__content">
          {results}
        </div>
        <StatisticsDescriptionComponent type={this.props.type} />
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
