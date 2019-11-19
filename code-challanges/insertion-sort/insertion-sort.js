'use strict';

const insertionSort = (array) => {
  for(let i = 1; i < array.length; i++){
    let j = i -1;
    let temp = array[i];

    while(j >= 0 && temp < array[i]){
      array[j + 1] = array[i];
      j--
    }
    array[j + 1] = temp;
  }
  return array;
}

module.exports = insertionSort;
