const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const cartCount = document.getElementById('cart-count');
let count = 0;

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCount.textContent = count;
        
        btn.textContent = "Added! ✓";
        btn.style.backgroundColor = "#28a745";
        
        setTimeout(() => {
            btn.textContent = "Add to Cart";
            btn.style.backgroundColor = "#1a1a1a";
        }, 1000);
    });
    
