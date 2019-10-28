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

  // insert method
  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this.head;
  }

  // string method
  toString(){
    let string = '';
    if(this.head !== null){
      return 'Exception';
    }
    let current = this.head;
    while(current){
      string = `${string} ${current.value}`;
    }
    return string;
  }

  //includes method
  includes(value){
    let current = this.head;
    while(current !== null){
      if(current.value === value){
        return true;
      } else {
        current = current.next
      }
      return false;
    }
  }

  //append method
  append(value){
    let node = new Node(value);
    let current;
    if(!this.head){
      this.head = node;
      this.size++;
      return this.head;
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
      this.size++;
      return;
    }

    current = current.next;

    while(current.next !== null){
      if(current.value === value){
        previous.next = node;
        node.next = current;
        this.size++;
        break;
      }
      previous = previous.next;
      current = current.next;
    }
  }

  //insertAfter method
  //  insertAfter(value,newVAl){

  // }

  // kthFromEnd method
  kthFromEnd(k){
    let current = this.head;
    let counter = 0;

    while(current !== null){
      counter++;
      current = current.next;
    }
    if (k >= counter){
      return 'Exeption';
    }
    current = this.head;

    for(let i = 1; i < counter - k; i++){
      current = current.next;
    }
    return current.value;
  }

  // merged list method
  mergedList(l1,l2){
    let newList = new LinkedList();
    let current = newList;

    while(l1 !== null && l2 !== null){
      if(l1.val < l2.val){
        current.next = l1;
        l1 = l1.next
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
    return LinkedList.next;
  }
}


const ll = new LinkedList();
ll.head = new Node(1);
ll.head.next = new Node(3);
ll.head.next.next = new Node(7);

ll.kthFromEnd(1);
