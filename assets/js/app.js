/* =====================================================
   DATTA DAS - Main JavaScript
   E-Commerce, Auth, Animations, Cart, Checkout
   ===================================================== */

'use strict';

// ============ BOOK DATA ============
const BOOKS = {
  1: { title: 'श्री दत्त महात्म्य', price: 699, originalPrice: 1299, format: 'PDF + ePub', pages: '२४०' },
  2: { title: 'दत्त गुरुचरित्र', price: 699, originalPrice: 1299, format: 'PDF + ePub', pages: '१९२' },
  3: { title: 'दत्त ध्यान साधना', price: 699, originalPrice: 1299, format: 'PDF + ePub', pages: '१५६' },
  4: { title: 'अवधूत गीता अर्थ', price: 699, originalPrice: 1299, format: 'PDF + ePub', pages: '२०८' },
  5: { title: 'दत्त भक्ती मार्ग', price: 699, originalPrice: 1299, format: 'PDF + ePub', pages: '१७२' },
  6: { title: 'त्रिपुरा रहस्य', price: 699, originalPrice: 1299, format: 'PDF + ePub', pages: '२४८' },
};

// ============ STATE ============
let cart = JSON.parse(localStorage.getItem('dattaCart') || '[]');
let currentUser = JSON.parse(localStorage.getItem('dattaUser') || 'null');

// ============ LOADER ============
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 600);
    }
  }, 2200);
  initParticles();
  updateCartUI();
  updateNavUser();
  initAnimations();
  initCounters();
  initTimer();
  initPaymentMethodToggle();
});

// ============ PARTICLES ============
function initParticles() {
  const container = document.getElementById('particles-bg');
  if (!container) return;
  const symbols = ['ॐ', '🪷', '✦', '•', '◆', '★'];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 20 + 8;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px; height: ${size}px;
      font-size: ${size * 0.7}px;
      animation-duration: ${Math.random() * 15 + 10}s;
      animation-delay: ${Math.random() * 10}s;
      opacity: 0;
      background: none;
      display: flex; align-items: center; justify-content: center;
      color: rgba(212,175,55,0.3);
    `;
    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    container.appendChild(p);
  }
}

// ============ NAVBAR SCROLL ============
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }
  // Scroll top button
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    scrollBtn.classList.toggle('visible', window.scrollY > 400);
  }
});

// ============ MOBILE NAV ============
function toggleMobileNav() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
}

// ============ SCROLL ANIMATIONS ============
function initAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // Add reveal class to major sections
  document.querySelectorAll('.book-card, .testimonial-card, .step-card, .faq-item, .trust-item').forEach(el => {
    el.classList.add('reveal');
    new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 }).observe(el);
  });
}

// ============ COUNTER ANIMATION ============
function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString('mr-IN');
  }, 16);
}

// ============ COUNTDOWN TIMER ============
function initTimer() {
  // Set timer for 24 hours from first visit
  let endTime = localStorage.getItem('dattaTimerEnd');
  if (!endTime) {
    endTime = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem('dattaTimerEnd', endTime);
  }
  function update() {
    const now = Date.now();
    const remaining = Math.max(0, endTime - now);
    const h = Math.floor(remaining / 3600000);
    const m = Math.floor((remaining % 3600000) / 60000);
    const s = Math.floor((remaining % 60000) / 1000);
    const pad = n => String(n).padStart(2, '0');
    const hEl = document.getElementById('timerHours');
    const mEl = document.getElementById('timerMins');
    const sEl = document.getElementById('timerSecs');
    if (hEl) hEl.textContent = pad(h);
    if (mEl) mEl.textContent = pad(m);
    if (sEl) sEl.textContent = pad(s);
    if (remaining === 0) {
      localStorage.removeItem('dattaTimerEnd');
    }
  }
  update();
  setInterval(update, 1000);
}

// ============ CART MANAGEMENT ============
function addToCart(bookId) {
  const book = BOOKS[bookId];
  if (!book) return;
  const existing = cart.find(item => item.id === bookId);
  if (existing) {
    showToast('⚠️ हे पुस्तक आधीच कार्टमध्ये आहे', 'error');
    return;
  }
  cart.push({ id: bookId, ...book });
  saveCart();
  updateCartUI();
  renderCartItems();
  showToast(`✅ "${book.title}" कार्टमध्ये जोडले`, 'success');
  // Open cart
  setTimeout(() => toggleCart(), 300);
}

function removeFromCart(bookId) {
  cart = cart.filter(item => item.id !== bookId);
  saveCart();
  updateCartUI();
  renderCartItems();
  showToast('🗑️ कार्टमधून काढले', '');
}

function saveCart() {
  localStorage.setItem('dattaCart', JSON.stringify(cart));
}

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  if (countEl) countEl.textContent = cart.length;
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>कार्ट रिकामी आहे</p>
        <button class="btn btn-primary" onclick="toggleCart()">ई-पुस्तके पाहा</button>
      </div>`;
    if (footer) footer.style.display = 'none';
    return;
  }

  let total = 0;
  container.innerHTML = cart.map(item => {
    total += item.price;
    return `
      <div class="cart-item">
        <div class="cart-item-cover">ॐ</div>
        <div class="cart-item-info">
          <h4>${item.title}</h4>
          <div class="cart-item-price">₹${item.price.toLocaleString('mr-IN')}</div>
          <small style="color:#999; text-decoration:line-through">₹${item.originalPrice.toLocaleString('mr-IN')}</small>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="काढा">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>`;
  }).join('');

  if (footer) {
    footer.style.display = 'block';
    document.getElementById('cartTotal').textContent = `₹${total.toLocaleString('mr-IN')}`;
  }
}

function toggleCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  renderCartItems();
  drawer.classList.toggle('open');
  overlay.classList.toggle('active');
  document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
}

function goToCheckout() {
  if (!currentUser) {
    toggleCart();
    setTimeout(() => openModal('loginModal'), 300);
    showToast('⚠️ खरेदीसाठी प्रथम साइन इन करा', 'error');
    return;
  }
  toggleCart();
  openCheckoutModal();
}

function buyNow(bookId) {
  cart = [{ id: bookId, ...BOOKS[bookId] }];
  saveCart();
  updateCartUI();
  if (!currentUser) {
    openModal('loginModal');
    showToast('⚠️ खरेदीसाठी प्रथम साइन इन करा', 'error');
    return;
  }
  openCheckoutModal();
}

function openCheckoutModal() {
  const summary = document.getElementById('checkoutOrderSummary');
  if (summary) {
    summary.innerHTML = cart.map(item => `
      <div class="checkout-order-item">
        <div class="checkout-book-cover">ॐ</div>
        <div>
          <div class="checkout-book-title">${item.title}</div>
          <div class="checkout-book-format">${item.format}</div>
        </div>
      </div>`).join('');
  }
  openModal('checkoutModal');
}

// ============ PAYMENT METHOD TOGGLE ============
function initPaymentMethodToggle() {
  document.querySelectorAll('.payment-method').forEach(label => {
    label.addEventListener('click', () => {
      document.querySelectorAll('.payment-method').forEach(l => l.classList.remove('active'));
      label.classList.add('active');
      const val = label.querySelector('input').value;
      const upiInput = document.getElementById('upiInput');
      if (upiInput) upiInput.style.display = val === 'upi' ? 'block' : 'none';
    });
  });
}

// ============ AUTH HANDLERS ============
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Simulate login (in production, call API)
  const users = JSON.parse(localStorage.getItem('dattaUsers') || '[]');
  const user = users.find(u => u.email === email);

  if (!user) {
    showToast('❌ ईमेल नोंदणीकृत नाही', 'error');
    return;
  }
  if (user.password !== btoa(password)) {
    showToast('❌ चुकीचा पासवर्ड', 'error');
    return;
  }

  currentUser = { name: user.name, email: user.email };
  localStorage.setItem('dattaUser', JSON.stringify(currentUser));
  closeModal('loginModal');
  updateNavUser();
  showToast(`🙏 स्वागत आहे, ${user.name}!`, 'success');
}

function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const phone = document.getElementById('signupPhone').value;
  const password = document.getElementById('signupPassword').value;

  if (password.length < 8) {
    showToast('⚠️ पासवर्ड किमान ८ अक्षरे हवा', 'error');
    return;
  }

  const users = JSON.parse(localStorage.getItem('dattaUsers') || '[]');
  if (users.find(u => u.email === email)) {
    showToast('⚠️ हा ईमेल आधीच नोंदणीकृत आहे', 'error');
    return;
  }

  users.push({ name, email, phone, password: btoa(password) });
  localStorage.setItem('dattaUsers', JSON.stringify(users));

  currentUser = { name, email };
  localStorage.setItem('dattaUser', JSON.stringify(currentUser));
  closeModal('signupModal');
  updateNavUser();
  showToast(`🎉 नोंदणी यशस्वी! स्वागत आहे, ${name}!`, 'success');
}

function googleLogin() {
  // Simulate Google OAuth (in production use Firebase/OAuth)
  const mockUser = { name: 'Google वापरकर्ता', email: 'google@example.com' };
  currentUser = mockUser;
  localStorage.setItem('dattaUser', JSON.stringify(currentUser));
  closeModal('loginModal');
  closeModal('signupModal');
  updateNavUser();
  showToast('🙏 Google ने साइन इन यशस्वी!', 'success');
}

