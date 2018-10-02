// Creating a window which can either be an array or number from one position to another
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// Useful for keeping track of a subset of data in an array, string, etc.

// Write a function called maxSubarraySum whic accepts an array of integers and anumber called n. The function should calculate teh max sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5], 2) --> 10
// maxSubarraySum([1,2,5,2,8,1,5], 4) --> 17
// maxSubarraySum([4,2,1,6], 1) --> 6
// maxSubarraySum([4,2,1,6,2], 4) --> 13
// maxSubarraySum([], 4) --> null

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) {
    return null;
  }

  // calculate first sum where i < num 
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

function courseNaive(arr, num) {
  if (num > arr.length) {
    return null;
  }
 
  let max = -Infinity;
  
   // iterate over i until index at position where last number is num away 
   // [1,2,5,3], num = 2 --> iterate until i = 3 --> arr.length (4) - num (2) + 1 --> 3
   for (let i = 0; i < arr.length - num + 1; i++) {
     let temp = 0;
     for (let j = 0; j < num; j++) {
       temp += arr[i + j];
     }

     if (temp > max) {
       max = temp;
     }
   }
     
   return max;
 }
 
 let a = courseNaive([1,2,5,2,8,1,5], 4);
 console.log(a);

// function myNaive(arr, numOfElements) {
//  if (!arr.length) {
//    return null;
//  }

//  let max = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < i + numOfElements; j++) {
//       sum += arr[j];
//     }
//     if (sum > max) {
//       max = sum;
//     }
//   }
    
//   return max;
// }

// let a = naive([1,2,5,2,8,1,5], 4);
// console.log(a);