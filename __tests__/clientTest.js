import React from 'react';
import App from '../client/src/App.jsx';
import { shallow } from 'enzyme';

describe('App React component', () => {
  it('should have a "See all Audience reviews" button', () => {
    const wrapper = shallow(<App/>);
    const postState = wrapper.state().text;
    expect(postState).toEqual('See all Audience reviews');
  })
})

