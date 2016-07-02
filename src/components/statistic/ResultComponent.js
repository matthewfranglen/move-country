'use strict';

import React from 'react';
import { getDescription, toEmoji } from '../../lib/statistics';

require('styles/statistic/Result.scss');

class StatisticResultComponent extends React.Component {

  static displayName = 'StatisticResultComponent';

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
      <div className="statistic-result-component">
        <div className="statistic-result-component__label">{this.state.name}</div>
        <a onClick={this.onClick} className="statistic-result-component__value">{this.state.value}</a>
        <a href={this.state.citation} className="statistic-result-component__citation">[source]</a>
      </div>
    );
  }

  onClick() {
    this.props.onClick(this.props.type);
  }

}

export default StatisticResultComponent;
