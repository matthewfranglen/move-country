require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import HeaderComponent from './header/HeaderComponent';
import FooterComponent from './footer/FooterComponent';
import MapComponent from './content/MapComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <HeaderComponent />
        <MapComponent />
        <FooterComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
