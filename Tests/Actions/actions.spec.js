import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect, assert } from 'chai';
import sinon from 'sinon'
import * as actions from '../../src/actions/index'

describe('actions', () => {
  const photo = 'blob:http://localhost:3000/21f44fe4-f722-4022-8cb9-ae5e195c1d99'
  const palette = [[184, 192, 187], [8, 114,  130], [95, 127, 134], [23, 39, 32], [99, 199, 197], [21, 49, 73], [83, 161, 202]]

  it('should create an action that loads the photo', () => {
    const expectedAction = {
      type: 'LOAD_PHOTO',
      photo: photo
    }
      expect(actions.storePhoto(photo)).to.deep.equal(expectedAction)
  });

  it('should create an action that stores the palette as state', () => {
    const expectedAction = {
      type: 'STORE_PALETTE',
      palette: palette
    }
    expect(actions.storePalette(palette)).to.deep.equal(expectedAction)
  });

  it('should create an action that deletes the photo', () => {
    const expectedAction = {
      type: 'DELETE_PHOTO',
      photo: photo
    }
    expect(actions.deletePhoto(photo)).to.deep.equal(expectedAction)
  });

  it('should create an action that loads the palette', () => {
    const expectedAction = {
      type: 'LOAD_PALETTE',
      palette: palette
    }
    expect(actions.loadPalette(palette)).to.deep.equal(expectedAction)
  });

  it('should create an action that adds a favorite palette to state', () => {
    const expectedAction = {
      type: 'ADD_FAVORITE',
      palette: palette
    }
    expect(actions.addFavorite(palette)).to.deep.equal(expectedAction)
  })
});
