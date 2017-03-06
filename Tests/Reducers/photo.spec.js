import { expect, assert } from 'chai';
import photo from '../../src/reducers/photo';

describe('photo', () => {
  it('should return the initial state', () => {
    expect(photo(undefined, '')).to.deep.equal('');
  })
})
