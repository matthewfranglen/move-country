'use strict';

import React from 'react';

require('styles/content/Statistics.scss');

const StatisticsComponent = React.createClass({
  render: function() {
    if (! this.props.visible) {
      return null;
    }

    return (
      <div className="statistics-component">
        {this.props.name}
      </div>
    );
  }
});

StatisticsComponent.displayName = 'ContentStatisticsComponent';

// Uncomment properties you need
// StatisticsComponent.propTypes = {};
// StatisticsComponent.defaultProps = {};

export default StatisticsComponent;
