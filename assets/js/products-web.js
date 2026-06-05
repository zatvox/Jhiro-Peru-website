// ============================================================================
// PRODUCTS-WEB.JS - UI, renderizado y flujo de cotización JHIRO Web
// Importa funciones de datos desde web-data.js
// Ruta: assets/js/products-web.js
// ============================================================================

import {
  getProductos, getProductoById, updateProducto,
  upsertCliente, getClienteByRuc,
  addCotizacion, getCotizacionById,
  getCategorias, updateCotizacion,
  addDetalleCotizacion,
  subirComprobante, calcularTotalesCarrito, validarRUC,
  formatCurrency, formatDate,
} from './web-data.js'

// ============================================================================
// ESTADO GLOBAL DE LA UI
// ============================================================================

const state = {
  productos:  [],
  categorias: [],
  filtros: {
    categoria:      'Todos',
    disponibilidad: 'all',
    busqueda:       '',
  },
}

// ============================================================================
// CARRITO EN sessionStorage
// ============================================================================

const CARRITO_KEY = 'jhiro_carrito'

function guardarCarrito(lineas) {
  sessionStorage.setItem(CARRITO_KEY, JSON.stringify(lineas))
}

export function recuperarCarrito() {
  try { return JSON.parse(sessionStorage.getItem(CARRITO_KEY) || '[]') }
  catch { return [] }
}

export function limpiarCarrito() {
  sessionStorage.removeItem(CARRITO_KEY)
}

/**
 * Agregar o actualizar un producto en el carrito
 * @param {object} producto  Fila completa de productosPaginaWeb
 * @param {number} cantidadKg
 * @param {number} precioUnitario  S/. por kg (0 si precio a consultar)
 */
export function agregarAlCarrito(producto, cantidadKg, precioUnitario = 0) {
  const carrito = recuperarCarrito()
  const idx = carrito.findIndex(l => l.producto_id === producto.id)
  const linea = {
    producto_id:          producto.id,
    producto_nombre:      producto.nombre,
    producto_categoria:   producto.categoria,
    color_nombre:         producto.color_nombre  || '',
    cantidad_kg:          parseFloat(cantidadKg),
    precio_unitario_pen:  parseFloat(precioUnitario),
    descuento_pct:        0,
  }
  if (idx >= 0) { carrito[idx] = linea } else { carrito.push(linea) }
  guardarCarrito(carrito)
  actualizarContadorCarrito()
  return carrito
}

export function eliminarDelCarrito(productoId) {
  const carrito = recuperarCarrito().filter(l => l.producto_id !== productoId)
  guardarCarrito(carrito)
  actualizarContadorCarrito()
  return carrito
}

function actualizarContadorCarrito() {
  const carrito = recuperarCarrito()
  const badge = document.getElementById('carrito-count')
  if (badge) {
    badge.textContent = carrito.length
    badge.style.display = carrito.length > 0 ? 'flex' : 'none'
  }
}

// ============================================================================
// RENDERIZADO — SIDEBAR DE CATEGORÍAS
// ============================================================================

function renderSidebar() {
  const ul = document.getElementById('sidebar-categories')
  if (!ul) return

  const items = [
    { categoria: 'Todos', total: state.productos.length },
    ...state.categorias,
  ]

  ul.innerHTML = items.map(({ categoria, total }) => `
    <li>
      <button
        class="sidebar-cat-btn${state.filtros.categoria === categoria ? ' active' : ''}"
        data-cat="${categoria}">
        ${categoria}
        <span class="sidebar-cat-count">${total}</span>
      </button>
    </li>
  `).join('')

  ul.querySelectorAll('.sidebar-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.filtros.categoria = btn.dataset.cat
      renderSidebar()
      cargarYRenderProductos()
    })
  })

  // Botones de disponibilidad
  document.querySelectorAll('.sidebar-avail-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.avail === state.filtros.disponibilidad)
    // Evitar duplicar listeners — clonar y reemplazar
    const clone = btn.cloneNode(true)
    btn.parentNode.replaceChild(clone, btn)
    clone.addEventListener('click', () => {
      state.filtros.disponibilidad = clone.dataset.avail
      document.querySelectorAll('.sidebar-avail-btn').forEach(b =>
        b.classList.toggle('active', b.dataset.avail === state.filtros.disponibilidad)
      )
      cargarYRenderProductos()
    })
  })
}

