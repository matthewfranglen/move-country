'use strict';

import React from 'react';
import IconComponent from '../../IconComponent';

require('styles/details/actions/Jobs.scss');

class JobsComponent extends React.Component {

  static displayName = 'JobsComponent';

  static propTypes = {
    feature: React.PropTypes.object
  };

  render() {
    if (! this.props.feature) {
      return (<div className="jobs-component"></div>);
    }

    var keyword = this.props.feature.job || this.props.feature.name;
    var url = 'http://www.monster.com/jobs/search/?where=' + keyword;

    return (
      <a className="jobs-component" target="_blank" href={url}>
        <IconComponent className="jobs-component__icon" name="building"></IconComponent>
        <br />
        <div className="jobs-component__label">Jobs</div>
      </a>
    );
  }

}

export default JobsComponent;
