/*
Here i want to tackle about basics Data Types in Typescripts

Just like Javascript they have the same Data Types 

 - String
 - Number
 - Boolean
 - Null
 - Undefined

*/

// Number represent both number and floating point numbers
let decimal: number = 6;
let hex: number = 0xf00d; // Hexadecimal
let binary: number = 0b1010; // Binary
let octal: number = 0o744; // Octal
let float: number = 3.14; // Floating point
console.log(`
Decimal : ${decimal}
Hex      : ${hex}
Binary   : ${binary}
Octal    : ${octal}
Float    : ${float}    
    
`);

// String
let color: string = "blue";
let sentence: string = `Hello, my color is ${color}`;
console.log(sentence);

// Boolean
let isDone: boolean = false;
console.log(isDone);

// Null and Undefined

let nullVariable: null = null;
console.log(nullVariable);
let undefinedVariable: undefined = undefined;

console.log(undefinedVariable);
/*
As you observe the typescript has 

let variabe_name:type = value

while javascript has 

let variabe_name = value

When you use the Javascript in Typescript it will says Inffered  but it still working because 
Typescript determine the type of the variable based on the assigned valie
*/
