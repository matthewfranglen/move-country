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
    var keyword = this.props.feature.job || this.props.feature.name;
    return 'http://www.monster.com/jobs/search/?where=' + keyword;
  }

}

export default JobsComponent;
