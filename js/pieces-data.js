import * as THREE from 'three';

export const PIECES = [

  // ── VOLANTE DE HUSO 1 · Cultura Calima ───────────────────────────
  {
    id: 'volante-de-uso',
    nombre: 'Volante de Huso (Fusayola)',
    procedencia: 'Cultura Calima, Valle del Cauca · Período Ilama (1600 a.C. – 100 d.C.)',
    descripcion: 'Fusayola o volante de huso prehispánico de la región Calima. Presenta morfología bicóncava con perforación central para montaje en varillas de huso destinadas al hilado. Decorada con incisiones de grecas escalonadas, punteado perimetral y líneas radiales, características estilísticas de las tradiciones alfareras tempranas del suroccidente colombiano. Estado de conservación excelente, con desgaste menor por uso en las superficies de fricción.',
    metadata: 'Material: Cerámica · Técnica: Pasta fina, engobe claro · Dimensiones: ⌀ 4.5 × 2.3 cm · Decoración: Incisión geométrica · Estado: Completo',
    color: 0x9b6b3c, roughness: 0.88, metalness: 0.04,
    imagenes: [
      'images/volante-de-uso-1.jpg',
      'images/volante-de-uso-2.jpg',
      'images/volante-de-uso-3.jpg',
      'images/volante-de-uso-4.jpg',
      'images/volante-de-uso-5.jpg',
      'images/volante-de-uso-6.jpg',
      'images/volante-de-uso-7.jpg'
    ],
    video: null,
    modelUrl: 'models/volante-de-uso.glb',
    restY: 1.19
  },

  // ── VOLANTE DE HUSO 2 · Tradición Muisca ─────────────────────────
  {
    id: 'volante-de-huso-2',
    nombre: 'Volante de Huso (Fusayola)',
    procedencia: 'Tradición Muisca, Cundinamarca · Período Herrera a Tardío (500 a.C. – 1600 d.C.)',
    descripcion: 'Fusayola o volante de huso de morfología discoidal simple fabricada en cerámica utilitaria. Presenta perforación central cilíndrica para el paso del eje del huso, con desgaste superficial generalizado y pátina de alteración edáfica. Artefacto común en contextos domésticos de los Andes colombianos asociados a la actividad textil prehispánica y colonial temprana. La pieza se encuentra completa a pesar del desgaste acumulado.',
    metadata: 'Material: Cerámica · Técnica: Pasta semi-gruesa, cocción oxidante · Dimensiones: ⌀ 4.4 × 2.4 cm · Estado: Completo',
    color: 0x8B3A1A, roughness: 0.90, metalness: 0.02,
    imagenes: [
      'images/volante-de-huso-2-1.jpg',
      'images/volante-de-huso-2-2.jpg',
      'images/volante-de-huso-2-3.jpg',
      'images/volante-de-huso-2-4.jpg',
      'images/volante-de-huso-2-5.jpg',
      'images/volante-de-huso-2-6.jpg',
      'images/volante-de-huso-2-7.jpg'
    ],
    video: null,
    modelUrl: 'models/volante-de-huso-2.glb',
    restY: 1.19
  },

  // ── CUENCO MINIATURA · Tradición Malagana ────────────────────────
  {
    id: 'cuenco-1',
    nombre: 'Cuenco Miniatura con Engobe Rojo',
    procedencia: 'Cultura Calima (Malagana), Valle del Cauca · Período Malagana (200 a.C. – 400 d.C.)',
    descripcion: 'Cuenco cerámico miniatura de morfología semiesférica vinculado tipológicamente a contextos funerarios del suroccidente colombiano, asociado con la tradición Malagana en el Valle del Cauca. Presenta cuerpo subglobular, base convexa y acabado con engobe rojo característico de la región. El estado de conservación muestra desgaste superficial moderado y pátinas de enterramiento compatibles con contextos de fosa. Uso ritual u ofrendante dentro de ajuares funerarios tempranos.',
    metadata: 'Material: Cerámica · Técnica: Pasta fina, cocción oxidante · Dimensiones: ⌀ 9.5 × 5.8 cm · Decoración: Engobe rojo monocromo · Estado: Completo',
    color: 0x8B2010, roughness: 0.85, metalness: 0.03,
    imagenes: [
      'images/cuenco-1-1.jpg',
      'images/cuenco-1-2.jpg',
      'images/cuenco-1-3.jpg',
      'images/cuenco-1-4.jpg',
      'images/cuenco-1-5.jpg'
    ],
    video: null,
    modelUrl: 'models/cuenco-1.glb',
    restY: 1.19
  },

  // ── JARRÓN 1 · Cultura Calima Ilama ──────────────────────────────
  {
    id: 'jarron-1',
    nombre: 'Vasija Globular con Cuello Cilíndrico',
    procedencia: 'Cultura Calima Ilama, Valle del Cauca · Período Ilama (1500 a.C. – 100 a.C.)',
    descripcion: 'Vasija cerámica globular con cuello cilíndrico e incisiones horizontales finas. Presenta engobe rojo-naranja característico de la alfarería fina de la tradición Calima Ilama del suroccidente colombiano. El cuerpo globular y el tratamiento inciso en el cuello son indicadores morfotecnológicos del período Ilama. Estado de conservación general bueno con desgastes superficiales propios de tafonomía de entierro.',
    metadata: 'Material: Cerámica · Técnica: Pasta fina oxidante, desgrasante de cuarzo · Dimensiones: 18 × ⌀ 15 cm · Decoración: Incisión horizontal en cuello, engobe rojo-naranja · Estado: Completo',
    color: 0x7A2A0A, roughness: 0.87, metalness: 0.03,
    imagenes: [
      'images/jarron-1-1.jpg',
      'images/jarron-1-2.jpg',
      'images/jarron-1-3.jpg',
      'images/jarron-1-4.jpg',
      'images/jarron-1-5.jpg'
    ],
    video: null,
    modelUrl: 'models/jarron-1.glb',
    restY: 1.19
  },

  // ── CUENCO 2 · Copa en Pedestal · Valle del Cauca ────────────────
  {
    id: 'cuenco-2',
    nombre: 'Copa en Pedestal de Cerámica',
    procedencia: 'Valle del Cauca, Colombia · Período Indeterminado (posiblemente Malagana)',
    descripcion: 'Copa cerámica prehispánica en pedestal de paredes simples sin decoración incisa, atribuible al período Malagana de la región Calima. La pasta moderadamente burda y arenosa, con desgrasante de cuarzo y tiesto molido, es característica del complejo Malagana de la llanura aluvial del río Cauca. Presenta manchas tafonómicas por exposición al fuego o contacto con sedimentos reductores. La base muestra anotaciones de inventario museográfico.',
    metadata: 'Material: Cerámica · Técnica: Pasta burda oxidante, desgrasante de cuarzo · Dimensiones: ⌀ 15.8 × 11.7 cm · Decoración: Ausente · Estado: Completo',
    color: 0xA0603A, roughness: 0.88, metalness: 0.02,
    imagenes: [
      'images/cuenco-2-1.jpg',
      'images/cuenco-2-2.jpg',
      'images/cuenco-2-3.jpg',
      'images/cuenco-2-4.jpg',
      'images/cuenco-2-5.jpg',
      'images/cuenco-2-6.jpg'
    ],
    video: null,
    modelUrl: 'models/cuenco-2.glb',
    restY: 1.19
  },

  // ── JARRÓN 3 · Vasija Globular con Asas Tubulares ────────────────
  {
    id: 'jarron-3',
    nombre: 'Vasija Globular con Asas Tubulares',
    procedencia: 'Posiblemente Calima Sonso, Valle del Cauca · Período Tardío (tentativo)',
    descripcion: 'Vasija cerámica globular pequeña con cuello corto y asas laterales tubulares perforadas, típica de contextos domésticos tardíos. Pasta mediana con desgrasante de cuarzo y arena fina, cocción oxidante con núcleo visible, alisado burdo y engobe rojo deslavado (Munsell 10R 4/6). Producción utilitaria, sin decoración plástica compleja. Estado con fisuras y fracturas menores en borde y cuerpo.',
    metadata: 'Material: Cerámica · Técnica: Pasta mediana, engobe rojo deslavado · Dimensiones: Alt. 9.6 × ⌀ 12.7 cm · Estado: Completo con fisuras · Registro ICANH',
    color: 0x8B2A10, roughness: 0.90, metalness: 0.02,
    imagenes: [
      'images/jarron-3-1.jpg',
      'images/jarron-3-2.jpg',
      'images/jarron-3-3.jpg',
      'images/jarron-3-4.jpg',
      'images/jarron-3-5.jpg',
      'images/jarron-3-6.jpg'
    ],
    video: null,
    modelUrl: 'models/jarron-3.glb',
    restY: 1.19
  },

  // ── CUENCO CARENADO · Calima Yotoco ──────────────────────────────
  {
    id: 'cuenco-carenado',
    nombre: 'Cuenco Carenado Utilitario de Cuello Evertido',
    procedencia: 'Calima Yotoco, Valle del Cauca · Período Yotoco (100 a.C. – 1300 d.C.)',
    descripcion: 'Vasija subglobular con carenación marcada en el cuerpo y cuello cónico corto evertido. Pasta semi-fina con desgrasante de cuarzo y arena, cocción oxidante incompleta. Superficie alisada rústica con engobe Munsell 7.5YR 5/4 (brown). Manufactura utilitaria doméstica. Estado completo con leves desgastes en el borde.',
    metadata: 'Material: Cerámica · Técnica: Pasta semi-fina, cocción oxidante · Dimensiones: Alt. 16.9 × ⌀ 20.5 cm · Estado: Completo · Registro ICANH',
    color: 0x8B5520, roughness: 0.87, metalness: 0.02,
    imagenes: [],
    video: null,
    modelUrl: 'models/cuenco-carenado.glb',
    restY: 1.19
  },

  // ── COPA EN PEDESTAL · Calima Malagana ───────────────────────────
  {
    id: 'copa-1',
    nombre: 'Copa en Pedestal de Paredes Simples',
    procedencia: 'Cultura Calima (Malagana), Valle del Cauca · Período Malagana (200 a.C. – 400 d.C.)',
    descripcion: 'Copa cerámica en pedestal con cuerpo carenado y base cóncava. Pasta burda y arenosa con desgrasante de cuarzo, cocción oxidante y engobe rojo-naranja (Munsell 10R 4/6). Morfología utilitaria y ritual de ajuares funerarios Malagana. Estado completo con pátinas de entierro.',
    metadata: 'Material: Cerámica · Técnica: Pasta burda, engobe rojo-naranja · Dimensiones: Alt. 10.8 × ⌀ 19.8 cm · Estado: Completo · Registro ICANH',
    color: 0x9B3A18, roughness: 0.87, metalness: 0.03,
    imagenes: [
      'images/copa-1-1.jpg',
      'images/copa-1-2.jpg',
      'images/copa-1-3.jpg',
      'images/copa-1-4.jpg',
      'images/copa-1-5.jpg'
    ],
    video: null,
    modelUrl: 'models/copa-1.glb',
    restY: 1.19
  },

  // ── FIGURA 1 · Alcarraza Antropomorfa · Calima Ilama ─────────────
  {
    id: 'figura-1',
    nombre: 'Alcarraza Antropomorfa Sentada con Tocado',
    procedencia: 'Cultura Calima Ilama, Valle del Cauca · Período Ilama (1600 a.C. – 100 d.C.)',
    descripcion: 'Alcarraza cerámica figurativa que representa una figura sentada con cuerpo globular, cabeza modelada con rasgos realistas y tocado incisado con líneas paralelas características del período Ilama. La iconografía presenta simbolismo chamánico vinculado a transformaciones rituales y ofrendas funerarias. Acabado alisado con engobe rojo-naranja (Munsell 10R 5/6) y reducciones locales en cocción. Estado de conservación completo con abrasión moderada y concreciones de tierra en intersticios.',
    metadata: 'Material: Cerámica · Técnica: Pasta fina oxidante, desgrasante de cuarzo y tiesto molido · Dimensiones: Alt. 33.5 × ⌀ 21.7 cm · Decoración: Incisiones paralelas en tocado, apliques modelados · Estado: Completo · Registro ICANH',
    color: 0x9B5030, roughness: 0.88, metalness: 0.03,
    imagenes: [
      'images/figura-1-1.jpg',
      'images/figura-1-2.jpg',
      'images/figura-1-3.jpg',
      'images/figura-1-4.jpg',
      'images/figura-1-5.jpg',
      'images/figura-1-6.jpg',
      'images/figura-1-7.jpg'
    ],
    video: null,
    modelUrl: 'models/figura-1.glb',
    restY: 1.19
  },

  // ── CUENCO GLOBULAR CON ASAS · Calima Sonso ──────────────────────
  {
    id: 'cuenco-asas',
    nombre: 'Cuenco Globular con Asas Laterales',
    procedencia: 'Cultura Calima, Valle del Cauca · Período Sonso',
    descripcion: 'Cuenco cerámico completo de morfología globular con dos asas opuestas, característico del período Sonso Calima. Pasta semigruesa con desgrasante de cuarzo y tiesto molido, cocción oxidante. Acabado superficial alisado con engobe rojizo (Munsell 10R 5/6). Manufactura utilitaria doméstica. Estado de conservación con desgaste moderado por uso y trazas de intemperismo tafonómico.',
    metadata: 'Material: Cerámica · Técnica: Pasta semigruesa, engobe rojizo · Dimensiones: Alt. 8 × ⌀ 19.1 cm · Estado: Completo · Registro ICANH',
    color: 0x8B4020, roughness: 0.90, metalness: 0.02,
    imagenes: [
      'images/cuenco-asas-1.jpg',
      'images/cuenco-asas-2.jpg',
      'images/cuenco-asas-3.jpg',
      'images/cuenco-asas-4.jpg',
      'images/cuenco-asas-5.jpg',
      'images/cuenco-asas-6.jpg'
    ],
    video: null,
    modelUrl: 'models/cuenco-asas.glb',
    restY: 1.19
  }

];

