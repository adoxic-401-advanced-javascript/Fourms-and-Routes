import React from 'react';
import { shallow } from 'enzyme';
import Categories from './Categories';

describe('Categories Test', () => {
  it('Renders an Categories', () => {
    const wrapper = shallow(<Categories 
      title={'title'}
      characters={['thing']}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
