'use strict';

class Stack {
  constructor(){
    this.storage = [];
  }
  push(value){
    this.storage.push(value);
  }
  pop(){
    this.storage.pop();
  }
}
class PseudoQueue {
  constructor(){
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }
  enqueue(value){
    this.stackOne.push(value);
  }
  dequeue(){
    if(this.stackTwo.storage.length === 0){
      if(this.stackOne.storage.length === 0) {return 'There is nothing in the Queue';}
      while(this.stackOne.storage.length > 0){
        let p = this.stackOne.storage.pop();
        this.stackTwo.storage.push(p);
      }
    }
    return this.stackTwo.storage.pop();
  }
}

let newQueue = new PseudoQueue();

newQueue.enqueue('a');
newQueue.enqueue('b');
newQueue.enqueue('c');
console.log(newQueue);

module.exports = {
  pseudo: PseudoQueue
}
