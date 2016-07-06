'use strict';

import React from 'react';

require('styles/Icon.scss');

let IconComponent = (props) => (
  <i className={'fa fa-' + props.icon}></i>
);

IconComponent.displayName = 'IconComponent';

IconComponent.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default IconComponent;
