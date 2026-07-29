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
    cultura: 'Cultura Calima · Valle del Cauca',
    periodo: 'Período Ilama (1600 a.C. – 100 d.C.)',
    tecnica: 'Pasta fina, engobe claro, incisión geométrica',
    dimensiones: '⌀ 4.5 × 2.3 cm',
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

  // ── VOLANTE DE HUSO 2 · Tradición Muisca ─────────────────────────
  {
    id: 'volante-de-huso-2',
    nombre: 'Volante de Huso (Fusayola)',
    descripcion: 'Fusayola o volante de huso de morfología discoidal simple fabricada en cerámica utilitaria. Presenta perforación central cilíndrica para el paso del eje del huso, con desgaste superficial generalizado y pátina de alteración edáfica. Artefacto común en contextos domésticos de los Andes colombianos asociados a la actividad textil prehispánica y colonial temprana.',
    material: 'Cerámica',
    cultura: 'Tradición Muisca · Cundinamarca',
    periodo: 'Período Herrera a Tardío (500 a.C. – 1600 d.C.)',
    tecnica: 'Pasta semi-gruesa, cocción oxidante',
    dimensiones: '⌀ 4.4 × 2.4 cm',
    donante: '',
    modelUrl: 'models/volante-de-huso-2.glb',
    imagenes: [
      'images/volante-de-huso-2-1.jpg',
      'images/volante-de-huso-2-2.jpg',
      'images/volante-de-huso-2-3.jpg',
      'images/volante-de-huso-2-4.jpg',
      'images/volante-de-huso-2-5.jpg',
      'images/volante-de-huso-2-6.jpg',
      'images/volante-de-huso-2-7.jpg'
    ],
    video: null
  },

  // ── CUENCO MINIATURA · Tradición Malagana ────────────────────────
  {
    id: 'cuenco-1',
    nombre: 'Cuenco Miniatura con Engobe Rojo',
    descripcion: 'Cuenco cerámico miniatura de morfología semiesférica vinculado tipológicamente a contextos funerarios del suroccidente colombiano, asociado con la tradición Malagana en el Valle del Cauca. Presenta cuerpo subglobular, base convexa y acabado con engobe rojo característico de la región. Uso ritual u ofrendante dentro de ajuares funerarios tempranos.',
    material: 'Cerámica',
    cultura: 'Cultura Calima (Malagana) · Valle del Cauca',
    periodo: 'Período Malagana (200 a.C. – 400 d.C.)',
    tecnica: 'Pasta fina, cocción oxidante, engobe rojo monocromo',
    dimensiones: '⌀ 9.5 × 5.8 cm',
    donante: '',
    modelUrl: 'models/cuenco-1.glb',
    imagenes: [
      'images/cuenco-1-1.jpg',
      'images/cuenco-1-2.jpg',
      'images/cuenco-1-3.jpg',
      'images/cuenco-1-4.jpg',
      'images/cuenco-1-5.jpg'
    ],
    video: null
  }

  // ── JARRÓN 1 · Cultura Calima Ilama ──────────────────────────────
  ,{
    id: 'jarron-1',
    nombre: 'Vasija Globular con Cuello Cilíndrico',
    descripcion: 'Vasija cerámica globular con cuello cilíndrico e incisiones horizontales finas. Presenta engobe rojo-naranja característico de la alfarería fina Calima Ilama. Morfología y técnica incisa en el cuello son indicadores del período Ilama del suroccidente colombiano.',
    material: 'Cerámica',
    cultura: 'Cultura Calima Ilama · Valle del Cauca',
    periodo: 'Período Ilama (1500 a.C. – 100 a.C.)',
    tecnica: 'Pasta fina oxidante, desgrasante de cuarzo, incisión horizontal',
    dimensiones: '18 × ⌀ 15 cm',
    donante: '',
    modelUrl: 'models/jarron-1.glb',
    imagenes: [
      'images/jarron-1-1.jpg',
      'images/jarron-1-2.jpg',
      'images/jarron-1-3.jpg',
      'images/jarron-1-4.jpg',
      'images/jarron-1-5.jpg'
    ],
    video: null
  }

  // ── CUENCO 2 · Copa en Pedestal · Valle del Cauca ────────────────
  ,{
    id: 'cuenco-2',
    nombre: 'Copa en Pedestal de Cerámica',
    descripcion: 'Copa cerámica prehispánica en pedestal de paredes simples, atribuible al período Malagana de la región Calima. Pasta moderadamente burda con desgrasante de cuarzo y tiesto molido, característica del complejo Malagana de la llanura aluvial del río Cauca. Presenta manchas tafonómicas por exposición al fuego o sedimentos reductores.',
    material: 'Cerámica',
    cultura: 'Cultura Malagana · Valle del Cauca',
    periodo: 'Período Malagana (posiblemente 200 a.C. – 400 d.C.)',
    tecnica: 'Pasta burda, desgrasante de cuarzo y tiesto molido',
    dimensiones: 'Alt. aprox. 12 cm',
    donante: '',
    modelUrl: 'models/cuenco-2.glb',
    imagenes: [
      'images/cuenco-2-1.jpg',
      'images/cuenco-2-2.jpg',
      'images/cuenco-2-3.jpg',
      'images/cuenco-2-4.jpg',
      'images/cuenco-2-5.jpg',
      'images/cuenco-2-6.jpg'
    ],
    video: null
  }

  // ── CUENCO GLOBULAR CON ASAS · Calima Sonso ──────────────────────
  ,{
    id: 'cuenco-asas',
    nombre: 'Cuenco Globular con Asas Laterales',
    descripcion: 'Cuenco cerámico completo de morfología globular con dos asas opuestas, característico de las fases tardías de la región Calima (período Sonso). Presenta pasta de textura semigruesa con inclusiones visibles de desgrasante de cuarzo y tiesto molido, cocción en atmósfera oxidante y acabado superficial alisado con restos de engobe rojizo (Munsell 10R 5/6). Manufactura utilitaria orientada a actividades domésticas cotidianas. Estado de conservación con desgaste moderado por uso y trazas de intemperismo tafonómico compatibles con depósitos superficiales o contextos excavados en matriz arcillosa.',
    material: 'Cerámica',
    cultura: 'Cultura Calima · Valle del Cauca',
    periodo: 'Período Sonso',
    tecnica: 'Pasta semigruesa, desgrasante de cuarzo y tiesto molido, atmósfera oxidante, engobe rojizo alisado',
    dimensiones: 'Alt. 8 cm · ⌀ 19.1 cm · Peso no registrado',
    donante: '',
    modelUrl: 'models/cuenco-asas.glb',
    imagenes: [
      'images/cuenco-asas-1.jpg',
      'images/cuenco-asas-2.jpg',
      'images/cuenco-asas-3.jpg',
      'images/cuenco-asas-4.jpg',
      'images/cuenco-asas-5.jpg',
      'images/cuenco-asas-6.jpg'
    ],
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
