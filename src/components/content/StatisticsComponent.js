'use strict';

import React from 'react';
import { getTypes, getDescription, toEmoji } from './statistics';

class StatisticsComponent extends React.Component {

  render = () => {
    if (! this.props.feature) {
      return null;
    }

    var makeResult = (type) => {
      var description = getDescription(type);
      var value = toEmoji(feature[type], type);
      var click = this.props.onStatisticClick;

      return (
        <ResultComponent key={description.name} type={type} name={description.name} value={value} citation={description.citation} onStatisticClick={click} />
      );
    };
    var feature = this.props.feature.properties;
    var results = getTypes()
      .filter(t => t in feature)
      .map(makeResult);

    return (
      <div className="statistics">
        <div className="statistics__title">
          {this.props.feature.properties.name}
        </div>
        <div className="statistics__results">
          {results}
        </div>
      </div>
    );
  }

}

class ResultComponent extends React.Component {

  render = () => {
    return (
      <div className="statistics__result">
        <div className="statistics__label">{this.props.name}</div>
        <a onClick={this.onClick} className="statistics__value">{this.props.value}</a>
        <a href={this.props.citation} className="statistics__citation">[source]</a>
      </div>
    );
  }

  onClick = () => {
    this.props.onStatisticClick(this.props.type);
  }

}

StatisticsComponent.displayName = 'ContentStatisticsComponent';

// Uncomment properties you need
// StatisticsComponent.propTypes = {};
// StatisticsComponent.defaultProps = {};

export default StatisticsComponent;
