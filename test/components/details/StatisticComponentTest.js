/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import StatisticComponent from 'components/details/StatisticComponent.js';

describe('StatisticComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(StatisticComponent, { type: 'HDI', feature: { HDI: 1 } });
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('statistic-component');
  });
});
