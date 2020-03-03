# Trees

- Binary Tree is a tree data structure where each node has up to child nodes, creating a tree structure

## Challenge

- Create the following methods on a Binary Tree:
  - InOrder: Ability to print all the nodes in a binary tree from left to root to right
  - PreOrder: Ability to print all the nodes in a binary tree from root to left to right
  - PostOrder: Ability to print all the nodes in a binary tree from left to right to root
- Create the following methods on a Binary Search Tree:
  - Add: Ability to add a new Node to the Binary Tree
  - Contains: Ability to see whether or not a Binary Tree has a node in it

## Approach & Efficiency

- InOrder
  - Space: O(n)
  - Time: O(n)

- PreOrder
  -Space: O(n)
  - Time: O(n)

- PostOrder
  -Space: O(n)
  -Time: O(n)

- Add
  - Space: O(n)
  - Time: O(n)

- Contains
  - Space: O(n)
  - Time: O(n)

## API

- InOrder: This is a recursive traversal of the Binary Tree, where it will print out the values of the nodes in the tree starting from the left furthest, moving to the root and then to the right

- PreOrder: This is a recursive traversal of the Binary Tree, where it will print out the values of the nodes starting with the root, moving to the left and then moving to the right

- PostOrder: This is a a recursive traversal of the Binary Tree, where it will print out the values of the nodes starting from the left, moving to the right and then ending on the root

- Add: This will first check to see if the Node that wants to be added to the Binary Search Tree is already there, then it if it isn't, it will add the new Node to the Binary Search Tree

- Contains: This will look to see if the Node that is being looked for is in the Binary Search Tree, if it is there it will return true, and if it isn't there then it will return false