export function getPieceById(id) {
  return PIECES.find(function(p) { return p.id === id; }) || null;
}

// ── Procedural fallback (se muestra si el GLB aún no cargó) ──────────
function makeMat(piece) {
  return new THREE.MeshStandardMaterial({
    color: piece.color,
    roughness: piece.roughness,
    metalness: piece.metalness
  });
}

function buildVolante(piece) {
  var g   = new THREE.Group();
  var mat = makeMat(piece);
  var drk = new THREE.MeshStandardMaterial({ color: 0x4a2a10, roughness: 0.95 });
  g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.44, 0.13, 18), mat));
  g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.18, 12), drk));
  [0.18, 0.28, 0.38].forEach(function(r) {
    var ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.009, 5, 18), drk);
    ring.rotation.x = Math.PI / 2;
    g.add(ring);
  });
  for (var i = 0; i < 8; i++) {
    var a   = (i / 8) * Math.PI * 2;
    var dot = new THREE.Mesh(new THREE.SphereGeometry(0.025, 6, 5), drk);
    dot.position.set(Math.cos(a) * 0.33, 0.07, Math.sin(a) * 0.33);
    g.add(dot);
  }
  return g;
}

function buildCuenco(piece) {
  var g   = new THREE.Group();
  var mat = makeMat(piece);
  var pts = [];
  for (var i = 0; i <= 14; i++) {
    var a = (i / 14) * Math.PI * 0.65;
    pts.push(new THREE.Vector2(Math.sin(a) * 0.48, -Math.cos(a) * 0.32 + 0.08));
  }
  g.add(new THREE.Mesh(new THREE.LatheGeometry(pts, 14), mat));
  return g;
}

