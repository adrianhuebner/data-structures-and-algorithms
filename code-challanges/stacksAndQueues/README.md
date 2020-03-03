# Stacks and Queues
<!-- Short summary or background information -->
Code Challenge for CodeFellows 401 that deals with Stacks and Queues

## Challenge
<!-- Description of the challenge -->
1. Create a Node Class
2. Create a Stack Class
    1. Have a push method that puts new value in the first position
    2. Have a pop method that takes off the front value
    3. Have a peek method that returns the top value
    4. Have an isEmpty method that returns a boolean based on whether or not there is anything in the stack
3. Create a Queue Class
    1. Have an enqueue method that adds to the back of the queue
    2. Have a dequeue method that removes from the front of the queue
    3. Have a peek method that returns the front of the queues value
    4. Have an isEmpty method that returns a boolean based on whether or not there is anything in the queue

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- Want to have 0(1) for space/time

## API
<!-- Description of each method publicly available to your Stack and Queue-->

### Stack

- **PUSH** which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
- **POP** that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
- **PEEK** that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
- **isEmpty** that does not take an argument, and returns a boolean indicating whether or not the stack is empty.

### Queue

- **ENQUEUE** which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
- **DEQUEUE** that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
- **PEEK** that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
- **isEmpty** that does not take an argument, and returns a boolean indicating whether or not the queue is empty.
