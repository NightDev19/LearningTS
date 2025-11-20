/*
Typescript Speial Types
 - any : A fully flexible escape hatch from Typescripts System , Assigning any disable all type checking for the variable (Dont use it if it doesn't need)
 - unknown : A safe alternative of any , represent a value that could be anything, but requires type checking before use.
 - never : Represents value that never accour, used for unreachable code paths and function that do not return
 - undefined and null : Represent no value but in different way
*/

// Example for any

let v: any = true;
v = "String"; // No error
console.log(v);
console.log(Math.round(v)); // No Error

// As its description any disables the types of the variable when checking it

// Example for unknown

let w: unknown = 1;
w = "string";
console.log(w);

if (typeof w === "object" && w !== null) {
  (w as { runANonExistentMethod: () => void }).runANonExistentMethod();
}

// Example of error

function throwError(msg: string): never {
  throw new Error(msg);
}

// let x: never = true; // Error

// Example of undefined and null

let y: undefined = undefined;
let z: null = null;

function greet(name?: string) {
  return `Hello, ${name || "stranger"}`;
}

// Example objects to fix the errors
const user: { address?: { street?: string } } | null = {
  address: { street: "123 Main St" },
};
const input: string | null = null;

// Optional chaining
const street = user?.address?.street; // "123 Main St"
console.log(street);

// Nullish coalescing
const value = input ?? "default"; // "default"
console.log(value);
