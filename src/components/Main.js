require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import HeaderComponent from './header/HeaderComponent';
import FooterComponent from './footer/FooterComponent';
import MapComponent from './content/MapComponent';
import StatisticsComponent from './content/StatisticsComponent';

var AppComponent = React.createClass({
  getInitialState: function() {
    return {
      visible: false,
      name: 'No Country'
    };
  },

  render: function() {
    return (
      <div className="index">
        <HeaderComponent />
        <MapComponent onCountryClick={this.setCountry}/>
        <StatisticsComponent visible={this.state.visible} name={this.state.name}/>
        <FooterComponent />
      </div>
    );
  },

  setCountry: function (details) {
    this.setState({
      visible: true,
      name: details.name
    });
  }
});

AppComponent.defaultProps = {
};

export default AppComponent;
