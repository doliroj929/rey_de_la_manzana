/**
 * Rey de la Manzana - Tienda de frutas
 * Proyecto 2 · JS + Recuperación RA2
 *
 * Funcionalidades:
 *  - Catálogo de frutas generado dinámicamente con JavaScript
 *  - Filtrado por categoría y búsqueda por nombre
 *  - Ordenación por precio o nombre
 *  - Carrito de la compra (añadir, quitar, vaciar)
 *  - Cálculo dinámico del total
 *  - Modal de confirmación de pedido
 */

'use strict';

/* ==============================
   Datos del catálogo de frutas
============================== */
const productos = [
  {
    id: 1,
    nombre: 'Manzana Roja',
    categoria: 'manzanas',
    emoji: '🍎',
    precio: 1.99,
    unidad: 'kg',
    origen: 'España',
    descripcion: 'Manzana Red Delicious, dulce y crujiente. Perfecta para picar o hacer tartas.',
    oferta: false,
  },
  {
    id: 2,
    nombre: 'Manzana Verde',
    categoria: 'manzanas',
    emoji: '🍏',
    precio: 1.79,
    unidad: 'kg',
    origen: 'Francia',
    descripcion: 'Granny Smith, con un toque ácido ideal para ensaladas y zumos naturales.',
    oferta: true,
  },
  {
    id: 3,
    nombre: 'Manzana Fuji',
    categoria: 'manzanas',
    emoji: '🍎',
    precio: 2.49,
    unidad: 'kg',
    origen: 'Japón',
    descripcion: 'Variedad japonesa muy aromática, con textura firme y sabor equilibrado.',
    oferta: false,
  },
  {
    id: 4,
    nombre: 'Manzana Golden',
    categoria: 'manzanas',
    emoji: '🍏',
    precio: 1.89,
    unidad: 'kg',
    origen: 'España',
    descripcion: 'Golden Delicious, suave y dulce. La favorita para purés y compotas.',
    oferta: false,
  },
  {
    id: 5,
    nombre: 'Naranja',
    categoria: 'citricos',
    emoji: '🍊',
    precio: 1.49,
    unidad: 'kg',
    origen: 'Valencia',
    descripcion: 'Naranja Valencia, jugosa y rica en vitamina C. Perfecta para el zumo del desayuno.',
    oferta: true,
  },
  {
    id: 6,
    nombre: 'Limón',
    categoria: 'citricos',
    emoji: '🍋',
    precio: 1.29,
    unidad: 'kg',
    origen: 'Murcia',
    descripcion: 'Limón Verna, extra ácido y aromático. Imprescindible en la cocina mediterránea.',
    oferta: false,
  },
  {
    id: 7,
    nombre: 'Mandarina',
    categoria: 'citricos',
    emoji: '🍊',
    precio: 1.69,
    unidad: 'kg',
    origen: 'España',
    descripcion: 'Mandarina fácil de pelar, dulce y con pocas semillas. Snack ideal para niños.',
    oferta: false,
  },
  {
    id: 8,
    nombre: 'Pomelo',
    categoria: 'citricos',
    emoji: '🍋',
    precio: 2.19,
    unidad: 'kg',
    origen: 'Israel',
    descripcion: 'Pomelo blanco de sabor intenso, bajo en calorías y diurético natural.',
    oferta: false,
  },
  {
    id: 9,
    nombre: 'Piña',
    categoria: 'tropicales',
    emoji: '🍍',
    precio: 2.99,
    unidad: 'ud',
    origen: 'Costa Rica',
    descripcion: 'Piña tropical madura, dulce y refrescante. Perfecta para batidos y ensaladas exóticas.',
    oferta: false,
  },
  {
    id: 10,
    nombre: 'Mango',
    categoria: 'tropicales',
    emoji: '🥭',
    precio: 1.99,
    unidad: 'ud',
    origen: 'Brasil',
    descripcion: 'Mango Tommy Atkins, carnoso y muy dulce. Rico en vitaminas A y C.',
    oferta: true,
  },
  {
    id: 11,
    nombre: 'Plátano',
    categoria: 'tropicales',
    emoji: '🍌',
    precio: 1.39,
    unidad: 'kg',
    origen: 'Canarias',
    descripcion: 'Plátano de Canarias con D.O.P., más pequeño y dulce que el banano. Energía natural.',
    oferta: false,
  },
  {
    id: 12,
    nombre: 'Coco',
    categoria: 'tropicales',
    emoji: '🥥',
    precio: 2.79,
    unidad: 'ud',
    origen: 'Sri Lanka',
    descripcion: 'Coco fresco, ideal para consumir directo o usar en recetas de cocina asiática.',
    oferta: false,
  },
  {
    id: 13,
    nombre: 'Uvas Blancas',
    categoria: 'bayas',
    emoji: '🍇',
    precio: 2.29,
    unidad: 'kg',
    origen: 'Almería',
    descripcion: 'Uva blanca sin pepitas, dulce y carnosa. Imprescindibles en Nochevieja.',
    oferta: false,
  },
  {
    id: 14,
    nombre: 'Uvas Negras',
    categoria: 'bayas',
    emoji: '🍇',
    precio: 2.49,
    unidad: 'kg',
    origen: 'Murcia',
    descripcion: 'Uva negra Red Globe, de piel fina y gran tamaño. Rica en antioxidantes.',
    oferta: true,
  },
  {
    id: 15,
    nombre: 'Fresas',
    categoria: 'bayas',
    emoji: '🍓',
    precio: 3.49,
    unidad: 'kg',
    origen: 'Huelva',
    descripcion: 'Fresas de Huelva, aromáticas y muy dulces. Temporada: de enero a junio.',
    oferta: false,
  },
  {
    id: 16,
    nombre: 'Arándanos',
    categoria: 'bayas',
    emoji: '🫐',
    precio: 4.99,
    unidad: '250 g',
    origen: 'Perú',
    descripcion: 'Arándanos azules, superalimento repleto de antioxidantes y vitaminas.',
    oferta: false,
  },
  {
    id: 17,
    nombre: 'Pera Conferencia',
    categoria: 'otros',
    emoji: '🍐',
    precio: 1.89,
    unidad: 'kg',
    origen: 'Lleida',
    descripcion: 'Pera jugosa con textura mantecosa y sabor suave. Excelente en postres.',
    oferta: false,
  },
  {
    id: 18,
    nombre: 'Melocotón',
    categoria: 'otros',
    emoji: '🍑',
    precio: 2.19,
    unidad: 'kg',
    origen: 'Aragón',
    descripcion: 'Melocotón de temporada, muy jugoso y aromático. Fruta de hueso por excelencia.',
    oferta: true,
  },
  {
    id: 19,
    nombre: 'Cereza',
    categoria: 'otros',
    emoji: '🍒',
    precio: 5.49,
    unidad: 'kg',
    origen: 'Extremadura',
    descripcion: 'Cerezas picota de temporada, dulces y firmes. Las más apreciadas en España.',
    oferta: false,
  },
  {
    id: 20,
    nombre: 'Sandía',
    categoria: 'otros',
    emoji: '🍉',
    precio: 0.69,
    unidad: 'kg',
    origen: 'Almería',
    descripcion: 'Sandía sin pepitas, refrescante e hidratante. La reina del verano.',
    oferta: false,
  },
];

