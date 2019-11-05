import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Test', () => {
  it('Renders an App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
