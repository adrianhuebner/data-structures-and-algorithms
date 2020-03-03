# Blog Post: Quick Sort

This is a divide and conquer algorithm, meaning that the array will be divided up and then conquered by sorting it. It has a pivot, which can be any index in the array. It is then split into two arrays. 

## Un-Stable Algorithm

Quicksort is not an algorithm that is stable. 

## Learning Objectives

## Diagram

![HackerRank Quick Sort Diagram](https://s3.amazonaws.com/hr-challenge-images/quick-sort/QuickSort.png)  
Image from HackerRank

![Wikipedia Quick Sort Gif](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)  
Gif from Wikipedia

## Algorithm

## Pseudo Code

```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp

```

## Efficiency

### Time

Worst: O(n^2)
Expected: O(n Log n)

### Space

O(n Log n)

## Other References

### Watch

[Geeks for Geeks Video](https://www.youtube.com/watch?v=wObxd4Kx8sE)  
[HackerRank Video](https://www.youtube.com/watch?v=SLauY6PpjW4)  

### Read

[Khan Academy Article](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort)  
[Medium Article](https://medium.com/@Charles_Stover/implementing-quicksort-in-javascript-8044a8e2bf39)  
[w3resource Article](https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-1.php)
