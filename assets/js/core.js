/**
 * DATTADAS — Core Application Engine
 * Data store, auth, cart, state management
 */
'use strict';

// ═══════════════════════════════════════════════
// PRODUCT DATABASE
// ═══════════════════════════════════════════════
const DATTADAS_PRODUCTS = [
  {
    id: 'P001',
    slug: 'shri-datta-mahatmya',
    titleMarathi: 'श्री दत्त महात्म्य',
    titleEnglish: 'Shri Datta Mahatmya',
    shortDesc: 'भगवान दत्तात्रेयांच्या महिमेचे संपूर्ण वर्णन करणारा अनमोल ग्रंथ.',
    fullDesc: `श्री दत्त महात्म्य हे भगवान दत्तात्रेयांच्या दिव्य महिमेचे, त्यांच्या अवताराचे आणि त्यांच्या शिकवणींचे संपूर्ण वर्णन करणारा मराठी ग्रंथ आहे. हा ग्रंथ दत्त संप्रदायाचा आधारस्तंभ मानला जातो. या पुस्तकात दत्तजींचे तीन मुख, सहा भुजा, चार श्वान आणि औदुंबर वृक्षाचे महत्त्व सांगितले आहे. प्रत्येक अध्याय वाचकाला आत्मज्ञानाच्या मार्गावर घेऊन जातो.`,
    author: 'पं. विश्वनाथ शास्त्री',
    category: 'दत्त संप्रदाय',
    categorySlug: 'datta-sampraday',
    language: 'मराठी',
    pages: 240,
    format: 'PDF + ePub',
    coverColor: '#651F2B',
    coverEmoji: '🙏',
    regularPrice: 1299,
    salePrice: 699,
    featured: true,
    bestseller: true,
    isNew: false,
    rating: 4.9,
    ratingCount: 325,
    tags: ['दत्त', 'महात्म्य', 'अध्यात्म', 'भक्ती'],
    tableOfContents: [
      'अध्याय १: दत्तात्रेयांचा जन्म',
      'अध्याय २: त्रिमूर्ती स्वरूप',
      'अध्याय ३: चोविस गुरू',
      'अध्याय ४: दत्त क्षेत्रे',
      'अध्याय ५: दत्त नामस्मरण',
      'अध्याय ६: दत्त भक्ती मार्ग',
      'अध्याय ७: दत्त आरती आणि स्तोत्रे',
    ],
    seoTitle: 'श्री दत्त महात्म्य मराठी ई-बुक | DattaDas.in',
    seoDesc: 'भगवान दत्तात्रेयांच्या महिमेचे संपूर्ण वर्णन. मराठी ई-बुक खरेदी करा फक्त ₹६९९ मध्ये.',
    createdAt: '2024-01-15',
  },
  {
    id: 'P002',
    slug: 'shri-gurucharitra',
    titleMarathi: 'श्री गुरुचरित्र',
    titleEnglish: 'Shri Gurucharitra',
    shortDesc: 'दत्त संप्रदायाचा परमपवित्र ग्रंथ — श्री गुरुचरित्राचे सोपे मराठी भाषांतर.',
    fullDesc: `श्री गुरुचरित्र हे दत्त संप्रदायाचे अत्यंत महत्त्वाचे आणि पवित्र ग्रंथ आहे. सरस्वती गंगाधर यांनी रचलेले हे ग्रंथ श्री नरसिंह सरस्वती आणि श्री श्रीपाद श्रीवल्लभ यांच्या दिव्य चरित्राचे वर्णन करते. या पुस्तकात मूळ ओव्यांचा सुलभ मराठी अर्थ आणि स्पष्टीकरण दिले आहे.`,
    author: 'सरस्वती गंगाधर (अनुवाद: डॉ. श्रीकांत जोशी)',
    category: 'श्री गुरुचरित्र',
    categorySlug: 'gurucharitra',
    language: 'मराठी',
    pages: 480,
    format: 'PDF + ePub',
    coverColor: '#1a3a6e',
    coverEmoji: '📿',
    regularPrice: 1299,
    salePrice: 699,
    featured: true,
    bestseller: true,
    isNew: false,
    rating: 4.9,
    ratingCount: 512,
    tags: ['गुरुचरित्र', 'नरसिंह सरस्वती', 'दत्त', 'पारायण'],
    seoTitle: 'श्री गुरुचरित्र मराठी ई-बुक | DattaDas.in',
    seoDesc: 'दत्त संप्रदायाचा परमपवित्र ग्रंथ श्री गुरुचरित्र मराठीत. ₹६९९ मध्ये खरेदी करा.',
    createdAt: '2024-02-01',
  },
  {
    id: 'P003',
    slug: 'datta-dhyan-sadhana',
    titleMarathi: 'दत्त ध्यान साधना',
    titleEnglish: 'Datta Dhyan Sadhana',
    shortDesc: 'भगवान दत्तात्रेयांच्या ध्यान पद्धती आणि साधनेचे व्यावहारिक मार्गदर्शन.',
    fullDesc: `दत्त ध्यान साधना हे पुस्तक आधुनिक जीवनात दत्तजींच्या ध्यान पद्धतींचा कसा उपयोग करायचा हे सांगते. श्वास, मंत्र आणि दृश्यीकरण यांच्या माध्यमातून आत्मशांती प्राप्त करण्याचे मार्ग या पुस्तकात सविस्तर दिले आहेत.`,
    author: 'स्वामी दत्तानंद',
    category: 'ध्यान आणि साधना',
    categorySlug: 'dhyan-sadhana',
    language: 'मराठी',
    pages: 156,
    format: 'PDF + ePub',
    coverColor: '#1b5e20',
    coverEmoji: '🧘',
    regularPrice: 1299,
    salePrice: 699,
    featured: false,
    bestseller: false,
    isNew: true,
    rating: 4.8,
    ratingCount: 192,
    tags: ['ध्यान', 'साधना', 'मंत्र', 'आत्मशांती'],
    seoTitle: 'दत्त ध्यान साधना मराठी ई-बुक | DattaDas.in',
    createdAt: '2024-03-10',
  },
  {
    id: 'P004',
    slug: 'avadhuta-gita-artha',
    titleMarathi: 'अवधूत गीता — मराठी अर्थ',
    titleEnglish: 'Avadhuta Gita - Marathi Meaning',
    shortDesc: 'दत्तात्रेयांनी रचलेल्या अवधूत गीतेचा सुलभ मराठी अर्थ आणि विवरण.',
    fullDesc: `अवधूत गीता हे भगवान दत्तात्रेयांनी त्यांचे शिष्य कार्तवीर्यार्जुन यांना सांगितलेले अद्वैत वेदांताचे ग्रंथ आहे. या पुस्तकात मूळ संस्कृत श्लोकांचा सुलभ मराठी अर्थ आणि आधुनिक दृष्टिकोनातून विवरण दिले आहे.`,
    author: 'भगवान दत्तात्रेय (अनुवाद: श्री. माधव कुलकर्णी)',
    category: 'तत्त्वज्ञान',
    categorySlug: 'tattvagyan',
    language: 'मराठी',
    pages: 208,
    format: 'PDF + ePub',
    coverColor: '#4a1a6e',
    coverEmoji: '📜',
    regularPrice: 1299,
    salePrice: 699,
    featured: false,
    bestseller: false,
    isNew: false,
    rating: 4.7,
    ratingCount: 145,
    tags: ['अवधूत', 'गीता', 'अद्वैत', 'वेदांत'],
    seoTitle: 'अवधूत गीता मराठी अर्थ ई-बुक | DattaDas.in',
    createdAt: '2024-02-20',
  },
  {
    id: 'P005',
    slug: 'navanarh-bhaktisar',
    titleMarathi: 'नवनाथ भक्तिसार',
    titleEnglish: 'Navanath Bhaktisar',
    shortDesc: 'नव नाथांच्या लीलांचे आणि शिकवणींचे मराठी वर्णन — भक्तीसाराचा खजिना.',
    fullDesc: `नवनाथ भक्तिसार हे महाराष्ट्रातील नवनाथ संप्रदायावर आधारित अत्यंत महत्त्वाचे ग्रंथ आहे. मच्छिंद्रनाथ, गोरखनाथ आदी नव नाथांच्या दिव्य लीला आणि त्यांच्या शिकवणींचा हा अनमोल संग्रह आहे.`,
    author: 'मल्हारी रामराव चिटणीस',
    category: 'नवनाथ भक्तिसार',
    categorySlug: 'navanath',
    language: 'मराठी',
    pages: 320,
    format: 'PDF + ePub',
    coverColor: '#5c3d1e',
    coverEmoji: '🕉️',
    regularPrice: 1299,
    salePrice: 699,
    featured: true,
    bestseller: false,
    isNew: false,
    rating: 4.8,
    ratingCount: 231,
    tags: ['नवनाथ', 'भक्तिसार', 'संप्रदाय'],
    seoTitle: 'नवनाथ भक्तिसार मराठी ई-बुक | DattaDas.in',
    createdAt: '2024-01-28',
  },
  {
    id: 'P006',
    slug: 'tripura-rahasya',
    titleMarathi: 'त्रिपुरा रहस्य',
    titleEnglish: 'Tripura Rahasya',
    shortDesc: 'दत्तात्रेयांनी परशुरामाला सांगितलेले अद्वैत ज्ञानाचे रहस्य.',
    fullDesc: `त्रिपुरा रहस्य हे प्राचीन संस्कृत ग्रंथाचे मराठी भाषांतर आहे. यामध्ये भगवान दत्तात्रेयांनी त्यांचे शिष्य परशुराम यांना आत्मज्ञान आणि मोक्षाचे मार्ग सांगितले आहेत. हे ग्रंथ अद्वैत वेदांताचे सर्वोत्तम उदाहरण मानले जाते.`,
    author: 'भगवान दत्तात्रेय (मराठी: श्री. विनायक पेठे)',
    category: 'तत्त्वज्ञान',
    categorySlug: 'tattvagyan',
    language: 'मराठी',
    pages: 248,
    format: 'PDF + ePub',
    coverColor: '#1a3a4e',
    coverEmoji: '✨',
    regularPrice: 1299,
    salePrice: 699,
    featured: false,
    bestseller: false,
    isNew: true,
    rating: 4.9,
    ratingCount: 178,
    tags: ['त्रिपुरा', 'रहस्य', 'परशुराम', 'अद्वैत'],
    seoTitle: 'त्रिपुरा रहस्य मराठी ई-बुक | DattaDas.in',
    createdAt: '2024-04-05',
  },
  {
    id: 'P007',
    slug: 'sant-eknath-charitra',
    titleMarathi: 'संत एकनाथ महाराज चरित्र',
    titleEnglish: 'Sant Eknath Maharaj Charitra',
    shortDesc: 'महाराष्ट्राचे महान संत एकनाथ महाराजांचे दिव्य जीवनचरित्र मराठीत.',
    fullDesc: `संत एकनाथ महाराज हे महाराष्ट्राचे महान वारकरी संत होते. त्यांनी भक्ती, ज्ञान आणि सेवेच्या माध्यमातून समाजाला नवी दिशा दिली. या पुस्तकात त्यांचे संपूर्ण जीवनचरित्र, त्यांचे अभंग आणि त्यांच्या शिकवणींचा समावेश आहे.`,
    author: 'डॉ. सदानंद मोरे',
    category: 'संत चरित्रे',
    categorySlug: 'sant-charitra',
    language: 'मराठी',
    pages: 290,
    format: 'PDF + ePub',
    coverColor: '#8B2D3D',
    coverEmoji: '🕊️',
    regularPrice: 1299,
    salePrice: 699,
    featured: true,
    bestseller: false,
    isNew: false,
    rating: 4.8,
    ratingCount: 198,
    tags: ['एकनाथ', 'संत', 'वारकरी', 'भक्ती'],
    seoTitle: 'संत एकनाथ महाराज चरित्र मराठी ई-बुक | DattaDas.in',
    createdAt: '2024-02-15',
  },
  {
    id: 'P008',
    slug: 'shiva-mahapurana-marathi',
    titleMarathi: 'शिव महापुराण — मराठी सार',
    titleEnglish: 'Shiva Mahapurana - Marathi Summary',
    shortDesc: 'शिव महापुराणातील महत्त्वाच्या कथांचे आणि शिक्षणाचे मराठी सारांश.',
    fullDesc: `शिव महापुराण हे अठरा महापुराणांपैकी एक असून यात भगवान शिवाच्या महिमेचे, त्यांच्या लीलांचे आणि भक्तांच्या कथांचे सविस्तर वर्णन आहे. या मराठी सार आवृत्तीत सर्वात महत्त्वाचे भाग सोप्या भाषेत दिले आहेत.`,
    author: 'पं. रामकृष्ण शास्त्री',
    category: 'शिवमहापुराण',
    categorySlug: 'shiva-purana',
    language: 'मराठी',
    pages: 380,
    format: 'PDF + ePub',
    coverColor: '#1a1a4e',
    coverEmoji: '🔱',
    regularPrice: 1299,
    salePrice: 699,
    featured: false,
    bestseller: true,
    isNew: false,
    rating: 4.7,
    ratingCount: 267,
    tags: ['शिव', 'महापुराण', 'पुराण', 'भक्ती'],
    seoTitle: 'शिव महापुराण मराठी ई-बुक | DattaDas.in',
    createdAt: '2024-03-01',
  },
];

