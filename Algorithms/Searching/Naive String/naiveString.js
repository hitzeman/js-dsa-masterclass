/*
  1. Define function with larger string and pattern to match
  2. Loop over the longer string
  3. Loop over shorter string
  4. If the characters don't match, break out of inner loop
  5. If characters  do match, keep going
  6. If you complete the inner loop and find a match, increment the count of matches
  7. Return the count
*/

// naiveSearch("", "a") --> 0
// naiveSearch("abc", "") --> 0
// naiveSearch("abc", "abc") --> 1
// naiveSearch("abc", "abcd") --> 0
// naiveSearch("abcd", "abc") --> 1
// naiveSearch("wowabcwow", "wow") --> 2

function naiveSearch(str, pattern) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (str[j + i] !== pattern[j]) {
        break;
      }

      // if we made it to the end of the pattern, j will be the last character of pattern
      if (j === pattern.length - 1) {
        count++;
      }
    }
  }
  return count;
}

function naiveSearchInitial(str, pattern) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let temp = '';
    for (let j = 0; j < pattern.length; j++) {
      if (str[j + i] !== pattern[j]) {
        break;
      }
      temp += str[j + i];
    }
    if (temp === pattern) {
      count++;
    }
  }
  return count;
}

var a = naiveSearch("wowabcwow", "wow");
// naiveSearch("wowabcwow", "wow");

console.log(a);