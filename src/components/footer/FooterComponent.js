'use strict';

import React from 'react';

require('styles/footer/Footer.scss');

let FooterComponent = () => (
    <div className="footer">
      <div className="footer__container">
        <span className="footer__text">© Your Company</span>
        <span className="footer__spacer">·</span>
        <a className="footer__link" href="/">Home</a>
        <span className="footer__spacer">·</span>
        <a className="footer__link" href="/privacy">Privacy</a>
        <span className="footer__spacer">·</span>
        <a className="footer__link" href="/not-found">Not Found</a>
      </div>
    </div>
  );

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
