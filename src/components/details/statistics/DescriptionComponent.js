'use strict';

import React from 'react';
import { getDescription } from '../../../lib/statistics';

require('styles/details/statistics/Description.scss');

class StatisticsDescriptionComponent extends React.Component {

  static displayName = 'StatisticsDescriptionComponent';

  static propTypes = {
    type: React.PropTypes.string
  };

  render() {
    if (! this.props.type) {
      return (<div className="statistics-description-component"></div>);
    }
    var description = getDescription(this.props.type);

    return (
      <div className="statistics-description-component">
        <div className="statistics-description-component__title">
          {description.name}
        </div>
        <div className="statistics-description-component__detail">
          {description.detail}
        </div>
        <a href={description.citation} className="statistics-description-component__citation">[source]</a>
      </div>
    );
  }
}

export default StatisticsDescriptionComponent;