/* ==============================
   Estado de la aplicación
============================== */
const estado = {
  carrito: [],       // [{ producto, cantidad }]
  categoriaActiva: 'all',
  busqueda: '',
  ordenacion: 'default',
};

/* ==============================
   Referencias al DOM
============================== */
const $productGrid    = document.getElementById('productGrid');
const $catalogCount   = document.getElementById('catalogCount');
const $emptyMessage   = document.getElementById('emptyMessage');
const $searchInput    = document.getElementById('searchInput');
const $sortSelect     = document.getElementById('sortSelect');
const $categoryFilters = document.getElementById('categoryFilters');
const $cartPanel      = document.getElementById('cartPanel');
const $cartToggle     = document.getElementById('cartToggle');
const $cartClose      = document.getElementById('cartClose');
const $cartCount      = document.getElementById('cartCount');
const $cartList       = document.getElementById('cartList');
const $cartTotal      = document.getElementById('cartTotal');
const $cartFooter     = document.getElementById('cartFooter');
const $cartEmpty      = document.getElementById('cartEmpty');
const $overlay        = document.getElementById('overlay');
const $checkoutBtn    = document.getElementById('checkoutBtn');
const $clearCartBtn   = document.getElementById('clearCartBtn');
const $confirmModal   = document.getElementById('confirmModal');
const $modalMessage   = document.getElementById('modalMessage');
const $modalClose     = document.getElementById('modalClose');

/* ==============================
   Funciones auxiliares
============================== */

/**
 * Formatea un número como precio en euros.
 * @param {number} precio
 * @returns {string} e.g. "2,49 €"
 */
function formatearPrecio(precio) {
  return precio.toFixed(2).replace('.', ',') + ' €';
}

/**
 * Devuelve los productos filtrados y ordenados según el estado actual.
 * @returns {Array} Lista de productos
 */
