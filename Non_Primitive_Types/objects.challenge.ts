/*
Object Challenge: Store and Display Products

Instructions:
1. Create an object type `Product` with properties:
   - id (number)
   - name (string)
   - price (number)
   - inStock (boolean)

2. Create an array of at least 4 products using this object type.

3. Write a function that:
   - Loops through all products.
   - Prints only the products that are in stock.
   - For each product in stock, print: "Product NAME (ID: ID) costs $PRICE"

Expected Output Example:
Product Laptop (ID: 1) costs $1200
Product Headphones (ID: 3) costs $150
Product Mouse (ID: 4) costs $30
*/

type Product = { id: number; name: string; price: number; inStock: boolean };

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1200, inStock: true },
  { id: 2, name: "Monitor", price: 800, inStock: false },
  { id: 3, name: "Headphones", price: 150, inStock: true },
  { id: 4, name: "Mouse", price: 30, inStock: true },
];

products.forEach((product) => {
  if (product.inStock) {
    console.log(
      `Product ${product.name} (ID: ${product.id}) costs $${product.price}`
    );
  }
});
