/* Radix Sort Pseudocode
 * Define a function that accepts a list of numbers
 * Figure out how many digits the largest number has
 * Loop from 0 up to largest num of digits
 * Foreach iteration
 *  Create buckets for each digit (0 to 9) --> each an empty array
 *  place each number in the corresponding bucket based on its kth digit
 * Replace existing array with values in our buckets starting with 0 and going up to 9
 * return list at the end
 */
function radix(nums) {
  let maxDigits = mostDigits(nums);

  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      buckets[digit].push(nums[i]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
}

var a = radix([10,2,6,9,3,4]);
console.log(a);

/* getDigit Helper Function
 * Returns the digit from num[place] from the right side
 * getDigit(12345, 0) --> 5
 * getDigit(12345, 1) --> 4
 * getDigit(12345, 2) --> 3
 */

 // getDigit(7323, 2)
 /// 10 ^ 2 = 100
 /// 7323/100 = 73.23
 /// Math.floor(73.23) = 73
 /// 73 % 10 = 3
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//console.log(getDigit(12345, 0));

/* digitCount returns number of digits in num
 * digitCount(1); --> 1
 * digitCount(222); --> 3
*/

function digitCount(num) {
  return num.toString().length;
  // if (num === 0) return 1;
  // return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(31));

/* Given an array of numbers, return the number of digits in the largest numbers in the list
 * mostDigits([1234, 56, 7]); --> 4
 * mostDigits([1, 1, 11111, 1]); --> 5
 * mostDigits([12, 34, 56, 78]); --> 2
 */
function mostDigits(nums) {
  let most = 0;
  for (let i = 0; i < nums.length; i++) {
    most = Math.max(most, digitCount(nums[i]));
  }
  return most;
}

console.log(mostDigits([1234, 56, 7]));