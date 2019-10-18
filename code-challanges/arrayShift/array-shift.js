// Pseudu Code (added on after whiteboarding)
// create a function that takes in an array and a new value
// create array variable and new value variable
// create a for loop that will iterate through that array until it reaches the midpoint
// insert new value into array at the midpoint

// other code I also worked on
let arr = [2,4,6,8]
let newVal = 5

function insertShiftArray(arr, newVal){
  let midSpot = (arr.length - 1)/2;
  let newArr = [];
  for(let i = 0; i >= (arr.length - 1)/2; i++){
    if (i < midSpot){
      newArr[i] = arr[i]
    } else if(i === midSpot){
      newArr[i] = newVal
    } else{
      newArr[i] = arr[i -1]
    }
  }
  return arr;
}
insertShiftArray(arr, newVal);