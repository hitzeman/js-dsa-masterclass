/* Multiple Pointers
 * Creating pointers that correspond to an index or psoition and move towards the beginning, middle or end based on a certain condition
 * Very efficient for solving problems with minimal space complexity as well
*/

// Example
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both the values
// that sum to zero or undefined if a pair does not exist.

function naive(sortedInts) {
  for (let i = 0; i < sortedInts.length; i++) {
    for (let j = i + 1; j < sortedInts.length; j++) {
      if(sortedInts[i] + sortedInts[j] === 0) {
        return [sortedInts[i], sortedInts[j]];
      }
    }
  }
  
  return undefined;
}

let a = naive([-3,-2,-1,0,1,2,4]);
console.log(a);

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}