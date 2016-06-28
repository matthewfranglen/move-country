'use strict';

import React from 'react';

require('styles/header/Header.scss');

let HeaderComponent = () => (
    <div className="header">
      <div className="header__container">
        <span className="header__text">Brexit for Remainers</span>
        <br />
        <span className="header__text"><small>England wants some time alone</small></span>
      </div>
    </div>
  );

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
