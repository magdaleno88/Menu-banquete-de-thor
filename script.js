// Datos del menú
const menuItems = [
    {
        name: "Unicornio",
        category: "platos",
        price: 12.99,
        description: "Unicornio asado acompañado con mandragora hervida",
        image: "img/unicornio.jpg",
    },
    {
        name: "Megalodon",
        category: "platos",
        price: 120.00,
        description: "Megalodon asado bañado en salsa de hormiga",
        image: "img/megalodon.jpg",
    },
    {
        name: "Coctel de pitufo",
        category: "bebidas",
        price: 120.00,
        description: "coctel de pitufo endulzado con polvo de hada",
        image: "img/pitufo.jpg",
    },
    // Agregar más elementos aquí...
];

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderMenu(menuItems);
    setupFilters();
    setupThemeToggle();
    setupSearch();
});

// Renderizar menú
function renderMenu(items) {
    const container = document.getElementById('menu-items');
    container.innerHTML = items.map(item =>`
        <div class="menu-item" data-category="${item.category}">
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='img/placeholder.jpg';">
            </div>
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p class="price">$${item.price}</p>
                <button class="add-to-cart" onclick="addToCart('${item.name}')">Añadir al pedido</button>
            </div>
        </div>
    `).join('');
}

// Filtros
function setupFilters() {
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            button.classList.add('active');
            const category = button.dataset.category;
            filterMenu(category);
        });
    });
}

function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        item.style.display = (category === 'all' || item.dataset.category === category) ? 'block' : 'none';
    });
}

// Modo oscuro
function setupThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', document.body.dataset.theme);
    });
}

// Buscador
function setupSearch() {
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = menuItems.filter(item => 
            item.name.toLowerCase().includes(term)
        );
        renderMenu(filtered);
    });
}

// Carrito
let cartCount = 0;
function addToCart(itemName) {
    cartCount++;
    document.getElementById('cart-counter').textContent = cartCount;
    console.log(`Añadido: ${itemName}`);
    // Animación
    const counter = document.getElementById('cart-counter');
    counter.style.transform = 'scale(1.2)';
    setTimeout(() => counter.style.transform = 'scale(1)', 200);
}