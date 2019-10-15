const array = ['s', 't', 'a', 'r', 'r', 'y'];

function reverseArray(array){
  for(let i = arr.length-1; i >= (arr.length-1)/2; i--){
    let a = array[0 + i];
    let b = array[array.length - 1 - i];
    // reverse
    array[0 + i] = b;
    array[array.length - 1 - i] = a;
  }
  return array;
}
reverseArray(array);