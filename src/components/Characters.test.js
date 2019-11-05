import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters Test', () => {
  it('Renders an Characters', () => {
    const wrapper = shallow(<Characters 
      characters={['thing']}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
