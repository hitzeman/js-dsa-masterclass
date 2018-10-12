/* Merge Sort Psuedocode
 * Break up the array into halves until you have arrays that are empty or have one element
 * Once you have small sorted arrays (arr.count 0 or 1), merge those arrays with other sortged arrays until you are back at the full length of the array
 * Return merged array
 */

// mergeSort([2,99,50,14,10,100,1]) --> [1,2,10,14,50,99,100]

 function mergeSort(arr) {
   if (arr.length <= 1) {
     return arr;
   }

   let mid = Math.floor(arr.length / 2);
   let left = mergeSort(arr.slice(0, mid));
   let right = mergeSort(arr.slice(mid));

   return merge(left, right);
 }

 var b = mergeSort([2,99,50,14,10,100,1]);
console.log(b);
/* Merging Arrays Pseudocode
 * Create an empty array which you will return
 * Start at beginning of each array (1, j) 
 * While there are still values we haven't looked at
 ** If value in first array is smaller than value in second array, push the value in the first array into our results and move on to the next value in the first array
 ** If the value in the first array is larger than the value in the seond array, push the value in the second array into our results and move onto the next value in second array
 * Once we finish one array, we push all remaning values from other array
 */

// [1, 10, 50] [2, 14, 99, 100] --> [1, 2, 10, 14, 50, 99, 100]

// merge([1, 10, 50], [2, 14, 99, 100]);

function merge(arr1, arr2) {
  let results = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }

    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
  }

  return results;
}

//var a = merge([1, 10, 50], [2, 14, 99, 100]);
//console.log(a);

function mergeInitial(arr1, arr2) {
  var merged = [];

  var i = 0;
  var j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  return merged;
}
