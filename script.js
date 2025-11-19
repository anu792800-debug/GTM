// Sample product data
const products = [
    { id: 1, name: "The Essential Tee", price: 45.00, category: "Men", imageUrl: "https://via.placeholder.com/300x400/1e90ff/ffffff?text=Blue+Tee" },
    { id: 2, name: "High-Waist Denim", price: 89.99, category: "Women", imageUrl: "https://via.placeholder.com/300x400/964B00/ffffff?text=Denim+Jeans" },
    { id: 3, name: "Minimalist Hoodie", price: 75.00, category: "Unisex", imageUrl: "https://via.placeholder.com/300x400/808080/ffffff?text=Gray+Hoodie" },
    { id: 4, name: "Leather Boots", price: 149.00, category: "Footwear", imageUrl: "https://via.placeholder.com/300x400/404040/ffffff?text=Leather+Boots" }
];

const productGrid = document.getElementById('product-grid');
const cartIcon = document.getElementById('cart-icon');

// Function to render products dynamically
const renderProducts = () => {
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.id = product.id; // Store ID for click events
        
        card.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>$${product.price.toFixed(2)}</p>
        `;
        
        productGrid.appendChild(card);
    });
};

// Function to handle product clicks (Simulating product detail view)
const handleProductClick = (e) => {
    // Traverse up the DOM to find the product-card element
    const card = e.target.closest('.product-card');
    
    if (card) {
        const productId = parseInt(card.dataset.id);
        const product = products.find(p => p.id === productId);
        
        if (product) {
            alert(`
                --- Product Detail (Demo) ---
                Name: ${product.name}
                Price: $${product.price.toFixed(2)}
                Category: ${product.category}
                
                (In a real site, this would load a new page.)
            `);
            // In a real application, this would trigger a route change or modal to show details.
        }
    }
};

// Function to handle cart click (Simulating cart page/modal)
const handleCartClick = () => {
    // NOTE: This is a front-end demo. The cart is not functional.
    alert('Cart Clicked! (In a real site, this would open your shopping bag with items ready for checkout.)');
};

// Main initialization function
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    
    // Setup event listeners
    productGrid.addEventListener('click', handleProductClick);
    cartIcon.addEventListener('click', handleCartClick);
});
