'use strict';

import React from 'react';
import IconComponent from '../../IconComponent';

require('styles/details/actions/Citizenship.scss');

class CitizenshipComponent extends React.Component {

  static displayName = 'CitizenshipComponent';

  static propTypes = {
    feature: React.PropTypes.object
  };

  render() {
    if (! this.props.feature) {
      return (<div className="citizenship-component"></div>);
    }

    var url = this.props.feature.citizenship || 'https://en.wikipedia.org/wiki/Naturalization';

    return (
      <a className="citizenship-component" target="_blank" href={url}>
        <IconComponent className="citizenship-component__icon" name="flag"></IconComponent>
        <br />
        <div className="citizenship-component__label">Citizenship</div>
      </a>
    );
  }

}

export default CitizenshipComponent;
