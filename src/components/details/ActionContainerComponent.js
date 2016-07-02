'use strict';

import React from 'react';

require('styles/details/ActionContainer.scss');

class ActionContainerComponent extends React.Component {

  static displayName = 'ActionContainerComponent';

  static propTypes = {
    feature: React.PropTypes.object
  };

  render() {
    return (
      <div className="action-container-component">
        Please edit src/components/details//ActionContainerComponent.js to update this component!
      </div>
    );
  }
}

export default ActionContainerComponent;
