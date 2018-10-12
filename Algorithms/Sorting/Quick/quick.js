/* Pivot Pseudocode
 * Function accepts array, start index(0) and end index (arr.length -1)
 * Pick pivot from start of array
 * Store current pivot index in variable (keep track where pivot should end up)
 * Loop through array from the start until the end
 *   If pivot > current element, increment pivot index variable and swap the current element with the element at pivot
 *  Swap the starting element with pivot index
 * Return pivot index
 */

  //pivot([4, 8, 2, 1, 5, 7, 6, 3]); --> 3

  function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        swapIndex++;
        swap(arr, swapIndex, i);
      }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
  }

  function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }

  console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

  /* Quicksort psuedocode
   * Call the pivot helper on the array
   * When helper returns updated pivot index, recursively call pivot on the subarray to the left of that index and the right
   * Base case occurs when you consider a subarray with less than 2 elements
   * 
  */

  function quickSort(arr, left = 0, right = arr.length -1) {
    if (left < right) {
      let pivotIndex = pivot(arr, left, right);
      // left
      quickSort(arr, left, pivotIndex - 1);
      // right
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  }