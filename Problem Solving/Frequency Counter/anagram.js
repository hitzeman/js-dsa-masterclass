// SOLUTION FROM COURSE
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')



// My initial solution 
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let string1 = {};
  let string2 = {};

  // iterate over each character in str1
  for (let char of str1) {
    string1[char] = (string1[char] || 0) + 1;
  }

  // iterate over each character in str2
  for (let char of str2) {
    string2[char] = (string2[char] || 0) + 1;
  }

  for (let key in string1) {
    if (!string2[key]) {
      return false;
    }

    if (string2[key] !== string1[key]) {
      return false;
    }
  }  

  return true;
}

let a = validAnagramSort('texttwisttime', 'timetwisttext');
//console.log(a);

// This is an afterthought approach ... O(nlog n)
function validAnagramSort(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let arr1 = Array.from(str1).sort().join('');
  let arr2 = Array.from(str2).sort().join('');

  if (arr1 !== arr2) {
    return false;
  }

  return true;
}

let b = validAnagramSort('texttwisttime', 'timetwisttext');
console.log(b);



//function validAnagram(str1, str2) {
  // if length of strings differ, return false

  // create string1 object
  // create string2 object

  // iterate over each character in str1
    //if char doesnt exist, add key and initialize to 1
    // if char exists, increment value for key by 1
  
  // iterate over each character in str2
    //if char doesnt exist, add key and initialize to 1
    // if char exists, increment value for key by 1
  
  // iterate over each key in string1 object
    // if key doesn't exist in string2 object, return false
    // if value differs from string2 object, return false

  // return true;
//}