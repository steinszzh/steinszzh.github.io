/**
 * ANOMALY HUNT — Three.js mini-game embedded in the resume.
 * Theme: the day job, gamified. Blue points = normal sensor stream,
 * red pulses = anomalies. Quarantine them before they escape.
 *
 * Performance contract:
 *  - lazy-loaded (module import happens only when #lab nears viewport)
 *  - render loop pauses when tab hidden or canvas off-screen
 *  - devicePixelRatio capped at 2
 *  - respects prefers-reduced-motion (no camera sway)
 */

import * as THREE from 'three';

const ROUND_SECONDS = 30;
const ANOMALY_LIFETIME = 3.2;      // seconds before an anomaly "escapes"
const MAX_ANOMALIES = 7;
const HIT_SCORE = 100;

const state = {
    scene: null, camera: null, renderer: null,
    points: null, pointPositions: null, pointSpeeds: null,
    anomalies: [],            // { mesh, life, phase }
    fx: [],                   // capture flash shells { mesh, age }
    raycaster: new THREE.Raycaster(),
    pointer: new THREE.Vector2(),
    clock: new THREE.Clock(),
    rafId: null,
    inView: false,
    reducedMotion: false,
    playing: false,
    score: 0, combo: 0, best: 0, timeLeft: ROUND_SECONDS,
    spawnTimer: 0,
};

let el = {};

export function initLab() {
    el = {
        canvas: document.getElementById('labCanvas'),
        overlay: document.getElementById('labOverlay'),
        overlayTitle: document.getElementById('labOverlayTitle'),
        overlayScore: document.getElementById('labOverlayScore'),
        startBtn: document.getElementById('labStart'),
        score: document.getElementById('labScore'),
        time: document.getElementById('labTime'),
        best: document.getElementById('labBest'),
        combo: document.getElementById('labCombo'),
    };
    if (!el.canvas) return;

    try {
        state.best = Number(localStorage.getItem('zz-lab-best') || 0);
    } catch (e) { state.best = 0; }
    el.best.textContent = state.best;

    state.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setupScene();
    wireEvents();
    onResize();

    window.__labReady = true;
    animate();
}

// ------------------------------------------------------------- scene setup

function setupScene() {
    const canvas = el.canvas;
    state.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    state.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    state.renderer.outputColorSpace = THREE.SRGBColorSpace;

    state.scene = new THREE.Scene();
    state.scene.fog = new THREE.Fog(0x0a0b0f, 10, 26);

    state.camera = new THREE.PerspectiveCamera(55, 16 / 9, 0.1, 60);
    state.camera.position.set(0, 3.1, 9.6);

    // --- sensor stream: a field of drifting blue points ---
    const COUNT = 420;
    const pos = new Float32Array(COUNT * 3);
    const speeds = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
        pos[i * 3]     = (Math.random() - 0.5) * 18;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 9 + 0.6;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        speeds[i] = 0.35 + Math.random() * 0.75;
    }
    state.pointPositions = pos;
    state.pointSpeeds = speeds;

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
        color: 0x0aa84e, size: 0.075, sizeAttenuation: true,
        transparent: true, opacity: 0.75, depthWrite: false,
    });
    state.points = new THREE.Points(geo, mat);
    state.scene.add(state.points);

    // --- faint reference grid (the "plant floor") ---
    const grid = new THREE.GridHelper(26, 26, 0x1e2c4a, 0x131c30);
    grid.position.y = -3.4;
    grid.material.transparent = true;
    grid.material.opacity = 0.55;
    state.scene.add(grid);
}

// ------------------------------------------------------------- anomalies

