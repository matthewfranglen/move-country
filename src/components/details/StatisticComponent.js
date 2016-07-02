'use strict';

import React from 'react';
import { getDescription, toEmoji } from '../../lib/statistics';

require('styles/details/Statistic.scss');

class StatisticComponent extends React.Component {

  static displayName = 'StatisticComponent';

  static propTypes = {
    type: React.PropTypes.string,
    feature: React.PropTypes.object,
    onClick: React.PropTypes.func
  };

  constructor(props) {
    super(props);

    var description = getDescription(this.props.type);
    var value = toEmoji(this.props.feature[this.props.type], this.props.type);
    this.state = {
      name: description.name,
      value: value,
      citation: description.citation
    };

    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div className="statistic-component">
        <div className="statistic-component__label">{this.state.name}</div>
        <a onClick={this.onClick} className="statistic-component__value">{this.state.value}</a>
        <a href={this.state.citation} className="statistic-component__citation">[source]</a>
      </div>
    );
  }

  onClick() {
    this.props.onClick(this.props.type);
  }

}

export default StatisticComponent;
