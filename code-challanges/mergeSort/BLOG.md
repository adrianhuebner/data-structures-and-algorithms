# Blog Subject: Merge Sort

The function will take in an array that contains integers, and return that array sorted using recrusion.

## Learning Objectives

- Understand the problem domain that is given to you
- Step through the logic to have a better understanding
- Convert the Pseudo Code into actual code
- Step through the code to have a better understanding

## Diagram

![Geeks for Geeks Diagram for Merge Sort](https://www.geeksforgeeks.org/wp-content/uploads/Merge-Sort-Tutorial.png)  
Geeks for Geeks Diagram

## Algorithm

- Find the middle point of the array and divide it in half
- Mergesort the first half of the array
- Mergesort the second half of the array
- Remerge the two halves together sorted

## Pseudo Code

```js
ALGORITHM Mergesort(arr)
  DECLARE n <-- arr.length

  if n > 1
    DECLARE mid <-- n/2
    DECLARE left <-- arr[0...mid]
    DECLARE right <-- arr[mid...n]
    // sort the left side
    Mergesort(left)
    // sort the right side
    Mergesort(right)
    // merge the sorted left and right sides together
    Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
  DECLARE i <-- 0
  DECLARE j <-- 0
  DECLARE k <-- 0

  while i < left.length && j < right.length
    if left[i] <= right[j]
       arr[k] <-- left[i]
       i <-- i + 1
    else 
       arr[k] <-- right[j]
       j <-- j + 1

    k <-- k + 1
  
  if i = left.length
    set remaining entries in arr to remaining values in right
  else
    set remaining entries in arr to remaining values in left
```

## Efficiancy

### Time

O(nLogn)

- This is for the best case, worst case and average case
- Because merge sort always divides the array into two halves and take linear time to merge two halves

### Space

O(n)

## Further Studying

### READ

[InterviewBit Article](https://www.interviewbit.com/tutorial/merge-sort-algorithm/)  
[Geeks for Geeks Article](https://www.geeksforgeeks.org/merge-sort/)  
[Khan Academy Article](https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/overview-of-merge-sort)

### WATCH

[Geeks for Geeks Video](https://www.youtube.com/watch?v=JSceec-wEyw)  
[HackerRank Video](https://www.youtube.com/watch?v=KF2j-9iSf4Q)