// ═══════════════════════════════════════════════
// CATEGORIES
// ═══════════════════════════════════════════════
const DATTADAS_CATEGORIES = [
  { id: 'C001', name: 'श्री गुरुचरित्र', slug: 'gurucharitra', icon: '📿', desc: 'दत्त संप्रदायाचे पवित्र ग्रंथ', count: 8 },
  { id: 'C002', name: 'दत्त संप्रदाय', slug: 'datta-sampraday', icon: '🙏', desc: 'दत्तात्रेयांच्या शिकवणी', count: 12 },
  { id: 'C003', name: 'नवनाथ भक्तिसार', slug: 'navanath', icon: '🕉️', desc: 'नव नाथांच्या लीला', count: 5 },
  { id: 'C004', name: 'शिवमहापुराण', slug: 'shiva-purana', icon: '🔱', desc: 'भगवान शिवाचे महिमान', count: 6 },
  { id: 'C005', name: 'संत चरित्रे', slug: 'sant-charitra', icon: '🕊️', desc: 'महान मराठी संतांचे जीवन', count: 15 },
  { id: 'C006', name: 'पौराणिक कथा', slug: 'puranic-katha', icon: '📖', desc: 'प्राचीन भारतीय कथा', count: 10 },
  { id: 'C007', name: 'स्तोत्रे आणि मंत्र', slug: 'stotre-mantra', icon: '🎵', desc: 'पवित्र मंत्र आणि स्तोत्रे', count: 9 },
  { id: 'C008', name: 'धार्मिक ग्रंथ', slug: 'dharmik-granth', icon: '📚', desc: 'धर्मग्रंथांचा संग्रह', count: 11 },
  { id: 'C009', name: 'तत्त्वज्ञान', slug: 'tattvagyan', icon: '✨', desc: 'आत्मज्ञान आणि तत्त्वज्ञान', count: 7 },
  { id: 'C010', name: 'विशेष संग्रह', slug: 'vishesh-sangraha', icon: '👑', desc: 'दुर्मिळ आणि विशेष ग्रंथ', count: 4 },
];

