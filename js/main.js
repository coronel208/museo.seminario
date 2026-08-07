import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader }  from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { PIECES, getPieceById, buildArtifact } from './pieces-data.js';

var isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth <= 768;

var _CDN_BASE = 'https://cdn.jsdelivr.net/gh/coronel208/museo.seminario@main/';
function _cdnUrl(url) { return (url && !/^https?:\/\//.test(url)) ? _CDN_BASE + url : url; }

var _draco = new DRACOLoader();
_draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
function makeGLTF() { var l = new GLTFLoader(); l.setDRACOLoader(_draco); return l; }

/* ── Page loading overlay ────────────────────────────────────────── */
var _pgOv  = document.getElementById('col-loading');
var _pgBar = document.getElementById('col-loading-bar');
var _pgHidden = false;
function _pgHide() {
  if (_pgHidden) return; _pgHidden = true;
  if (!_pgOv) return;
  _pgOv.style.transition = 'opacity .5s';
  _pgOv.style.opacity = '0';
  setTimeout(function() { _pgOv.style.display = 'none'; }, 500);
}
if (_pgBar) { requestAnimationFrame(function() { _pgBar.style.transition = 'width 1s ease'; _pgBar.style.width = '100%'; }); }
setTimeout(_pgHide, 1200);

/* ── Loading overlay for modal 3D ───────────────────────────────── */
(function() {
  var s = document.createElement('style');
  s.textContent = '@keyframes glb-sw{0%{left:-45%}100%{left:100%}}';
  document.head.appendChild(s);
})();
var _mLoadOv = null;
function showMLoad() {
  if (!_mLoadOv) {
    _mLoadOv = document.createElement('div');
    _mLoadOv.style.cssText = 'position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.8rem;background:#0d0f14;z-index:5;';
    _mLoadOv.innerHTML = '<span style="color:#a99e8c;font-size:.78rem;letter-spacing:.05em;">Cargando modelo 3D…</span>'
      + '<div style="width:160px;height:2px;background:rgba(212,175,55,.15);border-radius:2px;overflow:hidden;position:relative">'
      + '<div style="position:absolute;height:100%;width:45%;background:linear-gradient(90deg,#c8a832,#f0d060);border-radius:2px;animation:glb-sw 1.3s linear infinite"></div></div>';
    mCanvas.parentElement.style.position = 'relative';
    mCanvas.parentElement.appendChild(_mLoadOv);
  }
  _mLoadOv.style.display = 'flex';
}
function hideMLoad() { if (_mLoadOv) _mLoadOv.style.display = 'none'; }


/* ── Per-card renderers — lazy create/destroy, max 10 activos ────── */
var _MAX_RDRS = 10;
var _nActive  = 0;
var _pending  = [];

function _createRdr(entry) {
  _nActive++;
  var rdr = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'low-power' });
  var W = entry.cont.clientWidth || 300;
  rdr.setSize(W, 220);
  rdr.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  rdr.toneMapping = THREE.ACESFilmicToneMapping;
  rdr.toneMappingExposure = 1.1;
  rdr.domElement.style.cssText = 'width:100%;height:100%;display:block;';
  entry.cont.appendChild(rdr.domElement);
  entry.rdr = rdr;
  entry.cam.aspect = W / 220;
  entry.cam.updateProjectionMatrix();
  if (entry.piece.modelUrl && !entry.modelLoaded) {
    makeGLTF().load(entry.piece.modelUrl, function(gltf) {
      if (!entry.rdr) return;
      var m = gltf.scene;
      var bbox = new THREE.Box3().setFromObject(m);
      var sz   = bbox.getSize(new THREE.Vector3());
      var sc2  = 1.6 / (Math.max(sz.x, sz.y, sz.z) || 1);
      m.scale.setScalar(sc2);
      var ctr  = bbox.getCenter(new THREE.Vector3());
      m.position.set(-ctr.x * sc2, -ctr.y * sc2, -ctr.z * sc2);
      while (entry.mg.children.length) entry.mg.remove(entry.mg.children[0]);
      entry.mg.add(m);
      entry.modelLoaded = true;
    });
  }
  (function loop() {
    if (!entry.rdr) return;
    entry.rafId = requestAnimationFrame(loop);
    entry.mg.rotation.y += 0.007;
    entry.rdr.render(entry.sc, entry.cam);
  })();
}

