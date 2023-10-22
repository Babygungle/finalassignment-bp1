// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
function updateInventory(name, price, quantity) {
  if (inventory[name]) {
    inventory[name].quantity += quantity;
  } else {
    inventory[name] = {price, quantity};
  }
  
}
updateInventory("apple", 35, 100);
updateInventory("orange", 20, 300);

let totalValue = 0;
for (const name in inventory) {
  totalValue += inventory[name].price * inventory[name].quantity;
}
console.log(`Total inventory value: ${totalValue} baht`);