import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Test', () => {
  it('Renders an Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
