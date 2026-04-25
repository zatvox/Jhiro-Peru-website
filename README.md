# JHIRO — Textile Raw Material Importer Website

A fully static, production-ready website for JHIRO, a textile raw material importer.  
**No build step required.** Open `index.html` directly or deploy to GitHub Pages.

---

## 🚀 Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `jhiro-website`).
2. Upload all files from this ZIP (preserving the folder structure).
3. Go to **Settings → Pages**.
4. Under **Source**, select `main` branch and `/ (root)`.
5. Click **Save**. Your site will be live at `https://yourusername.github.io/jhiro-website/`.

---

## 🖼️ How to Replace the Logo

The logo file is at `assets/images/logo.png` (and `logo-large.png`).

To replace it:
1. Prepare your new logo as a **PNG with transparent background**.
2. Replace `assets/images/logo.png` (header) and `assets/images/logo-large.png` (about page).
3. **Regenerate favicons** using: https://realfavicongenerator.net
   - Upload your logo PNG.
   - Download the generated package.
   - Replace all files in `assets/images/` (favicon-*.png, apple-touch-icon.png, android-chrome-*.png).
   - Replace `favicon.ico` in the root.
   - Replace `assets/images/og-image.png` with your branded 1200×630 image.

The logo uses `filter: invert(1)` in dark mode (so a black logo appears white). If your new logo has colors, remove the CSS filter from `.nav__logo img` and `.footer__brand img` in `assets/css/styles.css`.

---

## 🧵 How to Update Product Data

All product data is embedded in `assets/js/products.js` — **no server or database needed**.

To add or edit products, open `products.js` and modify the `PRODUCTS` array:

```javascript
const PRODUCTS = [
  {
    id: "unique-id",               // URL-safe identifier (no spaces)
    name: "Product Display Name",
    description: "Full description including technical specs and applications.",
    thumbnail: "assets/generated/your-image.svg",  // path to image
    url: "contact.html",           // link for the "Request Quote" button
    date: "In stock",              // availability / lead time
    moq: "500 kg",                 // Minimum Order Quantity
    tags: ["polyester", "DTY"]     // array of filterable tags
  },
  // ... more products
];
```

**Adding a thumbnail image:**
- Place your image in `assets/generated/` (SVG or PNG).
- Update the `thumbnail` field in the product entry.
- If no image, use an existing placeholder SVG.

---

## 📧 How to Configure the Contact Form

The form in `contact.html` supports two modes:

### Option A — Formspree (recommended for live sites)
1. Go to https://formspree.io and create a free account.
2. Create a new form and copy your endpoint URL (e.g. `https://formspree.io/f/xabc1234`).
3. In `contact.html`, find the `<form>` tag and change the `action` attribute:
   ```html
   <form action="https://formspree.io/f/xabc1234" method="POST" ...>
   ```
4. Remove `enctype="text/plain"` from the form tag.

### Option B — Mailto fallback (default)
The form currently uses `action="mailto:info@jhiro.com"`.  
Replace `info@jhiro.com` with your actual email address.  
This opens the user's email client — simpler but less reliable.

---

## 🎨 Customizing Colors & Fonts

All design tokens are CSS variables in `assets/css/styles.css`:

```css
:root {
  --color-bg:        #060d16;    /* Page background */
  --color-gold:      #c8a96e;    /* Accent / brand color */
  --color-blue:      #4a7fa5;    /* Secondary accent */
  --color-text:      #e2ddd6;    /* Body text */
  --font-display:    'Cormorant Garamond', serif;  /* Headings */
  --font-body:       'Barlow', sans-serif;         /* Body text */
}
```

---

## 📁 File Structure

```
/index.html          — Homepage (hero + products + why us)
/about.html          — About Us (mission, timeline, certifications)
/contact.html        — Contact form + FAQ accordion
/favicon.ico         — Browser favicon
/site.webmanifest    — PWA manifest
/assets/
  /css/styles.css    — All styles (CSS variables, responsive)
  /js/
    main.js          — Nav, theme toggle, scroll animations, FAQ
    products.js      — Product data + search/filter rendering
  /images/           — Logo + favicon variants
  /generated/        — Product thumbnail SVGs + hero background
/README.md           — This file
```

---

## ⚠️ Known Limitations

- **No backend:** The contact form requires Formspree or a similar service for email delivery.
- **Static product data:** Products must be edited directly in `products.js`.
- **Google Fonts:** Requires internet connection to load custom fonts. Falls back to system serif/sans-serif offline.
- **No CMS:** To add/remove products or pages, HTML and JS files must be edited manually.
