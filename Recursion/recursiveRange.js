// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
   if (num === 1) return 1;
   return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6));

// recursiveRange(6)
      // 6 + recursiveRange(5)
              // 5 + recursiveRange(4)
                        // 4 + recursiveRange(3)
                                // 3 + recursiveRange(2)
                                          // 2 + recursiveRange(1)
                                                  // 1

// recursiveRange(6)
      // 6 + 15 = 21
              // 5 + 10 = 15
                        // 4 + 6 = 10
                                // 3 + 3 = 6
                                          // 2 + 1 = 3
                                                  // 1 + 0 = 1