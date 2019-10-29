# Queues and Stacks

## Challenge

Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods:

enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.
dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.
The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

## Approach & Efficency

- Thanks to Peter Charmichael and Julie Erelemeier for their help on this code challenge
- Have methods in the class for stacks that I can use in my PseudoQueue class

## Solution

- Create a class for Stacks that has two methods in it, push and pop
- Create a class for PseudoQueues that has two methods in in enqueue and dequeue
- In enqueue call the push method
- In the dequeue method move one stack to the next stack using push, then pop off the top number

## Whiteboard Image

- No white board image needed for Class 11 Code Challenge
