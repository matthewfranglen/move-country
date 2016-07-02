'use strict';

import React from 'react';

require('styles/statistic/Result.scss');

class StatisticResultComponent extends React.Component {

  static displayName = 'StatisticResultComponent';

  static propTypes = {
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    citation: React.PropTypes.string,
    onClick: React.PropTypes.func
  };

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div className="statistic-result-component">
        <div className="statistic-result-component__label">{this.props.name}</div>
        <a onClick={this.onClick} className="statistic-result-component__value">{this.props.value}</a>
        <a href={this.props.citation} className="statistic-result-component__citation">[source]</a>
      </div>
    );
  }

  onClick() {
    this.props.onStatisticClick(this.props.type);
  }

}

export default StatisticResultComponent;
