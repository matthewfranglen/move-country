'use strict';

import React from 'react';

require('styles/content/Statistic.scss');

class StatisticComponent extends React.Component {

  static displayName = 'StatisticComponent';

  static propTypes = {
    onClick: React.PropTypes.func
  };

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div className="statistic-component">
        <div className="statistic-component__label">{this.props.name}</div>
        <a onClick={this.onClick} className="statistic-component__value">{this.props.value}</a>
        <a href={this.props.citation} className="statistic-component__citation">[source]</a>
      </div>
    );
  }

  onClick() {
    this.props.onStatisticClick(this.props.type);
  }

}

export default StatisticComponent;
