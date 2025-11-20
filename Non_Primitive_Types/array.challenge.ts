/*
Simple Add, Edit, Delete operations using an Array
*/

// Initial array
const items = ["Item 1", "Item 2", "Item 3"];

// View items
console.log("Initial items:");
items.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

// Add item
items.push("Item 4");
console.log("\nAfter adding 'Item 4':");
items.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

// Edit item
items[1] = "Updated Item 2";
console.log("\nAfter editing index 1 to 'Updated Item 2':");
items.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

// Delete item at index 2
items.splice(2, 1); // remove 1 item at index 2
console.log("\nAfter deleting 1 item at index 2:");
items.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

// Delete 2 items starting at index 1
items.splice(1, 2);
console.log("\nAfter deleting 2 items starting at index 1:");
items.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
