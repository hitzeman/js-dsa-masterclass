// linearSearch([1,2,3], 1) --> 0
// linearSearch([1,2,3], 3) --> 2
// linearSearch([1,2,3], 4) --> -1



function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([9,8,7,6,5,4,3,2,1,0], 4));