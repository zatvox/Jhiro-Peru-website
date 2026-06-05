// ============================================================================
// WEB-CLIENT.JS - Cliente Supabase base para JHIRO Web Pública
// Patrón idéntico a supabase-client.js del ERP
// Ruta: assets/js/web-client.js
// ============================================================================

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.3/+esm'
import { SUPABASE_CONFIG } from './web-config.js'

export const supabase = createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.ANON_KEY)

// ============================================================================
// HELPERS GENÉRICOS — misma interfaz que supabase-client.js del ERP
// ============================================================================

/**
 * Obtener todos los registros activos de una tabla web
 */
export async function getAll(table) {
  try {
    const { data, error } = await supabase.from(table).select('*')
    if (error) { console.error(`[Web] Error getAll ${table}:`, error.message); return [] }
    return data || []
  } catch (err) {
    console.error('[Web] getAll:', err)
    return []
  }
}

/**
 * Obtener un registro por ID
 */
export async function getById(table, id) {
  try {
    const { data, error } = await supabase.from(table).select('*').eq('id', id).single()
    if (error) { console.error(`[Web] Error getById ${table}:`, error.message); return null }
    return data
  } catch (err) {
    console.error('[Web] getById:', err)
    return null
  }
}

/**
 * Insertar un nuevo registro
 */
export async function insert(table, data) {
  try {
    const { data: result, error } = await supabase.from(table).insert([data]).select()
    if (error) { console.error(`[Web] Error insert ${table}:`, error.message); return null }
    return result ? result[0] : null
  } catch (err) {
    console.error('[Web] insert:', err)
    return null
  }
}

/**
 * Actualizar un registro por ID
 */
export async function update(table, id, data) {
  try {
    const { data: result, error } = await supabase.from(table).update(data).eq('id', id).select()
    if (error) { console.error(`[Web] Error update ${table}:`, error.message); return null }
    return result ? result[0] : null
  } catch (err) {
    console.error('[Web] update:', err)
    return null
  }
}

/**
 * Query con filtros clave=valor
 */
export async function query(table, filters = {}) {
  try {
    let q = supabase.from(table).select('*')
    Object.entries(filters).forEach(([key, val]) => { q = q.eq(key, val) })
    const { data, error } = await q
    if (error) { console.error(`[Web] Error query ${table}:`, error.message); return [] }
    return data || []
  } catch (err) {
    console.error('[Web] query:', err)
    return []
  }
}

/**
 * Upsert — insertar o actualizar según campo de conflicto
 */
export async function upsert(table, data, onConflict = 'id') {
  try {
    const { data: result, error } = await supabase
      .from(table)
      .upsert(data, { onConflict })
      .select()
      .single()
    if (error) { console.error(`[Web] Error upsert ${table}:`, error.message); return null }
    return result
  } catch (err) {
    console.error('[Web] upsert:', err)
    return null
  }
}

/**
 * Subir archivo a Supabase Storage
 * @param {string} bucket   Nombre del bucket, ej: 'jhiro-pagos'
 * @param {string} path     Ruta dentro del bucket
 * @param {File}   file     Archivo a subir
 * @returns {Promise<{url: string|null, error: object|null}>}
 */
export async function uploadFile(bucket, path, file) {
  try {
    const { error } = await supabase.storage.from(bucket).upload(path, file, { upsert: true })
    if (error) { console.error('[Web] Error uploadFile:', error.message); return { url: null, error } }
    const { data: { publicUrl } } = supabase.storage.from(bucket).getPublicUrl(path)
    return { url: publicUrl, error: null }
  } catch (err) {
    console.error('[Web] uploadFile:', err)
    return { url: null, error: err }
  }
}
