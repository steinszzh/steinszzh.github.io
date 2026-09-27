/**
 * ANOMALY HUNT — dual-engine mini-game (Three.js WebGL + Canvas 2D fallback).
 * Theme: the day job, gamified. Green stream = normal sensor data,
 * red pulses = anomalies. Quarantine them before they escape.
 *
 * Engine selection: WebGL probe on a throwaway canvas, then dynamic import of
 * three.js; any failure degrades seamlessly to the dependency-free 2D build.
 * Shared shell owns the round timer, scoring, HUD, overlay, and input — the
 * engines only render and answer pick() hits.
 *
 * Matrix palette: stream #0aa84e / cyan #00e5ff, anomaly #ff3355.
 */

const ROUND_SECONDS = 30;
const BEST_KEY = 'zz-lab-best';

const OVERLAY_STRINGS = {
    en: { ready: 'ON SHIFT', start: 'START 30s', over: 'SHIFT OVER', again: 'RUN IT BACK' },
    zh: { ready: '待命中', start: '开始 30 秒', over: '值班结束', again: '再来一班' },
};

export async function initLab() {
    if (window.__labReady) return;
    const canvas = document.getElementById('labCanvas');
    if (!canvas) return;
    window.__labReady = true;   // set early: the bootstrap watchdog also calls initLab

    const shared = createShared();

    let engine = null;
    if (webglAvailable()) {
        try {
            const THREE = await import('three');   // bare specifier resolved by the import map
            engine = createThreeEngine(THREE, canvas, shared);
            window.__labEngine = 'three';
        } catch (e) {
            engine = null;
        }
    }
    if (!engine) {
        // A WebGL context may already exist on the game canvas from a failed
        // three.js boot — swap in a fresh canvas before taking a 2D context.
        engine = createTwoEngine(freshCanvas(canvas), shared);
        window.__labEngine = '2d';
    }

    shared.attach(engine);
}

/* ── helpers ─────────────────────────────────────────────── */

function webglAvailable() {
    try {
        const c = document.createElement('canvas');
        return !!(window.WebGLRenderingContext &&
            (c.getContext('webgl2') || c.getContext('webgl') || c.getContext('experimental-webgl')));
    } catch (e) {
        return false;
    }
}

function freshCanvas(old) {
    const c = old.cloneNode(false);
    old.parentNode.replaceChild(c, old);
    return c;
}

