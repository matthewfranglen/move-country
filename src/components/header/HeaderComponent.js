'use strict';

import React from 'react';

require('styles/header/Header.scss');

let HeaderComponent = () => (
    <div className="header-component">
      <div className="header-component__container">
        <span className="header-component__text">Brain Drain for Remain</span>
        <br />
        <span className="header-component__text"><small>England wants some time alone</small></span>
      </div>
    </div>
  );

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
