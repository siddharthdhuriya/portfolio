// Marketplace constellation — a living network of supply meeting demand.
// Amber nodes (sellers) and teal nodes (buyers) drift in a shared lattice;
// scroll pulls the camera through it, mouse adds parallax depth.
import * as THREE from "three";

const canvas = document.getElementById("scene");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isMobile = window.matchMedia("(max-width: 760px)").matches;

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x07090f, 0.055);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 11);

const COUNT = isMobile ? 380 : 850;
const RADIUS = 7.5;

// --- node field: flattened ellipsoid shell with a loose core ---
const positions = new Float32Array(COUNT * 3);
const colors = new Float32Array(COUNT * 3);
const seeds = new Float32Array(COUNT);

const amber = new THREE.Color(0xf5a524);
const coral = new THREE.Color(0xff8e3c);
const teal = new THREE.Color(0x35d0ba);
const bone = new THREE.Color(0xe9e4d8);

for (let i = 0; i < COUNT; i++) {
  // biased spherical distribution → denser equator band, like a market square
  const theta = Math.random() * Math.PI * 2;
  const band = (Math.random() + Math.random() + Math.random()) / 3 - 0.5; // ~gaussian
  const phi = Math.PI / 2 + band * 1.9;
  const r = RADIUS * (0.45 + 0.55 * Math.cbrt(Math.random()));

  positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
  positions[i * 3 + 1] = r * Math.cos(phi) * 0.72;
  positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);

  const roll = Math.random();
  const c = roll < 0.42 ? amber : roll < 0.58 ? coral : roll < 0.82 ? teal : bone;
  colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
  seeds[i] = Math.random() * Math.PI * 2;
}

const pointsGeo = new THREE.BufferGeometry();
pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
pointsGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

// soft round sprite so points glow like distant lanterns
const sprite = (() => {
  const s = document.createElement("canvas");
  s.width = s.height = 64;
  const ctx = s.getContext("2d");
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.35, "rgba(255,255,255,0.55)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(s);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
})();

const points = new THREE.Points(
  pointsGeo,
  new THREE.PointsMaterial({
    size: isMobile ? 0.14 : 0.11,
    map: sprite,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  })
);

// --- connective tissue: link each node to a couple of near neighbours ---
const linkPositions = [];
const MAX_LINK_DIST = isMobile ? 2.0 : 1.75;
for (let i = 0; i < COUNT; i++) {
  let linked = 0;
  for (let j = i + 1; j < COUNT && linked < 2; j++) {
    const dx = positions[i * 3] - positions[j * 3];
    const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
    const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
    if (dx * dx + dy * dy + dz * dz < MAX_LINK_DIST * MAX_LINK_DIST) {
      linkPositions.push(
        positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
        positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
      );
      linked++;
    }
  }
}
const linesGeo = new THREE.BufferGeometry();
linesGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linkPositions), 3));
const lines = new THREE.LineSegments(
  linesGeo,
  new THREE.LineBasicMaterial({
    color: 0xe9e4d8,
    transparent: true,
    opacity: 0.05,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
);

const cluster = new THREE.Group();
cluster.add(points, lines);
cluster.rotation.z = -0.12;
scene.add(cluster);

// --- interaction state ---
let mouseX = 0, mouseY = 0;
let scrollT = 0;

window.addEventListener("pointermove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
}, { passive: true });

function readScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  scrollT = max > 0 ? window.scrollY / max : 0;
  // the constellation recedes as the story takes over
  canvas.style.opacity = String(Math.max(0.16, 1 - scrollT * 2.2));
}
window.addEventListener("scroll", readScroll, { passive: true });
readScroll();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- render loop (paused when tab hidden; static under reduced motion) ---
const basePositions = positions.slice();
const clock = new THREE.Clock();
let running = true;

document.addEventListener("visibilitychange", () => {
  running = !document.hidden;
  if (running && !reduceMotion) { clock.getDelta(); tick(); }
});

function tick() {
  if (!running) return;
  const t = clock.getElapsedTime();

  cluster.rotation.y = t * 0.045 + scrollT * 1.6;
  cluster.rotation.x = scrollT * 0.35;

  // gentle breathing on a subset — cheap, no per-frame geometry rebuild for lines
  const pos = pointsGeo.attributes.position.array;
  for (let i = 0; i < COUNT; i += 3) {
    const k = 1 + Math.sin(t * 0.7 + seeds[i]) * 0.025;
    pos[i * 3] = basePositions[i * 3] * k;
    pos[i * 3 + 1] = basePositions[i * 3 + 1] * k;
    pos[i * 3 + 2] = basePositions[i * 3 + 2] * k;
  }
  pointsGeo.attributes.position.needsUpdate = true;

  camera.position.x += (mouseX * 0.9 - camera.position.x) * 0.03;
  camera.position.y += (-mouseY * 0.6 - camera.position.y) * 0.03;
  camera.position.z = 11 - scrollT * 2.5;
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

if (reduceMotion) {
  renderer.render(scene, camera); // single tasteful frame
} else {
  tick();
}
