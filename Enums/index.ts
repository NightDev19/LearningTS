enum Control {
  Up = "UP", // without the value it will be 0 , but with the value we initialize it
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

let character = Control.Up;
console.log(character);
// character = "DOWN"; // Error : Type '"DOWN"' is not assignable to type 'Control'
// console.log(character);
