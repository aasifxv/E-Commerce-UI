// ---------- Shared cart helpers (used on every page) ----------
const CART_KEY = 'shopeasy_cart';

function loadCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    try {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) {}
}

const cartCount = document.getElementById('cart-count');

function updateBadge() {
    const total = loadCart().reduce((sum, item) => sum + item.qty, 0);
    if (cartCount) cartCount.textContent = total;
}
updateBadge();

// ---------- Add to Cart buttons (home page) ----------
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.product-card');
        const name = card.querySelector('h3').textContent.trim();
        const price = parseFloat(card.querySelector('.price').textContent.replace('$', ''));
        const img = card.querySelector('img').src;

        const cart = loadCart();
        const existing = cart.find(item => item.name === name);
        if (existing) {
            existing.qty++;
        } else {
            cart.push({ name: name, price: price, img: img, qty: 1 });
        }
        saveCart(cart);
        updateBadge();

        btn.textContent = "Added! ✓";
        btn.style.backgroundColor = "#28a745";

        setTimeout(() => {
            btn.textContent = "Add to Cart";
            btn.style.backgroundColor = "#1a1a1a";
        }, 1000);
    });
});

// ---------- Mobile menu ----------
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}
