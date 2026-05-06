/* ============================================================
   products.js — Datos de productos incrustados + renderizado/filtrado
   Para añadir/editar productos: modifica el array PRODUCTOS a continuación.
   ============================================================ */
// ============================================================
// PRODUCTOS — Stock al 30/04/2026
// Fuente: Lista de stock JHIRO / BENJI BILLION E.I.R.
// ============================================================

const PRODUCTOS = [

  // ──────────────────────────────────────────────────────────
  // HILADOS SPUN (ALGODÓN / POLYCOTTON)
  // ──────────────────────────────────────────────────────────

  {
    id: "spun-30-1-crudo",
    name: "HILADO SPUN 30/1 CRUDO",
    description: "Hilado spun cardado de mezcla poliéster/algodón, título 30/1, color crudo (ecru). Proceso de hilatura por anillo (ring spun) con alta uniformidad de torsión y baja presencia de imperfecciones. Resistencia a la tracción consistente lote a lote. Apto para tejeduría circular de alta velocidad.",
    aplicaciones: "Jersey liso, tela Dry Fit, interlock, piqué para polos deportivos y casuales, tela para sublimación, uniformes escolares y corporativos.",
    thumbnail: "assets/generated/spun-yarn.svg",
    url: "contact.html",
    date: "En stock",
    moq: "1,000 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    lote_referencia: "JWBS2510-T30",
    tags: ["spun", "30/1", "crudo", "ring-spun", "jersey", "dry-fit", "interlock", "sublimación", "poliéster-algodón"]
  },

  {
    id: "spun-10-1-crudo",
    name: "HILADO SPUN 10/1 CRUDO",
    description: "Hilado spun de título grueso 10/1, color crudo. Producido por hilatura open-end o anillo según partida. Alta resistencia a la rotura, ideal para tejidos de punto pesados y telas con estructura robusta. Excelente estabilidad dimensional tras el teñido.",
    aplicaciones: "Tela Suplex pesada, felpa, polar, franela de punto, tela para shorts y pants deportivos gruesos, ropa de trabajo, tela para corte y confección de prendas de alto peso.",
    thumbnail: "assets/generated/spun-yarn.svg",
    url: "contact.html",
    date: "En stock",
    moq: "2,000 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    lote_referencia: "JWXY2601",
    tags: ["spun", "10/1", "crudo", "grueso", "felpa", "polar", "suplex", "pants", "poliéster-algodón"]
  },

  {
    id: "spun-20-1-crudo",
    name: "Hilado Spun 20/1 Crudo",
    description: "Hilado spun de título medio 20/1, color crudo. Equilibrio óptimo entre resistencia y suavidad superficial. Alta regularidad de masa y excelente comportamiento en máquinas circulares de gran diámetro. Apto para teñido reactivo y disperso.",
    aplicaciones: "Jersey deportivo, tela Dry Fit media, interlock deportivo, tela Win, tela para uniformes, camisetas institucionales, tela rashel y tafetán deportivo.",
    thumbnail: "assets/generated/spun-yarn.svg",
    url: "contact.html",
    date: "En stock",
    moq: "1,000 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    lote_referencia: "JWBS2510-T20",
    tags: ["spun", "20/1", "crudo", "jersey", "dry-fit", "win", "uniformes", "poliéster-algodón"]
  },

  {
    id: "spun-20-1-black",
    name: "Hilado Spun 20/1 Black",
    description: "Hilado spun título 20/1 teñido en masa color negro intenso (black). Tintura solidificada durante el proceso de hilatura, garantizando solidez al lavado y a la luz muy superiores al teñido convencional de tela. Evita el reproceso de teñido en planta del cliente.",
    aplicaciones: "Jersey negro liso, interlock negro, tela para leggins negros, shorts deportivos, uniformes negros para equipos, tela Suplex base negra, ropa de trabajo oscura.",
    thumbnail: "assets/generated/spun-yarn.svg",
    url: "contact.html",
    date: "En stock",
    moq: "1,000 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    lote_referencia: "JWHY2510-T20",
    tags: ["spun", "20/1", "negro", "black", "teñido-masa", "leggins", "uniformes", "suplex", "poliéster-algodón"]
  },

  {
    id: "spun-30-1-black",
    name: "Hilado Spun 30/1 Black",
    description: "Hilado spun fino 30/1 teñido en masa color negro. Mayor finura que el 20/1, ideal para tejidos de punto con mejor caída y suavidad. Solidez al lavado clase 4-5. Resistencia a la luz clase 5-6. Sin metamerismo en diferentes fuentes de luz.",
    aplicaciones: "Tela Dry Fit negra para deportes, jersey fino negro, interlock para camisetas deportivas negras, tela para sublimación sobre base oscura (DTF), uniformes de alto rendimiento.",
    thumbnail: "assets/generated/spun-yarn.svg",
    url: "contact.html",
    date: "En stock",
    moq: "1,000 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    lote_referencia: "JWHY2510-T30",
    tags: ["spun", "30/1", "negro", "black", "teñido-masa", "dry-fit", "jersey-fino", "DTF", "poliéster-algodón"]
  },

  // ============================================================
// PRODUCTOS — Hilado Spun 100% Poliéster — Colores
// Títulos: 10s/1 · 20s/1 · 30s/1
// ============================================================
  // TÍTULO 10s/1 — 100% POLIÉSTER
  // ══════════════════════════════════════════════════════════

  {
    id: "spun-poly-10-1-blanco-optico",
    name: "Hilado Spun 10/1 — Blanco Óptico (2#)",
    description: "Hilado spun 100% poliéster, título grueso 10/1, color blanco óptico (N° 2#). Alto nivel de blancura con agente óptico fluorescente incorporado. Excelente base para sublimación y teñido posterior. Resistencia a la rotura consistente lote a lote. Apto para tejeduría circular de gran diámetro.",
    aplicaciones: "Tela polar blanca, felpa interior, pants y buzos deportivos, tela para sublimación full color, tela tipo scuba, ropa de trabajo, tela para cortinas de punto.",
    thumbnail: "assets/generated/spun-1-blanco-optico-2.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "2#",
    color_nombre: "Blanco Óptico",
    tags: ["spun", "poliéster", "10/1", "blanco-óptico", "polar", "felpa", "sublimación", "100%-poliéster"]
  },
  {
    id: "spun-poly-10-1-rojo",
    name: "Hilado Spun 10/1 — Rojo (20#)",
    description: "Hilado spun 100% poliéster, título 10/1, color rojo (N° 20#). Teñido por agotamiento con colorantes dispersos de alta solidez. Solidez al lavado 4-5, solidez a la luz 5-6. Sin metamerismo pronunciado. Ideal para prendas deportivas de color rojo vivo.",
    aplicaciones: "Tela polar roja, felpa interior de color, pants deportivos rojos, tela para uniformes de equipos deportivos, tela tipo scuba de color.",
    thumbnail: "assets/generated/spun-1-rojo-20.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "20#",
    color_nombre: "Rojo",
    tags: ["spun", "poliéster", "10/1", "rojo", "polar", "felpa", "uniformes", "100%-poliéster"]
  },
  {
    id: "spun-poly-10-1-rojo-2",
    name: "Hilado Spun 10/1 — Rojo (21#)",
    description: "Hilado spun 100% poliéster, título 10/1, color rojo 2 (N° 21#). Tono rojo con mayor presencia de magenta respecto al 20#. Coloración uniforme en toda la masa del cono. Alta solidez al lavado y al frote.",
    aplicaciones: "Tela polar rojo intenso, felpa de color, pants y buzos deportivos, tela para uniformes de alto impacto visual.",
    thumbnail: "assets/generated/spun-1-rojo-21.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "21#",
    color_nombre: "Rojo 2",
    tags: ["spun", "poliéster", "10/1", "rojo-2", "polar", "felpa", "uniformes", "100%-poliéster"]
  },
  {
    id: "spun-poly-10-1-naranja",
    name: "Hilado Spun 10/1 — Naranja (22#)",
    description: "Hilado spun 100% poliéster, título 10/1, color naranja (N° 22#). Tono naranja vivo de alta visibilidad, apto para prendas de seguridad y deportivas. Colorante disperso de alta temperatura con solidez superior.",
    aplicaciones: "Tela polar naranja, felpa de color, tela para ropa de seguridad y alta visibilidad, uniformes deportivos, pants de color.",
    thumbnail: "assets/generated/spun-1-naranja-22.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "22#",
    color_nombre: "Naranja",
    tags: ["spun", "poliéster", "10/1", "naranja", "alta-visibilidad", "polar", "seguridad", "100%-poliéster"]
  },
  {
    id: "spun-poly-10-1-azulino",
    name: "Hilado Spun 10/1 — Azulino (38#)",
    description: "Hilado spun 100% poliéster, título 10/1, color azulino (N° 38#). Tono azul claro celeste de alta demanda en el mercado deportivo peruano. Excelente reproducibilidad de tono entre lotes. Solidez al lavado 4-5.",
    aplicaciones: "Tela polar azul celeste, felpa de color, pants y buzos deportivos, tela para uniformes institucionales y escolares, tela tipo scuba celeste.",
    thumbnail: "assets/generated/spun-1-azulino-38.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "38#",
    color_nombre: "Azulino",
    tags: ["spun", "poliéster", "10/1", "azulino", "celeste", "polar", "uniformes", "100%-poliéster"]
  },
  {
    id: "spun-poly-10-1-verde",
    name: "Hilado Spun 10/1 — Verde (57#)",
    description: "Hilado spun 100% poliéster, título 10/1, color verde (N° 57#). Tono verde medio, equilibrado entre el lima y el botella. Alta solidez a la luz, sin amarillamiento por exposición UV. Muy solicitado para uniformes deportivos.",
    aplicaciones: "Tela polar verde, felpa de color, pants deportivos verdes, tela para uniformes de equipos de fútbol y básquet, tela para ropa de trabajo.",
    thumbnail: "assets/generated/spun-1-verde-57.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "57#",
    color_nombre: "Verde",
    tags: ["spun", "poliéster", "10/1", "verde", "polar", "uniformes", "fútbol", "100%-poliéster"]
  },

  // ══════════════════════════════════════════════════════════
  // TÍTULO 20s/1 — 100% POLIÉSTER
  // ══════════════════════════════════════════════════════════

  {
    id: "spun-poly-20-1-blanco-optico",
    name: "Hilado Spun 20/1 — Blanco Óptico (2#)",
    description: "Hilado spun 100% poliéster, título medio 20/1, color blanco óptico (N° 2#). Mayor finura que el 10/1, produce telas con mejor caída y suavidad superficial. Blancura óptica intensa para sublimación full color. Apto para tejeduría circular de alta velocidad.",
    aplicaciones: "Tela Dry Fit blanca, jersey deportivo, interlock para uniformes, tela Win blanca para sublimación, tela para polos y camisetas institucionales, tela birdseye.",
    thumbnail: "assets/generated/spun-1-blanco-optico-2.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "2#",
    color_nombre: "Blanco Óptico",
    tags: ["spun", "poliéster", "20/1", "blanco-óptico", "dry-fit", "jersey", "sublimación", "win", "100%-poliéster"]
  },
  {
    id: "spun-poly-20-1-rojo",
    name: "Hilado Spun 20/1 — Rojo (20#)",
    description: "Hilado spun 100% poliéster, título 20/1, color rojo (N° 20#). Solidez al lavado 4-5, solidez a la luz 5-6. Teñido homogéneo sin variación de tono dentro del cono. Ideal para producción de tela jerseys y telas deportivas de color sólido.",
    aplicaciones: "Tela Dry Fit roja, jersey deportivo de color, interlock rojo, tela para polos institucionales rojos, tela Win roja, uniformes de equipos.",
    thumbnail: "assets/generated/spun-1-rojo-20.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "20#",
    color_nombre: "Rojo",
    tags: ["spun", "poliéster", "20/1", "rojo", "dry-fit", "jersey", "uniformes", "100%-poliéster"]
  },
  {
    id: "spun-poly-20-1-rojo-2",
    name: "Hilado Spun 20/1 — Rojo 2 (21#)",
    description: "Hilado spun 100% poliéster, título 20/1, color rojo 2 (N° 21#). Tono con mayor saturación rojiza respecto al 20#. Reproducibilidad de tono garantizada entre partidas. Muy solicitado para confección de camisetas deportivas.",
    aplicaciones: "Tela Dry Fit rojo intenso, jersey de color, interlock para camisetas deportivas, tela para uniformes de alto impacto visual.",
    thumbnail: "assets/generated/spun-1-rojo-21.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "21#",
    color_nombre: "Rojo 2",
    tags: ["spun", "poliéster", "20/1", "rojo-2", "dry-fit", "jersey", "uniformes", "100%-poliéster"]
  },
  {
    id: "spun-poly-20-1-naranja",
    name: "Hilado Spun 20/1 — Naranja (22#)",
    description: "Hilado spun 100% poliéster, título 20/1, color naranja (N° 22#). Tono naranja vivo de alta visibilidad. Excelente solidez a la luz y al lavado. Amplia demanda en ropa deportiva y de seguridad industrial.",
    aplicaciones: "Tela Dry Fit naranja, jersey deportivo, tela para ropa de alta visibilidad, uniformes deportivos naranja, interlock para camisetas.",
    thumbnail: "assets/generated/spun-1-naranja-22.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "22#",
    color_nombre: "Naranja",
    tags: ["spun", "poliéster", "20/1", "naranja", "alta-visibilidad", "dry-fit", "seguridad", "100%-poliéster"]
  },
  {
    id: "spun-poly-20-1-morado-light",
    name: "Hilado Spun 20/1 — Morado Light (24#)",
    description: "Hilado spun 100% poliéster, título 20/1, color morado light (N° 24#). Tono lila-violeta suave de alta demanda en moda femenina deportiva. Colorante disperso estable con solidez al lavado 4 y a la luz 5.",
    aplicaciones: "Tela Dry Fit lila, jersey para ropa deportiva femenina, interlock de color pastel, tela para leggins y tops deportivos, ropa de yoga.",
    thumbnail: "assets/generated/spun-1-morado-light-24.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "24#",
    color_nombre: "Morado Light",
    tags: ["spun", "poliéster", "20/1", "morado", "lila", "dry-fit", "yoga", "femenino", "100%-poliéster"]
  },
  {
    id: "spun-poly-20-1-amarillo-1",
    name: "Hilado Spun 20/1 — Amarillo 1 (31#)",
    description: "Hilado spun 100% poliéster, título 20/1, color amarillo 1 (N° 31#). Tono amarillo dorado-cálido. Alta solidez a la luz para evitar desteñido por exposición solar, característica crítica en ropa deportiva outdoor.",
    aplicaciones: "Tela Dry Fit amarilla, jersey deportivo, tela para uniformes de equipos, interlock amarillo, tela para ropa de alta visibilidad diurna.",
    thumbnail: "assets/generated/spun-1-amarillo-31.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "31#",
    color_nombre: "Amarillo 1",
    tags: ["spun", "poliéster", "20/1", "amarillo", "dry-fit", "uniformes", "alta-visibilidad", "100%-poliéster"]
  },
  {
    id: "spun-poly-20-1-amarillo-2",
    name: "Hilado Spun 20/1 — Amarillo (32#)",
    description: "Hilado spun 100% poliéster, título 20/1, color amarillo 2 (N° 32#). Tono amarillo más frío y brillante que el 31#, con matiz verdoso. Muy solicitado para uniformes escolares y deportivos de alta visibilidad.",
    aplicaciones: "Tela Dry Fit amarillo limón, jersey deportivo escolar, interlock para uniformes, tela para chalecos de seguridad de punto, tela para camisetas de equipos.",
    thumbnail: "assets/generated/spun-1-amarillo-32.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "32#",
    color_nombre: "Amarillo 2",
    tags: ["spun", "poliéster", "20/1", "amarillo-2", "dry-fit", "escolar", "uniformes", "100%-poliéster"]
  },
  {
    id: "spun-poly-20-1-azulino",
    name: "Hilado Spun 20/1 — Azulino (38#)",
    description: "Hilado spun 100% poliéster, título 20/1, color azulino (N° 38#). Tono celeste de alta demanda en uniformes escolares, institucionales y deportivos de Perú. Excelente reproducibilidad de tono entre partidas.",
    aplicaciones: "Tela Dry Fit celeste, jersey para uniformes escolares, interlock deportivo, tela Win azulino, tela para polos institucionales, tela para equipos deportivos.",
    thumbnail: "assets/generated/spun-1-azulino-38.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "38#",
    color_nombre: "Azulino",
    tags: ["spun", "poliéster", "20/1", "azulino", "celeste", "dry-fit", "escolar", "uniformes", "100%-poliéster"]
  },
  {
    id: "spun-poly-20-1-azul-tibetano",
    name: "Hilado Spun 20/1 — Azul Tibetano (44#)",
    description: "Hilado spun 100% poliéster, título 20/1, color azul tibetano (N° 44#). Tono azul medio profundo con matiz violáceo. Muy apreciado en ropa deportiva y casual de temporada. Solidez al lavado y a la luz clase 4-5.",
    aplicaciones: "Tela Dry Fit azul profundo, jersey deportivo, interlock para camisetas, tela para uniformes formales deportivos, tela para pants de color.",
    thumbnail: "assets/generated/spun-1-azul-tibetano-44.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "44#",
    color_nombre: "Azul Tibetano",
    tags: ["spun", "poliéster", "20/1", "azul-tibetano", "dry-fit", "uniformes", "deportivo", "100%-poliéster"]
  },
  {
    id: "spun-poly-20-1-azul-marino",
    name: "Hilado Spun 20/1 — Azul Marino (45#)",
    description: "Hilado spun 100% poliéster, título 20/1, color azul marino (N° 45#). Uno de los colores de mayor rotación en el mercado peruano para uniformes. Tono oscuro con excelente profundidad de color y solidez superior. Teñido con colorante disperso de alta temperatura.",
    aplicaciones: "Tela Dry Fit azul marino, jersey para uniformes corporativos y escolares, interlock marino, tela para polos y camisetas institucionales, tela para pants navy.",
    thumbnail: "assets/generated/spun-1-azul-marino-45.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "45#",
    color_nombre: "Azul Marino",
    tags: ["spun", "poliéster", "20/1", "azul-marino", "navy", "dry-fit", "uniformes", "corporativo", "escolar", "100%-poliéster"]
  },
  {
    id: "spun-poly-20-1-beige",
    name: "Hilado Spun 20/1 — Beige (49#)",
    description: "Hilado spun 100% poliéster, título 20/1, color beige (N° 49#). Tono arena cálido, muy solicitado en moda casual y ropa de verano. Sin amarillamiento por exposición al sol. Apto para teñido posterior si se requiere ajuste de tono.",
    aplicaciones: "Tela Dry Fit beige, jersey casual, interlock para ropa de temporada, tela para polos casuales y de playa, tela para uniformes gastronómicos.",
    thumbnail: "assets/generated/spun-1-beige-49.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "49#",
    color_nombre: "Beige",
    tags: ["spun", "poliéster", "20/1", "beige", "arena", "casual", "dry-fit", "verano", "100%-poliéster"]
  },
  {
    id: "spun-poly-20-1-verde",
    name: "Hilado Spun 100% 20/1 — Verde (57#)",
    description: "Hilado spun 100% poliéster, título 20/1, color verde (N° 57#). Tono verde medio equilibrado, de alta demanda en uniformes deportivos y ropa casual. Solidez a la luz clase 5-6. Sin cambio de matiz por lavado repetido.",
    aplicaciones: "Tela Dry Fit verde, jersey deportivo, interlock para uniformes de equipos, tela Win verde, tela para polos de equipos deportivos, tela para ropa de trabajo.",
    thumbnail: "assets/generated/spun-1-verde-57.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "57#",
    color_nombre: "Verde",
    tags: ["spun", "poliéster", "20/1", "verde", "dry-fit", "uniformes", "deportivo", "100%-poliéster"]
  },
  {
    id: "spun-poly-20-1-plomo",
    name: "Hilado Spun 20/1 — Plomo (70#)",
    description: "Hilado spun 100% poliéster, título 20/1, color plomo (N° 70#). Tono gris medio, uno de los colores de mayor rotación junto al negro y el marino. Excelente para prendas básicas y de temporada. Solidez al lavado 4-5.",
    aplicaciones: "Tela Dry Fit gris, jersey plomo, interlock para camisetas básicas, tela para polos casuales, tela para pants grises, uniforme de uso diario.",
    thumbnail: "assets/generated/spun-1-plomo-70.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "70#",
    color_nombre: "Plomo",
    tags: ["spun", "poliéster", "20/1", "plomo", "gris", "dry-fit", "básico", "uniformes", "100%-poliéster"]
  },
  {
    id: "spun-poly-20-1-marron",
    name: "Hilado Spun 20/1 — Marrón (81#)",
    description: "Hilado spun 100% poliéster, título 20/1, color marrón (N° 81#). Tono café cálido, de creciente demanda en moda casual y ropa de temporada otoño-invierno. Teñido con colorante disperso estable a altas temperaturas.",
    aplicaciones: "Tela Dry Fit marrón, jersey casual, interlock para ropa de temporada, tela para polos casuales y moda urbana, tela para pants estilo tierra.",
    thumbnail: "assets/generated/spun-1-marron-81.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "81#",
    color_nombre: "Marrón",
    tags: ["spun", "poliéster", "20/1", "marron", "cafe", "casual", "dry-fit", "moda-urbana", "100%-poliéster"]
  },

  // ══════════════════════════════════════════════════════════
  // TÍTULO 30s/1 — 100% POLIÉSTER
  // ══════════════════════════════════════════════════════════

  {
    id: "spun-poly-30-1-blanco-optico",
    name: "Hilado Spun 30/1 — Blanco Óptico (2#)",
    description: "Hilado spun 100% poliéster, título fino 30/1, color blanco óptico (N° 2#). La mayor finura del 30/1 produce telas de tejido más cerrado, mejor caída y mayor suavidad. Blancura óptica superior, ideal para sublimación full color con definición de imagen HD.",
    aplicaciones: "Tela Dry Fit fina para sublimación, jersey fino blanco, interlock de alta calidad, tela Win premium, tela para polos deportivos de alta gama, tela birdseye fina, tela para camisetas de sublimación tipo campera.",
    thumbnail: "assets/generated/spun-1-blanco-optico-2.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "2#",
    color_nombre: "Blanco Óptico",
    tags: ["spun", "poliéster", "30/1", "blanco-óptico", "fino", "dry-fit", "sublimación", "win", "premium", "100%-poliéster"]
  },
  {
    id: "spun-poly-30-1-rojo",
    name: "Hilado Spun 30/1 — Rojo (20#)",
    description: "Hilado spun 100% poliéster, título fino 30/1, color rojo (N° 20#). Mayor finura para telas de mayor calidad superficial y mejor caída. Solidez al lavado 4-5, solidez a la luz 5-6. Alta demanda para confección de camisetas deportivas premium.",
    aplicaciones: "Tela Dry Fit roja premium, jersey fino de color, interlock para camisetas deportivas de alta calidad, tela Win roja, uniformes de competencia.",
    thumbnail: "assets/generated/spun-1-rojo-20.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "20#",
    color_nombre: "Rojo",
    tags: ["spun", "poliéster", "30/1", "rojo", "fino", "dry-fit", "premium", "uniformes", "100%-poliéster"]
  },
  {
    id: "spun-poly-30-1-rojo-2",
    name: "Hilado Spun 30/1 — Rojo (21#)",
    description: "Hilado spun 100% poliéster, título fino 30/1, color rojo 2 (N° 21#). Tono rojo con mayor saturación y matiz magenta. Alta uniformidad de masa para telas sin variación de tono. Muy solicitado para camisetas deportivas de alta gama.",
    aplicaciones: "Tela Dry Fit rojo intenso fino, jersey premium, interlock para camisetas deportivas, tela para uniformes de competencia de alto rendimiento.",
    thumbnail: "assets/generated/spun-1-rojo-21.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "21#",
    color_nombre: "Rojo 2",
    tags: ["spun", "poliéster", "30/1", "rojo-2", "fino", "dry-fit", "premium", "competencia", "100%-poliéster"]
  },
  {
    id: "spun-poly-30-1-naranja",
    name: "Hilado Spun 30/1 — Naranja (22#)",
    description: "Hilado spun 100% poliéster, título fino 30/1, color naranja (N° 22#). Tono naranja vivo de alta visibilidad en tejido fino. Alta solidez a la luz UV. Ideal para ropa deportiva y de seguridad de mayor calidad de acabado.",
    aplicaciones: "Tela Dry Fit naranja fina, jersey fino para uniformes, tela para ropa de alta visibilidad premium, interlock para camisetas deportivas naranjas.",
    thumbnail: "assets/generated/spun-1-naranja-22.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "22#",
    color_nombre: "Naranja",
    tags: ["spun", "poliéster", "30/1", "naranja", "fino", "alta-visibilidad", "dry-fit", "100%-poliéster"]
  },
  {
    id: "spun-poly-30-1-morado-light",
    name: "Hilado Spun 30/1 — Morado Light (24#)",
    description: "Hilado spun 100% poliéster, título fino 30/1, color morado light (N° 24#). Tono lila-violeta suave en versión fina para telas de mejor tacto y caída. Muy demandado en ropa deportiva femenina y moda activa de temporada.",
    aplicaciones: "Tela Dry Fit lila fina, jersey fino para ropa deportiva femenina, interlock para leggins y tops, tela para yoga pants premium, tela para uniformes femeninos.",
    thumbnail: "assets/generated/spun-1-morado-light-24.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "24#",
    color_nombre: "Morado Light",
    tags: ["spun", "poliéster", "30/1", "morado", "lila", "fino", "yoga", "femenino", "premium", "100%-poliéster"]
  },
  {
    id: "spun-poly-30-1-amarillo-1",
    name: "Hilado Spun 30/1 — Amarillo (31#)",
    description: "Hilado spun 100% poliéster, título fino 30/1, color amarillo 1 (N° 31#). Tono amarillo cálido-dorado en versión fina para telas deportivas de calidad superior. Solidez a la luz clase 5-6. Sin viraje de tono por exposición solar.",
    aplicaciones: "Tela Dry Fit amarilla premium, jersey fino deportivo, interlock amarillo de alta calidad, tela para camisetas de equipos profesionales.",
    thumbnail: "assets/generated/spun-1-amarillo-31.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "31#",
    color_nombre: "Amarillo 1",
    tags: ["spun", "poliéster", "30/1", "amarillo", "fino", "dry-fit", "premium", "uniformes", "100%-poliéster"]
  },
  {
    id: "spun-poly-30-1-amarillo-2",
    name: "Hilado Spun 30/1 — Amarillo (32#)",
    description: "Hilado spun 100% poliéster, título fino 30/1, color amarillo 2 (N° 32#). Tono amarillo frío-verdoso de alta visibilidad. Ideal para uniformes escolares y deportivos de alta rotación. La finura del 30/1 mejora el tacto y la caída respecto al 20/1.",
    aplicaciones: "Tela Dry Fit amarillo limón fina, jersey escolar, interlock para uniformes de alta calidad, tela para camisetas de equipos infantiles y escolares.",
    thumbnail: "assets/generated/spun-1-amarillo-32.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "32#",
    color_nombre: "Amarillo 2",
    tags: ["spun", "poliéster", "30/1", "amarillo-2", "fino", "escolar", "dry-fit", "uniformes", "100%-poliéster"]
  },
  {
    id: "spun-poly-30-1-azulino",
    name: "Hilado Spun 30/1 — Azulino (38#)",
    description: "Hilado spun 100% poliéster, título fino 30/1, color azulino (N° 38#). Celeste de alta rotación en Perú para uniformes escolares e institucionales en versión premium con tejido más fino y suave. Excelente reproducibilidad de tono.",
    aplicaciones: "Tela Dry Fit celeste fina, jersey premium para uniformes escolares, interlock deportivo fino, tela Win azulino, tela para polos institucionales de alta calidad.",
    thumbnail: "assets/generated/spun-1-azulino-38.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "38#",
    color_nombre: "Azulino",
    tags: ["spun", "poliéster", "30/1", "azulino", "celeste", "fino", "dry-fit", "escolar", "premium", "100%-poliéster"]
  },
  {
    id: "spun-poly-30-1-azul-tibetano",
    name: "Hilado Spun 30/1 — Azul Tibetano (44#)",
    description: "Hilado spun 100% poliéster, título fino 30/1, color azul tibetano (N° 44#). Tono azul profundo con matiz violáceo en versión fina para telas de mayor calidad. Alta demanda en ropa deportiva y moda activa de temporada.",
    aplicaciones: "Tela Dry Fit azul profundo fina, jersey premium, interlock para camisetas deportivas de alta gama, tela para pants y shorts de color.",
    thumbnail: "assets/generated/spun-1-azul-tibetano-44.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "44#",
    color_nombre: "Azul Tibetano",
    tags: ["spun", "poliéster", "30/1", "azul-tibetano", "fino", "dry-fit", "premium", "deportivo", "100%-poliéster"]
  },
  {
    id: "spun-poly-30-1-azul-marino",
    name: "Hilado Spun 30/1 — Azul Marino (45#)",
    description: "Hilado spun 100% poliéster, título fino 30/1, color azul marino (N° 45#). El marino en versión 30/1 produce telas de tejido cerrado con excelente profundidad de color oscuro. Uno de los colores de mayor volumen de venta para uniformes corporativos y escolares premium.",
    aplicaciones: "Tela Dry Fit marino fina premium, jersey fino para uniformes corporativos, interlock marino de alta calidad, tela para polos y camisetas institucionales de gama alta.",
    thumbnail: "assets/generated/spun-1-azul-marino-45.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "45#",
    color_nombre: "Azul Marino",
    tags: ["spun", "poliéster", "30/1", "azul-marino", "navy", "fino", "dry-fit", "corporativo", "premium", "100%-poliéster"]
  },
  {
    id: "spun-poly-30-1-beige",
    name: "Hilado Spun 30/1 — Beige (49#)",
    description: "Hilado spun 100% poliéster, título fino 30/1, color beige (N° 49#). Tono arena cálido en versión fina para telas de mayor suavidad y caída. Muy solicitado en moda casual, colecciones de verano y ropa gastronómica premium.",
    aplicaciones: "Tela Dry Fit beige fina, jersey casual fino, interlock para ropa de temporada de calidad, tela para polos premium casuales, ropa de playa y resort.",
    thumbnail: "assets/generated/spun-1-beige-49.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "49#",
    color_nombre: "Beige",
    tags: ["spun", "poliéster", "30/1", "beige", "fino", "casual", "premium", "verano", "100%-poliéster"]
  },
  {
    id: "spun-poly-30-1-verde",
    name: "Hilado Spun 30/1 — Verde (57#)",
    description: "Hilado spun 100% poliéster, título fino 30/1, color verde (N° 57#). Tono verde medio en versión fina para telas de calidad superior. Solidez a la luz 5-6. Excelente para uniformes deportivos y ropa casual de temporada.",
    aplicaciones: "Tela Dry Fit verde fina, jersey fino deportivo, interlock para camisetas de equipos de calidad, tela Win verde premium, tela para polos de marca.",
    thumbnail: "assets/generated/spun-1-verde-57.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "57#",
    color_nombre: "Verde",
    tags: ["spun", "poliéster", "30/1", "verde", "fino", "dry-fit", "premium", "deportivo", "100%-poliéster"]
  },
  {
    id: "spun-poly-30-1-plomo",
    name: "Hilado Spun 30/1 — Plomo (70#)",
    description: "Hilado spun 100% poliéster, título fino 30/1, color plomo (N° 70#). Gris medio en versión fina: uno de los colores básicos de mayor rotación del mercado peruano. Tejido más cerrado y suave que el 20/1, ideal para camisetas de calidad superior.",
    aplicaciones: "Tela Dry Fit gris fina premium, jersey plomo fino, interlock para camisetas básicas de calidad, tela para polos casuales y de marca, tela para uniformes grises.",
    thumbnail: "assets/generated/spun-1-plomo-70.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "70#",
    color_nombre: "Plomo",
    tags: ["spun", "poliéster", "30/1", "plomo", "gris", "fino", "dry-fit", "básico", "premium", "100%-poliéster"]
  },
  {
    id: "spun-poly-30-1-marron",
    name: "Hilado Spun 30/1 — Marrón (81#)",
    description: "Hilado spun 100% poliéster, título fino 30/1, color marrón (N° 81#). Tono café cálido en versión fina para telas de mayor calidad y suavidad. Creciente demanda en moda casual urbana y colecciones otoño-invierno de gama media-alta.",
    aplicaciones: "Tela Dry Fit marrón fina, jersey fino casual, interlock para ropa de moda urbana, tela para polos de marca estilo tierra, tela para pants casuales premium.",
    thumbnail: "assets/generated/spun-1-marron-81.png",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 25,
    conos_por_caja: 12,
    color_no: "81#",
    color_nombre: "Marrón",
    tags: ["spun", "poliéster", "30/1", "marron", "cafe", "fino", "casual", "moda-urbana", "premium", "100%-poliéster"]
  },

// RESUMEN
// ─────────────────────────────────────────────
// 10s/1:  6 colores  (2#, 20#, 21#, 22#, 38#, 57#)
// 20s/1: 14 colores  (2#, 20#, 21#, 22#, 24#, 31#, 32#, 38#, 44#, 45#, 49#, 57#, 70#, 81#)
// 30s/1: 14 colores  (2#, 20#, 21#, 22#, 24#, 31#, 32#, 38#, 44#, 45#, 49#, 57#, 70#, 81#)
// Total: 34 SKUs

  {
    id: "polycotton-24-1-peinado",
    name: "Hilado Polycotton 24/1 — 48/52 Peinado",
    description: "Hilado de mezcla polycotton en proporción 48% poliéster / 52% algodón peinado, título 24/1. El proceso de peinado elimina fibras cortas e impurezas, resultando en un hilo más limpio, resistente y de superficie más lisa que el cardado. Excelente teñibilidad y tacto natural.",
    aplicaciones: "Tela Polycotton peinada para polos casuales y camisetas de calidad superior, tela para uniformes corporativos, jersey de punto fino, tela para bordado institucional.",
    thumbnail: "assets/generated/spun-yarn.svg",
    url: "contact.html",
    date: "En stock",
    moq: "1,000 kg",
    peso_caja_kg: 50.40,
    conos_por_caja: null,
    lote_referencia: "Y5PC124311",
    tags: ["polycotton", "24/1", "peinado", "48/52", "jersey", "uniformes", "casual", "algodón-poliéster"]
  },

  // ──────────────────────────────────────────────────────────
  // HILADOS DE POLIÉSTER DTY / FDY
  // ──────────────────────────────────────────────────────────

  {
    id: "poly-150d-144f-rw",
    name: "Hilado Poliéster 150D/144F RW — HENGYI",
    description: "Hilo de poliéster texturizado DTY 150 denier / 144 filamentos, color RW (crudo). Producción HENGYI, una de las principales plantas de poliéster de Asia. Alta uniformidad de denier, baja variación de torsión y excelente regularidad de superficie. Disponible en brillos brillante, semi-mate y totalmente mate. Ideal para tejidos de punto y planos de alta velocidad.",
    aplicaciones: "Tela Dry Fit, tela Win, tela Birdseye, interlock deportivo, jersey de poliéster, tela para sublimación (Gamarra), tafetán deportivo, tela para uniformes escolares y corporativos, rashel.",
    thumbnail: "assets/generated/poly-dty.svg",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 36,
    conos_por_caja: 6,
    lote_referencia: "MA31556",
    tags: ["poliéster", "DTY", "150D/144F", "RW", "crudo", "dry-fit", "win", "sublimación", "interlock", "HENGYI"]
  },

  {
    id: "poly-150d-144f-ddblack-sh5-lt",
    name: "Hilado Poliéster 150D/144F/1 DDBlack Shade 5 — LT",
    description: "Hilo de poliéster DTY 150D/144F teñido en hilo color negro profundo Shade 5 (negro intenso con base azulada). Productor LT (Lihuei o equivalente). El teñido en hilo en cono garantiza solidez superior al teñido en pieza: solidez al lavado 4-5, solidez a la luz 5-6. Lote fijo de 35 kg por caja.",
    aplicaciones: "Tela Suplex negro, interlock negro deportivo, tela para leggins y mallas negras, tela para shorts, Dry Fit negro sublimable con base oscura (DTF), tela para uniformes negros.",
    thumbnail: "assets/generated/poly-dty.svg",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 35,
    conos_por_caja: 6,
    lote_referencia: "LT-2B1544013",
    tags: ["poliéster", "DTY", "150D/144F", "negro", "DDBlack", "Shade-5", "suplex", "leggins", "DTF"]
  },

  {
    id: "poly-150d-144f-ddblack-sh5-var",
    name: "Hilado Poliéster 150D/144F/1 DDBlack Shade 5 — VAR",
    description: "Hilo de poliéster DTY 150D/144F teñido color negro Shade 5, lote de peso variable (VAR). Mismas características técnicas que el lote LT-2B1544013. Disponible en cantidad limitada (313.40 kg en stock). Recomendado para producción de muestra o complemento de pedido.",
    aplicaciones: "Tela Suplex negro, interlock negro deportivo, tela para leggins y mallas negras, tela para shorts, Dry Fit negro.",
    thumbnail: "assets/generated/poly-dty.svg",
    url: "contact.html",
    date: "En stock — Stock limitado",
    moq: "313 kg (stock disponible)",
    peso_caja_kg: "VAR",
    conos_por_caja: 6,
    lote_referencia: "2B1544010-A",
    tags: ["poliéster", "DTY", "150D/144F", "negro", "DDBlack", "Shade-5", "stock-limitado", "suplex", "leggins"]
  },

  {
    id: "poly-150d-144f-ddblack-sh6-n250-aa",
    name: "Hilado Poliéster 150D/144F/1 DDBlack Shade 6",
    description: "Hilo de poliéster DTY 150D/144F teñido en negro Shade 6 (el negro más profundo y denso, sin reflejo azulado). Fabricante lote N250713WP21D47B-AA. El Shade 6 es el estándar premium de negro en el mercado peruano, exigido por marcas de ropa deportiva de alta gama. Máxima solidez al color.",
    aplicaciones: "Tela Suplex premium negro, interlock negro de alta gama, tela para mallas de competencia, shorts deportivos profesionales, ropa de gimnasio de marca, leggins de compresión.",
    thumbnail: "assets/generated/poly-dty.svg",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 36,
    conos_por_caja: 6,
    lote_referencia: "N250713WP21D47B-AA",
    tags: ["poliéster", "DTY", "150D/144F", "negro", "DDBlack", "Shade-6", "premium", "suplex", "mallas", "leggins", "compresión"]
  },

  {
    id: "poly-150d-144f-ddblack-sh6-n250-a-var",
    name: "Hilado Poliéster 150D/144F/1 DDBlack Shade 6 — VAR",
    description: "Hilo de poliéster DTY 150D/144F negro Shade 6, lote de peso variable (VAR). Complementario al lote N250713WP21D47B-AA. Misma especificación técnica y solidez de color. Stock disponible: 1,114.03 kg.",
    aplicaciones: "Tela Suplex premium negro, interlock negro de alta gama, mallas de competencia, leggins de compresión, shorts profesionales.",
    thumbnail: "assets/generated/poly-dty.svg",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: "VAR",
    conos_por_caja: 6,
    lote_referencia: "N250713WP21D47B-A",
    tags: ["poliéster", "DTY", "150D/144F", "negro", "DDBlack", "Shade-6", "suplex", "leggins", "compresión"]
  },

  {
    id: "poly-160d-144f-rw-andao",
    name: "Hilado Poliéster 160D/144F RW — ANDAO",
    description: "Hilo de poliéster DTY 160 denier / 144 filamentos, color RW (crudo), productor ANDAO. Mayor denier que el estándar 150D: tela resultante con mayor peso por metro cuadrado, mejor opacidad y mayor resistencia a la abrasión. Ideal para prendas que requieren mayor consistencia estructural.",
    aplicaciones: "Tela Dry Fit pesada, tela Win premium, tela para pantalones deportivos (pants), tela de forro exterior, interlock de mayor gramaje, tela para rashel y uniformes de alto rendimiento.",
    thumbnail: "assets/generated/poly-dty.svg",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 36,
    conos_por_caja: 6,
    lote_referencia: "CHN285-8",
    tags: ["poliéster", "DTY", "160D/144F", "RW", "crudo", "ANDAO", "dry-fit", "win", "pants", "interlock-pesado"]
  },

  {
    id: "poly-160d-144f-ddblack-andao",
    name: "Hilado Poliéster 160D/144F DDBlack — ANDAO",
    description: "Hilo de poliéster DTY 160D/144F teñido negro profundo (DDBlack), productor ANDAO. Combina el mayor gramaje del 160D con la solidez del teñido negro en cono. Resistencia a la abrasión superior, ideal para prendas deportivas de uso intensivo. Solidez al lavado 4-5.",
    aplicaciones: "Tela Suplex negro pesado, interlock negro de gramaje alto, tela para leggins de compresión gruesos, shorts de alto rendimiento, pants deportivos negros, ropa de trabajo resistente.",
    thumbnail: "assets/generated/poly-dty.svg",
    url: "contact.html",
    date: "En stock",
    moq: "500 kg",
    peso_caja_kg: 36,
    conos_por_caja: 6,
    lote_referencia: "1614465-1",
    tags: ["poliéster", "DTY", "160D/144F", "negro", "DDBlack", "ANDAO", "suplex", "leggins", "compresión", "pants"]
  },

  // ──────────────────────────────────────────────────────────
  // HILADOS DE ALGODÓN PEINADO COMPACTADO
  // ──────────────────────────────────────────────────────────

  {
    id: "algodon-21-1-indigo-azul-peinado",
    name: "Hilado Algodón 21/1 Peinado Compactado Índigo Azul",
    description: "Hilado 100% algodón peinado compactado, título 21/1, teñido índigo color azul. El proceso de peinado asegura eliminación de fibras cortas para mayor resistencia y suavidad. La compactación reduce la pelusa superficial y mejora la resistencia a la abrasión del hilo. El teñido índigo es el estándar para tejidos tipo denim y mezclilla. Presentación: cuerdas de 414.40 kg.",
    aplicaciones: "Tela denim de punto (jean de punto), tela índigo para jeans, chaquetas estilo denim, tela para shorts estilo jean, telas para ropa casual de alta gama, tela para camisas estilo chambray.",
    thumbnail: "assets/generated/cotton-yarn.svg",
    url: "contact.html",
    date: "En stock",
    moq: "414.40 kg (1 cuerda)",
    peso_caja_kg: 25.90,
    conos_por_caja: 24,
    lote_referencia: "LT25375",
    tags: ["algodón", "peinado", "compactado", "21/1", "índigo", "azul", "denim", "jean-de-punto", "casual", "100%-algodón"]
  },

  // ──────────────────────────────────────────────────────────
  // TELAS (SEMIELABORADOS)
  // ──────────────────────────────────────────────────────────

  {
    id: "tela-suplex-negro",
    name: "Tela Suplex Negro",
    description: "Tela Suplex acabada, color negro. Tejido de punto circular compuesto de poliéster y elastano (spandex). Alta elasticidad en cuatro vías, excelente recuperación de forma y resistencia al desgaste. Lista para corte y confección directa. Stock disponible: 989.10 kg.",
    aplicaciones: "Leggins, mallas deportivas, bikers, tops deportivos, shorts de compresión, trajes de baño, ropa de gimnasio, calzas, uniformes de ciclismo.",
    thumbnail: "assets/generated/spandex-yarn.svg",
    url: "contact.html",
    date: "En stock",
    moq: "Consultar (venta por kg o rollo)",
    peso_caja_kg: "VAR",
    conos_por_caja: null,
    lote_referencia: "—",
    tags: ["tela", "suplex", "negro", "elastano", "spandex", "leggins", "mallas", "deportivo", "compresión", "listo-para-corte"]
  },

  {
    id: "hilo-21-1-indigo-open",
    name: "Hilado 21/1 Índigo OPEN (Open End)",
    description: "Hilado 21/1 teñido índigo producido por sistema open-end (OE). El hilado open-end genera una estructura más abierta y voluminosa que el peinado compactado, con mayor cobertura en tela y tacto más rústico característico del denim tradicional. Mayor economía frente al peinado. Stock: 201.68 kg.",
    aplicaciones: "Denim de punto tipo jean, tela para jeans económicos, mezclilla de punto, tela para chaquetas casuales tipo jean, confección de ropa casual índigo de precio accesible.",
    thumbnail: "assets/generated/cotton-yarn.svg",
    url: "contact.html",
    date: "En stock — Stock limitado",
    moq: "201 kg (stock disponible)",
    peso_caja_kg: "VAR",
    conos_por_caja: null,
    lote_referencia: "—",
    tags: ["algodón", "21/1", "índigo", "open-end", "OE", "denim", "jean", "casual", "stock-limitado"]
  },

  // ──────────────────────────────────────────────────────────
  // BENJI BILLION — POLYCOTTON & POLIÉSTER FDY
  // ──────────────────────────────────────────────────────────

  {
    id: "polycotton-10-1-oe-65-35",
    name: "Hilado Polycotton 10/1 — 65/35 Open End",
    description: "Hilado grueso de mezcla polycotton 65% poliéster / 35% algodón, título 10/1, producido por sistema open-end. Excelente relación costo-beneficio para tejidos pesados. Alta resistencia a la rotura y estabilidad dimensional. Apto para teñido por agotamiento con colorantes dispersos-reactivos.",
    aplicaciones: "Tela polar, felpa interior, tela para pants y buzos, tela para frazadas de punto, tela tipo scuba gruesa, tela para ropa de trabajo pesada, tela para cortinas de punto.",
    thumbnail: "assets/generated/spun-yarn.svg",
    url: "contact.html",
    date: "En stock",
    moq: "2,000 kg",
    peso_caja_kg: 23.32,
    conos_por_caja: null,
    lote_referencia: "S9A2505-TCDOE3K",
    tags: ["polycotton", "10/1", "65/35", "open-end", "OE", "grueso", "polar", "felpa", "pants", "buzos", "poliéster-algodón"]
  },

  {
    id: "poly-160d-36f-rw-nim-sd",
    name: "Hilado Poliéster 160D/36F NIM RW SD",
    description: "Hilo de poliéster FDY 160 denier / 36 filamentos, acabado NIM (Non-Intermingled), color RW (crudo), variante SD (semi-dull / semi-mate). Al tener solo 36 filamentos frente a los 144F estándar, cada filamento es más grueso, generando una tela con mayor brillo apagado, mejor cuerpo y mayor resistencia individual de filamento. Ideal para tejidos de urdimbre (warp knitting) y tejidos planos.",
    aplicaciones: "Tela rashel, tela de encaje base, tela de forro semi-brillante, tejido de urdimbre (Karl Mayer), tela para lencería, tela tipo satín deportivo, tela para sublimación con acabado satinado.",
    thumbnail: "assets/generated/poly-dty.svg",
    url: "contact.html",
    date: "En stock",
    moq: "300 kg",
    peso_caja_kg: 36,
    conos_por_caja: 6,
    lote_referencia: "MC31553",
    tags: ["poliéster", "FDY", "160D/36F", "NIM", "RW", "SD", "semi-mate", "rashel", "encaje", "forro", "urdimbre", "satín"]
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
        <div class="product-details-extra">
          <span class="detail-item">Peso x caja: <strong>${p.peso_caja_kg}</strong></span>
          <span class="detail-item">Conos x caja: <strong>${p.conos_por_caja}</strong></span>
        </div>
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
