class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  //append method
  append(value){
    let node = new Node;
    node.value = value;

    // if the list is empty
    // set the current value to head
    // else current is head
    // while current is not empty
    // current is the next current 
    // return the next node
  }

  //insertBefore method
  insertBefore(value,newVal){
    let node = new Node;
    let current = this.head;
    node = newVal;

  }

  //insertAfter method
  insertAfter(value,newVAl){

  }
}

