function numberCompare(num1, num2) {
  return num1 - num2;
}

// [6, 4, 15, 10].sort(numberCompare);
// [4, 6, 10, 15]

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

["Todd", "Hannah", "Ryan", "Natalie"].sort(compareByLen);
// ["Todd", "Ryan", "Hannah", "Natalie"]

// if negative number returned, a -> b
// if positive number returned, b -> a
// if 0 returned, a === b