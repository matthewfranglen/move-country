'use strict';

import React from 'react';

require('styles/footer/Footer.scss');

let FooterComponent = () => (
    <div className="footer">
      <div className="footer__container">
        <span className="footer__text">© Maul</span>
      </div>
    </div>
  );

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
