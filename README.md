# DATTADAS (दत्तदास) — Premium Marathi Spiritual E-book Store
> **"भक्ती, ज्ञान आणि संस्कारांचा डिजिटल ठेवा."**  
> अधिकृत वेबसाइट: [https://dattadas.in](https://dattadas.in)

---

## 🌟 प्रकल्प परिचय (Project Overview)
दत्तदास हे मराठी भाषेतील अस्सल अध्यात्मिक, धार्मिक आणि संत साहित्याचे अत्याधुनिक डिजिटल ई-कॉमर्स व ई-बुक दालन आहे.

### मुख्य वैशिष्ट्ये:
- 🌸 **संपूर्ण मराठी इंटरफेस (100% Authentic Marathi UI):** शुद्ध देवनागरी फॉन्ट, व्याकरणशुद्ध मराठी मजकूर.
- 🎨 **प्रीमियम भारतीय अध्यात्मिक डिझाईन सिस्टीम:** रॉयल मरून (`#651F2B`), ॲन्टिक गोल्ड (`#C49A46`), आयव्हरी क्रीम (`#FFF8EC`) आणि भगवा (`#D97827`).
- ⚡ **विशेष किंमत इंजिन:** ₹१,२९९ ऐवजी फक्त ₹६९९ (₹६०० थेट बचत, ४६% विशेष सवलत).
- 🛒 **पूर्ण ई-कॉमर्स प्रवाह:** कार्ट, चेकआउट, कूपन्स (`DATTA100`, `WELCOME10`), ऑर्डर व्यवस्थापन.
- 💳 **Razorpay पेमेंट एकत्रीकरण:** UPI (GPay/PhonePe), कार्ड्स, नेटबँकिंग, सँडबॉक्स टेस्ट मोड.
- 📱 **माझे खाते व डिजिटल लायब्ररी:** ग्राहक डॅशबोर्ड, तात्काळ PDF डाऊनलोड्स, ऑर्डर्स आणि आवडीची पुस्तके (Wishlist).
- 🛠️ **स्वतंत्र प्रशासक डॅशबोर्ड (Admin Panel):** ई-बुक्स CRUD, ऑर्डर्स, ग्राहक यादी, विक्री विश्लेषण चार्ट्स आणि सिस्टीम सेटिंग्ज.

---

## 🚀 स्थानिक सर्व्हर सुरू करण्याची पद्धत (Local Development)

हा प्रकल्प थेट Python च्या हाय-परफॉर्मन्स HTTP सर्व्हरवर स्थानिकरीत्या चालतो:

```bash
cd /Users/krishnajawle/.gemini/antigravity/scratch/dattadas-website
python3 -m http.server 3000
```

ब्राउझरमध्ये उघडा:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📂 वेबसाइट पृष्ठे (Pages Directory)

### १. सार्वजनिक दालन (Public Pages):
- **मुख्यपृष्ठ (Home):** `index.html`
- **सर्व ई-बुक्स (Catalog):** `books.html`
- **पुस्तक तपशील (Product Details):** `product.html?id=P001`
- **सुरक्षित चेकआउट (Checkout):** `checkout.html`
- **पेमेंट निकाल (Payment Result):** `payment-result.html`
- **आमच्याविषयी (About Us):** `pages/about.html`
- **संपर्क (Contact Us):** `pages/contact.html`
- **वारंवार विचारले जाणारे प्रश्न (FAQ):** `pages/faq.html`
- **गोपनीयता धोरण (Privacy):** `pages/privacy.html`
- **नियम व अटी (Terms):** `pages/terms.html`
- **परतावा धोरण (Refund):** `pages/refund.html`
- **डिलिव्हरी धोरण (Delivery):** `pages/delivery.html`

### २. ग्राहक खाते (Customer Portal):
- **डॅशबोर्ड (Dashboard):** `pages/dashboard.html`
- **माझे ई-बुक्स (My Ebooks):** `pages/my-books.html`
- **माझे ऑर्डर्स (My Orders):** `pages/orders.html`
- **माझी आवड (Wishlist):** `pages/wishlist.html`
- **माझी प्रोफाईल (Profile):** `pages/profile.html`

### ३. प्रशासक नियंत्रण कक्ष (Admin Portal):
- **प्रशासक लॉगिन:** `pages/admin/login.html`
  - *ईमेल:* `admin@dattadas.in`
  - *पासवर्ड:* `DattaAdmin@2024`
- **डॅशबोर्ड:** `pages/admin/index.html`
- **ई-बुक्स व्यवस्थापन:** `pages/admin/products.html`
- **ऑर्डर्स व्यवस्थापन:** `pages/admin/orders.html`
- **ग्राहक यादी:** `pages/admin/customers.html`
- **विक्री आकडेवारी:** `pages/admin/analytics.html`
- **सेटिंग्ज:** `pages/admin/settings.html`
