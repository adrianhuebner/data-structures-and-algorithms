# Blog On: Insertion Sort

## Learning Objectives

- Sorting algorithm that builds a sorted array, one value at a time to find it's correct position

## Diagram

![Diagram from Geeks for Geeks](https://media.geeksforgeeks.org/wp-content/uploads/insertionsort.png)

Image taken from Geeks for Geeks

## Algorithm

- Move left through the array
- Check the current positions value
- Move that value in the right order

## Pseudocode

```
InsertionSort(int[] arr)

FOR i = 1 to arr.length

  int j <-- i - 1
  int temp <-- arr[i]

  WHILE j >= 0 AND temp < arr[j]
    arr[j + 1] <-- arr[j]
    j <-- j - 1
  
  arr[j + 1] <-- temp
```

## Readings and References

* [Khan's Academy Article](https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort)

* [mycodeschool YouTube Video](https://www.youtube.com/watch?v=i-SKeOcBwko)