// ═══════════════════════════════════════════════
// STATE MANAGEMENT
// ═══════════════════════════════════════════════
const Store = {
  _state: {
    user: null,
    cart: [],
    wishlist: [],
    orders: [],
    entitlements: [],
  },

  get(key) {
    try {
      const val = localStorage.getItem(`dattadas_${key}`);
      return val ? JSON.parse(val) : this._state[key];
    } catch { return this._state[key]; }
  },

  set(key, value) {
    this._state[key] = value;
    try { localStorage.setItem(`dattadas_${key}`, JSON.stringify(value)); } catch {}
    document.dispatchEvent(new CustomEvent('storeUpdate', { detail: { key, value } }));
  },

  update(key, updater) {
    this.set(key, updater(this.get(key)));
  },
};

// ═══════════════════════════════════════════════
// AUTH SERVICE
// ═══════════════════════════════════════════════
const Auth = {
  currentUser() { return Store.get('user'); },

  register({ name, email, phone, password }) {
    const users = JSON.parse(localStorage.getItem('dattadas_users') || '[]');
    if (users.find(u => u.email === email)) {
      throw new Error('हा ईमेल आधीच नोंदणीकृत आहे.');
    }
    const user = {
      id: 'U' + Date.now(),
      name, email, phone,
      passwordHash: btoa(password),
      createdAt: new Date().toISOString(),
      emailVerified: false,
      role: 'customer',
    };
    users.push(user);
    localStorage.setItem('dattadas_users', JSON.stringify(users));
    const { passwordHash, ...safeUser } = user;
    Store.set('user', safeUser);
    return safeUser;
  },

  login({ email, password }) {
    const users = JSON.parse(localStorage.getItem('dattadas_users') || '[]');
    const user = users.find(u => u.email === email);
    if (!user) throw new Error('हा ईमेल नोंदणीकृत नाही.');
    if (user.passwordHash !== btoa(password)) throw new Error('चुकीचा पासवर्ड.');
    const { passwordHash, ...safeUser } = user;
    Store.set('user', safeUser);
    return safeUser;
  },

  loginAdmin({ email, password }) {
    // Admin credentials (in production: use secure backend)
    if (email === 'admin@dattadas.in' && password === 'DattaAdmin@2024') {
      const admin = { id: 'ADMIN001', name: 'DattaDas Admin', email, role: 'admin' };
      Store.set('user', admin);
      return admin;
    }
    throw new Error('Invalid admin credentials');
  },

  logout() {
    Store.set('user', null);
    Store.set('cart', []);
  },

  isAdmin() {
    const user = this.currentUser();
    return user && user.role === 'admin';
  },

  isCustomer() {
    return !!this.currentUser();
  },
};