function currentLang() {
    return (document.documentElement.lang || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

function readBest() {
    try { return parseInt(localStorage.getItem(BEST_KEY), 10) || 0; } catch (e) { return 0; }
}

function writeBest(v) {
    try { localStorage.setItem(BEST_KEY, String(v)); } catch (e) { /* private mode */ }
}

/* ── shared shell: round state, HUD, overlay, loop, input ── */

function createShared() {
    const el = {
        score: document.getElementById('labScore'),
        time: document.getElementById('labTime'),
        best: document.getElementById('labBest'),
        combo: document.getElementById('labCombo'),
        overlay: document.getElementById('labOverlay'),
        overlayTitle: document.getElementById('labOverlayTitle'),
        overlayScore: document.getElementById('labOverlayScore'),
        startBtn: document.getElementById('labStart'),
        wrap: document.querySelector('.lab-canvas-wrap'),
    };

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const state = {
        running: false,
        score: 0,
        combo: 0,
        timeLeft: ROUND_SECONDS,
        best: readBest(),
        elapsed: 0,          // seconds into the current round (drives spawn pacing)
    };

    let engine = null;
    let inView = true;
    let last = performance.now();
    let lastShownSec = -1;

    function tickTimeHud() {
        const sec = Math.max(0, Math.ceil(state.timeLeft));
        if (sec !== lastShownSec) {
            lastShownSec = sec;
            el.time.textContent = sec;
        }
    }

    function setOverlayState(which) {
        const s = OVERLAY_STRINGS[currentLang()];
        // Swap data-i18n so the page-wide language toggle keeps translating.
        el.overlayTitle.setAttribute('data-i18n', which === 'over' ? 'lab.over' : 'lab.ready');
        el.startBtn.setAttribute('data-i18n', which === 'over' ? 'lab.again' : 'lab.start');
        el.overlayTitle.textContent = which === 'over' ? s.over : s.ready;
        el.startBtn.textContent = which === 'over' ? s.again : s.start;
        if (which !== 'over') el.overlayScore.textContent = '';
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

    function startRound() {
        state.running = true;
        state.score = 0;
        state.combo = 0;
        state.timeLeft = ROUND_SECONDS;
        state.elapsed = 0;
        engine.reset();
        el.overlay.classList.add('hidden');
        updateHud();
    }

    function endRound() {
        state.running = false;
        const isBest = state.score > state.best;
        if (isBest) {
            state.best = state.score;
            writeBest(state.best);
        }
        el.best.textContent = state.best;
        el.overlayScore.textContent = state.score + (isBest ? ' ★' : '');
        setOverlayState('over');
        el.overlay.classList.remove('hidden');
    }

    function onCapture() {
        state.combo += 1;
        state.score += 100 * state.combo;
        updateHud(true);
    }

    function onMiss() {
        if (state.combo > 0) {
            state.combo = 0;
            updateHud();
        }
    }

    function step(dt, nowSec) {
        if (document.hidden || !inView) return;
        if (state.running) {
            state.timeLeft -= dt;
            state.elapsed += dt;
            tickTimeHud();
            if (state.timeLeft <= 0) {
                state.timeLeft = 0;
                tickTimeHud();
                endRound();
            }
        }
        engine.update(dt, nowSec);
        engine.render(nowSec);
    }

    function frame(now) {
        requestAnimationFrame(frame);
        const dt = Math.min((now - last) / 1000, 0.1);
        last = now;
        step(dt, now / 1000);
    }

    function onPointer(e) {
        if (!state.running) return;
        const rect = engine.canvas.getBoundingClientRect();
        const hit = engine.pick(e.clientX - rect.left, e.clientY - rect.top);
        if (hit) {
            engine.captureFx(hit);
            onCapture();
        } else {
            onMiss();
        }
    }

    function attach(eng) {
        engine = eng;
        el.best.textContent = state.best;
        setOverlayState('ready');
        updateHud();

        eng.resize();
        if (window.ResizeObserver && el.wrap) {
            new ResizeObserver(() => eng.resize()).observe(el.wrap);
        }
        if ('IntersectionObserver' in window && el.wrap) {
            new IntersectionObserver(entries => { inView = entries[0].isIntersecting; }, { threshold: 0 })
                .observe(el.wrap);
        }

        eng.canvas.addEventListener('pointerdown', onPointer);
        el.startBtn.addEventListener('click', startRound);

        // debug/testing hook
        window.__lab = { state, getEngine: () => engine, step };

        requestAnimationFrame(t => { last = t; frame(t); });
    }

    return { el, state, reducedMotion, attach };
}

/* ── engine 1: Three.js (WebGL) ──────────────────────────── */

function createThreeEngine(THREE, canvas, shared) {
    const { state, reducedMotion } = shared;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x020604, 12, 26);
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    if ('outputColorSpace' in renderer && THREE.SRGBColorSpace) {
        renderer.outputColorSpace = THREE.SRGBColorSpace;
    }

    const grid = new THREE.GridHelper(24, 24, 0x055c2a, 0x03210f);
    grid.position.y = -3.2;
    scene.add(grid);

    // Ambient sensor stream: a drifting point cloud.
    const COUNT = 380;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const speeds = new Float32Array(COUNT);
    const cGreen = new THREE.Color(0x0aa84e);
    const cCyan = new THREE.Color(0x00e5ff);
    for (let i = 0; i < COUNT; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 18;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
        const c = Math.random() < 0.85 ? cGreen : cCyan;
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
        speeds[i] = 0.3 + Math.random() * 0.8;
    }
    const pgeo = new THREE.BufferGeometry();
    pgeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pgeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    scene.add(new THREE.Points(pgeo, new THREE.PointsMaterial({
        size: 0.06, vertexColors: true, transparent: true, opacity: 0.85, sizeAttenuation: true,
    })));

    // Anomalies: pulsing red core + wireframe shell.
    const anomalyGroup = new THREE.Group();
    scene.add(anomalyGroup);
    const coreGeo = new THREE.SphereGeometry(0.26, 16, 12);
    const shellGeo = new THREE.SphereGeometry(0.4, 12, 8);
    let spawnTimer = 0;
    const fx = [];

    // Pointer parallax (subtle camera offset).
    let parX = 0, parY = 0, tParX = 0, tParY = 0;
    if (!reducedMotion) {
        canvas.addEventListener('pointermove', e => {
            const r = canvas.getBoundingClientRect();
            tParX = ((e.clientX - r.left) / r.width - 0.5) * 2;
            tParY = ((e.clientY - r.top) / r.height - 0.5) * 2;
        });
    }

    function spawnAnomaly() {
        const group = new THREE.Group();
        const core = new THREE.Mesh(coreGeo, new THREE.MeshBasicMaterial({ color: 0xff3355, transparent: true }));
        const shell = new THREE.Mesh(shellGeo, new THREE.MeshBasicMaterial({
            color: 0xff3355, wireframe: true, transparent: true, opacity: 0.7,
        }));
        group.add(core);
        group.add(shell);
        group.position.set((Math.random() - 0.5) * 14, (Math.random() - 0.5) * 6 + 0.5, (Math.random() - 0.5) * 8);
        group.userData = { life: 4, phase: Math.random() * 6.28, core, shell };
        core.userData.group = group;
        anomalyGroup.add(group);
    }

    function reset() {
        while (anomalyGroup.children.length) anomalyGroup.remove(anomalyGroup.children[0]);
        for (const f of fx) scene.remove(f.obj);
        fx.length = 0;
        spawnTimer = 0;
        for (let i = 0; i < 4; i++) spawnAnomaly();
    }

    function update(dt, t) {
        // stream drift
        for (let i = 0; i < COUNT; i++) {
            positions[i * 3] -= speeds[i] * dt;
            if (positions[i * 3] < -9.5) positions[i * 3] = 9.5;
        }
        pgeo.attributes.position.needsUpdate = true;

        // spawn pacing
        if (state.running) {
            spawnTimer -= dt;
            const interval = Math.max(0.75, 1.6 - state.elapsed * 0.02);
            if (spawnTimer <= 0 && anomalyGroup.children.length < 8) {
                spawnAnomaly();
                spawnTimer = interval;
            }
        }

        // anomalies: pulse + fade + expire
        for (let i = anomalyGroup.children.length - 1; i >= 0; i--) {
            const g = anomalyGroup.children[i];
            const ud = g.userData;
            ud.life -= dt;
            g.scale.setScalar(1 + 0.18 * Math.sin(t * 7 + ud.phase));
            const fade = Math.min(1, ud.life / 0.6);
            ud.core.material.opacity = fade;
            ud.shell.material.opacity = fade * 0.7;
            if (ud.life <= 0) anomalyGroup.remove(g);
        }

        // capture fx
        for (let i = fx.length - 1; i >= 0; i--) {
            const f = fx[i];
            f.age += dt;
            const p = f.age / f.dur;
            f.obj.scale.setScalar(1 + p * 2.2);
            f.obj.material.opacity = 0.9 * (1 - p);
            if (p >= 1) {
                scene.remove(f.obj);
                fx.splice(i, 1);
            }
        }

        // camera
        if (reducedMotion) {
            camera.position.set(0, 3, 9.5);
            camera.lookAt(0, 0.3, 0);
        } else {
            const ang = t * 0.12;
            parX += (tParX - parX) * Math.min(1, dt * 3);
            parY += (tParY - parY) * Math.min(1, dt * 3);
            camera.position.set(Math.sin(ang) * 9 + parX * 0.7, 3.2 - parY * 0.5, Math.cos(ang) * 9);
            camera.lookAt(0, 0.3, 0);
        }
    }

    function render() {
        renderer.render(scene, camera);
    }

    const raycaster = new THREE.Raycaster();

    function pick(cssX, cssY) {
        const r = canvas.getBoundingClientRect();
        const ndc = new THREE.Vector2((cssX / r.width) * 2 - 1, -((cssY / r.height) * 2 - 1));
        raycaster.setFromCamera(ndc, camera);
        const cores = anomalyGroup.children.map(g => g.userData.core);
        const hits = raycaster.intersectObjects(cores, false);
        return hits.length ? hits[0] : null;
    }

    function captureFx(hit) {
        const g = hit.object.userData.group;
        const flash = new THREE.Mesh(shellGeo, new THREE.MeshBasicMaterial({
            color: 0x00e5ff, wireframe: true, transparent: true, opacity: 0.9,
        }));
        flash.position.copy(g.position);
        flash.scale.copy(g.scale);
        scene.add(flash);
        fx.push({ obj: flash, age: 0, dur: 0.4 });
        anomalyGroup.remove(g);
    }

    function resize() {
        const w = canvas.clientWidth || 1;
        const h = canvas.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
    }

    resize();
    reset();
    return { canvas, reset, update, render, pick, captureFx, resize, _anomalies: anomalyGroup };
}

/* ── engine 2: Canvas 2D fallback (no external deps) ─────── */

function createTwoEngine(canvas, shared) {
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('canvas 2d unavailable');
    const { state } = shared;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let W = 1, H = 1;   // CSS-pixel logical size

    // Ambient dot stream.
    const DOTS = 220;
    let dots = [];
    function initDots() {
        dots = Array.from({ length: DOTS }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            r: 0.8 + Math.random() * 1.6,
            v: 6 + Math.random() * 18,
            ph: Math.random() * 6.28,
            a: 0.2 + Math.random() * 0.4,
            cyan: Math.random() < 0.12,
        }));
    }

    let anomalies = [];
    let fx = [];
    let spawnTimer = 0;

    function spawnAnomaly() {
        anomalies.push({
            x: 30 + Math.random() * Math.max(1, W - 60),
            y: 30 + Math.random() * Math.max(1, H - 60),
            r: 10 + Math.random() * 7,
            vx: (Math.random() - 0.5) * 14,
            vy: (Math.random() - 0.5) * 14,
            life: 4,
            phase: Math.random() * 6.28,
        });
    }

    function reset() {
        anomalies = [];
        fx = [];
        spawnTimer = 0;
        for (let i = 0; i < 4; i++) spawnAnomaly();
    }

    function update(dt) {
        for (const d of dots) {
            d.x -= d.v * dt;
            if (d.x < -4) { d.x = W + 4; d.y = Math.random() * H; }
        }
        if (state.running) {
            spawnTimer -= dt;
            const interval = Math.max(0.75, 1.6 - state.elapsed * 0.02);
            if (spawnTimer <= 0 && anomalies.length < 8) {
                spawnAnomaly();
                spawnTimer = interval;
            }
        }
        for (let i = anomalies.length - 1; i >= 0; i--) {
            const a = anomalies[i];
            a.life -= dt;
            a.x += a.vx * dt;
            a.y += a.vy * dt;
            if (a.x < a.r) { a.x = a.r; a.vx *= -1; }
            if (a.x > W - a.r) { a.x = W - a.r; a.vx *= -1; }
            if (a.y < a.r) { a.y = a.r; a.vy *= -1; }
            if (a.y > H - a.r) { a.y = H - a.r; a.vy *= -1; }
            if (a.life <= 0) anomalies.splice(i, 1);
        }
        for (let i = fx.length - 1; i >= 0; i--) {
            fx[i].age += dt;
            if (fx[i].age >= fx[i].dur) fx.splice(i, 1);
        }
    }

    function render(t) {
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = '#020604';
        ctx.fillRect(0, 0, W, H);

        ctx.strokeStyle = 'rgba(0,255,65,0.05)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 40) { ctx.moveTo(x, 0); ctx.lineTo(x, H); }
        for (let y = 0; y <= H; y += 40) { ctx.moveTo(0, y); ctx.lineTo(W, y); }
        ctx.stroke();

        for (const d of dots) {
            const wob = Math.sin(t * 1.1 + d.ph) * 1.5;
            ctx.fillStyle = d.cyan ? `rgba(0,229,255,${d.a})` : `rgba(10,168,78,${d.a})`;
            ctx.beginPath();
            ctx.arc(d.x, d.y + wob, d.r, 0, 6.283);
            ctx.fill();
        }

        for (const a of anomalies) {
            const pulse = 1 + 0.16 * Math.sin(t * 7 + a.phase);
            const fade = Math.min(1, a.life / 0.5);
            const R = a.r * pulse;
            ctx.save();
            ctx.globalAlpha = fade;
            ctx.shadowColor = '#ff3355';
            ctx.shadowBlur = 16;
            ctx.fillStyle = '#ff3355';
            ctx.beginPath();
            ctx.arc(a.x, a.y, R, 0, 6.283);
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.strokeStyle = 'rgba(255,51,85,0.55)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(a.x, a.y, R + 5, 0, 6.283);
            ctx.stroke();
            ctx.restore();
        }

        for (const f of fx) {
            const p = f.age / f.dur;
            if (f.type === 'ring') {
                ctx.strokeStyle = `rgba(0,229,255,${1 - p})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(f.x, f.y, 8 + p * 46, 0, 6.283);
                ctx.stroke();
            } else {
                ctx.fillStyle = `rgba(0,229,255,${1 - p})`;
                ctx.beginPath();
                ctx.arc(f.x + f.vx * f.age, f.y + f.vy * f.age, 2, 0, 6.283);
                ctx.fill();
            }
        }
    }

    function pick(cssX, cssY) {
        for (let i = anomalies.length - 1; i >= 0; i--) {
            const a = anomalies[i];
            const dx = cssX - a.x;
            const dy = cssY - a.y;
            if (dx * dx + dy * dy <= (a.r + 9) * (a.r + 9)) return a;
        }
        return null;
    }

    function captureFx(hit) {
        fx.push({ type: 'ring', x: hit.x, y: hit.y, age: 0, dur: 0.4 });
        for (let i = 0; i < 10; i++) {
            const ang = Math.random() * 6.283;
            const sp = 40 + Math.random() * 70;
            fx.push({
                type: 'pt', x: hit.x, y: hit.y,
                vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp,
                age: 0, dur: 0.45,
            });
        }
        anomalies.splice(anomalies.indexOf(hit), 1);
    }

    function resize() {
        const r = canvas.getBoundingClientRect();
        W = Math.max(1, r.width);
        H = Math.max(1, r.height);
        canvas.width = Math.round(W * dpr);
        canvas.height = Math.round(H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (!dots.length) initDots();
    }

    resize();
    reset();
    return { canvas, reset, update, render, pick, captureFx, resize };
}
