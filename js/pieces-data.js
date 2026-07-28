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
    imagenes: [],
    video: null,
    modelUrl: 'models/volante-de-huso-2.glb',
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
  g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.44, 0.13, 48), mat));
  g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.18, 20), drk));
  [0.18, 0.28, 0.38].forEach(function(r) {
    var ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.009, 6, 40), drk);
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

var BUILDERS = {
  'volante-de-uso':    buildVolante,
  'volante-de-huso-2': buildVolante
};

export function buildArtifact(piece, scale) {
  scale = scale || 1;
  var fn = BUILDERS[piece.id];
  var mesh = fn
    ? fn(piece)
    : new THREE.Mesh(
        new THREE.SphereGeometry(0.45, 24, 16),
        new THREE.MeshStandardMaterial({ color: piece.color, roughness: piece.roughness, metalness: piece.metalness })
      );
  mesh.scale.setScalar(scale);
  return mesh;
}
