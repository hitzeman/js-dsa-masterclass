// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3,10]));

// productOfArray([1,2,3])
      // 1 * productOfArray([2,3])
                  // 2 * productOfArray([3])
                            // 3 * productOfArray([])
                                        // 1

// productOfArray([1,2,3]) = 6
      // 1 * 6 = 6
                  // 2 * 3 = 6
                            // 3 * 1 = 3