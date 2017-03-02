import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect, assert } from 'chai';
import App from '../../src/components/App';

describe('App', () => {
  it('should show title "ColorPal" ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).to.equal('ColorPal');
  });
})
