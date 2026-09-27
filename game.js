/**
 * ANOMALY HUNT — Canvas 2D mini-game, zero dependencies, classic script.
 * Deliberately uses no ES modules, no dynamic import, no importmap, no CDN:
 * loaded with a plain <script src> so it fails only if the file itself
 * fails to load. Theme: green sensor stream, red anomalies, quarantine
 * them before they escape. Matrix palette.
 *
 * window.AnomalyHunt = { init, auto }
 * window.__lab = { state, getEngine, step }   (debug/testing hook)
 */
(function () {
    'use strict';

    var ROUND_SECONDS = 30;
    var BEST_KEY = 'zz-lab-best';

    var OVERLAY_STRINGS = {
        en: { ready: 'ON SHIFT', start: 'START 30s', over: 'SHIFT OVER', again: 'RUN IT BACK' },
        zh: { ready: '待命中', start: '开始 30 秒', over: '值班结束', again: '再来一班' }
    };

    function currentLang() {
        return (document.documentElement.lang || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
    }

    function readBest() {
        try { return parseInt(localStorage.getItem(BEST_KEY), 10) || 0; } catch (e) { return 0; }
    }

    function writeBest(v) {
        try { localStorage.setItem(BEST_KEY, String(v)); } catch (e) { /* private mode */ }
    }

    /* ── shared shell: round state, HUD, overlay, loop, input ── */

    function createShared() {
        var el = {
            score: document.getElementById('labScore'),
            time: document.getElementById('labTime'),
            best: document.getElementById('labBest'),
            combo: document.getElementById('labCombo'),
            overlay: document.getElementById('labOverlay'),
            overlayTitle: document.getElementById('labOverlayTitle'),
            overlayScore: document.getElementById('labOverlayScore'),
            startBtn: document.getElementById('labStart'),
            wrap: document.querySelector('.lab-canvas-wrap')
        };

        var reducedMotion = false;
        try {
            reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        } catch (e) { /* old browser */ }

        var state = {
            running: false,
            score: 0,
            combo: 0,
            timeLeft: ROUND_SECONDS,
            best: readBest(),
            elapsed: 0
        };

        var engine = null;
        var inView = true;
        var last = new Date().getTime();
        var lastShownSec = -1;

        function tickTimeHud() {
            var sec = Math.max(0, Math.ceil(state.timeLeft));
            if (sec !== lastShownSec) {
                lastShownSec = sec;
                el.time.textContent = sec;
            }
        }

        function setOverlayState(which) {
            var s = OVERLAY_STRINGS[currentLang()];
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
            el.overlay.className = el.overlay.className.replace(/(^|\s)hidden(\s|$)/, ' ');
            el.overlay.classList.add('hidden');
            updateHud();
        }

        function endRound() {
            state.running = false;
            var isBest = state.score > state.best;
            if (isBest) {
                state.best = state.score;
                writeBest(state.best);
            }
            el.best.textContent = state.best;
            el.overlayScore.textContent = state.score + (isBest ? ' ★' : '');
            setOverlayState('over');
            el.overlay.className = el.overlay.className.replace(/(^|\s)hidden(\s|$)/, ' ');
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

        function frame() {
            var now = new Date().getTime();
            var dt = Math.min((now - last) / 1000, 0.1);
            last = now;
            step(dt, now / 1000);
            requestAnimationFrame(frame);
        }

        function onPointer(e) {
            if (!state.running) return;
            var rect = engine.canvas.getBoundingClientRect();
            var x = (e.clientX != null ? e.clientX : 0) - rect.left;
            var y = (e.clientY != null ? e.clientY : 0) - rect.top;
            var hit = engine.pick(x, y);
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
                new ResizeObserver(function () { eng.resize(); }).observe(el.wrap);
            }
            if ('IntersectionObserver' in window && el.wrap) {
                new IntersectionObserver(function (entries) { inView = entries[0].isIntersecting; }, { threshold: 0 })
                    .observe(el.wrap);
            }

            if (eng.canvas.addEventListener) {
                eng.canvas.addEventListener('pointerdown', onPointer);
                // very old engines: fall back to mousedown
                eng.canvas.addEventListener('mousedown', function (e) {
                    if (!window.PointerEvent) onPointer(e);
                });
            }
            el.startBtn.addEventListener('click', startRound);

            // debug/testing hook
            window.__lab = { state: state, getEngine: function () { return engine; }, step: step };

            requestAnimationFrame(function () { last = new Date().getTime(); frame(); });
        }

        return { el: el, state: state, reducedMotion: reducedMotion, attach: attach };
    }

    /* ── Canvas 2D engine (no external deps) ─────────────────── */

    function createTwoEngine(canvas, shared) {
        var ctx = canvas.getContext && canvas.getContext('2d');
        if (!ctx) throw new Error('canvas 2d unavailable');
        var state = shared.state;
        var dpr = Math.min(window.devicePixelRatio || 1, 2);

        var W = 1, H = 1;   // CSS-pixel logical size

        // Ambient dot stream.
        var DOTS = 220;
        var dots = [];
        function initDots() {
            dots = [];
            for (var i = 0; i < DOTS; i++) {
                dots.push({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    r: 0.8 + Math.random() * 1.6,
                    v: 6 + Math.random() * 18,
                    ph: Math.random() * 6.28,
                    a: 0.2 + Math.random() * 0.4,
                    cyan: Math.random() < 0.12
                });
            }
        }

        var anomalies = [];
        var fx = [];
        var spawnTimer = 0;

        function spawnAnomaly() {
            anomalies.push({
                x: 30 + Math.random() * Math.max(1, W - 60),
                y: 30 + Math.random() * Math.max(1, H - 60),
                r: 10 + Math.random() * 7,
                vx: (Math.random() - 0.5) * 14,
                vy: (Math.random() - 0.5) * 14,
                life: 4,
                phase: Math.random() * 6.28
            });
        }

        function reset() {
            anomalies = [];
            fx = [];
            spawnTimer = 0;
            for (var i = 0; i < 4; i++) spawnAnomaly();
        }

        function update(dt) {
            var i, d, a;
            for (i = 0; i < dots.length; i++) {
                d = dots[i];
                d.x -= d.v * dt;
                if (d.x < -4) { d.x = W + 4; d.y = Math.random() * H; }
            }
            if (state.running) {
                spawnTimer -= dt;
                var interval = Math.max(0.75, 1.6 - state.elapsed * 0.02);
                if (spawnTimer <= 0 && anomalies.length < 8) {
                    spawnAnomaly();
                    spawnTimer = interval;
                }
            }
            for (i = anomalies.length - 1; i >= 0; i--) {
                a = anomalies[i];
                a.life -= dt;
                a.x += a.vx * dt;
                a.y += a.vy * dt;
                if (a.x < a.r) { a.x = a.r; a.vx *= -1; }
                if (a.x > W - a.r) { a.x = W - a.r; a.vx *= -1; }
                if (a.y < a.r) { a.y = a.r; a.vy *= -1; }
                if (a.y > H - a.r) { a.y = H - a.r; a.vy *= -1; }
                if (a.life <= 0) anomalies.splice(i, 1);
            }
            for (i = fx.length - 1; i >= 0; i--) {
                fx[i].age += dt;
                if (fx[i].age >= fx[i].dur) fx.splice(i, 1);
            }
        }

        function render(t) {
            var i, d, a, f, p;
            ctx.clearRect(0, 0, W, H);
            ctx.fillStyle = '#020604';
            ctx.fillRect(0, 0, W, H);

            ctx.strokeStyle = 'rgba(0,255,65,0.05)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            for (var gx = 0; gx <= W; gx += 40) { ctx.moveTo(gx, 0); ctx.lineTo(gx, H); }
            for (var gy = 0; gy <= H; gy += 40) { ctx.moveTo(0, gy); ctx.lineTo(W, gy); }
            ctx.stroke();

            for (i = 0; i < dots.length; i++) {
                d = dots[i];
                var wob = Math.sin(t * 1.1 + d.ph) * 1.5;
                ctx.fillStyle = d.cyan ? 'rgba(0,229,255,' + d.a + ')' : 'rgba(10,168,78,' + d.a + ')';
                ctx.beginPath();
                ctx.arc(d.x, d.y + wob, d.r, 0, 6.283);
                ctx.fill();
            }

            for (i = 0; i < anomalies.length; i++) {
                a = anomalies[i];
                var pulse = 1 + 0.16 * Math.sin(t * 7 + a.phase);
                var fade = Math.min(1, a.life / 0.5);
                var R = a.r * pulse;
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

            for (i = 0; i < fx.length; i++) {
                f = fx[i];
                p = f.age / f.dur;
                if (f.type === 'ring') {
                    ctx.strokeStyle = 'rgba(0,229,255,' + (1 - p) + ')';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(f.x, f.y, 8 + p * 46, 0, 6.283);
                    ctx.stroke();
                } else {
                    ctx.fillStyle = 'rgba(0,229,255,' + (1 - p) + ')';
                    ctx.beginPath();
                    ctx.arc(f.x + f.vx * f.age, f.y + f.vy * f.age, 2, 0, 6.283);
                    ctx.fill();
                }
            }
        }

        function pick(cssX, cssY) {
            for (var i = anomalies.length - 1; i >= 0; i--) {
                var a = anomalies[i];
                var dx = cssX - a.x;
                var dy = cssY - a.y;
                if (dx * dx + dy * dy <= (a.r + 9) * (a.r + 9)) return a;
            }
            return null;
        }

        function captureFx(hit) {
            fx.push({ type: 'ring', x: hit.x, y: hit.y, age: 0, dur: 0.4 });
            for (var i = 0; i < 10; i++) {
                var ang = Math.random() * 6.283;
                var sp = 40 + Math.random() * 70;
                fx.push({
                    type: 'pt', x: hit.x, y: hit.y,
                    vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp,
                    age: 0, dur: 0.45
                });
            }
            anomalies.splice(anomalies.indexOf(hit), 1);
        }

        function resize() {
            var r = canvas.getBoundingClientRect();
            W = Math.max(1, r.width);
            H = Math.max(1, r.height);
            canvas.width = Math.round(W * dpr);
            canvas.height = Math.round(H * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            if (!dots.length) initDots();
        }

        resize();
        reset();
        return { canvas: canvas, reset: reset, update: update, render: render, pick: pick, captureFx: captureFx, resize: resize };
    }

    /* ── boot ────────────────────────────────────────────────── */

    function fail(msg) {
        var nogl = document.getElementById('labNogl');
        if (nogl) {
            nogl.hidden = false;
            if (msg) nogl.textContent += ' [' + msg + ']';
        }
    }

    function init() {
        if (window.__labReady) return;
        var canvas = document.getElementById('labCanvas');
        if (!canvas) return;
        window.__labReady = true;
        window.__labEngine = '2d';

        try {
            var shared = createShared();
            var engine = createTwoEngine(canvas, shared);
            shared.attach(engine);
        } catch (e) {
            fail(e && e.message ? e.message : 'boot-error');
        }
    }

    // Lazy init when #lab nears the viewport; watchdog as fallback.
    function auto() {
        var el = document.getElementById('lab');
        if (!el) { init(); return; }
        var booted = false;
        var boot = function () {
            if (booted) return;
            booted = true;
            init();
        };
        if ('IntersectionObserver' in window) {
            var io = new IntersectionObserver(function (entries) {
                if (entries.some(function (e) { return e.isIntersecting; })) { io.disconnect(); boot(); }
            }, { rootMargin: '400px' });
            io.observe(el);
            setTimeout(boot, 6000);
        } else {
            boot();
        }
    }

    window.AnomalyHunt = { init: init, auto: auto };
})();
