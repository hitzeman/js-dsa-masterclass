// Binary Search Pseudocode
// 1. This function accepts a sorted array and a value
// 2. Create a left pointer at the start of the array, and a right pointer at the end of the array
// 3. While the left pointer comes before the right pointer:
  // a. Create a pointer in the midddle
  // b. if you find the value you want, return the index
  // c. if the value is too small, move the left pointer up
  // d. if the value is too large, move the right pointer down
// If you never find the value, return -1

// binarySearch([1,2,3,4,5], 1) --> 0
// binarySearch([1,2,3,4,5], 3) --> 2
// binarySearch([1,2,3,4,5], 5) --> 4
// binarySearch([1,2,3,4,5], 6) --> -1

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while(arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      // subtract 1 since middle is not val
      end = middle - 1;
    } else {
      // add 1 since middle is not val
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
}



function binarySearchFirstApproach(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);

  while (left < right) {
    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] < val) {
      left = middle;
    } else {
      right = middle;
    }
  }
  return -1;
}

console.log(binarySearchFirstApproach([1,2,3,4,5], 1));