// ═══════════════════════════════════════════════
// CART SERVICE
// ═══════════════════════════════════════════════
const Cart = {
  get() { return Store.get('cart') || []; },

  add(productId) {
    const cart = this.get();
    if (cart.find(item => item.productId === productId)) return false;
    const product = DATTADAS_PRODUCTS.find(p => p.id === productId);
    if (!product) return false;
    cart.push({
      productId,
      title: product.titleMarathi,
      price: product.salePrice,
      originalPrice: product.regularPrice,
      addedAt: new Date().toISOString(),
    });
    Store.set('cart', cart);
    return true;
  },

  remove(productId) {
    Store.update('cart', cart => (cart || []).filter(i => i.productId !== productId));
  },

  clear() { Store.set('cart', []); },

  count() { return (this.get() || []).length; },

  subtotal() { return (this.get() || []).reduce((s, i) => s + i.price, 0); },
  
  originalTotal() { return (this.get() || []).reduce((s, i) => s + i.originalPrice, 0); },
  
  savings() { return this.originalTotal() - this.subtotal(); },

  hasProduct(id) { return !!(this.get() || []).find(i => i.productId === id); },
};

// ═══════════════════════════════════════════════
// WISHLIST SERVICE
// ═══════════════════════════════════════════════
const Wishlist = {
  get() { return Store.get('wishlist') || []; },

  toggle(productId) {
    const list = this.get();
    const idx = list.indexOf(productId);
    if (idx > -1) {
      Store.set('wishlist', list.filter(id => id !== productId));
      return false;
    } else {
      Store.set('wishlist', [...list, productId]);
      return true;
    }
  },

  has(productId) { return this.get().includes(productId); },
  count() { return this.get().length; },
};

