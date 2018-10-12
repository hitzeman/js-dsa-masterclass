// A sorting algorithm where the largest values bubble up to the top

// At the end of the first iteration, the largest value will be at the end of the array
// amount of items that we need to sort is less each iteration

// Very useful for almost sorted data

/* Psuedocode
 * Start looping from with a variable called i at the end of the array towards the beginning
 * Start an inner loop with a variable called j from the beginning until i - 1
 * if (arr[j] > arr[j + 1]) --> swap
 * return sorted array
*/

// bubble([]) --> []
// bubble([5,3,1,2,4]) --> [1,2,3,4,5]
// bubble([1]) --> [1]
// bubble([1,2,3]) --> [1,2,3]
// bubble([100,50,0]) --> [0,50,100]

// if no swaps then break since we're already sorted
// keeping track of swaps is useful if array is almost sorted
function bubbleOptimized(arr) {
  let noSwaps;
  for (let i = arr.length; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

function bubble(arr) {
  for (let i = arr.length; i >= 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

//let a = bubble([100, 50, 0]);
//console.log(a);

function bubbleInitial(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  noSwaps = false;
}