function _destroyRdr(entry) {
  if (!entry.rdr) return;
  cancelAnimationFrame(entry.rafId); entry.rafId = null;
  entry.rdr.dispose();
  if (entry.rdr.domElement.parentNode) entry.rdr.domElement.parentNode.removeChild(entry.rdr.domElement);
  entry.rdr = null;
  _nActive--;
  if (_pending.length) _createRdr(_pending.shift());
}

/* ── Grid + Pagination ───────────────────────────────────────────── */
var grid = document.getElementById('pieces-grid');
var _PAGE_SIZE  = 10;
var _curPage    = 1;
var _totalPages = Math.ceil(PIECES.length / _PAGE_SIZE);
var _allEntries = [];

function _destroyAll() {
  _pending.length = 0;
  _allEntries.forEach(function(e) {
    if (e.killTimer) { clearTimeout(e.killTimer); e.killTimer = null; }
    if (e.rafId)     { cancelAnimationFrame(e.rafId); e.rafId = null; }
    if (e.rdr) {
      e.rdr.dispose();
      if (e.rdr.domElement.parentNode) e.rdr.domElement.parentNode.removeChild(e.rdr.domElement);
      e.rdr = null;
    }
  });
  _allEntries = [];
  _nActive = 0;
}

function _renderPagination() {
  var pag = document.getElementById('paginacion');
  if (!pag) return;
  pag.innerHTML = '';
  var n = _curPage;
  function mkBtn(html, page, cls) {
    var b = document.createElement('button');
    b.className = 'pag-btn' + (cls ? ' ' + cls : '');
    b.innerHTML = html;
    b.addEventListener('click', function() { _goPage(page); });
    return b;
  }
  if (n > 1) pag.appendChild(mkBtn('<i class="fas fa-chevron-left"></i>', n - 1, 'pag-arrow'));
  for (var i = 1; i <= _totalPages; i++) {
    pag.appendChild(mkBtn(i, i, i === n ? 'pag-active' : ''));
  }
  if (n < _totalPages) pag.appendChild(mkBtn('<i class="fas fa-chevron-right"></i>', n + 1, 'pag-arrow'));
}

function spawnPreview(piece) {
  var cont = document.getElementById('c3d-' + piece.id);
  if (!cont) return;

  var _prevSrc = piece.previewImg || (piece.imagenes && piece.imagenes[0]);
  if (_prevSrc) {
    var img = document.createElement('img');
    img.src = _prevSrc;
    img.style.cssText = 'width:100%;height:220px;object-fit:cover;display:block;border-radius:8px 8px 0 0;';
    cont.appendChild(img);
  } else {
    cont.style.cssText = 'height:220px;background:#1a1a1a;';
  }
  return;
  sc.background = new THREE.Color(0x181a1e);
  var cam = new THREE.PerspectiveCamera(38, (cont.clientWidth || 300) / 220, 0.05, 60);
  cam.position.set(0, 0.4, 2.6);
  sc.add(new THREE.AmbientLight(0x404050, 1.1));
  var dl = new THREE.DirectionalLight(0xfff4dd, 2.2); dl.position.set(2, 4, 2); sc.add(dl);
  var fl = new THREE.PointLight(0x446688, 0.4, 8); fl.position.set(-2, 1, -1); sc.add(fl);
  var mg = new THREE.Group(); mg.position.y = -0.05; sc.add(mg);
  if (!piece.modelUrl) mg.add(buildArtifact(piece, 0.92));
  var entry = { sc: sc, cam: cam, mg: mg, cont: cont, piece: piece,
                rdr: null, rafId: null, modelLoaded: false, killTimer: null };
  _allEntries.push(entry);
  if (_nActive < _MAX_RDRS) _createRdr(entry);
  else _pending.push(entry);
}

function _goPage(n) {
  if (n < 1 || n > _totalPages) return;
  _curPage = n;
  _destroyAll();
  grid.innerHTML = '';
  var start = (n - 1) * _PAGE_SIZE;
  var pagePieces = PIECES.slice(start, start + _PAGE_SIZE);
  pagePieces.forEach(function(piece) {
    var card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = '<div class="card-3d" id="c3d-' + piece.id + '"></div>'
      + '<div class="card-content"><h3>' + piece.nombre + '</h3><p>' + piece.procedencia + '</p></div>';
    card.addEventListener('click', function() { openModal(piece.id); });
    grid.appendChild(card);
  });
  requestAnimationFrame(function() {
    pagePieces.forEach(function(piece) { spawnPreview(piece); });
  });
  _renderPagination();
  if (n > 1) window.scrollTo({ top: 0, behavior: 'smooth' });
}

