// ============================================================================
// WEB-DATA.JS - Funciones de datos Supabase para JHIRO Web Pública
// Patrón idéntico a supabase-data.js del ERP
// Ruta: assets/js/web-data.js
// ============================================================================

import { supabase, getAll, getById, insert, update, query, upsert, uploadFile } from './web-client.js'

// ─── NOMBRES DE TABLAS ───────────────────────────────────────────────────────
const T_PRODUCTOS  = 'productosPaginaWeb'
const T_CLIENTES   = 'registroClientesWeb'
const T_COTIZACION = 'cotizacionesWeb'
const T_DETALLE    = 'detalleCotizacionWeb'
const BUCKET_PAGOS = 'jhiro-pagos'

// ============================================================================
// PRODUCTOS
// ============================================================================

/**
 * Obtener todos los productos activos con filtros opcionales
 * @param {object} filtros { categoria?, busqueda?, disponibilidad? }
 */
export async function getProductos(filtros = {}) {
  try {
    let q = supabase
      .from(T_PRODUCTOS)
      .select('*')
      .eq('activo', true)
      .order('orden_display', { ascending: true })

    if (filtros.categoria && filtros.categoria !== 'Todos') {
      q = q.eq('categoria', filtros.categoria)
    }
    if (filtros.disponibilidad === 'stock') {
      q = q.eq('disponibilidad', 'En stock')
    } else if (filtros.disponibilidad === 'limited') {
      q = q.eq('disponibilidad', 'En stock — Stock limitado')
    }
    if (filtros.busqueda?.trim()) {
      const b = filtros.busqueda.trim()
      q = q.or(`nombre.ilike.%${b}%,descripcion.ilike.%${b}%,categoria.ilike.%${b}%`)
    }

    const { data, error } = await q
    if (error) { console.error('[Web] getProductos:', error.message); return [] }
    return data || []
  } catch (err) {
    console.error('[Web] getProductos:', err)
    return []
  }
}

/**
 * Obtener un producto por su slug/id
 */
export async function getProductoById(id) {
  return await getById(T_PRODUCTOS, id)
}

/**
 * Obtener categorías únicas con conteo de productos activos
 * @returns {Array<{categoria: string, total: number}>}
 */
export async function getCategorias() {
  try {
    const { data, error } = await supabase
      .from(T_PRODUCTOS)
      .select('categoria')
      .eq('activo', true)
    if (error) { console.error('[Web] getCategorias:', error.message); return [] }
    const map = {}
    ;(data || []).forEach(r => { map[r.categoria] = (map[r.categoria] || 0) + 1 })
    return Object.entries(map)
      .map(([categoria, total]) => ({ categoria, total }))
      .sort((a, b) => a.categoria.localeCompare(b.categoria))
  } catch (err) {
    console.error('[Web] getCategorias:', err)
    return []
  }
}

export async function getColoresByCategoria(categoria) {
  try {
    const { data, error } = await supabase
      .from(T_PRODUCTOS)
      .select('color_hex, color_nombre, id')
      .eq('activo', true)
      .eq('categoria', categoria)
    if (error) { console.error('[Web] getColoresByCategoria:', error.message); return [] }
    // Deduplicar por color_hex manteniendo nombre
    const map = {}
    ;(data || []).forEach(r => {
      if (r.color_hex && !map[r.color_hex]) {
        map[r.color_hex] = { color_hex: r.color_hex, color_nombre: r.color_nombre, id: r.id || 'Sin nombre' }
      }
    })
    return Object.values(map)
      .sort((a, b) => a.color_nombre.localeCompare(b.color_nombre))
  } catch (err) {
    console.error('[Web] getColoresByCategoria:', err)
    return []
  }
}

/**
 * Actualizar campos de un producto — solo para uso admin/ERP
 */
export async function updateProducto(id, data) {
  return await update(T_PRODUCTOS, id, { ...data, updated_at: new Date().toISOString() })
}

// ============================================================================
// CLIENTES WEB
// ============================================================================

/**
 * Registrar o actualizar cliente por RUC
 * @param {object} cliente { ruc, razon_social, nombre_contacto, email, telefono, direccion_fiscal, distrito, ... }
 */
export async function upsertCliente(cliente) {
  return await upsert(T_CLIENTES, cliente, 'ruc')
}

/**
 * Buscar cliente por RUC
 */
export async function getClienteByRuc(ruc) {
  try {
    const { data, error } = await supabase
      .from(T_CLIENTES)
      .select('*')
      .eq('ruc', ruc)
      .single()
    if (error) return null
    return data
  } catch {
    return null
  }
}

/**
 * Buscar cliente por email
 */
export async function getClienteByEmail(email) {
  try {
    const { data, error } = await supabase
      .from(T_CLIENTES)
      .select('*')
      .eq('email', email)
      .single()
    if (error) return null
    return data
  } catch {
    return null
  }
}

// ============================================================================
// COTIZACIONES WEB
// ============================================================================

