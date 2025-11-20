/*
Objects are the most common type in typescript
Objects are used to represent real-world entities or data structures 

Objects can be created using object literals

const person = {
    name: "John",
    age: 30,
};

in typescript

const person: {
    name: string;
    age: number;
} = {
    name: "John",
    age: 30,
};

*/
// Basic usage of objects
const person: {
  name: string;
  age: number /*address: string */;
  hobby?: string; // Optional property using ?: called optional chaining
} = {
  name: "Kj",
  age: 23,
  // missing address : Error : Property 'address' is missing in type '{ name: string; age: number; }'
};

console.log(person);

// Inference
const person2 = {
  name: "Kj",
  age: 23,
};

console.log(person2);
// Also can be used as Index Signiture
const nameAgeMap: { [index: string]: number } = {};

nameAgeMap["Kj"] = 23;
console.log(nameAgeMap); //{Kj:23}

nameAgeMap.Night = 23;
console.log(nameAgeMap); // {Kj:23,Night:23}

// it can be also used as
const nameAgeMap2: Record<string, number> = {};
nameAgeMap2["Kj"] = 23;
console.log(nameAgeMap2); //{Kj:23}