_goPage(1);


/* ── Modal setup ─────────────────────────────────────────────────── */
var modal     = document.getElementById('piece-modal');
var closeBtn  = document.querySelector('.close');
var mCanvas   = document.getElementById('modal-canvas');
var slideWrap = document.getElementById('slide-wrap');
var slideImg  = document.getElementById('slide-img');
var slidePrev = document.getElementById('slide-prev');
var slideNext = document.getElementById('slide-next');
var slideDots = document.getElementById('slide-dots');
var qrWrap    = document.getElementById('qr-wrap');
var btn3d     = document.getElementById('view-3d');
var btnImg    = document.getElementById('view-images');
var btnQr     = document.getElementById('view-qr');

var currentPiece = null;
var slideIndex   = 0;
var mRdr, mSc, mCam, mCtrl, mMesh, mAnimId;

/* ── Three.js modal renderer ─────────────────────────────────────── */
mSc  = new THREE.Scene();
mSc.background = new THREE.Color(0x0d0f14);
mCam = new THREE.PerspectiveCamera(42, 1, 0.05, 100);
mCam.position.set(0, 0.5, 3);

mRdr = new THREE.WebGLRenderer({ canvas: mCanvas, antialias: !isMobile, powerPreference: 'high-performance' });
mRdr.setPixelRatio(isMobile ? Math.min(window.devicePixelRatio, 1) : Math.min(window.devicePixelRatio, 2));
mRdr.toneMapping = THREE.ACESFilmicToneMapping;
mRdr.toneMappingExposure = 1.8;

// Very bright, flat lighting — no dark shadows on artifacts
mSc.add(new THREE.AmbientLight(0xffffff, 3.0));
var kl = new THREE.DirectionalLight(0xffffff, 1.4); kl.position.set(3, 5, 3); mSc.add(kl);
var fl = new THREE.DirectionalLight(0xffffff, 1.2); fl.position.set(-3, 2, -2); mSc.add(fl);
var bl = new THREE.DirectionalLight(0xfff8e0, 0.8); bl.position.set(0, -3, 2); mSc.add(bl);  // bottom fill
var rl = new THREE.PointLight(0xd4af37, 1.2, 14);  rl.position.set(0, 4, -3);  mSc.add(rl);

mCtrl = new OrbitControls(mCam, mCanvas);
mCtrl.enableDamping   = true;
mCtrl.autoRotate      = true;
mCtrl.autoRotateSpeed = 1.4;
mCtrl.minDistance     = 0.8;
mCtrl.maxDistance     = 6;
mCtrl.target.set(0, 0.1, 0);

function resizeMRdr() {
  var w = mCanvas.clientWidth, h = mCanvas.clientHeight;
  if (!w || !h) return;
  mRdr.setSize(w, h, false);
  mCam.aspect = w / h;
  mCam.updateProjectionMatrix();
}

function animM() {
  mAnimId = requestAnimationFrame(animM);
  mCtrl.update();
  resizeMRdr();
  mRdr.render(mSc, mCam);
}

/* ── Slideshow ───────────────────────────────────────────────────── */
function buildDots() {
  slideDots.innerHTML = '';
  currentPiece.imagenes.forEach(function(_, i) {
    var d = document.createElement('span');
    d.className = 'sdot' + (i === slideIndex ? ' active' : '');
    d.dataset.i = i;
    d.addEventListener('click', function() { goSlide(parseInt(this.dataset.i)); });
    slideDots.appendChild(d);
  });
}

function goSlide(i) {
  var n   = currentPiece.imagenes.length;
  slideIndex = ((i % n) + n) % n;
  var url = currentPiece.imagenes[slideIndex];
  var img = new Image();
  img.onload = function() {
    slideImg.style.opacity = '0';
    setTimeout(function() { slideImg.src = url; slideImg.style.opacity = '1'; }, 60);
  };
  img.src = url;
  if (img.complete) img.onload();
  buildDots();
}

