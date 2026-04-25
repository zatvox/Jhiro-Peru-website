/* ============================================================
   products.js — Embedded product data + rendering/filtering
   To add/edit products: modify the PRODUCTS array below.
   ============================================================ */

const PRODUCTS = [
  {
    id: "poly-dty-150d",
    name: "Polyester DTY 150D/48F",
    description: "Fully drawn textured polyester yarn with excellent elongation and bulk. Available in bright, semi-dull, and full-dull lusters. Ideal for sportswear, activewear, upholstery, and industrial fabrics. Offers outstanding abrasion resistance, dimensional stability, and consistent dyeability. Meets high-performance standards for demanding textile applications.",
    thumbnail: "assets/generated/poly-dty.svg",
    url: "contact.html",
    date: "In stock",
    moq: "500 kg per color",
    tags: ["polyester", "DTY", "sportswear", "industrial", "high-tenacity"]
  },
  {
    id: "poly-fdy-75d",
    name: "Polyester FDY 75D/36F",
    description: "Fully drawn yarn (FDY) with smooth surface and high uniformity. Perfectly suited for weaving and warp knitting applications, lingerie, lining fabrics, and technical textiles. Offers excellent luster control options (bright / semi-dull), strong tenacity, and compatibility with standard disperse dyeing processes. Available in raw white and pre-dyed options.",
    thumbnail: "assets/generated/poly-dty.svg",
    url: "contact.html",
    date: "In stock",
    moq: "300 kg per color",
    tags: ["polyester", "FDY", "weaving", "knitting", "lining"]
  },
  {
    id: "spandex-20d",
    name: "Spandex Bare Yarn 20D",
    description: "High-performance spandex (elastane) bare yarn offering superior elasticity and recovery. Designed for direct incorporation into stretch fabrics: swimwear, activewear, hosiery, and medical compression garments. Resistant to chlorine, sweat, and body oils. Maintains elongation properties through repeated laundering cycles.",
    thumbnail: "assets/generated/spandex-yarn.svg",
    url: "contact.html",
    date: "In stock",
    moq: "200 kg",
    tags: ["spandex", "elastane", "stretch", "swimwear", "activewear"]
  },
  {
    id: "spandex-40d",
    name: "Spandex Covered Yarn 40D",
    description: "Single-covered spandex yarn (SCY) with polyester or nylon outer wrap. Combines the stretch and recovery of elastane with the surface properties of covering fiber. Ideal for denim, ponte knits, yoga wear, and technical apparel that demands comfort and shape retention over extended use.",
    thumbnail: "assets/generated/spandex-yarn.svg",
    url: "contact.html",
    date: "In stock",
    moq: "300 kg",
    tags: ["spandex", "covered", "SCY", "denim", "yoga", "stretch"]
  },
  {
    id: "cotton-ring-30s",
    name: "Combed Cotton Ring Spun 30/1",
    description: "Premium combed ring-spun cotton yarn, 30 English count. Combing removes short fibers and impurities to produce a cleaner, stronger, and smoother yarn ideal for fine knitted fabrics, T-shirts, and high-quality woven shirting. Consistent twist, low imperfections, and excellent dyeability for vibrant and uniform color results.",
    thumbnail: "assets/generated/cotton-yarn.svg",
    url: "contact.html",
    date: "In stock",
    moq: "1,000 kg",
    tags: ["cotton", "ring-spun", "combed", "knitting", "shirting", "natural"]
  },
  {
    id: "cotton-oe-10s",
    name: "Open-End Cotton OE 10/1",
    description: "Open-end (rotor) spun cotton yarn, count 10s. Ideal for denim, heavy-weight knitwear, workwear, and household textiles such as toweling and canvas. More economical than ring-spun, with high production consistency. Available in ecru (natural) and white. Sourced from Oeko-Tex certified cotton suppliers.",
    thumbnail: "assets/generated/cotton-yarn.svg",
    url: "contact.html",
    date: "In stock",
    moq: "2,000 kg",
    tags: ["cotton", "open-end", "OE", "denim", "toweling", "Oeko-Tex"]
  },
  {
    id: "spun-poly-30s",
    name: "Polyester Spun Yarn 30/1",
    description: "Staple spun polyester yarn offering the aesthetics of natural fiber with the performance of synthetic. Used in flat-knit and circular-knit fabrics, workwear, and blended shirting. Excellent pill resistance, color fastness, and shrinkage stability. Available in white for dyeing and in a range of fashion colors for direct use.",
    thumbnail: "assets/generated/spun-yarn.svg",
    url: "contact.html",
    date: "In stock",
    moq: "500 kg",
    tags: ["polyester", "spun", "knitting", "workwear", "pill-resistant"]
  },
  {
    id: "recycled-poly-150d",
    name: "Recycled Polyester rDTY 150D",
    description: "GRS-certified recycled polyester DTY produced from post-consumer PET bottles. Equivalent performance to virgin polyester with significantly reduced carbon footprint. Supports brand sustainability commitments. Full traceability documentation provided. Suitable for all standard polyester knitting and weaving applications including outerwear, sportswear, and technical textiles.",
    thumbnail: "assets/generated/recycled-poly.svg",
    url: "contact.html",
    date: "In stock",
    moq: "500 kg",
    tags: ["recycled", "polyester", "GRS", "sustainable", "eco-friendly", "rPET"]
  },
  {
    id: "nylon-6-70d",
    name: "Nylon 6 FDY 70D/24F",
    description: "Nylon 6 fully drawn yarn with superior softness, sheen, and strength. Preferred in hosiery, swimwear, lingerie, and high-performance sportswear where smooth handle and excellent moisture management are required. Exceptional abrasion resistance, dye uptake with acid dyes, and compatibility with spandex for stretch fabric applications.",
    thumbnail: "assets/generated/nylon-yarn.svg",
    url: "contact.html",
    date: "In stock",
    moq: "300 kg",
    tags: ["nylon", "nylon-6", "FDY", "hosiery", "swimwear", "lingerie"]
  },
  {
    id: "poly-cotton-blend",
    name: "Poly/Cotton Blend Yarn 65/35 — 30/1",
    description: "Classic 65% polyester / 35% cotton ring-spun blend. Combines the comfort and breathability of cotton with the durability and easy-care properties of polyester. Widely used in uniform shirts, workwear, bed linen, and mass-market knitwear. Consistent quality, moderate price point, and broad availability in white and yarn-dyed options.",
    thumbnail: "assets/generated/spun-yarn.svg",
    url: "contact.html",
    date: "In stock",
    moq: "1,000 kg",
    tags: ["blend", "polyester", "cotton", "PC-blend", "workwear", "uniform"]
  }
];

