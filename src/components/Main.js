require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import HeaderComponent from './header/HeaderComponent';
import FooterComponent from './footer/FooterComponent';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <HeaderComponent />
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <FooterComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
