// power(2,0) // 1
// power(2,2) // 4
// power(2,3) // 8
// power(2,4) // 16

function power(base, exponent){
  if (exponent === 0) return 1;
  exponent--;
  return base * power(base, exponent);
}

// Example:
// power(2,4)
      // 2 * power(2, 3)
              // 2 * power(2, 2)
                      // 2 * power(2, 1)
                              // 2 * power(2, 0)
                                      // 1

// Example:
// power(2,4) = 16
      // 2 * 8 = 16
              // 2 * 4 = 8
                      // 2 * 2 = 4
                              // 2 * 1 = 2
                                      // 1