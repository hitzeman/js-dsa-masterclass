let q = [];

q.push("FIRST");
q.push("SECOND");
q.push("THIRD");

console.log(q.shift());
console.log(q.shift());
console.log(q.shift());

// could also use unshift and pop in tandem

// With eitehr approach, either adding to beginning or removing from the beginning will have to re index entire array
