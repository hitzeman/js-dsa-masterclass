
// NAIVE APPROACH

function same(arr1, arr2) {
  // since frequency must be the same, compare the length of both arrays, and if different, return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  // sort both arrays
  arr1.sort(function (a, b) {
    return a - b;
  });

  arr2.sort(function (a, b) {
    return a - b;
  });

  // iterate over both arrays, asserting that arr2[i] == arr1[i] ^ 2, else return false. Since these are sorted, we can compare the array values at the same index
  for (var i = 0; i < arr1.length; i++) {
    if (arr2[i] !== arr1[i] * arr1[i]) {
      return false;
    }
  }
  return true;
}

var result = same([1, 2, 3], [9, 4, 1]);
//console.log(result);

// NAIVE APPROACH

function sameNested(arr1, arr2) {
  // return false if array lengths differ
  if (arr1.length !== arr2.length) {
    return false;
  }

  // foreach item in arr1, look for the squared value in arr2
  for (var i = 0; i < arr1.length; i++) {
    var currentIndex = null;
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] * arr1[i] === arr2[j]) {
        currentIndex = j;
        arr2.splice(currentIndex, 1);
      }
    }
    if (currentIndex === null) {
      return false;
    }
  }

  return true;
}

// FREQUENCY COUNTER APPROACH

var result2 = sameNested([1, 2, 3], [9, 4, 1]);
//console.log(result2);

// O(3n) --> O(n)
function sameEfficient(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};  

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    // if key^2 is not in frequencyCounter2 return false
    if (!(key * key in frequencyCounter2)) {
      return false;
    }

    // if values of the key^2 in frequencyCounter2 don't match value of frequencyCounter1 key return false
    if (frequencyCounter2[key * key] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

var result3 = sameEfficient([1, 2, 3, 3], [9, 4, 1, 9]);
console.log(result3);