'use strict';

class BinaryTree{
  constructor (root = null){
    this.root = root;
  }
  //need to figure out how to start traversing tree
  if(root.value % 5 === 0 && root.value % 3 === 0){
    return 'fizzbuzz';
  } else if (root.value % 3 === 0){
    return 'fizz';
  } else if (root.value % 5 === 0){
    return 'buzz';
  } else{
    return root.value;
  }
}
