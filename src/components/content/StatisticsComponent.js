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

      return (
        <ResultComponent name={description.name} value={value} citation={description.citation} />
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

  render() {
    return (
      <div key={this.props.name} className="statistics__result">
        <div className="statistics__label">{this.props.name}</div>
        <div className="statistics__value">{this.props.value}</div>
        <a href={this.props.citation} className="statistics__citation">[source]</a>
      </div>
    );
  }
}

StatisticsComponent.displayName = 'ContentStatisticsComponent';

// Uncomment properties you need
// StatisticsComponent.propTypes = {};
// StatisticsComponent.defaultProps = {};

export default StatisticsComponent;