function logout() {
  currentUser = null;
  localStorage.removeItem('dattaUser');
  updateNavUser();
  showToast('साइन आउट झाले', '');
}

function updateNavUser() {
  const navActions = document.querySelector('.nav-actions');
  if (!navActions) return;
  if (currentUser) {
    // Replace auth buttons with user menu
    const authBtns = navActions.querySelectorAll('.btn');
    authBtns.forEach(btn => btn.style.display = 'none');
    if (!navActions.querySelector('.user-pill')) {
      const pill = document.createElement('div');
      pill.className = 'user-pill';
      pill.innerHTML = `
        <div class="user-avatar">${currentUser.name.charAt(0)}</div>
        <span>${currentUser.name.split(' ')[0]}</span>
        <button onclick="logout()" title="साइन आउट" style="background:none;padding:4px 8px;color:#999;font-size:12px;">साइन आउट</button>`;
      navActions.appendChild(pill);
    }
  } else {
    const pill = navActions.querySelector('.user-pill');
    if (pill) pill.remove();
    navActions.querySelectorAll('.btn').forEach(btn => btn.style.display = '');
  }
}

// ============ PAYMENT HANDLER ============
function handlePayment(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> प्रक्रिया चालू आहे...';
  btn.disabled = true;

  // Simulate payment processing
  setTimeout(() => {
    closeModal('checkoutModal');
    // Clear cart
    cart = [];
    saveCart();
    updateCartUI();
    // Show success
    openModal('successModal');
    btn.innerHTML = '<i class="fa-solid fa-lock"></i> सुरक्षित पेमेंट करा — ₹६९९';
    btn.disabled = false;
  }, 2500);
}

// ============ MODAL SYSTEM ============
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function closeModalOutside(e, id) {
  if (e.target === e.currentTarget) closeModal(id);
}

function switchModal(fromId, toId) {
  closeModal(fromId);
  setTimeout(() => openModal(toId), 150);
}

// Password strength checker
document.addEventListener('input', (e) => {
  if (e.target.id === 'signupPassword') {
    const pass = e.target.value;
    const strength = document.getElementById('passwordStrength');
    if (!strength) return;
    if (pass.length === 0) { strength.textContent = ''; return; }
    if (pass.length < 6) { strength.textContent = '⚠️ कमकुवत पासवर्ड'; strength.style.color = '#E53935'; }
    else if (pass.length < 10) { strength.textContent = '✓ मध्यम'; strength.style.color = '#FF8F00'; }
    else { strength.textContent = '✓✓ मजबूत'; strength.style.color = '#2E7D32'; }
  }
});

// Toggle password visibility
function togglePassword(id) {
  const input = document.getElementById(id);
  if (input) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}

// ============ FAQ ACCORDION ============
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = answer.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('open'));
  if (!isOpen) {
    answer.classList.add('open');
    btn.classList.add('open');
  }
}

// ============ CONTACT FORM ============
function submitContact(e) {
  e.preventDefault();
  showToast('✅ संदेश पाठवला! आम्ही लवकरच संपर्क करू.', 'success');
  e.target.reset();
}

// ============ NEWSLETTER ============
function subscribeNewsletter(e) {
  e.preventDefault();
  showToast('✅ न्यूजलेटरसाठी नोंदणी यशस्वी!', 'success');
  e.target.reset();
}

// ============ TOAST NOTIFICATION ============
function showToast(msg, type = '') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = `toast ${type} show`;
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ============ KEYBOARD SHORTCUTS ============
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    ['loginModal', 'signupModal', 'checkoutModal', 'successModal'].forEach(closeModal);
    const drawer = document.getElementById('cartDrawer');
    if (drawer && drawer.classList.contains('open')) toggleCart();
  }
});

// ============ SMOOTH NAV LINKS ============
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      const navLinks = document.getElementById('navLinks');
      if (navLinks) navLinks.classList.remove('open');
    }
  });
});

// ============ USER PILL STYLES (injected) ============
const style = document.createElement('style');
style.textContent = `
  .user-pill {
    display: flex; align-items: center; gap: 8px;
    background: rgba(255,107,0,0.08); border: 1px solid rgba(255,107,0,0.2);
    border-radius: 50px; padding: 6px 14px;
  }
  .user-avatar {
    width: 30px; height: 30px; border-radius: 50%;
    background: var(--gradient); color: white;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 14px;
  }
  .user-pill > span { font-size: 14px; font-weight: 600; color: var(--saffron); }
`;
document.head.appendChild(style);

console.log('%c🙏 दत्त दास — DattaDas.in', 'color:#FF6B00;font-size:20px;font-weight:bold;');
console.log('%cभगवान दत्तात्रेयांना समर्पित', 'color:#D4AF37;font-size:14px;');
