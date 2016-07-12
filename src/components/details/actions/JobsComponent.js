'use strict';

import React from 'react';
import TileComponent from '../../TileComponent';

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

    return (
      <TileComponent icon="briefcase" url={this.getUrl()} label="Jobs" className="jobs-component" />
    );
  }

  getUrl() {
    if (this.props.feature.job) {
      return this.props.feature.job;
    }
    return 'http://www.totaljobs.com/jobs/in-' + this.props.feature.name;
  }

}

export default JobsComponent;
