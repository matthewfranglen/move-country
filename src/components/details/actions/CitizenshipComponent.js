'use strict';

import React from 'react';
import TileComponent from '../../TileComponent';

require('styles/details/actions/Citizenship.scss');

class CitizenshipComponent extends React.Component {

  static displayName = 'CitizenshipComponent';

  static propTypes = {
    feature: React.PropTypes.object
  };

  render() {
    return (
      <TileComponent icon="flag" url={this.getUrl()} label="Citizenship" className="citizenship-component" />
    );
  }

  getUrl() {
    return this.props.feature.citizenship || 'https://en.wikipedia.org/wiki/Naturalization';
  }

}

export default CitizenshipComponent;