slidePrev.addEventListener('click', function() { goSlide(slideIndex - 1); });
slideNext.addEventListener('click', function() { goSlide(slideIndex + 1); });

/* ── View switcher ───────────────────────────────────────────────── */
function setView(v) {
  /* hide all panels */
  mCanvas.style.display   = 'none';
  slideWrap.style.display = 'none';
  qrWrap.style.display    = 'none';
  /* deactivate all buttons */
  [btn3d, btnImg, btnQr].forEach(function(b) { b.classList.remove('active'); });
  /* cancel 3d loop */
  cancelAnimationFrame(mAnimId);

  if (v === '3d') {
    mCanvas.style.display = 'block';
    btn3d.classList.add('active');
    animM();
  } else if (v === 'img') {
    slideWrap.style.display = 'block';
    btnImg.classList.add('active');
  } else if (v === 'qr') {
    qrWrap.style.display = 'flex';
    btnQr.classList.add('active');
    var _qrBase = location.href.replace(/[^/]*(\?.*)?$/, '');
    var qrUrl = _qrBase + 'coleccion.html?pieza=' + currentPiece.id;
    qrWrap.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;height:100%;padding:1rem;">'
      + '<div id="col-qr-container" style="background:#fff;padding:12px;border-radius:8px;box-shadow:0 0 24px rgba(212,175,55,.40);"></div>'
      + '<span style="color:#a99e8c;font-size:.82rem;text-align:center;max-width:220px;">' + currentPiece.nombre + '</span>'
      + '</div>';
    if (window.QRCode) {
      new window.QRCode(document.getElementById('col-qr-container'), { text: qrUrl, width: 180, height: 180, colorDark: '#000', colorLight: '#fff', correctLevel: window.QRCode.CorrectLevel.M });
    }
  }
}

btn3d.addEventListener('click',  function() { setView('3d');  });
btnImg.addEventListener('click', function() { setView('img'); });
btnQr.addEventListener('click',  function() { setView('qr'); });

/* ── Open / close modal ──────────────────────────────────────────── */
function openModal(pieceId) {
  currentPiece = getPieceById(pieceId);
  if (!currentPiece) return;

  document.getElementById('modal-title').textContent       = currentPiece.nombre;
  document.getElementById('modal-provenance').innerHTML    = '<i class="fas fa-map-pin"></i> ' + currentPiece.procedencia;
  document.getElementById('modal-description').textContent = currentPiece.descripcion;
  document.getElementById('modal-metadata').innerHTML = currentPiece.metadata
    .split('·').map(function(t) {
      var parts = t.trim().split(':');
      var label = parts[0] ? parts[0].trim() : '';
      var value = parts[1] ? parts[1].trim() : t.trim();
      return '<span class="mt"><span class="mt-label">' + label + '</span><span class="mt-value">' + value + '</span></span>';
    }).join('');

  /* preload all images so el slide sea instantáneo */
  currentPiece.imagenes.forEach(function(url) { new Image().src = url; });

  /* setup slideshow */
  slideIndex = 0;
  slideImg.src = currentPiece.imagenes[0];
  slideImg.style.opacity = '1';
  buildDots();

  /* setup 3d */
  if (mMesh) mSc.remove(mMesh);
  mMesh = new THREE.Group();
  mSc.add(mMesh);
  if (currentPiece.modelUrl) {
    showMLoad();
    makeGLTF().load(_cdnUrl(currentPiece.modelUrl), function(gltf) {
      hideMLoad();
      var m = gltf.scene;
      var bbox = new THREE.Box3().setFromObject(m);
      var sz   = bbox.getSize(new THREE.Vector3());
      var maxD = Math.max(sz.x, sz.y, sz.z) || 1;
      var sc   = 1.4 / maxD;
      m.scale.setScalar(sc);
      var ctr  = bbox.getCenter(new THREE.Vector3());
      m.position.set(-ctr.x * sc, -ctr.y * sc, -ctr.z * sc);
      mMesh.add(m);
    });
  } else {
    hideMLoad();
    mMesh.add(buildArtifact(currentPiece, 1.05));
  }

  modal.style.display = 'flex';
  setTimeout(function() { resizeMRdr(); setView(isMobile ? 'img' : '3d'); }, 40);
}

