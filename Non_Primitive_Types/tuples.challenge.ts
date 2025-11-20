/*
Tuple Challenge: Introduce Adults from a List

Instructions (Step by Step, O(n)):

1. Define a tuple type `Person` to store a name (string) and age (number).
2. Create an array of people using the tuple type.
3. Write a function `printAdults` that:
   a. Loops through the array of people (O(n) complexity).
   b. Destructures each tuple into `name` and `age`.
   c. Checks if the age is 18 or above.
   d. Prints a message: "NAME is an adult (age: AGE)".
4. Call the function to display adults.
*/

// Step 1: Define tuple type
type Person = [string, number];

// Step 2: Create an array of people
const people: Person[] = [
  ["Alice", 25],
  ["Bob", 16],
  ["Charlie", 30],
  ["Diana", 12],
];

// Step 3: Function to print adults
function printAdults(personList: Person[]): void {
  for (let i = 0; i < personList.length; i++) {
    const person = personList[i];
    if (!person) continue;
    const [name, age] = person;
    if (age >= 18) {
      console.log(`${name} is an adult (age: ${age})`);
    }
  }
}

// Step 4: Call function
printAdults(people);
