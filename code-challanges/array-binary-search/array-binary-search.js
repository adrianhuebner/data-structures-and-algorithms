'use strict';

function binarySearch(arr,key){
  let starter = 0;
  let endPoint = arr.length - 1;
  while(starter <= endPoint){
    // can't figure out why it doesn't like my midSpot, it doesn't like it if I use let or var either
    const midSpot = (arr.length - 1)/2;
  } if (key === midSpot){
    return midSpot;
  } else if(key < arr[midPoint]){
    starter = midPoint + 1;
  } else if(key > arr[midPoint]){
    endPoint = midPoint - 1;
  } else if(key !== midSpot){
    return -1;
  }
}
binarySearch();