function closeModal() {
  modal.style.display = 'none';
  cancelAnimationFrame(mAnimId);
}

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });
window.addEventListener('resize', resizeMRdr);
document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && modal.style.display === 'flex') closeModal(); });

// ── Ampliar: simple full-screen lightbox ──────────────────────────────
var ampOverlay = (function() {
  var el = document.createElement('div');
  el.style.cssText = 'display:none;position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.96);align-items:center;justify-content:center;';
  var xb = document.createElement('button');
  xb.innerHTML = '&times;';
  xb.style.cssText = 'position:absolute;top:18px;right:22px;background:rgba(212,175,55,.15);border:1.5px solid rgba(212,175,55,.5);color:#d4af37;font-size:2rem;width:44px;height:44px;border-radius:50%;cursor:pointer;z-index:10;display:flex;align-items:center;justify-content:center;line-height:1;';
  var ct = document.createElement('div');
  ct.style.cssText = 'width:95%;height:95%;display:flex;align-items:center;justify-content:center;';
  el.appendChild(xb); el.appendChild(ct); document.body.appendChild(el);
  xb.addEventListener('click', function() {
    el.style.display = 'none'; ct.innerHTML = '';
    cancelAnimationFrame(el._raf);
    if (el._rdr) { el._rdr.dispose(); el._rdr = null; }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && el.style.display === 'flex') xb.click();
  });
  return { el: el, ct: ct };
})();

var btnZoom = document.getElementById('btn-zoom');
if (btnZoom) {
  btnZoom.addEventListener('click', function() {
    if (!currentPiece) return;
    var ov = ampOverlay.el, ct = ampOverlay.ct;
    ct.innerHTML = ''; cancelAnimationFrame(ov._raf); if (ov._rdr) { ov._rdr.dispose(); ov._rdr = null; }

    var activeBtn = document.querySelector('.media-controls button.active');
    var v = activeBtn ? activeBtn.id : 'view-3d';

    if (v === 'view-images') {
      var img = document.createElement('img');
      img.src = currentPiece.imagenes[slideIndex] || currentPiece.imagenes[0];
      img.style.cssText = 'max-width:95vw;max-height:95vh;object-fit:contain;border-radius:4px;';
      ct.appendChild(img);
    } else if (v === 'view-qr') {
      var _qrBase3 = location.href.replace(/[^/]*(\?.*)?$/, '');
      var qrUrl3 = _qrBase3 + 'coleccion.html?pieza=' + currentPiece.id;
      var qrDiv3 = document.createElement('div');
      qrDiv3.style.cssText = 'background:#fff;padding:16px;border-radius:10px;';
      ct.appendChild(qrDiv3);
      if (window.QRCode) {
        new window.QRCode(qrDiv3, { text: qrUrl3, width: 250, height: 250, colorDark: '#000', colorLight: '#fff', correctLevel: window.QRCode.CorrectLevel.M });
      }
    } else {
      // 3D full window
      var oc = document.createElement('canvas');
      var W = Math.round(window.innerWidth * 0.92), H = Math.round(window.innerHeight * 0.90);
      oc.width = W; oc.height = H; oc.style.cssText = 'width:' + W + 'px;height:' + H + 'px;display:block;border-radius:6px;';
      ct.appendChild(oc);
      var or2 = new THREE.WebGLRenderer({ canvas: oc, antialias: true });
      or2.setSize(W, H); or2.setPixelRatio(Math.min(devicePixelRatio, 2));
      or2.toneMapping = THREE.ACESFilmicToneMapping; or2.toneMappingExposure = 1.8;
      ov._rdr = or2;
      var oc2 = new THREE.PerspectiveCamera(38, W / H, 0.05, 80); oc2.position.set(0, 0.5, 2.8);
      var oCtrl = new OrbitControls(oc2, oc);
      oCtrl.enableDamping = true; oCtrl.autoRotate = true; oCtrl.autoRotateSpeed = 1.2;
      oCtrl.minDistance = 0.6; oCtrl.maxDistance = 6; oCtrl.target.set(0, 0.1, 0);
      function af() { ov._raf = requestAnimationFrame(af); oCtrl.update(); or2.render(mSc, oc2); }
      af();
    }
    ov.style.display = 'flex';
  });
}
