function factorialRecursive(num) {
  if (num ===  1) {
    return 1;
  }

  return num * factorialRecursive(num - 1);
}

function factorialIterative(num) {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;
}

// Common Mistakes
// 1. No base case
// 2. Forgetting to return or returning the wrong thing.
// 3. Stack overflow


