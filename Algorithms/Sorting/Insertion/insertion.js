/* Insertion Sort Pseudocode
 * Start by picking the second element in the array
 * Now cmopare the second element with the one before it and swap if necessary
 * Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place
 * Repeat until the array is sorted
*/

// insertionSort([]) --> [] 
// insertionSort([5,3,4,2,1]) --> [1,2,3,4,5] 
// insertionSort([1,2,3,4,5]) --> [1,2,3,4,5] 
// insertionSort([1,1,1]) --> [1,1,1] 

// keep track of temp variable and copy up while greater
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
}

// My Initial Solution
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (arr[i] < arr[j]) {
//         swap(arr, i, j);
//       }
//     }
//   }
//   return arr;
// }

let a = insertionSort([5, 3, 4, 2, 1]);
console.log(a);

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}