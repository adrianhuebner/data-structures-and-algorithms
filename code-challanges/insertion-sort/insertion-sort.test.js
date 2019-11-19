'use strict';

let insertionSort = require('./insertion-sort');

describe('Testing the sorting function', () => {
  it('Will return a sorted array', () => {
    const array = [8,4,23,42,16,15];
    expect(insertionSort(array)).toEqual([4,8,15,16,23,42])
  });
  it('Will return a sorted array, with duplicate values', () => {
    const array = [26,2,15,6,6,19];
    expect(insertionSort(array)).toEqual([2,6,6,15,19,26])
  });
});