function obtenerProductosFiltrados() {
  let lista = productos.slice();

  // Filtro por categoría
  if (estado.categoriaActiva !== 'all') {
    lista = lista.filter((p) => p.categoria === estado.categoriaActiva);
  }

  // Filtro por búsqueda
  if (estado.busqueda.trim() !== '') {
    const busq = estado.busqueda.trim().toLowerCase();
    lista = lista.filter(
      (p) =>
        p.nombre.toLowerCase().includes(busq) ||
        p.descripcion.toLowerCase().includes(busq)
    );
  }

  // Ordenación
  switch (estado.ordenacion) {
    case 'price-asc':
      lista.sort((a, b) => a.precio - b.precio);
      break;
    case 'price-desc':
      lista.sort((a, b) => b.precio - a.precio);
      break;
    case 'name-asc':
      lista.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
      break;
    default:
      break;
  }

  return lista;
}

/* ==============================
   Renderizado del catálogo
============================== */

/**
 * Genera el HTML de una tarjeta de producto.
 * @param {Object} producto
 * @returns {HTMLElement}
 */
function crearTarjeta(producto) {
  const article = document.createElement('article');
  article.className = 'product-card';
  article.setAttribute('role', 'listitem');
  article.dataset.id = producto.id;

  article.innerHTML = `
    <div class="product-card__emoji" aria-hidden="true">${producto.emoji}</div>
    <div class="product-card__body">
      <h3 class="product-card__name">${producto.nombre}</h3>
      <p class="product-card__origin">📍 ${producto.origen}</p>
      <p class="product-card__description">${producto.descripcion}</p>
      <div class="product-card__footer">
        <div>
          <span class="product-card__price">${formatearPrecio(producto.precio)}</span>
          <span class="product-card__unit">/ ${producto.unidad}</span>
          ${producto.oferta ? '<span class="product-card__badge">Oferta</span>' : ''}
        </div>
        <button
          class="product-card__add-btn"
          data-id="${producto.id}"
          aria-label="Añadir ${producto.nombre} al carrito"
        >
          + Añadir
        </button>
      </div>
    </div>
  `;

  return article;
}

/**
 * Re-renderiza la cuadrícula de productos.
 */
function renderizarProductos() {
  const lista = obtenerProductosFiltrados();

  $productGrid.innerHTML = '';
  $emptyMessage.hidden = lista.length > 0;

  lista.forEach((p) => $productGrid.appendChild(crearTarjeta(p)));

  const texto =
    lista.length === 0
      ? ''
      : lista.length === 1
      ? 'Mostrando 1 producto'
      : `Mostrando ${lista.length} productos`;
  $catalogCount.textContent = texto;
}

/* ==============================
   Carrito de la compra
============================== */

/**
 * Busca un ítem en el carrito por id de producto.
 * @param {number} id
 * @returns {Object|undefined}
 */
function encontrarItemCarrito(id) {
  return estado.carrito.find((item) => item.producto.id === id);
}

/**
 * Añade una unidad del producto al carrito.
 * @param {number} id - id del producto
 */
function añadirAlCarrito(id) {
  const producto = productos.find((p) => p.id === id);
  if (!producto) return;

  const item = encontrarItemCarrito(id);
  if (item) {
    item.cantidad += 1;
  } else {
    estado.carrito.push({ producto, cantidad: 1 });
  }

  renderizarCarrito();
  actualizarContadorCarrito();
}

/**
 * Reduce en uno la cantidad de un ítem del carrito.
 * Si llega a 0, lo elimina.
 * @param {number} id
 */
function reducirDelCarrito(id) {
  const index = estado.carrito.findIndex((item) => item.producto.id === id);
  if (index === -1) return;

  if (estado.carrito[index].cantidad > 1) {
    estado.carrito[index].cantidad -= 1;
  } else {
    estado.carrito.splice(index, 1);
  }

  renderizarCarrito();
  actualizarContadorCarrito();
}

/**
 * Elimina completamente un ítem del carrito.
 * @param {number} id
 */
function eliminarDelCarrito(id) {
  estado.carrito = estado.carrito.filter((item) => item.producto.id !== id);
  renderizarCarrito();
  actualizarContadorCarrito();
}

/**
 * Vacía el carrito completamente.
 */
function vaciarCarrito() {
  estado.carrito = [];
  renderizarCarrito();
  actualizarContadorCarrito();
}

/**
 * Calcula el total del carrito.
 * @returns {number}
 */
function calcularTotal() {
  return estado.carrito.reduce(
    (sum, item) => sum + item.producto.precio * item.cantidad,
    0
  );
}

/**
 * Actualiza el badge del contador del carrito en el header.
 */
function actualizarContadorCarrito() {
  const total = estado.carrito.reduce((sum, item) => sum + item.cantidad, 0);
  $cartCount.textContent = total;
}

/**
 * Genera un elemento <li> para un ítem del carrito.
 * @param {Object} item - { producto, cantidad }
 * @returns {HTMLElement}
 */
