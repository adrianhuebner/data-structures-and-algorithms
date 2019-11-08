class Node{
  constructor(value){
    this.value = value,
    this.left = null,
    this.right = null
  }
}

class BinaryTree{
  constructor(root){
    this.root = root
  }
}

function findMax(){
  let maxValue = this.root.value;
  const _walk = (node) => {
    if(node.left) {
      _walk(node.left)
    };
    if(node.right){
      _walk(node.right)
    };
    if(node.value > maxValue){
      maxValue = node.value
    };
    _walk(this.root);
    return maxValue;
  }
}
