'use strict';

import React from 'react';
import ActionContainerComponent from './actions/ContainerComponent';
import StatisticsContainerComponent from './statistics/ContainerComponent';

require('styles/details/Details.scss');

class DetailsComponent extends React.Component {

  static displayName = 'DetailsComponent';

  static propTypes = {
    feature: React.PropTypes.object,
    type: React.PropTypes.string,
    setStatistic: React.PropTypes.func.isRequired
  };

  render() {
    if (! this.props.feature) {
      return (
        <div className="details-component"></div>
      );
    }

    return (
      <div className="details-component">
        <div className="details-component__title">
          {this.props.feature.name}
        </div>
        <div className="details-component__content">
          <div className="details-component__statistics">
            <StatisticsContainerComponent type={this.props.type} feature={this.props.feature} onClick={this.props.setStatistic} />
          </div>
          <div className="details-component__actions">
            <ActionContainerComponent feature={this.props.feature} />
          </div>
        </div>
      </div>
    );
  }

}

export default DetailsComponent;
