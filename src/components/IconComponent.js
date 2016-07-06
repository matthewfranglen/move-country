'use strict';

import React from 'react';

require('styles/Icon.scss');

function makeClassName () {
  return Array.from(arguments).filter(e => e).join(' ');
}

let IconComponent = (props) => (
  <i className={makeClassName(props.className, 'fa', 'fa-' + props.name)}></i>
);

IconComponent.displayName = 'IconComponent';

IconComponent.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default IconComponent;
