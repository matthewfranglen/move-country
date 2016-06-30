'use strict';

import React from 'react';

require('styles/content/Statistics.scss');

const statistics = [
  {
    key: 'HDI',
    name: 'Human Development Index',
    citation: 'http://hdr.undp.org',
    // The ranks in the original document are 49 / 105 / 143. England is 14
    ranks: {
      high: 9,
      medium: 18,
      low: 36
    }
  },
  {
    key: 'PPI',
    name: 'Property Price Index',
    citation: 'http://www.numbeo.com/property-investment/region_rankings.jsp?title=2016&region=150',
    // This was calculated by taking the average for the cities listed in the report.
    // There are no ranks in the original. England is 12.2 London is 33.51 (the worst) and Glasgow is 4.80 (the best)
    ranks: {
      high: 8,
      medium: 12,
      low: 16
    }
  }
];

const emoji = {
  high: '😎',
  medium: '😊',
  low: '😞',
  very_low: '😧'
};

const StatisticsComponent = React.createClass({
  render: function() {
    if (! this.props.feature) {
      return null;
    }

    var feature = this.props.feature.properties;
    var makeResult = ({ name, value, citation }) => (
      <div className="statistics__result">
        <div className="statistics__label">{name}</div>
        <div className="statistics__value">{value}</div>
        <a href={citation} className="statistics__citation">[source]</a>
      </div>
    );
    var results = statistics
      .filter(s => s.key in feature)
      .map(s => makeResult({
            name: s.name,
            value: this.toEmoji(feature[s.key], s.ranks),
            citation: s.citation
        })
      );

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
  },

  toEmoji: function(value, ranks) {
    if (value <= ranks.high) {
      return emoji.high;
    }
    if (value <= ranks.medium) {
      return emoji.medium;
    }
    if (value <= ranks.low) {
      return emoji.low;
    }
    return emoji.very_low;
  }
});

StatisticsComponent.displayName = 'ContentStatisticsComponent';

// Uncomment properties you need
// StatisticsComponent.propTypes = {};
// StatisticsComponent.defaultProps = {};

export default StatisticsComponent;