function buildJarron(piece) {
  var g   = new THREE.Group();
  var mat = makeMat(piece);
  var pts = [
    new THREE.Vector2(0,    -0.55),
    new THREE.Vector2(0.08, -0.52),
    new THREE.Vector2(0.42, -0.30),
    new THREE.Vector2(0.48,  0.00),
    new THREE.Vector2(0.42,  0.28),
    new THREE.Vector2(0.22,  0.38),
    new THREE.Vector2(0.14,  0.44),
    new THREE.Vector2(0.13,  0.58),
    new THREE.Vector2(0.16,  0.62),
    new THREE.Vector2(0.16,  0.70)
  ];
  g.add(new THREE.Mesh(new THREE.LatheGeometry(pts, 14), mat));
  return g;
}

function buildCopa(piece) {
  var g   = new THREE.Group();
  var mat = makeMat(piece);
  // Bowl
  var bowlPts = [];
  for (var i = 0; i <= 12; i++) {
    var a = (i / 12) * Math.PI * 0.68;
    bowlPts.push(new THREE.Vector2(Math.sin(a) * 0.46, -Math.cos(a) * 0.34 + 0.22));
  }
  g.add(new THREE.Mesh(new THREE.LatheGeometry(bowlPts, 14), mat));
  // Pedestal stem
  var stemPts = [
    new THREE.Vector2(0.08, -0.32),
    new THREE.Vector2(0.10, -0.20),
    new THREE.Vector2(0.07, -0.10),
    new THREE.Vector2(0.07,  0.00)
  ];
  g.add(new THREE.Mesh(new THREE.LatheGeometry(stemPts, 10), mat));
  // Base disc
  g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.20, 0.22, 0.055, 14), mat));
  return g;
}

