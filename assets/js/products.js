/* ============================================================
   products.js — Datos de productos incrustados + renderizado/filtrado
   Para añadir/editar productos: modifica el array PRODUCTOS a continuación.
   ============================================================ */

const PRODUCTOS = [
  {
    id: "poly-dty-150d",
    name: "Poliéster DTY 150D/48F",
    description: "Hilo de poliéster texturizado totalmente estirado (DTY) con excelente elongación y volumen. Disponible en brillos brillante, semi-mate y totalmente mate. Ideal para ropa deportiva, activewear, tapicería y tejidos industriales. Ofrece una resistencia a la abrasión extraordinaria, estabilidad dimensional y teñibilidad consistente. Cumple estándares de alto rendimiento para aplicaciones textiles exigentes.",
    thumbnail: "assets/generated/poly-dty.svg",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg por color",
    tags: ["poliéster", "DTY", "ropa deportiva", "industrial", "alta-tenacidad"]
  },
  {
    id: "poly-fdy-75d",
    name: "Poliéster FDY 75D/36F",
    description: "Hilo totalmente estirado (FDY) con superficie lisa y alta uniformidad. Perfectamente adecuado para aplicaciones de tejido plano y de urdimbre, lencería, telas para forros y textiles técnicos. Ofrece excelentes opciones de control de brillo (brillante / semi-mate), alta tenacidad y compatibilidad con procesos de teñido con dispersos estándar. Disponible en blanco crudo y opciones pre-teñidas.",
    thumbnail: "assets/generated/poly-dty.svg",
    url: "contact.html",
    date: "En stock",
    moq: "300 kg por color",
    tags: ["poliéster", "FDY", "tejido plano", "tejido de punto", "forros"]
  },
  {
    id: "spandex-20d",
    name: "Spandex (Elastano) desnudo 20D",
    description: "Hilo de spandex (elastano) desnudo de alto rendimiento que ofrece elasticidad y recuperación superiores. Diseñado para incorporación directa en telas elásticas: trajes de baño, activewear, calcetería y prendas de compresión médica. Resistente al cloro, sudor y aceites corporales. Mantiene las propiedades de elongación a través de ciclos repetidos de lavado.",
    thumbnail: "assets/generated/spandex-yarn.svg",
    url: "contact.html",
    date: "En stock",
    moq: "200 kg",
    tags: ["spandex", "elastano", "elástico", "trajes de baño", "activewear"]
  },
  {
    id: "spandex-40d",
    name: "Spandex (Elastano) cubierto 40D",
    description: "Hilo de spandex cubierto simple (SCY) con envoltura exterior de poliéster o nailon. Combina la elasticidad y recuperación del elastano con las propiedades superficiales de la fibra de cubierta. Ideal para mezclilla, ponte knits, ropa de yoga y prendas técnicas que requieren comodidad y retención de forma durante un uso prolongado.",
    thumbnail: "assets/generated/spandex-yarn.svg",
    url: "contact.html",
    date: "En stock",
    moq: "300 kg",
    tags: ["spandex", "cubierto", "SCY", "mezclilla", "yoga", "elástico"]
  },
  {
    id: "cotton-ring-30s",
    name: "Algodón peinado anillado 30/1",
    description: "Hilo de algodón peinado de anillo de alta calidad, título 30 inglés. El peinado elimina fibras cortas e impurezas para producir un hilo más limpio, fuerte y suave, ideal para tejidos de punto finos, camisetas y camisería de alta calidad. Torción consistente, baja presencia de imperfecciones y excelente teñibilidad para resultados de color vibrantes y uniformes.",
    thumbnail: "assets/generated/cotton-yarn.svg",
    url: "contact.html",
    date: "En stock",
    moq: "1,000 kg",
    tags: ["algodón", "anillado", "peinado", "tejido de punto", "camisería", "natural"]
  },
  {
    id: "cotton-oe-10s",
    name: "Algodón Open-End (rotor) OE 10/1",
    description: "Hilo de algodón hilado por open-end (rotor), título 10s. Ideal para mezclilla, prendas de punto de peso pesado, ropa de trabajo y textiles para el hogar como toallas y lonas. Más económico que el anillado, con alta consistencia de producción. Disponible en crudo (natural) y blanco. Procedente de proveedores de algodón con certificación Oeko-Tex.",
    thumbnail: "assets/generated/cotton-yarn.svg",
    url: "contact.html",
    date: "En stock",
    moq: "2,000 kg",
    tags: ["algodón", "open-end", "OE", "mezclilla", "toallas", "Oeko-Tex"]
  },
  {
    id: "spun-poly-30s",
    name: "Hilo de poliéster hilado 30/1",
    description: "Hilo de poliéster de fibra corta (spun) que ofrece la estética de la fibra natural con el rendimiento de la sintética. Se utiliza en tejidos de punto plano y circular, ropa de trabajo y camisería de mezcla. Excelente resistencia a la formación de pelusas, solidez del color y estabilidad al encogimiento. Disponible en blanco para teñir y en una gama de colores de moda para uso directo.",
    thumbnail: "assets/generated/spun-yarn.svg",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    tags: ["poliéster", "hilado", "tejido de punto", "ropa de trabajo", "anti-pilling"]
  },
  {
    id: "recycled-poly-150d",
    name: "Poliéster reciclado rDTY 150D",
    description: "Poliéster DTY reciclado con certificación GRS, producido a partir de botellas PET post-consumo. Rendimiento equivalente al poliéster virgen con una huella de carbono significativamente reducida. Apoya los compromisos de sostenibilidad de la marca. Se proporciona documentación de trazabilidad completa. Adecuado para todas las aplicaciones estándar de tejido de punto y plano con poliéster, incluyendo ropa de abrigo, deportiva y textiles técnicos.",
    thumbnail: "assets/generated/recycled-poly.svg",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    tags: ["reciclado", "poliéster", "GRS", "sostenible", "eco-amigable", "rPET"]
  },
  {
    id: "nylon-6-70d",
    name: "Nailon 6 FDY 70D/24F",
    description: "Hilo de nailon 6 totalmente estirado con suavidad, brillo y resistencia superiores. Preferido en calcetería, trajes de baño, lencería y ropa deportiva de alto rendimiento donde se requiere un tacto suave y una excelente gestión de la humedad. Excepcional resistencia a la abrasión, absorción de tinte con colorantes ácidos y compatibilidad con spandex para aplicaciones de telas elásticas.",
    thumbnail: "assets/generated/nylon-yarn.svg",
    url: "contact.html",
    date: "En stock",
    moq: "300 kg",
    tags: ["nailon", "nylon-6", "FDY", "calcetería", "trajes de baño", "lencería"]
  },
  {
    id: "poly-cotton-blend",
    name: "Mezcla Poliéster/Algodón 65/35 — 30/1",
    description: "Mezcla clásica 65% poliéster / 35% algodón hilada anillada. Combina la comodidad y transpirabilidad del algodón con la durabilidad y facilidad de cuidado del poliéster. Ampliamente utilizado en camisas de uniforme, ropa de trabajo, ropa de cama y prendas de punto de gran consumo. Calidad consistente, precio moderado y amplia disponibilidad en opciones blancas y teñidas en masa.",
    thumbnail: "assets/generated/spun-yarn.svg",
    url: "contact.html",
    date: "En stock",
    moq: "1,000 kg",
    tags: ["mezcla", "poliéster", "algodón", "mezcla PC", "ropa de trabajo", "uniforme"]
  }
];