/**
 * Crear cabecera de cotización
 * @param {string} clienteId  UUID del cliente
 * @param {object} datosEntrega { dir_entrega, distrito_entrega, referencia_entrega }
 * @param {string} notasCliente
 */
export async function addCotizacion(clienteId, datosEntrega, notasCliente = '') {
  return await insert(T_COTIZACION, {
    cliente_id:          clienteId,
    dir_entrega:         datosEntrega.dir_entrega         || null,
    distrito_entrega:    datosEntrega.distrito_entrega     || null,
    referencia_entrega:  datosEntrega.referencia_entrega   || null,
    estado:              'enviada',
    notas_cliente:       notasCliente,
  })
}

/**
 * Obtener cotización por ID (con totales ya calculados por trigger)
 */
export async function getCotizacionById(id) {
  return await getById(T_COTIZACION, id)
}

/**
 * Actualizar estado o datos de una cotización
 */
export async function updateCotizacion(id, data) {
  return await update(T_COTIZACION, id, { ...data, updated_at: new Date().toISOString() })
}

// ============================================================================
// DETALLE COTIZACIÓN WEB
// ============================================================================

/**
 * Insertar múltiples líneas de detalle de una sola vez
 * @param {string} cotizacionId  UUID de la cotización
 * @param {Array}  lineas  [{ producto_id, producto_nombre, producto_categoria, color_nombre, cantidad_kg, precio_unitario_pen, descuento_pct?, notas? }]
 */
export async function addDetalleCotizacion(cotizacionId, lineas) {
  try {
    const rows = lineas.map((l, i) => ({
      cotizacion_id:        cotizacionId,
      producto_id:          l.producto_id,
      producto_nombre:      l.producto_nombre,
      producto_categoria:   l.producto_categoria  || '',
      color_nombre:         l.color_nombre         || '',
      cantidad_kg:          parseFloat(l.cantidad_kg),
      precio_unitario_pen:  parseFloat(l.precio_unitario_pen),
      descuento_pct:        parseFloat(l.descuento_pct || 0),
      notas:                l.notas                || null,
      orden_linea:          i + 1,
    }))
    const { data, error } = await supabase.from(T_DETALLE).insert(rows).select()
    if (error) { console.error('[Web] addDetalleCotizacion:', error.message); return null }
    return data
  } catch (err) {
    console.error('[Web] addDetalleCotizacion:', err)
    return null
  }
}

/**
 * Obtener líneas de detalle de una cotización
 */
export async function getDetalleCotizacion(cotizacionId) {
  return await query(T_DETALLE, { cotizacion_id: cotizacionId })
}

// ============================================================================
// COMPROBANTE DE PAGO (Supabase Storage)
// ============================================================================

/**
 * Subir comprobante de pago y actualizar la cotización
 * @param {string} cotizacionId  UUID
 * @param {File}   archivo
 * @returns {Promise<{url: string|null, error: object|null}>}
 */
export async function subirComprobante(cotizacionId, archivo) {
  const ext  = archivo.name.split('.').pop().toLowerCase()
  const path = `comprobantes/${cotizacionId}/${Date.now()}.${ext}`

  const { url, error } = await uploadFile(BUCKET_PAGOS, path, archivo)
  if (error) return { url: null, error }

  await update(T_COTIZACION, cotizacionId, {
    comprobante_url:    url,
    comprobante_nombre: archivo.name,
    comprobante_fecha:  new Date().toISOString(),
    estado_pago:        'parcial',
    updated_at:         new Date().toISOString(),
  })

  return { url, error: null }
}

// ============================================================================
// CÁLCULOS
// ============================================================================

/**
 * Calcular subtotal, IGV (18%) y total del carrito
 * @param {Array} lineas [{ cantidad_kg, precio_unitario_pen, descuento_pct? }]
 */
export function calcularTotalesCarrito(lineas) {
  const subtotal = lineas.reduce((acc, l) => {
    const base = (l.cantidad_kg || 0) * (l.precio_unitario_pen || 0)
    const desc = base * ((l.descuento_pct || 0) / 100)
    return acc + base - desc
  }, 0)
  const subt   = parseFloat((subtotal / 1.18).toFixed(2))
  const total = parseFloat((subtotal).toFixed(2))
  const igv = parseFloat(subtotal - subt).toFixed(2)
  return {
    subtotal: parseFloat(subt.toFixed(2)),
    igv,
    total,
  }
}

/**
 * Validar RUC peruano (11 dígitos)
 */
export function validarRUC(ruc) {
  return /^\d{11}$/.test(ruc || '')
}

/**
 * Formatear moneda S/.
 */
export function formatCurrency(value, currency = 'PEN') {
  const num    = parseFloat(value) || 0
  const symbol = currency === 'USD' ? '$' : 'S/.'
  return `${symbol} ${num.toFixed(2)}`
}

/**
 * Formatear fecha a dd/mm/yyyy (locale Peru)
 */
export function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('es-PE', {
    year: 'numeric', month: '2-digit', day: '2-digit',
  })
}
