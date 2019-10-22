import React from 'react';
import Enzyme, { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

import AXAButton from './AXAButton';

// Enzyme.configure({ adapter: new Adapter() });

describe('AXA Button Test', () => {
  it('contains 2 AXAButton', () => {
    const wrapper = shallow(<div><AXAButton /><AXAButton /></div>);
    expect(wrapper.find(AXAButton).length).toEqual(2);
  });
});