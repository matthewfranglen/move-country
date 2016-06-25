/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import { Map } from 'react-cartographer';

function Home() {
  return (
    <Map
      provider="google"
      mapId="map"
      addressLine1="1 Infinite Loop"
      city="Cupertino"
      state="CA"
      country="United States"
      zoom={15}
      height={270}
      width={580}
    />
  );
}

export default withStyles(Home, s);
