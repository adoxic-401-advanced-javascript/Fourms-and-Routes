import React from 'react';
import { shallow } from 'enzyme';
import Random from './Random';

describe('Random Test', () => {
  it('Renders an Random', () => {
    const wrapper = shallow(<Random 
      title={'title'}
      characters={['boo']}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
