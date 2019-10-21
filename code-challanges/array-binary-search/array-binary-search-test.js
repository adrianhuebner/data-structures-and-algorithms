'use strict';

const arraySearch = require('./array-binary-search');

// Not still quite sure on how to write tests
describe('Testing binary array search methods', () => {
  it('Test will return index of key or return -1 if not in array', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toBe(2);
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toBe(-1);
  })
})