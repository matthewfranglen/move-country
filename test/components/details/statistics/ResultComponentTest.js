/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import StatisticsResultComponent from 'components/details/statistics/ResultComponent.js';

describe('StatisticsResultComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(StatisticsResultComponent, { type: 'HDI', feature: { HDI: 1 } });
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('statistics-result-component');
  });
});
