/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import StatisticContainerComponent from 'components/content/StatisticContainerComponent.js';

describe('StatisticContainerComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(StatisticContainerComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('statistic-container-component');
  });
});