function buildCuencoAsas(piece) {
  var g   = new THREE.Group();
  var mat = makeMat(piece);
  var pts = [];
  for (var i = 0; i <= 14; i++) {
    var a = (i / 14) * Math.PI * 0.88;
    pts.push(new THREE.Vector2(Math.sin(a) * 0.52, -Math.cos(a) * 0.44 + 0.04));
  }
  g.add(new THREE.Mesh(new THREE.LatheGeometry(pts, 14), mat));
  [-1, 1].forEach(function(side) {
    var h = new THREE.Mesh(new THREE.TorusGeometry(0.10, 0.032, 5, 10), mat);
    h.position.set(side * 0.56, 0.06, 0);
    h.rotation.y = Math.PI / 2;
    g.add(h);
  });
  return g;
}

function buildCarenado(piece) {
  var g   = new THREE.Group();
  var mat = makeMat(piece);
  // Lower body: wide globular base up to carena
  var lower = [];
  for (var i = 0; i <= 10; i++) {
    var a = (i / 10) * Math.PI * 0.58;
    lower.push(new THREE.Vector2(Math.sin(a) * 0.56, -Math.cos(a) * 0.38 - 0.04));
  }
  g.add(new THREE.Mesh(new THREE.LatheGeometry(lower, 14), mat));
  // Upper body: narrows toward neck
  var upper = [
    new THREE.Vector2(0.56,  0.18),
    new THREE.Vector2(0.48,  0.30),
    new THREE.Vector2(0.28,  0.38),
    new THREE.Vector2(0.18,  0.42),
    new THREE.Vector2(0.16,  0.46),
    new THREE.Vector2(0.20,  0.52)
  ];
  g.add(new THREE.Mesh(new THREE.LatheGeometry(upper, 14), mat));
  return g;
}

