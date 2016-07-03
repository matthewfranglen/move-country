'use strict';

import React from 'react';
import ActionContainerComponent from './actions/ContainerComponent';
import StatisticContainerComponent from './StatisticContainerComponent';

require('styles/details/Details.scss');

class DetailsComponent extends React.Component {

  static displayName = 'DetailsComponent';

  static propTypes = {
    feature: React.PropTypes.object,
    setStatistic: React.PropTypes.func
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
            <StatisticContainerComponent feature={this.props.feature} onClick={this.props.setStatistic} />
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