// ============================================================================
// RENDERIZADO — GRILLA DE TARJETAS
// ============================================================================

function renderProductos(productos) {
  const grid    = document.getElementById('products-list')
  const loading = document.getElementById('products-loading')
  const count   = document.getElementById('products-count')
  if (!grid) return

  if (loading) loading.style.display = 'none'
  grid.style.display = 'grid'

  if (count) {
    count.textContent = `${productos.length} producto${productos.length !== 1 ? 's' : ''}`
  }

  if (productos.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <h3>No se encontraron productos</h3>
        <p>Intenta ajustar la categoría o el término de búsqueda.</p>
      </div>`
    return
  }

  grid.innerHTML = productos.map((p, i) => {
    const esLimitado  = p.disponibilidad?.includes('limitado')
    const badgeClass  = esLimitado ? 'pcard__badge--limited' : 'pcard__badge--stock'
    const badgeText   = esLimitado ? 'Stock limitado' : 'En stock'
    const colorHex    = p.color_hex    || '#888888'
    const colorNombre = p.color_nombre || ''

    const precioHtml = p.precio_referencia
      ? `<div class="pcard__price">
           <span class="pcard__price-label">Precio ref.</span>
           ${formatCurrency(p.precio_referencia)} / kg
         </div>`
      : `<div class="pcard__price pcard__price--consult">Consultar precio</div>`

    return `
      <a class="pcard"
         href="producto.html?id=${encodeURIComponent(p.id)}"
         style="animation-delay:${i * 0.04}s"
         aria-label="Ver detalle de ${p.nombre}">
        <div class="pcard__thumb">
          <img
            src="${p.thumbnail_url || 'assets/images/placeholder.png'}"
            alt="${p.nombre}"
            loading="lazy"
            onerror="this.src='assets/images/placeholder.png'">
          <span class="pcard__badge ${badgeClass}">${badgeText}</span>
        </div>
        <div class="pcard__body">
          <span class="pcard__category">${p.categoria}</span>
          <h3 class="pcard__name">${p.nombre}</h3>
          <p class="pcard__moq">MOQ: <strong>${p.moq || '—'}</strong></p>
          <div class="pcard__colors">
            <span class="pcard__color-swatch"
                  style="background:${colorHex}"
                  title="${colorNombre}"></span>
            <span class="pcard__color-label">
              ${colorNombre}${p.color_no ? ' · ' + p.color_no : ''}
            </span>
          </div>
          <div class="pcard__footer">
            ${precioHtml}
            <span class="pcard__cta">Ver detalle →</span>
          </div>
        </div>
      </a>
    `
  }).join('')
}

// ============================================================================
// FLUJO PRINCIPAL — CARGA + FILTRO
// ============================================================================

async function cargarYRenderProductos() {
  const loading = document.getElementById('products-loading')
  const grid    = document.getElementById('products-list')

  if (loading) { loading.style.display = 'flex' }
  if (grid)    { grid.style.display = 'none' }

  const productos = await getProductos(state.filtros)

  // Filtro de búsqueda local sobre los resultados (backup al ilike de Supabase)
  const q = state.filtros.busqueda.toLowerCase().trim()
  const filtrados = q
    ? productos.filter(p =>
        p.nombre?.toLowerCase().includes(q) ||
        p.descripcion?.toLowerCase().includes(q) ||
        p.categoria?.toLowerCase().includes(q) ||
        (p.tags || []).some(t => t.toLowerCase().includes(q))
      )
    : productos

  state.productos = filtrados
  renderProductos(filtrados)
}

async function inicializarSidebar() {
  state.categorias = await getCategorias()
  renderSidebar()
}

// ============================================================================
// FLUJO DE COTIZACIÓN
// ============================================================================

/**
 * Procesar cotización completa:
 * Registro cliente → cotización → líneas de detalle → comprobante (opcional)
 *
 * @param {object}   datosCliente  { ruc, razon_social, nombre_contacto, email, telefono, direccion_fiscal, distrito }
 * @param {object}   datosEntrega  { dir_entrega, distrito_entrega, referencia_entrega }
 * @param {File|null} archivoPago  Imagen/PDF de comprobante (opcional)
 * @param {string}   notas
 * @returns {Promise<{ok: boolean, cotizacion: object|null, mensaje: string}>}
 */
export async function procesarCotizacion(datosCliente, datosEntrega, archivoPago = null, notas = '') {
  const carrito = recuperarCarrito()

  if (!carrito.length) {
    return { ok: false, cotizacion: null, mensaje: 'El carrito está vacío.' }
  }
  if (!validarRUC(datosCliente.ruc)) {
    return { ok: false, cotizacion: null, mensaje: 'RUC inválido. Debe tener 11 dígitos numéricos.' }
  }
  if (!datosCliente.email || !datosCliente.razon_social) {
    return { ok: false, cotizacion: null, mensaje: 'Razón social y email son obligatorios.' }
  }

  // 1. Registrar / actualizar cliente
  const cliente = await upsertCliente(datosCliente)
  if (!cliente) {
    return { ok: false, cotizacion: null, mensaje: 'Error al registrar cliente.' }
  }

  // 2. Crear cabecera de cotización
  const cotizacion = await addCotizacion(cliente.id, datosEntrega, notas)
  if (!cotizacion) {
    return { ok: false, cotizacion: null, mensaje: 'Error al crear cotización.' }
  }

  // 3. Insertar líneas de detalle
  const detalle = await addDetalleCotizacion(cotizacion.id, carrito)
  if (!detalle) {
    return { ok: false, cotizacion, mensaje: 'Error al guardar los productos de la cotización.' }
  }

  // 4. Subir comprobante de pago si se adjuntó
  if (archivoPago) {
    const { error: errPago } = await subirComprobante(cotizacion.id, archivoPago)
    if (errPago) console.warn('[Web] Comprobante no subido:', errPago.message)
  }

  // 5. Recuperar cotización final con totales calculados por el trigger
  const cotizacionFinal = await getCotizacionById(cotizacion.id)

  limpiarCarrito()
  actualizarContadorCarrito()

  return {
    ok:         true,
    cotizacion: cotizacionFinal,
    mensaje:    `Cotización ${cotizacionFinal?.numero_cotizacion || ''} registrada correctamente.`,
  }
}

// ============================================================================
// INICIALIZACIÓN
// ============================================================================

document.addEventListener('DOMContentLoaded', async () => {
  // Solo en páginas con grilla de productos
  if (!document.getElementById('products-list')) return

  // Sidebar
  await inicializarSidebar()

  // Cargar productos iniciales
  await cargarYRenderProductos()

  // Buscador con debounce
  const input = document.getElementById('product-search')
  if (input) {
    let timer
    input.addEventListener('input', () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        state.filtros.busqueda = input.value
        cargarYRenderProductos()
      }, 300)
    })
  }

  // Toggle sidebar mobile
  const btnFiltros = document.getElementById('btn-show-filters')
  const sidebar    = document.getElementById('products-sidebar')
  const btnCerrar  = document.getElementById('sidebar-toggle-mobile')

  btnFiltros?.addEventListener('click', () => sidebar?.classList.toggle('sidebar-open'))
  btnCerrar?.addEventListener('click',  () => sidebar?.classList.remove('sidebar-open'))

  // Contador del carrito al cargar
  actualizarContadorCarrito()
})

// ============================================================================
// EXPONER EN window — para páginas sin módulos (cotizar.html, producto.html)
// ============================================================================

window.JhiroWeb = {
  // Datos (re-exportados para acceso desde páginas sin import)
  getProductos,
  getProductoById,
  getCategorias,
  updateProducto,
  upsertCliente,
  getClienteByRuc,
  addCotizacion,
  getCotizacionById,
  updateCotizacion,
  addDetalleCotizacion,
  subirComprobante,
  // Carrito
  recuperarCarrito,
  agregarAlCarrito,
  eliminarDelCarrito,
  limpiarCarrito,
  calcularTotalesCarrito,
  // Cotización
  procesarCotizacion,
  // Helpers
  validarRUC,
  formatCurrency,
  formatDate,
}
