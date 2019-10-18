// This is the global array that will be reversed
const array = ['s', 't', 'a', 'r', 'r', 'y'];

//start of function to begin reversing the array
function reverseArray(array){
  //for loop which begins iterating from the last index and works it's way to the midpoint
  for(let i = array.length-1; i >= (array.length-1)/2; i--){
    //assigning the first temporary variable
    let a = array[0 + i];
    //assinging the second temporary variable
    let b = array[array.length - 1 - i];
    // reverse
    array[0 + i] = b;
    array[array.length - 1 - i] = a;
  }
  return array;
}
reverseArray(array);