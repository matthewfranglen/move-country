'use strict';

import React from 'react';
import { getDescription, toEmoji, toRank } from '../../../lib/statistics';

require('styles/details/statistics/Result.scss');


class StatisticsResultComponent extends React.Component {

  static displayName = 'StatisticsResultComponent';

  static propTypes = {
    type: React.PropTypes.string.isRequired,
    feature: React.PropTypes.object.isRequired,
    selected: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    var description = getDescription(this.props.type);
    var value = toEmoji(this.props.feature[this.props.type], this.props.type);
    this.state = {
      name: description.name,
      value: value,
      detail: description.detail,
      citation: description.citation
    };

    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div onClick={this.onClick} className={this.getClassName()} >
        <span className="statistics-result-component__icon">{this.state.value}</span>
        <br />
        <div className="statistics-result-component__label">{this.state.name}</div>
      </div>
    );
  }

  onClick() {
    this.props.onClick(this.props.type);
  }

  getClassName() {
    var rank = toRank(this.props.feature[this.props.type], this.props.type);
    var colorClass = 'statistics-result-component--' + rank;
    var selectedClass = this.props.selected ? 'statistics-result-component--selected' : 'statistics-result-component--deselected';
    return makeClassName('statistics-result-component', colorClass, selectedClass);
  }

}

function makeClassName () {
  return Array.from(arguments).filter(e => e).join(' ');
}

export default StatisticsResultComponent;
