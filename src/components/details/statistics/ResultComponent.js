'use strict';

import React from 'react';
import { getDescription, toEmoji } from '../../../lib/statistics';

require('styles/details/statistics/Result.scss');

class StatisticsResultComponent extends React.Component {

  static displayName = 'StatisticsResultComponent';

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
      <div className="statistics-result-component">
        <div className="statistics-result-component__label">{this.state.name}</div>
        <a onClick={this.onClick} className="statistics-result-component__value">{this.state.value}</a>
        <a href={this.state.citation} className="statistics-result-component__citation">[source]</a>
      </div>
    );
  }

  onClick() {
    this.props.onClick(this.props.type);
  }

}

export default StatisticsResultComponent;
