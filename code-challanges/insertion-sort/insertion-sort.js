'use strict';

const randomNumbers = [0, 20, 30, 40, 10, 50, 70, 60, 80, 90, 100];

function insertionSort(array){
  const length = array.length;
  for(let i = 0; i < length; i++){
    if(array[i] < array[0]){
      // move the number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // find where the number should be at
      for(let j = 0; j < length; j++){
        if(array[i] > array[j -1] && array[i] < array[j]){
          // move the number to the right spot
          array.splice(j,0,array.splice(i, 1)[0]);
        }
      }
    }
  }
}

insertionSort(randomNumbers);
console.log(randomNumbers);
