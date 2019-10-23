import React from 'react';
import App from '../client/src/index.jsx';
import { shallow } from 'enzyme';

describe('Query the database', () => {
  it('should retrieve ', () => {
    const wrapper = shallow(<App/>);
    const postState = wrapper.state().text;
    expect(postState).toEqual('See all Audience reviews');
  })
})

