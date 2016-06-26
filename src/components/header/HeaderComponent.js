'use strict';

import React from 'react';

require('styles/header/Header.scss');

let HeaderComponent = () => (
    <div className="header">
      <div className="header__container">
        <span className="header__text">© Your Company</span>
        <span className="header__spacer">·</span>
        <a className="header__link" href="/">Home</a>
        <span className="header__spacer">·</span>
        <a className="header__link" href="/privacy">Privacy</a>
        <span className="header__spacer">·</span>
        <a className="header__link" href="/not-found">Not Found</a>
      </div>
    </div>
  );

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
