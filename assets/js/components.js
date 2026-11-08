/**
 * DATTADAS — Shared Components
 * Header, Footer, Cart Drawer, Auth Modals, Mobile Nav
 */
'use strict';

// ═══════════════════════════════════════════════
// LOGO SVG
// ═══════════════════════════════════════════════
const LOGO_SVG = `<svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
  <circle cx="21" cy="21" r="20" fill="#651F2B" stroke="#C49A46" stroke-width="1.5"/>
  <text x="21" y="27" text-anchor="middle" font-size="20" fill="#C49A46" font-family="serif">ॐ</text>
  <circle cx="21" cy="21" r="17" fill="none" stroke="#C49A46" stroke-width="0.5" stroke-dasharray="3,3"/>
</svg>`;

// ═══════════════════════════════════════════════
// HEADER COMPONENT
// ═══════════════════════════════════════════════
function renderHeader(activePage = '') {
  const user = Auth.currentUser();
  const navItems = [
    { label: 'मुख्यपृष्ठ', href: '/index.html', key: 'home' },
    { label: 'सर्व ई-बुक्स', href: '/books.html', key: 'books' },
    {
      label: 'दत्त संप्रदाय', href: '/books.html?category=datta-sampraday', key: 'datta',
      dropdown: [
        { label: 'श्री दत्त महात्म्य', href: '/product.html?id=P001' },
        { label: 'दत्त गुरुचरित्र', href: '/product.html?id=P002' },
        { label: 'दत्त ध्यान साधना', href: '/product.html?id=P003' },
      ]
    },
    { label: 'श्री गुरुचरित्र', href: '/books.html?category=gurucharitra', key: 'guru' },
    { label: 'संत चरित्रे', href: '/books.html?category=sant-charitra', key: 'sant' },
    { label: 'स्तोत्रे', href: '/books.html?category=stotre-mantra', key: 'stotre' },
    { label: 'आमच्याविषयी', href: '/pages/about.html', key: 'about' },
  ];

  const navHTML = navItems.map(item => {
    if (item.dropdown) {
      return `<li class="nav-item">
        <a href="${item.href}" class="nav-link ${activePage === item.key ? 'active' : ''}">
          ${item.label} <span class="nav-arrow">▾</span>
        </a>
        <div class="nav-dropdown">
          ${item.dropdown.map(d => `<a href="${d.href}">${d.label}</a>`).join('')}
        </div>
      </li>`;
    }
    return `<li class="nav-item">
      <a href="${item.href}" class="nav-link ${activePage === item.key ? 'active' : ''}">${item.label}</a>
    </li>`;
  }).join('');

  return `
  <!-- ANNOUNCEMENT BAR -->
  <div class="announcement-bar">
    🙏 <strong>श्री दत्तगुरूंच्या कृपेने</strong> — ज्ञान, भक्ती आणि अध्यात्माचा डिजिटल प्रवास! &nbsp;
    <a href="books.html">सर्व ई-बुक्स पहा →</a>
  </div>

  <!-- HEADER -->
  <header class="site-header" id="site-header">
    <div class="container">
      <div class="header-inner">
        <!-- Logo -->
        <a href="/index.html" class="site-logo">
          <div class="logo-emblem">${LOGO_SVG}</div>
          <div class="logo-text-group">
            <span class="logo-brand">DATTADAS</span>
            <span class="logo-marathi">दत्तदास</span>
          </div>
        </a>

        <!-- Desktop Nav -->
        <nav class="site-nav" aria-label="मुख्य नेव्हिगेशन">
          <ul style="display:flex;list-style:none;gap:0;margin:0;padding:0">${navHTML}</ul>
        </nav>

        <!-- Search -->
        <form class="search-form-inline" onsubmit="handleSearch(event)">
          <input 
            type="search" 
            class="search-input-inline" 
            placeholder="पुस्तके शोधा..." 
            id="header-search"
            aria-label="पुस्तके शोधा"
          />
          <button type="submit" class="search-btn-inline" aria-label="शोधा">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </button>
        </form>

        <!-- Actions -->
        <div class="header-actions">
          <!-- Wishlist -->
          <a href="pages/wishlist.html" class="header-action-btn" aria-label="आवडी">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span class="action-badge wishlist-badge" style="display:none">0</span>
          </a>

          <!-- Account -->
          ${user
            ? `<a href="pages/dashboard.html" class="header-action-btn" aria-label="माझे खाते">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span class="action-badge" style="background:var(--color-gold);font-size:9px;min-width:14px;height:14px">✓</span>
              </a>`
            : `<button class="header-action-btn" onclick="UI.openModal('auth-modal')" aria-label="साइन इन">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </button>`
          }

          <!-- Cart -->
          <button class="header-action-btn" onclick="UI.openDrawer('cart-drawer')" aria-label="कार्ट">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span class="action-badge cart-badge" style="display:none">0</span>
          </button>

          <!-- Mobile Menu -->
          <button class="header-action-btn btn-mobile-menu" onclick="toggleMobileNav()" aria-label="मेनू">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- MOBILE NAV -->
  <div class="mobile-nav" id="mobile-nav">
    <div class="mobile-nav-overlay" onclick="toggleMobileNav()"></div>
    <div class="mobile-nav-drawer">
      <div class="mobile-nav-header">
        <a href="/index.html" class="site-logo">
          <div class="logo-emblem">${LOGO_SVG}</div>
          <div class="logo-text-group">
            <span class="logo-brand">DATTADAS</span>
            <span class="logo-marathi">दत्तदास</span>
          </div>
        </a>
      </div>
      <div class="mobile-nav-links">
        ${navItems.map(item => `<a href="${item.href}" class="mobile-nav-link">${item.label}</a>`).join('')}
      </div>
      <div class="mobile-nav-actions">
        ${user
          ? `<a href="pages/dashboard.html" class="btn btn-gold btn-full">माझे खाते</a>
             <button onclick="Auth.logout();window.location.reload()" class="btn btn-outline-white btn-full">लॉग आउट</button>`
          : `<button onclick="UI.openModal('auth-modal');toggleMobileNav()" class="btn btn-gold btn-full">साइन इन / नोंदणी</button>`
        }
      </div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════
// CART DRAWER COMPONENT
// ═══════════════════════════════════════════════
function renderCartDrawer() {
  return `
  <div class="drawer-overlay" id="cart-drawer-overlay" onclick="UI.closeDrawer('cart-drawer')"></div>
  <div class="drawer" id="cart-drawer" role="dialog" aria-label="खरेदी कार्ट">
    <div class="drawer-header">
      <div class="drawer-title">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        माझी कार्ट
      </div>
      <button class="modal-close" style="position:static" onclick="UI.closeDrawer('cart-drawer')">✕</button>
    </div>
    <div class="drawer-body" id="cart-drawer-body">
      <div class="cart-empty-state" id="cart-empty-state">
        <div style="text-align:center;padding:3rem 1rem;color:var(--text-muted)">
          <div style="font-size:3rem;margin-bottom:1rem">🛒</div>
          <p style="font-size:1.1rem;font-weight:600;margin-bottom:0.5rem">कार्ट रिकामी आहे</p>
          <p style="font-size:0.9rem;margin-bottom:1.5rem">आपली आवडती ई-पुस्तके कार्टमध्ये जोडा</p>
          <a href="books.html" class="btn btn-primary" onclick="UI.closeDrawer('cart-drawer')">ई-बुक्स पहा</a>
        </div>
      </div>
      <div id="cart-items-list"></div>
    </div>
    <div class="drawer-footer" id="cart-footer" style="display:none">
      <div style="display:flex;justify-content:space-between;margin-bottom:0.75rem;font-size:0.875rem;color:var(--text-muted)">
        <span>मूळ किंमत</span>
        <span id="cart-original-total" style="text-decoration:line-through"></span>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:0.75rem;font-size:0.875rem;color:var(--color-success)">
        <span>बचत</span>
        <span id="cart-savings">-</span>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:1.5rem;font-size:1.25rem;font-weight:800;color:var(--color-maroon)">
        <span>एकूण</span>
        <span id="cart-total">-</span>
      </div>
      <a href="checkout.html" class="btn btn-primary btn-full btn-lg" onclick="UI.closeDrawer('cart-drawer')">
        🔒 सुरक्षित चेकआउट
      </a>
      <button class="btn btn-ghost btn-full" style="margin-top:0.5rem" onclick="UI.closeDrawer('cart-drawer')">
        खरेदी सुरू ठेवा
      </button>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════
// AUTH MODAL COMPONENT
// ═══════════════════════════════════════════════
function renderAuthModal() {
  return `
  <div class="modal-overlay" id="auth-modal" role="dialog" aria-label="साइन इन / नोंदणी">
    <div class="modal-box">
      <button class="modal-close" onclick="UI.closeModal('auth-modal')">✕</button>
      
      <!-- Tabs -->
      <div class="auth-tabs" style="display:flex;gap:0;border-bottom:2px solid var(--border-light);margin-bottom:2rem">
        <button class="auth-tab active" id="login-tab" onclick="switchAuthTab('login')"
          style="flex:1;padding:0.75rem;font-weight:600;font-size:1rem;border-bottom:3px solid transparent;margin-bottom:-2px;color:var(--text-muted);transition:all 0.2s">
          साइन इन
        </button>
        <button class="auth-tab" id="register-tab" onclick="switchAuthTab('register')"
          style="flex:1;padding:0.75rem;font-weight:600;font-size:1rem;border-bottom:3px solid transparent;margin-bottom:-2px;color:var(--text-muted);transition:all 0.2s">
          नोंदणी करा
        </button>
      </div>

      <!-- Logo -->
      <div style="text-align:center;margin-bottom:1.5rem">
        <div class="modal-logo" style="margin:0 auto 0.75rem">${LOGO_SVG}</div>
        <p id="auth-subtitle" style="color:var(--text-muted);font-size:0.875rem">आपल्या खात्यात प्रवेश करा</p>
      </div>

      <!-- Login Form -->
      <form id="login-form" onsubmit="handleLoginSubmit(event)">
        <div class="form-group form-input-icon">
          <label class="form-label" for="login-email">ईमेल <span class="required">*</span></label>
          <span class="icon">✉</span>
          <input class="form-input" type="email" id="login-email" placeholder="आपला ईमेल" required autocomplete="email" />
        </div>
        <div class="form-group form-input-icon">
          <label class="form-label" for="login-password">पासवर्ड <span class="required">*</span></label>
          <span class="icon">🔒</span>
          <input class="form-input" type="password" id="login-password" placeholder="पासवर्ड" required autocomplete="current-password" />
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem">
          <label class="form-checkbox">
            <input type="checkbox"> <span class="form-checkbox-label">लक्षात ठेवा</span>
          </label>
          <a href="#" style="font-size:0.875rem;color:var(--color-maroon)">पासवर्ड विसरलात?</a>
        </div>
        <button type="submit" class="btn btn-primary btn-full btn-lg">साइन इन करा</button>
        <div style="text-align:center;margin:1.25rem 0;position:relative">
          <span style="background:white;padding:0 1rem;color:var(--text-muted);font-size:0.875rem;position:relative;z-index:1">किंवा</span>
          <div style="position:absolute;top:50%;left:0;right:0;height:1px;background:var(--border-light)"></div>
        </div>
        <button type="button" class="btn btn-full" style="border:1.5px solid var(--border-light);gap:0.75rem" onclick="handleGoogleSignin()">
          <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.8 2.4 30.3 0 24 0 14.7 0 6.8 5.4 2.9 13.3l7.8 6C12.4 13.3 17.8 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.6-4.9 7.3l7.6 5.9c4.5-4.1 7.1-10.2 7.1-17.2z"/><path fill="#FBBC05" d="M10.7 28.7A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.7-4.7l-7.8-6A23.9 23.9 0 0 0 0 24c0 3.9.9 7.5 2.5 10.7l8.2-6z"/><path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.9 2.2-8.3 2.2-6.2 0-11.6-3.8-13.3-9.2l-8.2 6C6.8 42.6 14.7 48 24 48z"/></svg>
          Google ने साइन इन करा
        </button>
      </form>

      <!-- Register Form (hidden by default) -->
      <form id="register-form" style="display:none" onsubmit="handleRegisterSubmit(event)">
        <div class="form-row">
          <div class="form-group form-input-icon">
            <label class="form-label" for="reg-name">पूर्ण नाव <span class="required">*</span></label>
            <span class="icon">👤</span>
            <input class="form-input" type="text" id="reg-name" placeholder="आपले नाव" required autocomplete="name" />
          </div>
          <div class="form-group form-input-icon">
            <label class="form-label" for="reg-phone">मोबाइल</label>
            <span class="icon">📱</span>
            <input class="form-input" type="tel" id="reg-phone" placeholder="+91 00000 00000" autocomplete="tel" />
          </div>
        </div>
        <div class="form-group form-input-icon">
          <label class="form-label" for="reg-email">ईमेल <span class="required">*</span></label>
          <span class="icon">✉</span>
          <input class="form-input" type="email" id="reg-email" placeholder="आपला ईमेल" required autocomplete="email" />
        </div>
        <div class="form-group form-input-icon">
          <label class="form-label" for="reg-password">पासवर्ड <span class="required">*</span></label>
          <span class="icon">🔒</span>
          <input class="form-input" type="password" id="reg-password" placeholder="किमान ८ अक्षरे" required minlength="8" autocomplete="new-password" oninput="updatePasswordStrength(this.value)" />
          <div id="password-strength-bar" style="margin-top:4px;height:4px;border-radius:2px;background:var(--border-light);overflow:hidden;display:none">
            <div id="password-strength-fill" style="height:100%;transition:width 0.3s,background 0.3s;width:0"></div>
          </div>
        </div>
        <label class="form-checkbox" style="margin-bottom:1.5rem">
          <input type="checkbox" required>
          <span class="form-checkbox-label">मी <a href="pages/terms.html" style="color:var(--color-maroon)">अटी व शर्ती</a> मान्य करतो</span>
        </label>
        <button type="submit" class="btn btn-primary btn-full btn-lg">मोफत नोंदणी करा</button>
        <div style="text-align:center;margin:1.25rem 0;position:relative">
          <span style="background:white;padding:0 1rem;color:var(--text-muted);font-size:0.875rem;position:relative;z-index:1">किंवा</span>
          <div style="position:absolute;top:50%;left:0;right:0;height:1px;background:var(--border-light)"></div>
        </div>
        <button type="button" class="btn btn-full" style="border:1.5px solid var(--border-light);gap:0.75rem" onclick="handleGoogleSignin()">
          <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.8 2.4 30.3 0 24 0 14.7 0 6.8 5.4 2.9 13.3l7.8 6C12.4 13.3 17.8 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.6-4.9 7.3l7.6 5.9c4.5-4.1 7.1-10.2 7.1-17.2z"/><path fill="#FBBC05" d="M10.7 28.7A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.7-4.7l-7.8-6A23.9 23.9 0 0 0 0 24c0 3.9.9 7.5 2.5 10.7l8.2-6z"/><path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.9 2.2-8.3 2.2-6.2 0-11.6-3.8-13.3-9.2l-8.2 6C6.8 42.6 14.7 48 24 48z"/></svg>
          Google ने नोंदणी करा
        </button>
      </form>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════
// FOOTER COMPONENT
// ═══════════════════════════════════════════════
function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="ornament-top-border" style="background:var(--color-gold-pale)"></div>
    <div class="footer-top">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand -->
          <div class="footer-brand">
            <a href="/index.html" class="site-logo" style="margin-bottom:1rem">
              <div class="logo-emblem">${LOGO_SVG}</div>
              <div class="logo-text-group">
                <span class="logo-brand">DATTADAS</span>
                <span class="logo-marathi">दत्तदास</span>
              </div>
            </a>
            <p>भक्ती, ज्ञान आणि संस्कारांचा डिजिटल ठेवा. मराठी भाषेतील अस्सल आध्यात्मिक साहित्याचे श्रेष्ठ संग्रहस्थान.</p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
              <a href="https://wa.me/919876543210" class="social-link" aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </a>
            </div>
          </div>

          <!-- E-books -->
          <div>
            <h4 class="footer-col-title">ई-बुक्स</h4>
            <div class="footer-links">
              <a href="books.html?category=datta-sampraday">दत्त संप्रदाय</a>
              <a href="books.html?category=gurucharitra">श्री गुरुचरित्र</a>
              <a href="books.html?category=navanath">नवनाथ भक्तिसार</a>
              <a href="books.html?category=sant-charitra">संत चरित्रे</a>
              <a href="books.html?category=stotre-mantra">स्तोत्रे आणि मंत्र</a>
              <a href="books.html?category=puranic-katha">पौराणिक कथा</a>
            </div>
          </div>

          <!-- Help -->
          <div>
            <h4 class="footer-col-title">मदत</h4>
            <div class="footer-links">
              <a href="pages/faq.html">वारंवार विचारले जाणारे प्रश्न</a>
              <a href="pages/delivery.html">डिजिटल डिलिव्हरी</a>
              <a href="pages/refund.html">परतावा धोरण</a>
              <a href="pages/privacy.html">गोपनीयता धोरण</a>
              <a href="pages/terms.html">अटी व शर्ती</a>
              <a href="pages/contact.html">आमच्याशी संपर्क करा</a>
            </div>
          </div>

          <!-- Newsletter + Contact -->
          <div>
            <h4 class="footer-col-title">न्यूजलेटर</h4>
            <p class="footer-newsletter-title">नवीन ई-बुक्स आणि विशेष ऑफर्सची माहिती मिळवा.</p>
            <form class="newsletter-form-footer" onsubmit="handleNewsletterFooter(event)">
              <input type="email" class="newsletter-input-footer" placeholder="आपला ईमेल" required aria-label="ईमेल" />
              <button type="submit" class="btn btn-gold btn-sm">→</button>
            </form>
            <div style="margin-top:1.5rem">
              <h4 class="footer-col-title">संपर्क</h4>
              <div class="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                support@dattadas.in
              </div>
              <div class="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                +91 98765 43210 (WhatsApp)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-inner">
          <p class="footer-copyright">© २०२४ DattaDas.in — सर्व हक्क राखीव 🙏 भगवान दत्तात्रेयांना समर्पित</p>
          <div class="footer-legal-links">
            <a href="pages/privacy.html">गोपनीयता</a>
            <a href="pages/terms.html">अटी</a>
            <a href="pages/refund.html">परतावा</a>
          </div>
          <div class="payment-badges">
            <span class="payment-badge">UPI</span>
            <span class="payment-badge">Razorpay</span>
            <span class="payment-badge">SSL ✓</span>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- Scroll to top -->
  <button class="scroll-top-btn" id="scroll-top" aria-label="वर जा">↑</button>`;
}

// ═══════════════════════════════════════════════
// CART RENDER HELPER
// ═══════════════════════════════════════════════
function renderCartDrawerItems() {
  const cart = Cart.get() || [];
  const emptyState = document.getElementById('cart-empty-state');
  const itemsList = document.getElementById('cart-items-list');
  const footer = document.getElementById('cart-footer');

  if (!itemsList) return;

  if (cart.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (footer) footer.style.display = 'none';
    itemsList.innerHTML = '';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (footer) footer.style.display = 'block';

  itemsList.innerHTML = cart.map(item => {
    const product = DATTADAS_PRODUCTS.find(p => p.id === item.productId);
    const disc = Price.discount(item.originalPrice, item.price);
    return `
    <div class="cart-item" style="display:flex;gap:1rem;padding:1rem 0;border-bottom:1px solid var(--border-light);align-items:flex-start">
      <div style="width:56px;height:72px;border-radius:8px;background:${product?.coverColor || '#651F2B'};display:flex;align-items:center;justify-content:center;color:var(--color-gold);font-size:1.5rem;flex-shrink:0">
        ${product?.coverEmoji || '📚'}
      </div>
      <div style="flex:1;min-width:0">
        <h4 style="font-size:0.9rem;font-weight:600;margin-bottom:0.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${item.title}</h4>
        <div style="display:flex;align-items:center;gap:0.5rem">
          <span style="font-weight:700;color:var(--color-maroon)">${Price.format(item.price)}</span>
          <span style="font-size:0.75rem;color:var(--text-muted);text-decoration:line-through">${Price.format(item.originalPrice)}</span>
          <span style="font-size:0.7rem;background:var(--color-saffron);color:white;padding:1px 6px;border-radius:4px">${disc}%</span>
        </div>
        <p style="font-size:0.75rem;color:var(--text-muted)">PDF + ePub</p>
      </div>
      <button onclick="Cart.remove('${item.productId}');renderCartDrawerItems();UI.updateCartBadges()" 
        style="color:var(--text-muted);padding:4px;flex-shrink:0" aria-label="काढा">✕</button>
    </div>`;
  }).join('');

  const totalEl = document.getElementById('cart-total');
  const originalEl = document.getElementById('cart-original-total');
  const savingsEl = document.getElementById('cart-savings');
  if (totalEl) totalEl.textContent = Price.format(Cart.subtotal());
  if (originalEl) originalEl.textContent = Price.format(Cart.originalTotal());
  if (savingsEl) savingsEl.textContent = Price.format(Cart.savings());
}

// ═══════════════════════════════════════════════
// AUTH FORM HANDLERS
// ═══════════════════════════════════════════════
function switchAuthTab(tab) {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const loginTab = document.getElementById('login-tab');
  const registerTab = document.getElementById('register-tab');
  const subtitle = document.getElementById('auth-subtitle');

  if (tab === 'login') {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    loginTab.style.borderBottomColor = 'var(--color-maroon)';
    loginTab.style.color = 'var(--color-maroon)';
    registerTab.style.borderBottomColor = 'transparent';
    registerTab.style.color = 'var(--text-muted)';
    subtitle.textContent = 'आपल्या खात्यात प्रवेश करा';
  } else {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    registerTab.style.borderBottomColor = 'var(--color-maroon)';
    registerTab.style.color = 'var(--color-maroon)';
    loginTab.style.borderBottomColor = 'transparent';
    loginTab.style.color = 'var(--text-muted)';
    subtitle.textContent = 'मोफत खाते तयार करा';
  }
}

// Set active tab on load
document.addEventListener('DOMContentLoaded', () => {
  const loginTab = document.getElementById('login-tab');
  if (loginTab) {
    loginTab.style.borderBottomColor = 'var(--color-maroon)';
    loginTab.style.color = 'var(--color-maroon)';
  }
});

function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  try {
    const user = Auth.login({ email, password });
    UI.closeModal('auth-modal');
    Toast.success(`🙏 स्वागत आहे, ${user.name}!`);
    setTimeout(() => location.reload(), 500);
  } catch (err) {
    Toast.error(err.message);
  }
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value;
  const email = document.getElementById('reg-email').value;
  const phone = document.getElementById('reg-phone').value;
  const password = document.getElementById('reg-password').value;
  try {
    const user = Auth.register({ name, email, phone, password });
    UI.closeModal('auth-modal');
    Toast.success(`🎉 नोंदणी यशस्वी! स्वागत आहे, ${user.name}!`);
    setTimeout(() => location.reload(), 500);
  } catch (err) {
    Toast.error(err.message);
  }
}

function handleGoogleSignin() {
  // Simulate Google Sign-In (requires Firebase/OAuth in production)
  Toast.warning('Google साइन-इन सक्रिय करण्यासाठी Firebase कनेक्ट करणे आवश्यक आहे.');
}

function updatePasswordStrength(value) {
  const bar = document.getElementById('password-strength-bar');
  const fill = document.getElementById('password-strength-fill');
  if (!bar || !fill) return;
  bar.style.display = 'block';
  let strength = 0;
  if (value.length >= 8) strength++;
  if (/[A-Z]/.test(value)) strength++;
  if (/[0-9]/.test(value)) strength++;
  if (/[^A-Za-z0-9]/.test(value)) strength++;
  const colors = ['#E53935', '#E53935', '#FFA000', '#43A047', '#2E7D32'];
  fill.style.width = (strength * 25) + '%';
  fill.style.background = colors[strength];
}

function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  if (nav) nav.classList.toggle('active');
}