// ═══════════════════════════════════════════════
// ORDER SERVICE
// ═══════════════════════════════════════════════
const Orders = {
  get() { return JSON.parse(localStorage.getItem('dattadas_orders') || '[]'); },

  getUserOrders(userId) { return this.get().filter(o => o.userId === userId); },

  getEntitlements(userId) {
    const orders = this.getUserOrders(userId).filter(o => o.status === 'paid');
    return orders.flatMap(o => o.items.map(i => i.productId));
  },

  hasEntitlement(userId, productId) {
    return this.getEntitlements(userId).includes(productId);
  },

  create({ userId, items, paymentMethod, couponCode }) {
    const orders = this.get();
    const order = {
      id: 'ORD' + Date.now(),
      userId,
      items,
      subtotal: items.reduce((s, i) => s + i.price, 0),
      originalTotal: items.reduce((s, i) => s + i.originalPrice, 0),
      savings: items.reduce((s, i) => s + (i.originalPrice - i.price), 0),
      status: 'pending',
      paymentMethod,
      couponCode: couponCode || null,
      createdAt: new Date().toISOString(),
      razorpayOrderId: 'rz_test_' + Math.random().toString(36).substr(2, 12),
    };
    orders.push(order);
    localStorage.setItem('dattadas_orders', JSON.stringify(orders));
    return order;
  },

  markPaid(orderId, paymentId) {
    const orders = this.get();
    const order = orders.find(o => o.id === orderId);
    if (order) {
      order.status = 'paid';
      order.paymentId = paymentId;
      order.paidAt = new Date().toISOString();
      localStorage.setItem('dattadas_orders', JSON.stringify(orders));
    }
    return order;
  },

  all() { return this.get(); },
};

