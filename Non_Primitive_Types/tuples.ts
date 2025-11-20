// Normal tuple
let person: [string, number] = ["Kj", 23];

// ✅ Correct usage
person = ["Alice", 30];
console.log(person);

// ❌ This will bypass type safety (should avoid)
person.push("Extra");
console.log(person);

// Readonly tuple
const person3: readonly [string, number] = ["Kj", 23];
console.log(person3);

// ❌ Cannot modify a readonly tuple
// person3[0] = "Alice";   // Error: Index signature in type 'readonly [string, number]' only permits reading
// person3.push("New");    // Error: Property 'push' does not exist on type 'readonly [string, number]'
