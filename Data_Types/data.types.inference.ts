// Basic Type Inference
// Typescript inferce  as
//'string'
let username = "Kj";
console.log(username);
// 'number'
let age = 23;
console.log(age);
// 'boolean[]'
let flags = [true, false, true];
console.log(flags);
// return type as 'number'
function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));
