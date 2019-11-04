'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }
  push(value){
    let newValue = new Node(value);
    if(this.top !== null){
      newValue.next = this.top;
      this.top = newValue;
    } else {
      newValue = this.top;
    }
  }
  pop(){

  }
  peek(){
    return this.top.value;
  }
  isEmpty(){
    if(this.head === null){
      return false;
    } else {
      return true;
    }
  }
}

class Queue{
  constructor(){
    this.frontProperty = null;
    this.backProperty = null;
  }
  enqueue(value){
    let newValue = new Node(value);
    if(this.frontProperty === null){
      this.frontProperty = newValue;
      this.backProperty = newValue;
    } else {
      this.backProperty.next = newValue;
      this.backProperty = newValue
    }
  }
  dequeue(){

  }
  peek(){
    return this.frontProperty.value;
  }
  isEmpty(){
    if(this.frontProperty === null){
      return false;
    } else {
      return true;
    }
  }
}

module.exports = {Stack, Queue};
