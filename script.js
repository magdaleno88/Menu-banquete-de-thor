// Datos del menú
const menuItems = [
    {
        name: "Costillas de Dragón Rojo",
        category: "platos",
        price: 250.00,
        description: "Unas colosales costillas ahumadas con un glaseado de fuego líquido que brilla en tonos ámbar y carmesí. El plato emite un ligero resplandor rojizo, como si aún conservara la energía de la bestia legendaria. Se sirve sobre un plato de piedra volcánica con llamas danzantes que parecen brotar de los huesos.",
        image: "img/costillas.jpg",
    },
    {
        name: "Hacha de Jotunheim",
        category: "platos",
        price: 220.00,
        description: "Un filete de venado con un hueso afilado en forma de hacha, bañado en una salsa azul gélida que emite un sutil vapor helado. A su alrededor, cristales de sal brillante y pequeñas runas talladas en zanahorias moradas flotan en el plato como si estuvieran imbuidas con magia ancestral.",
        image: "img/hacha.jpg",
    },
    {
        name: "Salmones de las Nueve Corrientes",
        category: "platos",
        price: 230.00,
        description: "Filetes de salmón con una piel escamada iridiscente que refleja tonos dorados y esmeralda, servidos sobre una cama de algas luminosas que parecen moverse ligeramente con el viento. Unas burbujas mágicas flotan sobre el plato, conteniendo diminutas esferas de caviar brillante.",
        image: "img/salmon.jpg",
    },
    {
        name: "Jabalí de Valhalla ",
        category: "platos",
        price: 240.00,
        description: "Un gigantesco pernil de jabalí asado, con un glaseado de hidromiel chispeante y especias rúnicas que resplandecen débilmente. En su base, un lecho de vegetales de colores imposibles—zanahorias moradas, coles azules y tubérculos dorados—parecen cobrar vida con un suave fulgor místico.",
        image: "img/jabali.jpg",
    },
    {
        name: "Trono de Asgard",
        category: "platos",
        price: 260.00,
        description: "Un imponente pastel de carne de cordero y res con capas de queso dorado derretido, esculpido en forma de un pequeño trono rúnico. Alrededor del plato, pequeñas espadas de pan de ajo crujiente se clavan en la base, como si esperaran a ser reclamadas por los guerreros de la mesa.",
        image: "img/carne.jpg",
    },
    {
        name: "Coctel de pitufo",
        category: "bebidas",
        price: 120.00,
        description: "Coctel de pitufo endulzado con polvo de hada",
        image: "img/pitufo.jpg",
    },
    {
        name: "Elixir de Dragón",
        category: "bebidas",
        price: 100.00,
        description: "Bebida especiada con canela, miel, jengibre y un toque de fuego líquido (chile).",
        image: "img/Elixir.jpg",
    },
    {
        name: "Lagrimas de Unicornio",
        category: "bebidas",
        price: 90.00,
        description: "Cóctel brillante con agua de rosas, jugo de arándano y un toque de purpurina comestible.",
        image: "img/Lagrima.jpg",
    },
    {
        name: "Pocion de Sombras",
        category: "bebidas",
        price: 95.00,
        description: "Bebida negra con tinta de calamar, lima y soda mágica que burbujea al mezclarla.",
        image: "img/sombras.jpg",
    },
    {
        name: "Hidromiel de los Dioses",
        category: "bebidas",
        price: 150.00,
        description: "Bebida fermentada con miel y especias divinas.",
        image: "img/miel.jpg",
    },
    {
        name: "Piedras de Hada",
        category: "entradas",
        price: 60.00,
        description: "Bolitas de queso de cabra cubiertas con almendras trituradas y miel encantada.",
        image: "img/PiedrasH.jpg",
    },
    {
        name: "Alas de dragon",
        category: "entradas",
        price: 65.00,
        description: "Alitas de pollo glaseadas con salsa de frutas místicas y un toque de fuego (picante).",
        image: "img/Dragon.jpg",
    },
    {
        name: "Hongos Élficos Rellenos",
        category: "entradas",
        price: 70.00,
        description: "Champiñones rellenos con hierbas mágicas, queso y polvo de duende (pan rallado especiado).",
        image: "img/hongos.jpg",
    },
    {
        name: "Pan de la Tierra Media",
        category: "entradas",
        price: 75.00,
        description: "Pan rústico con hierbas, similar al lembas élfico, acompañado de mantequilla de miel dorada.",
        image: "img/pan.jpg",
    },
    {
        name: "Ostias de Neptuno",
        category: "entradas",
        price: 90.00,
        description: "Ostras horneadas con salsa de perlas marinas y un toque de especias misteriosas.",
        image: "img/Ostias.jpg",
    },
    {
        name: "Helado de Aurora Boreal",
        category: "postres",
        price: 170.00,
        description: "Un postre celestial con esferas de helado brillante en tonos neón de azul, verde y morado, decorado con polvo de estrellas plateado y servido en un cuenco de hielo cristalino que refleja luces danzantes.",
        image: "img/Aurora.jpg",
    },
    {
        name: "Pastel Rúnico de Odín",
        category: "postres",
        price: 160.00,
        description: "Una tarta imponente de chocolate oscuro y frutos del bosque, con glaseado negro azabache cubierto de runas doradas que parecen resplandecer con un brillo mágico. Sobre ella, chispas doradas flotan en el aire como si un hechizo la rodeara.",
        image: "img/Pastel.jpg",
    },
    {
        name: "Manzana Dorada de Idunn",
        category: "postres",
        price: 130.00,
        description: "Una manzana caramelizada en oro líquido con reflejos centelleantes, flotando en una copa de cristal llena de néctar de miel espumoso. Pequeñas hojas de azúcar en tonos esmeralda giran a su alrededor como si flotaran con un encantamiento.",
        image: "img/Manzana.jpg",
    },
    {
        name: "Cúpula de Hielo de Jotunheim",
        category: "postres",
        price: 120.00,
        description: "Un postre esférico de azúcar transparente con un interior de mousse azul gélido y trozos de cristal de menta. Se sirve sobre una base de nieve comestible, con un ligero vapor frío que emana de su interior como si estuviera encantado.",
        image: "img/Hielo.jpg",
    },
    {
        name: "Rocas Místicas de Yggdrasil",
        category: "postres",
        price: 110.00,
        description: "Pequeños bocados de chocolate con un exterior brillante que cambia de color entre verde, violeta y dorado. En su interior, un relleno de caramelo y frutos encantados parece pulsar suavemente con un resplandor místico, como si cada bocado contuviera la energía del árbol sagrado.",
        image: "img/Arbol.jpg",
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