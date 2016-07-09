'use strict';

import React from 'react';
import { getDescription, toEmoji } from '../../../lib/statistics';

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
//    if (this.props.selected) {
//      return (
//        <div onClick={this.onClick} className="statistics-result-component">
//          <div className="statistics-result-component__summary">
//            <IconComponent className="statistics-result-component__icon" name="chevron-down"></IconComponent>
//            <a className="statistics-result-component__value">{this.state.value}</a>
//            <div className="statistics-result-component__label">{this.state.name}</div>
//          </div>
//          <div className="statistics-result-component__detail">
//            {this.state.detail}
//          </div>
//          <a href={this.state.citation} className="statistics-result-component__citation">[source]</a>
//        </div>
//      );
//    }

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
    return makeClassName('statistics-result-component', this.props.selected ? 'statistics-result-component--selected' : 'statistics-result-component--deselected');
  }

}

function makeClassName () {
  return Array.from(arguments).filter(e => e).join(' ');
}

export default StatisticsResultComponent;
