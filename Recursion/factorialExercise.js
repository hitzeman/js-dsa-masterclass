//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

// factorial(4)
      // 4 * factorial(3)
              // 3 * factorial(2)
                      // 2 * factorial(1)
                              // 1 * factorial(0)
                                      // 1

// factorial(4) = 24
      // 4 * 6 = 24
              // 3 * 2 = 6
                      // 2 * 1 = 2
                              // 1 * 1 = 1
                                      // 1