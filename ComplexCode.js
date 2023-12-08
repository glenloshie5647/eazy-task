// Filename: ComplexCode.js

// This code is a complex implementation of a shopping cart system

// Class to represent a shopping cart item
class CartItem {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }
}

// Class to represent a shopping cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    const newItem = new CartItem(name, price, quantity);
    this.items.push(newItem);
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  getItemCount() {
    let count = 0;
    for (const item of this.items) {
      count += item.quantity;
    }
    return count;
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (const item of this.items) {
      totalPrice += item.getTotalPrice();
    }
    return totalPrice;
  }
}

// Example usage of the shopping cart
const cart = new ShoppingCart();

cart.addItem("iPhone", 999, 2);
cart.addItem("Laptop", 1499, 1);
cart.addItem("Headphones", 199, 3);

console.log("Items in Cart:", cart.getItemCount());
console.log("Total Price:", cart.getTotalPrice());