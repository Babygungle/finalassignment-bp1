// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
function updateInventory(item, price, quantity) {
  if (inventory[item]) {
    inventory[item].quantity += quantity;
  } else {
    inventory[item] = { price, quantity };
  }
}
updateInventory("apple", 35, 200);
updateInventory("orange", 20, 300);

let totalValue = 0;
for (const item in inventory) {
  totalValue += inventory[item].price * inventory[item].quantity;
}
console.log(inventory);
console.log(`Total inventory value: ${totalValue} baht`);