/* ─── Render & Filter Logic ──────────────────────────────── */

function getAllTags() {
  const tagSet = new Set();
  PRODUCTS.forEach(p => p.tags.forEach(t => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

function renderFilterTags(activeTag, onSelect) {
  const wrap = document.getElementById('filter-tags');
  if (!wrap) return;
  const all = ['all', ...getAllTags()];
  wrap.innerHTML = all.map(tag => `
    <button class="filter-tag${(activeTag === tag || (!activeTag && tag === 'all')) ? ' active' : ''}" data-tag="${tag}">
      ${tag === 'all' ? 'All Products' : tag}
    </button>
  `).join('');
  wrap.querySelectorAll('.filter-tag').forEach(btn => {
    btn.addEventListener('click', () => onSelect(btn.dataset.tag === 'all' ? '' : btn.dataset.tag));
  });
}

function renderProducts(products) {
  const list = document.getElementById('products-list');
  if (!list) return;
  if (products.length === 0) {
    list.innerHTML = `
      <div class="no-results">
        <h3>No products found</h3>
        <p>Try adjusting your search or filter criteria.</p>
      </div>`;
    return;
  }
  list.innerHTML = products.map((p, i) => `
    <article class="product-card fade-in" style="animation-delay:${i * 0.07}s">
      <div class="product-thumb">
        <img src="${p.thumbnail}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-body">
        <div class="product-meta">
          <span class="product-status">${p.date}</span>
          <span class="product-moq">MOQ: <strong>${p.moq}</strong></span>
        </div>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="product-tags">
          ${p.tags.map(t => `<span class="tag" data-tag="${t}">${t}</span>`).join('')}
        </div>
        <div class="product-footer">
          <a href="${p.url}" class="btn btn-primary">Request Quote →</a>
          <span style="font-size:0.75rem;color:var(--color-text-dim);font-family:var(--font-label);letter-spacing:0.08em;">${p.id.toUpperCase()}</span>
        </div>
      </div>
    </article>
  `).join('');

  // Animate on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.05 });
  list.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Tag click to filter
  list.querySelectorAll('.tag').forEach(t => {
    t.addEventListener('click', () => {
      if (window.setProductFilter) window.setProductFilter(t.dataset.tag);
    });
  });
}

function filterProducts(query, tag) {
  const q = query.toLowerCase().trim();
  return PRODUCTS.filter(p => {
    const matchesTag = !tag || p.tags.includes(tag);
    const matchesQuery = !q || p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q));
    return matchesTag && matchesQuery;
  });
}

function initProducts() {
  let activeTag = '';
  let activeQuery = '';

  function update() {
    renderFilterTags(activeTag, (tag) => {
      activeTag = tag;
      update();
    });
    renderProducts(filterProducts(activeQuery, activeTag));
  }

  window.setProductFilter = (tag) => {
    activeTag = tag;
    update();
  };

  const searchInput = document.getElementById('product-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      activeQuery = searchInput.value;
      update();
    });
  }

  update();
}

document.addEventListener('DOMContentLoaded', initProducts);
