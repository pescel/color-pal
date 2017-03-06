import { expect, assert } from 'chai';
import palette from '../../src/reducers/palette';

const state = '';
describe('palette', () => {
  it('should return the initial state', () => {
    expect(palette( state, '')).to.deep.equal(state)
  });

  it('DELETE_PALETTE should delete the palette', () => {
    const action = {
      type: 'DELETE_PALETTE',
      palette: ''
    }
    expect(palette(undefined, action)).to.deep.equal('')
  });

  it('STORE_PALETTE should change the initial state', () => {
    const action = {
      type: 'LOAD_PALETTE',
      palette: [[184, 192, 187], [8, 114,  130], [95, 127, 134], [23, 39, 32], [99, 199, 197], [21, 49, 73], [83, 161, 202]]
    }
    expect(palette(undefined, action)).to.deep.equal({palette: [[184, 192, 187], [8, 114,  130], [95, 127, 134], [23, 39, 32], [99, 199, 197], [21, 49, 73], [83, 161, 202]]})
  });
});