// ═══════════════════════════════════════════════
// DOWNLOAD SERVICE
// ═══════════════════════════════════════════════
const Downloads = {
  generateLink(productId, userId) {
    // In production: generate signed URL from secure storage backend
    // Here we return a demo link
    const token = btoa(`${productId}:${userId}:${Date.now() + 3600000}`);
    return `download.html?token=${token}&product=${productId}`;
  },

  log(productId, userId) {
    const logs = JSON.parse(localStorage.getItem('dattadas_downloads') || '[]');
    logs.push({ productId, userId, timestamp: new Date().toISOString() });
    localStorage.setItem('dattadas_downloads', JSON.stringify(logs));
  },

  verifyToken(token, productId, userId) {
    try {
      const decoded = atob(token);
      const [pId, uId, expiry] = decoded.split(':');
      return pId === productId && uId === userId && Date.now() < parseInt(expiry);
    } catch { return false; }
  },
};

// ═══════════════════════════════════════════════
// COUPON SERVICE
// ═══════════════════════════════════════════════
const Coupons = {
  _list: [
    { code: 'DATTA100', type: 'fixed', value: 100, minOrder: 699, active: true },
    { code: 'WELCOME10', type: 'percent', value: 10, minOrder: 0, active: true },
    { code: 'GURU200', type: 'fixed', value: 200, minOrder: 1000, active: true },
  ],

  validate(code, cartTotal) {
    const coupon = this._list.find(c => c.code === code.toUpperCase() && c.active);
    if (!coupon) throw new Error('अवैध किंवा कालबाह्य कूपन.');
    if (cartTotal < coupon.minOrder) throw new Error(`किमान ₹${coupon.minOrder} ची खरेदी आवश्यक.`);
    const discount = coupon.type === 'fixed'
      ? Math.min(coupon.value, cartTotal)
      : Math.round(cartTotal * coupon.value / 100);
    return { coupon, discount };
  },
};

