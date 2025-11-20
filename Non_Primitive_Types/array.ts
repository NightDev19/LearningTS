// Example 1: Regular string array
const names: string[] = [];
names.push("Dylan"); // ✅ Works
names.push("Alice");
names.push("Bob");
names.push("Charlie");
// names.push(3); // ❌ Error: Type 'number' is not assignable to type 'string'

names.forEach((name) => {
  console.log(name);
});

// Example 2: Readonly array
const Names: readonly string[] = ["Kj"];
// Names.push("Jack"); // ❌ Error: 'push' does not exist on readonly array
Names.forEach((name) => {
  console.log(name);
});

// Example 3: Number array with type inference
const numbers = [1, 2, 3]; // inferred as number[]
numbers.push(4); // ✅ Works
// numbers.push("2"); // ❌ Error: Type 'string' is not assignable to type 'number'

// Accessing array element safely
let head: number = numbers[0]!; // ✅ Non-null assertion because array has elements
console.log("Head of numbers:", head);
