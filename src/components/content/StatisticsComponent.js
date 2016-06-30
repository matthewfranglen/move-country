'use strict';

import React from 'react';
import { getTypes, getDescription, toEmoji } from './statistics';

const StatisticsComponent = React.createClass({
  render: function() {
    if (! this.props.feature) {
      return null;
    }

    var feature = this.props.feature.properties;
    var makeResult = (type) => {
      var description = getDescription(type);
      var value = toEmoji(feature[type], type);

      return (
        <div key={description.name} className="statistics__result">
          <div className="statistics__label">{description.name}</div>
          <div className="statistics__value">{value}</div>
          <a href={description.citation} className="statistics__citation">[source]</a>
        </div>
      );
    };
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
});

StatisticsComponent.displayName = 'ContentStatisticsComponent';

// Uncomment properties you need
// StatisticsComponent.propTypes = {};
// StatisticsComponent.defaultProps = {};

export default StatisticsComponent;
