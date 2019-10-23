class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //append method
  append(value){
    let node = new Node(value);
    let current;
    if(!this.head){
      this.head = node;
      this.size++;
      return;
    }
    current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
    this.size++;
  }

  //insertBefore method
  insertBefore(value,newVal){
    let node = new Node(value,newVal);
    let previous = this.head;
    let current = this.head;


    if(current.value === value){
      node.next = current;
      this.head = node;
      this.length++;
      return;
    }

    current = current.next;

    while(current.next !== null){
      if(current.value === value){
        previous.next = node;
        node.next = current;
        this.length++;
        break;
      }
      previous = previous.next;
      current = current.next;
    }
  }

  //insertAfter method
//  insertAfter(value,newVAl){

 // }
}

const ll = new LinkedList();
ll.append(1);
ll.insertBefore(1,0);
ll.insertBefore(1.5,1);
