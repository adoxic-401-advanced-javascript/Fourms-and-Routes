import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Test', () => {
  it('Renders an Footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