/* ─── Lógica de renderizado y filtrado ──────────────────────────────── */

function obtenerTodosLosTags() {
  const tagSet = new Set();
  PRODUCTOS.forEach(p => p.tags.forEach(t => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

function renderizarTagsFiltro(tagActivo, alSeleccionar) {
  const contenedor = document.getElementById('filter-tags');
  if (!contenedor) return;
  const todos = ['todos', ...obtenerTodosLosTags()];
  contenedor.innerHTML = todos.map(tag => `
    <button class="filter-tag${(tagActivo === tag || (!tagActivo && tag === 'todos')) ? ' active' : ''}" data-tag="${tag}">
      ${tag === 'todos' ? 'Todos los productos' : tag}
    </button>
  `).join('');
  contenedor.querySelectorAll('.filter-tag').forEach(btn => {
    btn.addEventListener('click', () => alSeleccionar(btn.dataset.tag === 'todos' ? '' : btn.dataset.tag));
  });
}

function renderizarProductos(productos) {
  const lista = document.getElementById('products-list');
  if (!lista) return;
  if (productos.length === 0) {
    lista.innerHTML = `
      <div class="no-results">
        <h3>No se encontraron productos</h3>
        <p>Intente ajustar su búsqueda o los filtros.</p>
      </div>`;
    return;
  }
  lista.innerHTML = productos.map((p, i) => `
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
          <a href="${p.url}" class="btn btn-primary">Solicitar cotización →</a>
          <span style="font-size:0.75rem;color:var(--color-text-dim);font-family:var(--font-label);letter-spacing:0.08em;">${p.id.toUpperCase()}</span>
        </div>
      </div>
    </article>
  `).join('');

  // Animación al desplazarse (scroll)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.05 });
  lista.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Clic en etiqueta para filtrar
  lista.querySelectorAll('.tag').forEach(t => {
    t.addEventListener('click', () => {
      if (window.setProductFilter) window.setProductFilter(t.dataset.tag);
    });
  });
}

function filtrarProductos(consulta, tag) {
  const q = consulta.toLowerCase().trim();
  return PRODUCTOS.filter(p => {
    const coincideTag = !tag || p.tags.includes(tag);
    const coincideConsulta = !q || p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q));
    return coincideTag && coincideConsulta;
  });
}

function initProducts() {
  let tagActivo = '';
  let consultaActiva = '';

  function actualizar() {
    renderizarTagsFiltro(tagActivo, (tag) => {
      tagActivo = tag;
      actualizar();
    });
    renderizarProductos(filtrarProductos(consultaActiva, tagActivo));
  }

  window.setProductFilter = (tag) => {
    tagActivo = tag;
    actualizar();
  };

  const campoBusqueda = document.getElementById('product-search');
  if (campoBusqueda) {
    campoBusqueda.addEventListener('input', () => {
      consultaActiva = campoBusqueda.value;
      actualizar();
    });
  }

  actualizar();
}

document.addEventListener('DOMContentLoaded', initProducts);
