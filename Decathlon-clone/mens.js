document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById('product-grid');

    for (let i = 0; i < 60; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="https://via.placeholder.com/200" alt="Product Image">
            <h3>DOMYOS Men's T-Shirt For Gym Cotton Rich 100 - Blue</h3>
            <p class="price">₹ 299</p>
            <p class="offer">+1 Offer</p>
            <button>Add to Cart</button>
        `;
        productGrid.appendChild(card);
    }
});
