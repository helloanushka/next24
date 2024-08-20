let cart = [];
let totalPrice = 0;

function addToCart(id, name, price) {
    const item = { id, name, price };
    cart.push(item);
    updateCartUI();
}

function updateCartUI() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - ₹${item.price}`;
        cartItemsElement.appendChild(li);
    });

    totalPrice = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById('total-price').innerText = `Total: ₹${totalPrice}`;
}

document.getElementById('checkout-btn').addEventListener('click', function() {
    document.getElementById('order-status').innerText = "Processing order...";
    setTimeout(() => {
        document.getElementById('order-status').innerText = "Order confirmed! Your groceries will be delivered shortly.";
    }, 2000); // Simulates order processing time
});