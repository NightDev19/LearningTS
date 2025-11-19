// Function with Explicit parameter and return types
function greet(name: string) {
  // The explicit here is the name:string
  return `Hello ${name}`;
}

// Typescript will ensure you pass the correct argument type
console.log(greet("Kj")); // Pass
// greet(23); // Error :Argument of type 'number' is not assignable to parameter of type 'string'