// ═══════════════════════════════════════════════
// TOAST NOTIFICATION
// ═══════════════════════════════════════════════
const Toast = {
  _container: null,

  init() {
    if (!this._container) {
      this._container = document.createElement('div');
      this._container.className = 'toast-container';
      document.body.appendChild(this._container);
    }
  },

  show(message, type = 'info', duration = 4000) {
    this.init();
    const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || 'ℹ'}</span>
      <span class="toast-message">${message}</span>
      <button class="toast-close" onclick="this.parentElement.remove()">✕</button>`;
    this._container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('toast-out');
      setTimeout(() => toast.remove(), 400);
    }, duration);
  },

  success(msg) { this.show(msg, 'success'); },
  error(msg)   { this.show(msg, 'error'); },
  warning(msg) { this.show(msg, 'warning'); },
  info(msg)    { this.show(msg, 'info'); },
};

// ═══════════════════════════════════════════════
// PRICE FORMATTER
// ═══════════════════════════════════════════════
const Price = {
  format(amount) {
    return '₹' + amount.toLocaleString('mr-IN');
  },
  discount(regular, sale) {
    return Math.round((regular - sale) / regular * 100);
  },
  savings(regular, sale) {
    return regular - sale;
  },
};

// ═══════════════════════════════════════════════
// ROUTER (Simple SPA)
// ═══════════════════════════════════════════════
const Router = {
  navigate(path) {
    window.location.href = path;
  },
};

// ═══════════════════════════════════════════════
// INTERSECTION OBSERVER (Scroll Animations)
// ═══════════════════════════════════════════════
const Animate = {
  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      observer.observe(el);
    });
  },
};

// ═══════════════════════════════════════════════
// GLOBAL UI HELPERS
// ═══════════════════════════════════════════════
const UI = {
  openModal(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.add('active'); document.body.style.overflow = 'hidden'; }
  },
  closeModal(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.remove('active'); document.body.style.overflow = ''; }
  },
  closeAllModals() {
    document.querySelectorAll('.modal-overlay.active').forEach(el => {
      el.classList.remove('active');
    });
    document.body.style.overflow = '';
  },
  openDrawer(id) {
    const el = document.getElementById(id);
    const overlay = document.getElementById(id + '-overlay');
    if (el) el.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  },
  closeDrawer(id) {
    const el = document.getElementById(id);
    const overlay = document.getElementById(id + '-overlay');
    if (el) el.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  },

  updateCartBadges() {
    const count = Cart.count();
    document.querySelectorAll('.cart-badge').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  updateWishlistBadges() {
    const count = Wishlist.count();
    document.querySelectorAll('.wishlist-badge').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  renderBookCard(product, options = {}) {
    const disc = Price.discount(product.regularPrice, product.salePrice);
    const inCart = Cart.hasProduct(product.id);
    const inWishlist = Wishlist.has(product.id);
    return `
    <article class="book-card card reveal" data-product-id="${product.id}">
      <div class="book-cover" style="--cover-color:${product.coverColor}">
        <div class="book-cover-inner">
          <div class="book-cover-emoji">${product.coverEmoji}</div>
          <div class="book-cover-title">${product.titleMarathi}</div>
        </div>
        <div class="book-badges">
          ${product.bestseller ? '<span class="book-badge badge-gold">बेस्टसेलर</span>' : ''}
          ${product.isNew ? '<span class="book-badge badge-saffron">नवीन</span>' : ''}
          <span class="book-badge badge-discount">${disc}% सूट</span>
        </div>
        <button class="wishlist-btn ${inWishlist ? 'active' : ''}" onclick="handleWishlist('${product.id}', this)" aria-label="आवडी">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
      </div>
      <div class="book-card-body">
        <div class="book-category">${product.category}</div>
        <h3 class="book-title"><a href="product.html?id=${product.id}">${product.titleMarathi}</a></h3>
        <p class="book-author">${product.author}</p>
        <div class="book-rating">
          <span class="stars">★★★★★</span>
          <span class="rating-val">${product.rating}</span>
          <span class="rating-count">(${product.ratingCount})</span>
        </div>
        <p class="book-desc">${product.shortDesc}</p>
        <div class="book-meta-row">
          <span>${product.pages} पाने</span>
          <span>${product.format}</span>
        </div>
        <div class="price-wrapper">
          <span class="price-current">${Price.format(product.salePrice)}</span>
          <span class="price-original">${Price.format(product.regularPrice)}</span>
          <span class="discount-pill">${disc}%</span>
        </div>
        <div class="book-actions">
          <button class="btn btn-primary btn-sm w-full ${inCart ? 'in-cart' : ''}" 
            onclick="handleAddToCart('${product.id}', this)">
            ${inCart ? '✓ कार्टमध्ये आहे' : 'कार्टमध्ये जोडा'}
          </button>
          <a href="product.html?id=${product.id}" class="btn btn-outline-maroon btn-sm">
            अधिक पहा
          </a>
        </div>
      </div>
    </article>`;
  },
};

// ═══════════════════════════════════════════════
// EVENT HANDLERS
// ═══════════════════════════════════════════════
function handleAddToCart(productId, btn) {
  const user = Auth.currentUser();
  const product = DATTADAS_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (Cart.hasProduct(productId)) {
    UI.openDrawer('cart-drawer');
    return;
  }

  if (Cart.add(productId)) {
    if (btn) {
      btn.textContent = '✓ कार्टमध्ये आहे';
      btn.classList.add('in-cart');
    }
    UI.updateCartBadges();
    Toast.success(`"${product.titleMarathi}" कार्टमध्ये जोडले!`);
    UI.openDrawer('cart-drawer');
  }
}

function handleWishlist(productId, btn) {
  const product = DATTADAS_PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const added = Wishlist.toggle(productId);
  if (btn) {
    btn.classList.toggle('active', added);
    btn.querySelector('svg').setAttribute('fill', added ? 'currentColor' : 'none');
  }
  UI.updateWishlistBadges();
  Toast.info(added ? `"${product.titleMarathi}" आवडीमध्ये जोडले!` : 'आवडीमधून काढले');
}

function handleBuyNow(productId) {
  Cart.clear();
  Cart.add(productId);
  UI.updateCartBadges();
  window.location.href = 'checkout.html';
}

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Page loader
  const loader = document.getElementById('page-loader');
  if (loader) {
    setTimeout(() => loader.classList.add('loaded'), 1800);
  }

  // Scroll animations
  Animate.init();

  // Update badges
  UI.updateCartBadges();
  UI.updateWishlistBadges();

  // Scroll to top button
  const scrollBtn = document.getElementById('scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Header hide on scroll down
  let lastScrollY = window.scrollY;
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      const currentY = window.scrollY;
      if (currentY > 100 && currentY > lastScrollY) {
        header.classList.add('header-hidden');
      } else {
        header.classList.remove('header-hidden');
      }
      lastScrollY = currentY;
    }, { passive: true });
  }

  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) UI.closeAllModals();
    });
  });

  // Keyboard escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') UI.closeAllModals();
  });

  // Store updates
  document.addEventListener('storeUpdate', ({ detail: { key } }) => {
    if (key === 'cart') UI.updateCartBadges();
    if (key === 'wishlist') UI.updateWishlistBadges();
  });
});

// Expose globals
window.DATTADAS_PRODUCTS = DATTADAS_PRODUCTS;
window.DATTADAS_CATEGORIES = DATTADAS_CATEGORIES;
window.Store = Store;
window.Auth = Auth;
window.Cart = Cart;
window.Wishlist = Wishlist;
window.Orders = Orders;
window.Downloads = Downloads;
window.Coupons = Coupons;
window.Toast = Toast;
window.Price = Price;
window.UI = UI;
window.handleAddToCart = handleAddToCart;
window.handleWishlist = handleWishlist;
window.handleBuyNow = handleBuyNow;
