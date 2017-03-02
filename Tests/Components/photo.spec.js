import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect, assert } from 'chai';
import sinon from 'sinon';
import Photo from '../../src/components/Photo';

describe('Photo', () => {
  const photo = 'blob:http://localhost:3000/21f44fe4-f722-4022-8cb9-ae5e195c1d99'
  const palette = [[184, 192, 187], [8, 114,  130], [95, 127, 134], [23, 39, 32], [99, 199, 197], [21, 49, 73], [83, 161, 202]]

  it.skip('should have a button to delete a photo', () => {
    const wrapper = shallow(<Photo
    photo={photo} palette={palette} />);
    expect(wrapper.find('.delete-btn').length).to.equal(1);
  });

  it('should render one image tag', () => {
    const wrapper = shallow(<Photo />)
    expect(wrapper.find('img')).to.have.length(1)
  });
});
