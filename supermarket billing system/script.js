// script.js
const products = [
    { id: 1, name: "Milk", price: 50 },
    { id: 2, name: "Bread", price: 30 },
    { id: 3, name: "Eggs", price: 10 },
    { id: 4, name: "Butter", price: 80 },
];

let cart = [];

// Function to display available products
function displayProducts() {
    const productList = document.getElementById("product-list");

    products.forEach((product) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${product.name} - ₹${product.price}
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(li);
    });
}

// Function to add items to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

// Function to display cart items
function displayCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = ''; // Clear current cart list

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ₹${item.price}
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartList.appendChild(li);
    });

    calculateTotal();
}

// Function to remove items from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Function to calculate total and display it
function calculateTotal() {
    const totalAmountElement = document.getElementById("total-amount");
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    const tax = total * 0.18; // Apply 18% tax
    total += tax;
    totalAmountElement.textContent = total.toFixed(2);
}

// Function to clear the cart
function clearCart() {
    cart = [];
    displayCart();
}

// Function to generate the bill
function generateBill() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Bill generated! Total: ₹" + document.getElementById("total-amount").textContent);
        clearCart();
    }
}

// Initialize the app by displaying products
displayProducts();