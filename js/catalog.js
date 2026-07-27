/**
 * catalog.js  ·  Catálogo central de la colección del Museo Seminario
 * ─────────────────────────────────────────────────────────────────────
 * Este archivo es la ÚNICA fuente de verdad para los datos de las piezas.
 * Úsalo para agregar, editar o eliminar piezas de la colección.
 *
 * Campos por pieza:
 *   id         → identificador único (sin espacios, sin tildes)
 *   nombre     → nombre completo de la pieza
 *   descripcion → texto largo de descripción
 *   material   → material principal
 *   periodo    → época o fecha estimada
 *   donante    → nombre del padre de familia donante (opcional)
 *   modelUrl   → ruta al archivo .glb  (ej: 'models/pieza-001.glb')
 *                Usa null si aún no tienes el modelo listo.
 *   imagenes   → array de URLs de fotos
 *   video      → URL del video (null si no hay)
 *
 * ¿Cómo agregar una pieza nueva?
 *   1. Copia uno de los objetos de abajo
 *   2. Cambia el id (debe ser único)
 *   3. Llena los demás campos
 *   4. Agrega el archivo .glb en la carpeta /models/
 */

var MUSEUM_CATALOG = [

  // ── VOLANTE DE USO ────────────────────────────────────────────────
  {
    id: 'volante-de-uso',
    nombre: 'Volante de Huso (Fusayola)',
    descripcion: 'Fusayola o volante de huso prehispánico de la región Calima. Presenta morfología bicóncava con perforación central para montaje en varillas de huso destinadas al hilado. Decorada con incisiones de grecas escalonadas, punteado perimetral y líneas radiales, características estilísticas de las tradiciones alfareras tempranas del suroccidente colombiano. Estado de conservación excelente, con desgaste menor por uso en las superficies de fricción.',
    material: 'Cerámica',
    periodo: 'Período Ilama (1600 a.C. – 100 d.C.)',
    donante: '',
    modelUrl: 'models/volante-de-uso.glb',
    imagenes: [
      'images/volante-de-uso-1.jpg',
      'images/volante-de-uso-2.jpg',
      'images/volante-de-uso-3.jpg',
      'images/volante-de-uso-4.jpg',
      'images/volante-de-uso-5.jpg',
      'images/volante-de-uso-6.jpg',
      'images/volante-de-uso-7.jpg'
    ],
    video: null
  },

  // ── PIEZA 002 ─────────────────────────────────────────────────────
  {
    id: 'pieza-002',
    nombre: 'Pieza 002',
    descripcion: 'Descripción de la pieza. Aquí va la historia, origen y significado del objeto donado al museo.',
    material: 'Por definir',
    periodo: 'Por definir',
    donante: '',
    modelUrl: null,
    imagenes: [],
    video: null
  },

  // ── PIEZA 003 ─────────────────────────────────────────────────────
  {
    id: 'pieza-003',
    nombre: 'Pieza 003',
    descripcion: 'Descripción de la pieza. Aquí va la historia, origen y significado del objeto donado al museo.',
    material: 'Por definir',
    periodo: 'Por definir',
    donante: '',
    modelUrl: null,
    imagenes: [],
    video: null
  },

  // ── PIEZA 004 ─────────────────────────────────────────────────────
  {
    id: 'pieza-004',
    nombre: 'Pieza 004',
    descripcion: 'Descripción de la pieza. Aquí va la historia, origen y significado del objeto donado al museo.',
    material: 'Por definir',
    periodo: 'Por definir',
    donante: '',
    modelUrl: null,
    imagenes: [],
    video: null
  },

  // ── PIEZA 005 ─────────────────────────────────────────────────────
  {
    id: 'pieza-005',
    nombre: 'Pieza 005',
    descripcion: 'Descripción de la pieza. Aquí va la historia, origen y significado del objeto donado al museo.',
    material: 'Por definir',
    periodo: 'Por definir',
    donante: '',
    modelUrl: null,
    imagenes: [],
    video: null
  },

  // ── PIEZA 006 ─────────────────────────────────────────────────────
  {
    id: 'pieza-006',
    nombre: 'Pieza 006',
    descripcion: 'Descripción de la pieza. Aquí va la historia, origen y significado del objeto donado al museo.',
    material: 'Por definir',
    periodo: 'Por definir',
    donante: '',
    modelUrl: null,
    imagenes: [],
    video: null
  },

  // ── PIEZA 007 ─────────────────────────────────────────────────────
  {
    id: 'pieza-007',
    nombre: 'Pieza 007',
    descripcion: 'Descripción de la pieza. Aquí va la historia, origen y significado del objeto donado al museo.',
    material: 'Por definir',
    periodo: 'Por definir',
    donante: '',
    modelUrl: null,
    imagenes: [],
    video: null
  },

  // ── PIEZA 008 ─────────────────────────────────────────────────────
  {
    id: 'pieza-008',
    nombre: 'Pieza 008',
    descripcion: 'Descripción de la pieza. Aquí va la historia, origen y significado del objeto donado al museo.',
    material: 'Por definir',
    periodo: 'Por definir',
    donante: '',
    modelUrl: null,
    imagenes: [],
    video: null
  },

  // ── PIEZA 009 ─────────────────────────────────────────────────────
  {
    id: 'pieza-009',
    nombre: 'Pieza 009',
    descripcion: 'Descripción de la pieza. Aquí va la historia, origen y significado del objeto donado al museo.',
    material: 'Por definir',
    periodo: 'Por definir',
    donante: '',
    modelUrl: null,
    imagenes: [],
    video: null
  },

  // ── PIEZA 010 ─────────────────────────────────────────────────────
  {
    id: 'pieza-010',
    nombre: 'Pieza 010',
    descripcion: 'Descripción de la pieza. Aquí va la historia, origen y significado del objeto donado al museo.',
    material: 'Por definir',
    periodo: 'Por definir',
    donante: '',
    modelUrl: null,
    imagenes: [],
    video: null
  }

  // ── AGREGA MÁS PIEZAS AQUÍ ────────────────────────────────────────
  // Sigue el mismo patrón. El sistema soporta hasta 50 (o más).

];

// ── Función auxiliar ─────────────────────────────────────────────────
function getCatalogPiece(id) {
  for (var i = 0; i < MUSEUM_CATALOG.length; i++) {
    if (MUSEUM_CATALOG[i].id === id) return MUSEUM_CATALOG[i];
  }
  return null;
}
