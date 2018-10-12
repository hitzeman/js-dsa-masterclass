/* Selection Sort Pseudocode
 * Store the first element as the smallest value you've seen so far
 * Compare this item to the next item in the array until you find a smaller number
 * If a smaller number is found, designate that smaller number to be the new min and continue until the end of the array
 * If the min is not the value (index) you initiall began with, swap the two values
 * Repeat this with the next element until the array is sorted
*/

// selectionSort([]) --> [] 
// selectionSort([5,3,4,2,1]) --> [1,2,3,4,5] 
// selectionSort([1,2,3,4,5]) --> [1,2,3,4,5] 
// selectionSort([1,1,1]) --> [1,1,1] 

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[min]) {
        min = j + 1;
      }
      if (min !== i) {
        swap(arr, i, min);
      }
    }
  }
  return arr;
}

let a = selectionSort([1,2,3]);
console.log(a);

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}