function crearItemCarrito(item) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.dataset.id = item.producto.id;

  li.innerHTML = `
    <span class="cart__item-emoji" aria-hidden="true">${item.producto.emoji}</span>
    <div class="cart__item-info">
      <p class="cart__item-name">${item.producto.nombre}</p>
      <p class="cart__item-subtotal">${formatearPrecio(item.producto.precio * item.cantidad)}</p>
    </div>
    <div class="cart__item-controls">
      <button class="cart__item-qty-btn" data-action="decrease" data-id="${item.producto.id}" aria-label="Reducir cantidad de ${item.producto.nombre}">−</button>
      <span class="cart__item-qty">${item.cantidad}</span>
      <button class="cart__item-qty-btn" data-action="increase" data-id="${item.producto.id}" aria-label="Aumentar cantidad de ${item.producto.nombre}">+</button>
      <button class="cart__item-remove" data-id="${item.producto.id}" aria-label="Eliminar ${item.producto.nombre} del carrito">🗑</button>
    </div>
  `;

  return li;
}

/**
 * Re-renderiza el panel del carrito.
 */
function renderizarCarrito() {
  $cartList.innerHTML = '';

  const tieneItems = estado.carrito.length > 0;
  $cartEmpty.hidden = tieneItems;
  $cartFooter.hidden = !tieneItems;

  if (tieneItems) {
    estado.carrito.forEach((item) => $cartList.appendChild(crearItemCarrito(item)));
    $cartTotal.textContent = formatearPrecio(calcularTotal());
  }
}

/* ==============================
   Abrir / cerrar el carrito
============================== */
function abrirCarrito() {
  $cartPanel.hidden = false;
  $overlay.hidden = false;
  $cartClose.focus();
}

function cerrarCarrito() {
  $cartPanel.hidden = true;
  $overlay.hidden = true;
  $cartToggle.focus();
}

/* ==============================
   Modal de confirmación
============================== */
function mostrarModal(mensaje) {
  $modalMessage.textContent = mensaje;
  $confirmModal.removeAttribute('hidden');
}

function cerrarModal() {
  $confirmModal.hidden = true;
}

/* ==============================
   Manejadores de eventos
============================== */

// Búsqueda
$searchInput.addEventListener('input', () => {
  estado.busqueda = $searchInput.value;
  renderizarProductos();
});

// Ordenación
$sortSelect.addEventListener('change', () => {
  estado.ordenacion = $sortSelect.value;
  renderizarProductos();
});

// Filtros por categoría (delegación de eventos)
$categoryFilters.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;

  document
    .querySelectorAll('.filter-btn')
    .forEach((b) => b.classList.remove('filter-btn--active'));
  btn.classList.add('filter-btn--active');

  estado.categoriaActiva = btn.dataset.category;
  renderizarProductos();
});

// Añadir al carrito desde el catálogo (delegación de eventos)
$productGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('.product-card__add-btn');
  if (!btn) return;
  añadirAlCarrito(Number(btn.dataset.id));
});

// Botones dentro del carrito (delegación de eventos)
$cartList.addEventListener('click', (e) => {
  const id = Number(e.target.dataset.id);
  if (!id) return;

  if (e.target.dataset.action === 'increase') {
    añadirAlCarrito(id);
  } else if (e.target.dataset.action === 'decrease') {
    reducirDelCarrito(id);
  } else if (e.target.closest('.cart__item-remove')) {
    eliminarDelCarrito(id);
  }
});

// Abrir / cerrar carrito
$cartToggle.addEventListener('click', abrirCarrito);
$cartClose.addEventListener('click', cerrarCarrito);
$overlay.addEventListener('click', cerrarCarrito);

// Vaciar carrito
$clearCartBtn.addEventListener('click', () => {
  if (estado.carrito.length === 0) return;
  vaciarCarrito();
});

// Finalizar compra
$checkoutBtn.addEventListener('click', () => {
  if (estado.carrito.length === 0) return;

  const totalItems = estado.carrito.reduce((s, i) => s + i.cantidad, 0);
  const total = formatearPrecio(calcularTotal());

  cerrarCarrito();
  mostrarModal(
    `Has pedido ${totalItems} ${totalItems === 1 ? 'artículo' : 'artículos'} por un total de ${total}. ¡Gracias por comprar en Rey de la Manzana! 🍎`
  );
  vaciarCarrito();
});

// Cerrar modal
$modalClose.addEventListener('click', cerrarModal);
$confirmModal.addEventListener('click', (e) => {
  if (e.target === $confirmModal) cerrarModal();
});

// Cerrar carrito con tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!$confirmModal.hidden) {
      cerrarModal();
    } else if (!$cartPanel.hidden) {
      cerrarCarrito();
    }
  }
});

/* ==============================
   Inicialización
============================== */
renderizarProductos();
renderizarCarrito();