function spawnAnomaly() {
    const geo = new THREE.SphereGeometry(0.3, 20, 20);
    const mat = new THREE.MeshBasicMaterial({ color: 0xff3355 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
        (Math.random() - 0.5) * 13,
        (Math.random() - 0.5) * 6.5 + 0.6,
        (Math.random() - 0.5) * 7
    );
    state.scene.add(mesh);
    state.anomalies.push({ mesh, life: ANOMALY_LIFETIME, phase: Math.random() * Math.PI * 2 });
}

function removeAnomaly(index) {
    const a = state.anomalies[index];
    state.scene.remove(a.mesh);
    a.mesh.geometry.dispose();
    a.mesh.material.dispose();
    state.anomalies.splice(index, 1);
}

function captureFlash(position) {
    const geo = new THREE.SphereGeometry(0.32, 16, 16);
    const mat = new THREE.MeshBasicMaterial({
        color: 0x10b981, transparent: true, opacity: 0.9,
        blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const shell = new THREE.Mesh(geo, mat);
    shell.position.copy(position);
    state.scene.add(shell);
    state.fx.push({ mesh: shell, age: 0 });
}

// ------------------------------------------------------------- game flow

function startRound() {
    state.playing = true;
    state.score = 0;
    state.combo = 0;
    state.timeLeft = ROUND_SECONDS;
    state.spawnTimer = 0;
    clearAnomalies();
    updateHud();
    el.overlay.classList.add('hidden');
    el.canvas.style.cursor = 'crosshair';
}

function endRound() {
    state.playing = false;
    el.canvas.style.cursor = 'default';
    clearAnomalies();
    const isBest = state.score > state.best;
    if (isBest) {
        state.best = state.score;
        try { localStorage.setItem('zz-lab-best', String(state.best)); } catch (e) { /* private mode */ }
    }
    el.best.textContent = state.best;
    el.overlayScore.textContent = state.score + (isBest ? ' ★' : '');
    setOverlayState('over');
    el.overlay.classList.remove('hidden');
}

function clearAnomalies() {
    while (state.anomalies.length) removeAnomaly(0);
}

// Overlay start/over strings. data-i18n attribute is swapped so the page-wide
// language toggle re-translates these on switch; game.js applies immediately
// from its own copy (main.js's i18n store is script-scoped, not on window).
const OVERLAY_STRINGS = {
    en: { ready: 'ON SHIFT', start: 'START 30s', over: 'SHIFT OVER', again: 'RUN IT BACK' },
    zh: { ready: '待命中', start: '开始 30 秒', over: '值班结束', again: '再来一班' },
};

function setOverlayState(which) {
    const lang = document.documentElement.lang === 'zh' ? 'zh' : 'en';
    const s = OVERLAY_STRINGS[lang];
    el.overlayTitle.textContent = which === 'over' ? s.over : s.ready;
    el.startBtn.textContent = which === 'over' ? s.again : s.start;
    if (which !== 'over') el.overlayScore.textContent = '';
}

function onHit(index) {
    const a = state.anomalies[index];
    state.combo += 1;
    state.score += HIT_SCORE * state.combo;
    captureFlash(a.mesh.position.clone());
    removeAnomaly(index);
    updateHud(true);
}

function onMiss() {
    if (state.combo > 0) {
        state.combo = 0;
        updateHud();
    }
}

function updateHud(pulse) {
    el.score.textContent = state.score;
    el.time.textContent = Math.max(0, Math.ceil(state.timeLeft));
    el.combo.textContent = '×' + (state.combo >= 1 ? state.combo : 1);
    if (pulse) {
        el.score.classList.remove('bump');
        void el.score.offsetWidth;   // restart CSS animation
        el.score.classList.add('bump');
    }
}

// ------------------------------------------------------------- events

function wireEvents() {
    el.startBtn.addEventListener('click', startRound);

    el.canvas.addEventListener('pointerdown', (ev) => {
        if (!state.playing) return;
        const rect = el.canvas.getBoundingClientRect();
        state.pointer.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
        state.pointer.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
        state.raycaster.setFromCamera(state.pointer, state.camera);
        const meshes = state.anomalies.map(a => a.mesh);
        const hit = state.raycaster.intersectObjects(meshes, false)[0];
        if (hit) {
            onHit(meshes.indexOf(hit.object));
        } else {
            onMiss();
        }
    });

    // Pause rendering when the canvas leaves the viewport.
    if ('IntersectionObserver' in window) {
        new IntersectionObserver((entries) => {
            state.inView = entries.some(e => e.isIntersecting);
        }, { rootMargin: '100px' }).observe(el.canvas);
    } else {
        state.inView = true;
    }
    document.addEventListener('visibilitychange', () => { /* animate() checks */ });

    window.addEventListener('resize', onResize);
}

function onResize() {
    const wrap = el.canvas.parentElement;
    if (!wrap) return;
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    state.renderer.setSize(w, h, false);
    state.camera.aspect = w / h;
    state.camera.updateProjectionMatrix();
}

// ------------------------------------------------------------- main loop

function animate() {
    state.rafId = requestAnimationFrame(animate);
    if (document.hidden || !state.inView) return;

    const dt = Math.min(state.clock.getDelta(), 0.1);
    const t = state.clock.elapsedTime;

    // sensor stream drift (right to left, wrap around)
    const pos = state.pointPositions;
    for (let i = 0; i < state.pointSpeeds.length; i++) {
        pos[i * 3] -= state.pointSpeeds[i] * dt;
        if (pos[i * 3] < -9) pos[i * 3] = 9;
    }
    state.points.geometry.attributes.position.needsUpdate = true;

    // anomalies: pulse + lifetime
    for (let i = state.anomalies.length - 1; i >= 0; i--) {
        const a = state.anomalies[i];
        a.life -= dt;
        const pulse = 1 + 0.22 * Math.sin(t * 7 + a.phase);
        const urgency = a.life < 1 ? 1 + 0.18 * Math.sin(t * 18) : 1;   // frantic blink when about to escape
        a.mesh.scale.setScalar(pulse * urgency);
        if (a.life <= 0) {
            removeAnomaly(i);   // escaped — no penalty, just lost opportunity
        }
    }

    // capture flashes expand & fade
    for (let i = state.fx.length - 1; i >= 0; i--) {
        const f = state.fx[i];
        f.age += dt;
        f.mesh.scale.setScalar(1 + f.age * 6);
        f.mesh.material.opacity = Math.max(0, 0.9 - f.age * 2.4);
        if (f.mesh.material.opacity <= 0) {
            state.scene.remove(f.mesh);
            f.mesh.geometry.dispose();
            f.mesh.material.dispose();
            state.fx.splice(i, 1);
        }
    }

    if (state.playing) {
        state.timeLeft -= dt;
        state.spawnTimer -= dt;
        const ramp = Math.max(0.7, 1.5 - (ROUND_SECONDS - state.timeLeft) * 0.025);
        if (state.spawnTimer <= 0 && state.anomalies.length < MAX_ANOMALIES) {
            spawnAnomaly();
            state.spawnTimer = ramp;
        }
        el.time.textContent = Math.max(0, Math.ceil(state.timeLeft));
        if (state.timeLeft <= 0) endRound();
    }

    // camera: slow orbit + pointer parallax (skipped under reduced motion)
    if (!state.reducedMotion) {
        const angle = t * 0.1;
        state.camera.position.x = Math.sin(angle) * 9.6;
        state.camera.position.z = Math.cos(angle) * 9.6;
        state.camera.position.y = 3.1 + Math.sin(t * 0.23) * 0.35;
        state.camera.lookAt(0, 0.4, 0);
    }

    state.renderer.render(state.scene, state.camera);
}
