 // script.js — полностью рабочий интернет-магазин с категориями Оптом и Розница

// ============================================================
// 1. НАСТРОЙКИ
// ============================================================
// Укажите здесь номер WhatsApp в международном формате без + и пробелов
const WHATSAPP_NUMBER = "996702573964";

// ============================================================
// 2. ДАННЫЕ ТОВАРОВ (с разделением на Оптом и Розница)
// ============================================================
const products = [
  // ОПТОМ (минимальный заказ от 100 шт., шаг +50)
  {
    id: 1,
    name: "Бритвенный набор",
    category: "Оптом",
    price: 10,
    minOrder: 100,
    step: 50,
    image:
      "https://lalafo.kg/_next/image?url=https://img5.lalafo.com/i/posters/api/17/bb/0c/1e94aa0ce9f4f8f5201d92fc44.jpeg&w=384&q=75",
  },
  {
    id: 2,
    name: "Гигенический набор",
    category: "Оптом",
    price: 6,
    minOrder: 100,
    step: 50,
    image:
      "https://s.alicdn.com/@sc04/kf/Hfeb5fc38d1844706ba7b0834c29ef301f/Custom-Kraft-Paper-Box-Disposable-Cotton-Buds-Cotton-Pads-Makeup-Vanity-Kit-for-Hotel.jpg",
  },
  {
    id: 3,
    name: "Мыло 15гр",
    category: "Оптом",
    price: 10,
    minOrder: 100,
    step: 50,
    image:
      "https://www.china-soaps.com/wp-content/uploads/2026/07/RENSINO-Hotel-Amenities-Luxury-Supplies-Bars-Disposable-Soap-10g-15g-Mini-Round-Whitening-Bath-Toilet-Natural-Hotel-Soap.webp",
  },
  {
    id: 6,
    name: "Мыло 10гр",
    category: "Оптом",
    price: 7,
    minOrder: 100,
    step: 50,
    image:
      "https://image.made-in-china.com/2f0j00RCpkrfcGJboB/Hotel-Supplies-Hotel-Amenities-Hotel-Bath-Kit-Hotel-Amenities-Bathroom-Hotel-Bath-Set.webp",
  },
  {
    id: 4,
    name: "Зубной набор эконом",
    category: "Оптом",
    price: 9,
    minOrder: 100,
    step: 50,
    image:
      "https://static-01.daraz.com.bd/p/ca0e153b795a5bfc34e5f4364949dd47.jpg",
  },
  {
    id: 5,
    name: "Зубной набор стандарт",
    category: "Оптом",
    price: 12,
    minOrder: 100,
    step: 50,
    image: "./surot1.jpg",
  },

  {
    id: 7,
    name: "Шампунь и гель для душа  30мл",
    category: "Оптом",
    price: 18,
    minOrder: 100,
    step: 50,
    image:
      "https://image.made-in-china.com/2f0j00aBCoOrSmEGbf/Wholesale-Body-Care-Moisturizer-White-Tea-Series-Shower-Gel-for-Hotel.webp",
  },
  {
    id: 8,
    name: "Шампунь и гель для душа 20мл ",
    category: "Оптом",
    price: 12,
    minOrder: 100,
    step: 50,
    image: "https://frankfurt.apollo.olxcdn.com/v1/files/2autoq1xbux4-KZ/image",
  },
  {
    id: 9,
    name: "Шампунь и гель для душа стандарт 20мл",
    category: "Оптом",
    price: 14,
    minOrder: 100,
    step: 50,
    image:
      "https://img.alicdn.com/imgextra/i2/97891337/O1CN019Pg5RX1LkOcXQU7Rx_!!97891337.jpg",
  },
  {
    id: 10,
    name: "тапочки 6мм",
    category: "Оптом",
    price: 25,
    minOrder: 100,
    step: 50,
    image: "./TOP.jpg",
  },
  {
    id: 11,
    name: "тапочки 4мм",
    category: "Оптом",
    price: 25,
    minOrder: 100,
    step: 50,
    image: "./TOP2.jpg",
  },

  // РОЗНИЦА (минимальный заказ от 10 шт.)
  {
    id: 12,
    name: "Бритвенный набор",
    category: "Розница",
    price: 10,
    minOrder: 10,
    step: 1,
    image:
      "https://lalafo.kg/_next/image?url=https://img5.lalafo.com/i/posters/api/17/bb/0c/1e94aa0ce9f4f8f5201d92fc44.jpeg&w=384&q=75",
  },
  {
    id: 13,
    name: "Гигенический набор",
    category: "Розница",
    price: 6,
    minOrder: 10,
    step: 1,
    image:
      "https://s.alicdn.com/@sc04/kf/Hfeb5fc38d1844706ba7b0834c29ef301f/Custom-Kraft-Paper-Box-Disposable-Cotton-Buds-Cotton-Pads-Makeup-Vanity-Kit-for-Hotel.jpg",
  },
  {
    id: 14,
    name: "Мыло 15гр",
    category: "Розница",
    price: 10,
    minOrder: 10,
    step: 1,
    image:
      "https://www.china-soaps.com/wp-content/uploads/2026/07/RENSINO-Hotel-Amenities-Luxury-Supplies-Bars-Disposable-Soap-10g-15g-Mini-Round-Whitening-Bath-Toilet-Natural-Hotel-Soap.webp",
  },
  {
    id: 15,
    name: "Мыло 10гр",
    category: "Розница",
    price: 7,
    minOrder: 10,
    step: 1,
    image:
      "https://image.made-in-china.com/2f0j00RCpkrfcGJboB/Hotel-Supplies-Hotel-Amenities-Hotel-Bath-Kit-Hotel-Amenities-Bathroom-Hotel-Bath-Set.webp",
  },
  {
    id: 16,
    name: "Зубной набор эконом",
    category: "Розница",
    price: 9,
    minOrder: 10,
    step: 1,
    image:
      "https://static-01.daraz.com.bd/p/ca0e153b795a5bfc34e5f4364949dd47.jpg",
  },
  {
    id: 17,
    name: "Зубной набор стандарт",
    category: "Розница",
    price: 12,
    minOrder: 10,
    step: 1,
    image: "./surot1.jpg",
  },

  {
    id: 18,
    name: "Шампунь и гель для душа  30мл",
    category: "Розница",
    price: 18,
    minOrder: 10,
    step: 1,
    image:
      "https://image.made-in-china.com/2f0j00aBCoOrSmEGbf/Wholesale-Body-Care-Moisturizer-White-Tea-Series-Shower-Gel-for-Hotel.webp",
  },
  {
    id: 19,
    name: "Шампунь и гель для душа 20мл ",
    category: "Розница",
    price: 12,
    minOrder: 10,
    step: 1,
    image: "https://frankfurt.apollo.olxcdn.com/v1/files/2autoq1xbux4-KZ/image",
  },
  {
    id: 20,
    name: "Шампунь и гель для душа стандарт 20мл",
    category: "Розница",
    price: 14,
    minOrder: 10,
    step: 1,
    image:
      "https://img.alicdn.com/imgextra/i2/97891337/O1CN019Pg5RX1LkOcXQU7Rx_!!97891337.jpg",
  },
  {
    id: 21,
    name: "тапочки 6мм",
    category: "Розница",
    price: 25,
    minOrder: 10,
    step: 1,
    image: "./TOP.jpg",
  },
  {
    id: 22,
    name: "тапочки 4мм",
    category: "Розница",
    price: 25,
    minOrder: 10,
    step: 1,
    image: "./TOP2.jpg",
  },
];

