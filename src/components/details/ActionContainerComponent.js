'use strict';

import React from 'react';
import AirbnbComponent from './actions/AirbnbComponent';

require('styles/details/ActionContainer.scss');

class ActionContainerComponent extends React.Component {

  static displayName = 'ActionContainerComponent';

  static propTypes = {
    feature: React.PropTypes.object
  };

  render() {
    return (
      <div className="action-container-component">
        <AirbnbComponent feature={this.props.feature} />
      </div>
    );
  }
}

export default ActionContainerComponent;
