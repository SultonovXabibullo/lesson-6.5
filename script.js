// script.js
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=10');
        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error('Xatolik yuz berdi:', error);
    }
}

function renderProducts(products) {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p class="price">$${product.price}</p>
        `;

        productsContainer.appendChild(productCard);
    });
}
