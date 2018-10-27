var stack = [];

stack.push('google');
stack.push('instagram');
stack.push('youtube');

let youtube = stack.pop();
console.log(youtube);
stack.push('amazon');

let amazon = stack.pop();

console.log(amazon);

// could also use unshift/shift in tandem although much less efficient