function buildFigura(piece) {
  var g   = new THREE.Group();
  var mat = makeMat(piece);
  var tPts = [];
  for (var i = 0; i <= 10; i++) {
    var a = (i / 10) * Math.PI * 0.85;
    tPts.push(new THREE.Vector2(Math.sin(a) * 0.32, -Math.cos(a) * 0.38 + 0.04));
  }
  g.add(new THREE.Mesh(new THREE.LatheGeometry(tPts, 14), mat));
  var head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 10), mat);
  head.position.y = 0.52;
  g.add(head);
  var tocado = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.30, 14), mat);
  tocado.position.y = 0.76;
  g.add(tocado);
  return g;
}

var BUILDERS = {
  'volante-de-uso':    buildVolante,
  'volante-de-huso-2': buildVolante,
  'cuenco-1':          buildCuenco,
  'jarron-1':          buildJarron,
  'jarron-3':          buildCuencoAsas,
  'cuenco-2':          buildCopa,
  'cuenco-carenado':   buildCarenado,
  'copa-1':            buildCopa,
  'cuenco-asas':       buildCuencoAsas,
  'figura-1':          buildFigura
};

export function buildArtifact(piece, scale) {
  scale = scale || 1;
  var fn = BUILDERS[piece.id];
  var mesh = fn
    ? fn(piece)
    : new THREE.Mesh(
        new THREE.SphereGeometry(0.45, 14, 10),
        new THREE.MeshStandardMaterial({ color: piece.color, roughness: piece.roughness, metalness: piece.metalness })
      );
  mesh.scale.setScalar(scale);
  return mesh;
}
