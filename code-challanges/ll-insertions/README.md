# LinkedList Insertions

## Challenge

.append(value) which adds a new node with the given value to the end of the list
.insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
.insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

## Approach & Efficiency

- Made classes for Node and Linked List
- Append is going to look to see if there is a head, if there isn't then use that value as the head
- Insert Before goes through the linked list, if current is not null then look for value, if found append that new Value before the value you were looking for, if value isn't there return error
- Insert After goes through the linked list, if current is not null then look for value, if the value is found append new Value after that value, if value isn't there return error

## Solution

![whiteboardimage](./assets/ll-insertions.jpeg)
