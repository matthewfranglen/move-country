/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import JobsComponent from 'components/details/actions/JobsComponent.js';

describe('JobsComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(JobsComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('jobs-component');
  });
});
