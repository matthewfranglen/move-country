'use strict';

import React from 'react';
import AirbnbComponent from './AirbnbComponent';

require('styles/details/actions/Container.scss');

class ActionsContainerComponent extends React.Component {

  static displayName = 'ActionsContainerComponent';

  static propTypes = {
    feature: React.PropTypes.object
  };

  render() {
    if (! this.props.feature) {
      return (<div className="actions-container-component"></div>);
    }

    return (
      <div className="actions-container-component">
        <div className="actions-container-component__title">
          check out {this.props.feature.name}
        </div>
        <div className="actions-container-component__content">
          <AirbnbComponent feature={this.props.feature} />
        </div>
      </div>
    );
  }

}

export default ActionsContainerComponent;
