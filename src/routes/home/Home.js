/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import { Map, Marker } from 'react-leaflet';

class WrappedMarker extends Component {
  render() {
    const { map, layerContainer } = this.props; //Given by the `Map` component
    return (
      <Marker
        map={map} /* pass down to Marker */
        layerContainer={layerContainer} /* pass down to Marker */
        position={[51.505, -0.09]}
      />
    );
  }
}

export default class MapView extends Component {
  render() {
    return (
      <Map center={[51.505, -0.09]} zoom={13}>
        <WrappedMarker />
      </Map>
    );
  }
}
