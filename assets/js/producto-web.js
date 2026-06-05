// ============================================================================
// PRODUCTO-WEB.JS - Detalle de producto y agregar al carrito
// Ruta: assets/js/producto-web.js
// ============================================================================

import { getProductoById, formatCurrency } from './web-data.js'
import { agregarAlCarrito, recuperarCarrito } from './products-web.js'

// ============================================================================
// HELPERS DE UI
// ============================================================================

function getEl(id) { return document.getElementById(id) }

function actualizarContadorCarrito() {
  const badge = getEl('carrito-count')
  if (!badge) return
  const n = recuperarCarrito().length
  badge.textContent = n
  badge.style.display = n > 0 ? 'flex' : 'none'
}

function mostrarEstado(estado) {
  // estado: 'loading' | 'error' | 'layout'
  getEl('pd-loading').style.display = estado === 'loading' ? 'flex'  : 'none'
  getEl('pd-error').style.display   = estado === 'error'   ? 'block' : 'none'
  getEl('pd-layout').style.display  = estado === 'layout'  ? 'grid'  : 'none'
}

function mostrarToast(msg) {
  const toast = getEl('pd-toast')
  if (!toast) return
  toast.textContent = msg
  toast.classList.add('show')
  setTimeout(() => toast.classList.remove('show'), 3000)
}

// ============================================================================
// RENDERIZADO DEL PRODUCTO
// ============================================================================

function renderProducto(p) {
  // Imagen
  const img = getEl('pd-img')
  img.src = p.thumbnail_url || 'assets/images/placeholder.png'
  img.alt = p.nombre
  img.onerror = () => { img.src = 'assets/images/placeholder.png' }

  // Badge de disponibilidad
  const badge = getEl('pd-badge')
  const esLimitado = p.disponibilidad?.includes('limitado')
  badge.textContent = esLimitado ? 'Stock limitado' : 'En stock'
  badge.className = `pd-badge ${esLimitado ? 'pd-badge--limited' : 'pd-badge--stock'}`

  // Texto básico
  getEl('pd-category').textContent    = p.categoria   || ''
  getEl('pd-name').textContent        = p.nombre      || ''
  getEl('breadcrumb-nombre').textContent = p.nombre   || 'Producto'

  // Color
  const swatch = getEl('pd-color-swatch')
  const label  = getEl('pd-color-label')
  if (p.color_hex || p.color_nombre) {
    swatch.style.background = p.color_hex || '#888'
    swatch.title = p.color_nombre || ''
    label.textContent = [p.color_nombre, p.color_no].filter(Boolean).join(' · ')
  } else {
    getEl('pd-color-row').style.display = 'none'
  }

  // Precio
  const precio = getEl('pd-price')
  if (p.precio_referencia) {
    precio.innerHTML = `${formatCurrency(p.precio_referencia)} <span class="pd-price-per">/ kg</span>`
    precio.classList.remove('pd-price--consult')
  } else {
    precio.textContent = 'Consultar precio'
    precio.classList.add('pd-price--consult')
  }

  // Especificaciones técnicas
  const specs = [
    { label: 'MOQ',          value: p.moq                ? `${p.moq} kg`  : '—' },
    { label: 'Peso por caja',value: p.peso_caja_kg        ? `${p.peso_caja_kg} kg` : '—' },
    { label: 'Conos / caja', value: p.conos_por_caja      ? p.conos_por_caja : '—' },
    { label: 'Lote ref.',    value: p.lote_referencia     || '—' },
  ]
  getEl('pd-specs').innerHTML = specs.map(s => `
    <div class="pd-spec-item">
      <span class="pd-spec-label">${s.label}</span>
      <span class="pd-spec-value">${s.value}</span>
    </div>
  `).join('')

  // Descripción y aplicaciones
  getEl('pd-desc').textContent = p.descripcion || ''
  const aplicSection = getEl('pd-aplic-section')
  if (p.aplicaciones) {
    getEl('pd-aplic').textContent = p.aplicaciones
    aplicSection.style.display = 'block'
  } else {
    aplicSection.style.display = 'none'
  }

  // Cantidad: MOQ como mínimo
  const moq = parseFloat(p.moq) || 100
  const inputQty = getEl('pd-cantidad')
  inputQty.min   = moq
  inputQty.step  = moq
  inputQty.value = moq
  getEl('pd-qty-hint').textContent = `MOQ: ${moq} kg`

  // Botones ± cantidad
  getEl('pd-qty-menos').addEventListener('click', () => {
    const actual = parseFloat(inputQty.value) || moq
    const nuevo  = Math.max(moq, actual - moq)
    inputQty.value = nuevo
  })
  getEl('pd-qty-mas').addEventListener('click', () => {
    const actual = parseFloat(inputQty.value) || moq
    inputQty.value = actual + moq
  })

  // Botón agregar al carrito
  getEl('pd-btn-agregar').addEventListener('click', () => {
    const kg     = parseFloat(inputQty.value) || moq
    const precio = parseFloat(p.precio_referencia) || 0
    agregarAlCarrito(p, kg, precio)
    actualizarContadorCarrito()
    mostrarToast(`✓ ${p.nombre} agregado a tu cotización`)
    setTimeout(() => { window.location.href = 'cotizar.html' }, 3000)
  })
}

// ============================================================================
// INICIALIZACIÓN
// ============================================================================

document.addEventListener('DOMContentLoaded', async () => {
  actualizarContadorCarrito()

  const params = new URLSearchParams(window.location.search)
  const id     = params.get('id')

  if (!id) { mostrarEstado('error'); return }

  mostrarEstado('loading')

  const producto = await getProductoById(id)

  if (!producto) { mostrarEstado('error'); return }

  renderProducto(producto)
  mostrarEstado('layout')
})