// ============================================================
// 3. СОСТОЯНИЕ
// ============================================================
let cart = JSON.parse(localStorage.getItem("hotelCart")) || [];
let currentProductId = null;
let currentFilter = "all";
let currentSearch = "";

// ============================================================
// 4. DOM-ссылки
// ============================================================
const grid = document.getElementById("catalogGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cartCount = document.getElementById("cartCount");
const mobileCartCount = document.getElementById("mobileCartCount");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const cartBody = document.getElementById("cartBody");
const cartFooter = document.getElementById("cartFooter");
const cartTotalItems = document.getElementById("cartTotalItems");
const cartTotalPrice = document.getElementById("cartTotalPrice");
const cartBtn = document.getElementById("cartBtn");
const cartClose = document.getElementById("cartClose");
const clearCartBtn = document.getElementById("clearCartBtn");
const checkoutBtn = document.getElementById("checkoutBtn");

// Модалка количества
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalCancel = document.getElementById("modalCancel");
const modalProductName = document.getElementById("modalProductName");
const modalProductPrice = document.getElementById("modalProductPrice");
const modalMinInfo = document.getElementById("modalMinInfo");
const qtyInput = document.getElementById("qtyInput");
const qtyDec = document.getElementById("qtyDec");
const qtyInc = document.getElementById("qtyInc");
const modalAddToCart = document.getElementById("modalAddToCart");

// Модалка адреса
const addressModalOverlay = document.getElementById("addressModalOverlay");
const addressModalClose = document.getElementById("addressModalClose");
const addressModalCancel = document.getElementById("addressModalCancel");
const addressInput = document.getElementById("addressInput");
const recipientName = document.getElementById("recipientName");
const recipientPhone = document.getElementById("recipientPhone");
const addressError = document.getElementById("addressError");
const addressForm = document.getElementById("addressForm");

// Мобильное меню
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileCartLink = document.getElementById("mobileCartLink");

// Toast
const toastContainer = document.getElementById("toastContainer");

// ============================================================
// 5. ФУНКЦИИ ОТОБРАЖЕНИЯ
// ============================================================
function renderCatalog() {
  let filtered = products;
  if (currentFilter !== "all") {
    filtered = filtered.filter((p) => p.category === currentFilter);
  }
  if (currentSearch.trim()) {
    const q = currentSearch.trim().toLowerCase();
    filtered = filtered.filter((p) => p.name.toLowerCase().includes(q));
  }
  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:40px; color:#7a8c96;">Товары не найдены</p>`;
    return;
  }
  grid.innerHTML = filtered
    .map(
      (p) => `
    <div class="product-card" data-id="${p.id}">
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/400x300/eee/aaa?text=Hotel'">
      <div class="product-info">
        <h4>${p.name}</h4>
        <div class="category">${p.category}</div>
        <div class="price">${p.price} сом / шт.</div>
        <div class="min-order">Мин. заказ: от ${p.minOrder} шт.</div>
        <button class="add-btn" data-id="${p.id}">В корзину</button>
      </div>
    </div>
  `,
    )
    .join("");

  document.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(btn.dataset.id);
      openModal(id);
    });
  });
}

function renderCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  cartCount.textContent = totalItems;
  mobileCartCount.textContent = totalItems;
  cartTotalItems.textContent = totalItems;
  cartTotalPrice.textContent = totalPrice;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-bag"></i>
        <h4>Ваша корзина пуста</h4>
        <p>Добавьте товары из каталога, чтобы оформить заказ.</p>
        <button class="btn primary" id="goToCatalogBtn">Перейти в каталог</button>
      </div>
    `;
    document.getElementById("goToCatalogBtn")?.addEventListener("click", () => {
      closeCart();
    });
    return;
  }

  cartBody.innerHTML = cart
    .map(
      (item, idx) => `
    <div class="cart-item" data-index="${idx}">
      <img src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/56x56/eee/aaa?text=Hotel'">
      <div class="cart-item-details">
        <h5>${item.name}</h5>
        <div class="cart-item-price">${item.price} сом × ${item.qty} = ${item.price * item.qty} сом</div>
        <div class="cart-item-controls">
          <button class="qty-dec" data-id="${item.id}">−</button>
          <span>${item.qty}</span>
          <button class="qty-inc" data-id="${item.id}">+</button>
        </div>
      </div>
      <button class="cart-item-remove" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
    </div>
  `,
    )
    .join("");

  document.querySelectorAll(".qty-dec").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      changeQty(id, -1);
    });
  });
  document.querySelectorAll(".qty-inc").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      changeQty(id, 1);
    });
  });
  document.querySelectorAll(".cart-item-remove").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      removeFromCart(id);
    });
  });
}

// ============================================================
// 6. КОРЗИНА: ОПЕРАЦИИ
// ============================================================
function addToCart(productId, qty) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  // Проверка минимального заказа
  if (qty < product.minOrder) {
    showToast(
      `Минимальный заказ для этого товара: ${product.minOrder} шт.`,
      "fa-exclamation-circle",
    );
    return;
  }

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  saveCart();
  renderCart();
  showToast(`Добавлено: ${product.name} (${qty} шт.)`);
}

function changeQty(productId, delta) {
  const item = cart.find((p) => p.id === productId);
  if (!item) return;

  const product = products.find((p) => p.id === productId);
  let newQty = item.qty + delta;

  // Не позволяем уменьшить меньше минимального заказа
  if (newQty < product.minOrder) return;

  item.qty = newQty;
  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();
  showToast("Товар удалён из корзины");
}

function clearCart() {
  if (cart.length === 0) {
    showToast("Корзина уже пуста");
    return;
  }
  const confirmClear = confirm("Вы действительно хотите очистить корзину?");
  if (!confirmClear) return;
  cart = [];
  saveCart();
  renderCart();
  showToast("Корзина очищена");
}

function saveCart() {
  localStorage.setItem("hotelCart", JSON.stringify(cart));
}

// ============================================================
// 7. МОДАЛЬНОЕ ОКНО КОЛИЧЕСТВА
// ============================================================
function openModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  currentProductId = productId;
  modalProductName.textContent = product.name;
  modalProductPrice.textContent = `${product.price} сом / шт.`;
  modalMinInfo.textContent = `Мин. заказ: ${product.minOrder} шт.${product.category === "Оптом" ? " (шаг +50)" : ""}`;
  qtyInput.value = product.minOrder;
  qtyInput.min = product.minOrder;
  qtyInput.step = product.step || 1;
  modalOverlay.classList.add("open");
}

function closeModal() {
  modalOverlay.classList.remove("open");
  currentProductId = null;
}

modalAddToCart.addEventListener("click", () => {
  if (currentProductId === null) return;
  const product = products.find((p) => p.id === currentProductId);
  if (!product) return;

  let qty = parseInt(qtyInput.value) || product.minOrder;

  // Для оптовых товаров проверяем кратность шагу
  if (product.category === "Оптом") {
    if ((qty - product.minOrder) % product.step !== 0) {
      showToast(
        `Для оптовых заказов количество должно быть кратно ${product.step} (мин. ${product.minOrder})`,
        "fa-exclamation-circle",
      );
      return;
    }
  }

  if (qty < product.minOrder) {
    showToast(
      `Минимальный заказ: ${product.minOrder} шт.`,
      "fa-exclamation-circle",
    );
    return;
  }

  addToCart(currentProductId, qty);
  closeModal();
});

modalClose.addEventListener("click", closeModal);
modalCancel.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeAddressModal();
  }
});

qtyDec.addEventListener("click", () => {
  const product = products.find((p) => p.id === currentProductId);
  if (!product) return;
  let val = parseInt(qtyInput.value) || product.minOrder;
  const step = product.step || 1;
  if (val - step >= product.minOrder) {
    qtyInput.value = val - step;
  } else {
    qtyInput.value = product.minOrder;
  }
});

qtyInc.addEventListener("click", () => {
  const product = products.find((p) => p.id === currentProductId);
  if (!product) return;
  let val = parseInt(qtyInput.value) || product.minOrder;
  const step = product.step || 1;
  qtyInput.value = val + step;
});

qtyInput.addEventListener("change", () => {
  const product = products.find((p) => p.id === currentProductId);
  if (!product) return;
  let val = parseInt(qtyInput.value) || product.minOrder;
  if (val < product.minOrder) qtyInput.value = product.minOrder;
});

// ============================================================
// 8. МОДАЛЬНОЕ ОКНО АДРЕСА
// ============================================================
function openAddressModal() {
  addressInput.value = "";
  recipientName.value = "";
  recipientPhone.value = "";
  addressError.classList.remove("visible");
  addressInput.classList.remove("invalid");
  addressModalOverlay.classList.add("open");
}

function closeAddressModal() {
  addressModalOverlay.classList.remove("open");
}

addressModalClose.addEventListener("click", closeAddressModal);
addressModalCancel.addEventListener("click", closeAddressModal);
addressModalOverlay.addEventListener("click", (e) => {
  if (e.target === addressModalOverlay) closeAddressModal();
});

addressForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const address = addressInput.value.trim();
  const name = recipientName.value.trim();
  const phone = recipientPhone.value.trim();

  let isValid = true;

  if (!address) {
    addressInput.classList.add("invalid");
    addressError.classList.add("visible");
    isValid = false;
  } else {
    addressInput.classList.remove("invalid");
    addressError.classList.remove("visible");
  }

  if (!name) {
    recipientName.classList.add("invalid");
    isValid = false;
  } else {
    recipientName.classList.remove("invalid");
  }

  if (!phone) {
    recipientPhone.classList.add("invalid");
    isValid = false;
  } else {
    recipientPhone.classList.remove("invalid");
  }

  if (!isValid) return;

  sendOrderToWhatsApp(address, name, phone);
});

addressInput.addEventListener("input", () => {
  if (addressInput.value.trim()) {
    addressInput.classList.remove("invalid");
    addressError.classList.remove("visible");
  }
});

recipientName.addEventListener("input", () => {
  if (recipientName.value.trim()) {
    recipientName.classList.remove("invalid");
  }
});

recipientPhone.addEventListener("input", () => {
  if (recipientPhone.value.trim()) {
    recipientPhone.classList.remove("invalid");
  }
});

// ============================================================
// 9. КОРЗИНА: ОТКРЫТИЕ/ЗАКРЫТИЕ
// ============================================================
function openCart() {
  cartSidebar.classList.add("open");
  cartOverlay.classList.add("open");
  renderCart();
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartSidebar.classList.remove("open");
  cartOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

cartBtn.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCart();
});

mobileCartLink.addEventListener("click", (e) => {
  e.preventDefault();
  mobileMenu.classList.remove("open");
  openCart();
});

// ============================================================
// 10. МОБИЛЬНОЕ МЕНЮ
// ============================================================
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

document.querySelectorAll(".mobile-menu-inner a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

// ============================================================
// 11. ФИЛЬТРЫ И ПОИСК
// ============================================================
categoryFilter.addEventListener("change", (e) => {
  currentFilter = e.target.value;
  renderCatalog();
});

searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  renderCatalog();
});

document.querySelectorAll("[data-filter]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = el.dataset.filter;
    if (filter) {
      categoryFilter.value = filter;
      currentFilter = filter;
      renderCatalog();
      document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ============================================================
// 12. ОФОРМЛЕНИЕ ЗАКАЗА → WHATSAPP
// ============================================================
function generateOrderNumber() {
  const now = new Date();
  const d = String(now.getDate()).padStart(2, "0");
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const y = String(now.getFullYear()).slice(2);
  const h = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  return `${d}${m}${y}${h}${min}`;
}

function formatOrderText(address, name, phone) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("ru-RU");
  const timeStr = now.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const orderNum = generateOrderNumber();

  let lines = [];
  lines.push("Здравствуйте!");
  lines.push("Хочу оформить заказ:");
  lines.push("");
  lines.push(`ЗАКАЗ №${orderNum}`);
  lines.push("");

  cart.forEach((item, idx) => {
    lines.push(`${idx + 1}. ${item.name}`);
    lines.push(
      `   ${item.price} сом × ${item.qty} = ${item.price * item.qty} сом`,
    );
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  lines.push("");
  lines.push("---");
  lines.push(`ИТОГО: ${total} сом`);
  lines.push("");
  lines.push("📍 АДРЕС ДОСТАВКИ:");
  lines.push(address);
  lines.push("");
  lines.push("👤 ПОЛУЧАТЕЛЬ:");
  lines.push(`${name}`);
  lines.push(`📞 ${phone}`);
  lines.push("");
  lines.push(`Дата: ${dateStr}`);
  lines.push(`Время: ${timeStr}`);
  lines.push("");
  lines.push("Спасибо!");

  return lines.join("\n");
}

function sendOrderToWhatsApp(address, name, phone) {
  const text = formatOrderText(address, name, phone);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  cart = [];
  saveCart();
  renderCart();
  closeCart();
  closeAddressModal();

  window.open(url, "_blank");
  showToast("Заказ отправлен в WhatsApp!");
}

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Корзина пуста. Добавьте товары.");
    return;
  }
  openAddressModal();
});

clearCartBtn.addEventListener("click", clearCart);

// ============================================================
// 13. TOAST-УВЕДОМЛЕНИЯ
// ============================================================
function showToast(message, icon = "fa-check-circle") {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ============================================================
// 14. ИНИЦИАЛИЗАЦИЯ
// ============================================================
renderCatalog();
renderCart();

if (cart.length > 0) {
  setTimeout(() => {
    showToast(
      `В корзине ${cart.reduce((s, i) => s + i.qty, 0)} товаров`,
      "fa-info-circle",
    );
  }, 600);
}

console.log("✅ HotelMart готов!");
console.log(`📦 Товаров в каталоге: ${products.length}`);
console.log(`🛒 Товаров в корзине: ${cart.reduce((s, i) => s + i.qty, 0)}`);
