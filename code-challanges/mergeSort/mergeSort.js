'use strict';

function mergeSort(array){
  if(array.length <= 1){
    return array;
  }
  let midPoint = Math.floor(array.length / 2);
  let leftPoint = array.slice(midPoint, 0);
  let rightPoint = array.slice(midPoint);

  return merge(
    mergeSort(leftPoint), mergeSort(rightPoint)
  );
}

function merge(left, right, array){
  let i = 0;
  let j = 0;
  let k = 0;
  while(i < left.length && j < right.length){
    if(left[i] <= right[j]){
      array[k] = left[i];
      i++;
    } else {
      array[k] = right[j];
      j++;
    }
  }
}