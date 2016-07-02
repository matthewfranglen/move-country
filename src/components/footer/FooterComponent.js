'use strict';

import React from 'react';

require('styles/footer/Footer.scss');

let FooterComponent = () => (
    <div className="footer-component">
      <div className="footer-component__container">
        <span className="footer-component__text">© Maul</span>
      </div>
    </div>
  );

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
