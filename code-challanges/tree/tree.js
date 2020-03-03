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
  // got help with all inOrder, preOrder, and postOrder from online udemy course

  iOrder(){
    return traverseInOrder(this.root, []);
  }

  preOrder(){
    return traversePreOrder(this.root, []);
  }

  postOrder(){
    return traversePostOrder(this.root, []);
  }
}

function traverseInOrder(node, list){
  if(node.left){
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if(node.right){
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePreOrder(node, list){
  list.push(node.value)
  if(node.left){
    traversePreOrder(node.left, list);
  }
  if(node.right){
    traversePreOrder(node.right, list);
  }
}

function traversePostOrder(node, list){
  if(node.left){
    traversePostOrder(node.left, list);
  }
  if(node.right){
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

class BinarySearchTree{
  constructor(root){
    this.root = root;
  }

  // got help with this from an online udemy course
  contains(value){
    if(!this.root){
      return false;
    }
    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      } else if (value > currentNode.value){
        currentNode = currentNode.right;
      } else if (currentNode.value === value){
        return true;
      }
    }
    return false;
  };

  // got help with this from an online udemy course
  add(value){
    const newNode = new Node(value);
    if(this.root = null){
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          if(!currentNode.left){
            currentNode.left= newNode;
            return this;
          }
          currentNode.left = newNode;
        } else {
          if(!currentNode.roght){
            currentNode.right = newNode;
            return this;
          }
          currentNode.right = newNode;
        }
      }
    }
  };

}