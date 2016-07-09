'use strict';

import React from 'react';
import IconComponent from './IconComponent';

require('styles/Tile.scss');

class TileComponent extends React.Component {

  static displayName = 'TileComponent';

  static propTypes = {
    icon: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    url: React.PropTypes.string
  };

  render() {
    var classes = makeClassName(this.props.className, 'tile-component');

    if (! this.props.url) {
      return (<div className={classes}></div>);
    }

    return (
      <a className={classes} target="_blank" href={this.props.url}>
        <IconComponent className="tile-component__icon" name={this.props.icon}></IconComponent>
        <br />
        <div className="tile-component__label">{this.props.label}</div>
      </a>
    );
  }

}

function makeClassName () {
  return Array.from(arguments).filter(e => e).join(' ');
}

export default TileComponent;