function handleSearch(e) {
  e.preventDefault();
  const q = document.getElementById('header-search').value;
  if (q) window.location.href = `books.html?search=${encodeURIComponent(q)}`;
}

function handleNewsletterFooter(e) {
  e.preventDefault();
  Toast.success('न्यूजलेटरसाठी नोंदणी यशस्वी! धन्यवाद 🙏');
  e.target.reset();
}

// ═══════════════════════════════════════════════
// INJECT SHARED COMPONENTS
// ═══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Inject header
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    const activePage = headerContainer.dataset.active || '';
    headerContainer.innerHTML = renderHeader(activePage);
  }

  // Inject footer
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = renderFooter();
  }

  // Inject cart drawer
  const cartContainer = document.getElementById('cart-drawer-container');
  if (cartContainer) {
    cartContainer.innerHTML = renderCartDrawer();
    // Listen for cart drawer open
    document.addEventListener('storeUpdate', ({ detail }) => {
      if (detail.key === 'cart') renderCartDrawerItems();
    });
    // Initial render
    const cartDrawer = document.getElementById('cart-drawer');
    if (cartDrawer) {
      cartDrawer.addEventListener('transitionend', renderCartDrawerItems);
    }
  }

  // Inject auth modal
  const authContainer = document.getElementById('auth-modal-container');
  if (authContainer) {
    authContainer.innerHTML = renderAuthModal();
    // Set active login tab style
    setTimeout(() => {
      const loginTab = document.getElementById('login-tab');
      if (loginTab) {
        loginTab.style.borderBottomColor = 'var(--color-maroon)';
        loginTab.style.color = 'var(--color-maroon)';
      }
    }, 100);
  }
});

window.switchAuthTab = switchAuthTab;
window.handleLoginSubmit = handleLoginSubmit;
window.handleRegisterSubmit = handleRegisterSubmit;
window.handleGoogleSignin = handleGoogleSignin;
window.updatePasswordStrength = updatePasswordStrength;
window.toggleMobileNav = toggleMobileNav;
window.handleSearch = handleSearch;
window.renderCartDrawerItems = renderCartDrawerItems;
window.handleNewsletterFooter = handleNewsletterFooter;
