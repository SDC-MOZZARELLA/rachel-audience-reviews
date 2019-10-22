import React from 'react';
import SinglePost from '../src/Components/SinglePost';
import { shallow } from 'enzyme';

describe('Single Post component', () => {
  it('should have a "Show More" button', () => {
    const wrapper = shallow(<SinglePost />);
    const postState = wrapper.state().buttonText;
    epexct(postState).toEqual('Show More');
  })
})

