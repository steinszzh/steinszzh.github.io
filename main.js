/**
 * MATRIX EDITION — ZHIHONG ZHANG
 * Digital rain · boot sequence · typing effect · i18n · interactions
 */

// ════════════════════════════════════════════════════════════
// I18N — Bilingual Content Store
// ════════════════════════════════════════════════════════════

const i18n = {
    zh: {
        'nav.about': '关于',
        'nav.experience': '经历',
        'nav.projects': '项目',
        'nav.skills': '技能',
        'nav.contact': '联系',
        'nav.pdf': '下载简历',

        'hero.name': '张志鸿',
        'hero.tagline': '工业数据与 AI 工程师',
        'hero.subtitle': 'IoT 数据管道 · 预测性维护 · 制造场景边缘到云系统',
        'hero.status': '● 求职中 / OPEN TO WORK',
        'hero.location': '中国 · 上海',

        'impact.label': '关键成果',
        'impact.item1': '异常响应提速 — 加氢站 IoT 预警系统',
        'impact.item2': '设备故障率下降 — 预测性维护看板',
        'impact.item3': '原型周期压缩 — AI 智能体工程工作流',

        'philosophy.title': '核心信念',
        'philosophy.quote': 'AI 不是替代工程判断，而是放大它。我的价值在于提供领域知识、验证把关和品味。',
        'philosophy.card1.title': 'AI 辅助工程',
        'philosophy.card1.desc': '规格驱动的 AI 开发：我定义意图、约束与测试，由 Agent 实现，每一行上线代码经我审查验证。',
        'philosophy.card2.title': '多智能体',
        'philosophy.card2.desc': '将复杂任务拆解为研究、构建、评审等角色，并行编排专业 Agent。实测：2 周原型压缩到 3 天。',
        'philosophy.card3.title': '领域 × AI',
        'philosophy.card3.desc': '化工领域的深度知识 × 现代 AI 工具 = 解决真实工业问题的独特竞争力。',

        'experience.title': '工作经历',
        'job1.company': '中石化氢能源（上海）',
        'job1.role': 'IT运维工程师 & 数据分析师',
        'job1.bullet1': '搭建边缘传感器数据平台，实现制造业 IoT 预警数据实时上云，异常检测响应时间缩短 80%',
        'job1.bullet2': '作为技术负责人与高校联合研发隔膜压缩机预测性维护系统，融合 ML 模型与化工领域知识',
        'job1.bullet3': '引入 AI 智能体开发工作流（多 Agent 流水线 + AI 结对编程），将原型开发周期从 2 周压缩至 3 天',
        'job1.bullet4': '搭建数据可视化看板，为运营团队提供实时决策支持，设备故障率降低 35%',
        'job2.company': '耶希瓦大学',
        'job2.role': '数据科学项目研究员',
        'job2.bullet1': 'Capstone 项目：优化 CNN 语音识别模型，测试集准确率提升 10%',
        'job2.bullet2': '保险预测项目：使用 Sklearn/TensorFlow 构建预测模型，准确率从 73% 提升至 88%',
        'job2.bullet3': 'AWS 数据分析：分析 COVID-19 对股市影响，Tableau 可视化展示',
        'job3.company': '上海财经大学海外考试中心',
        'job3.role': '监考及机房维护',
        'job3.bullet1': '负责考试中心 IT 设备日常维护与网络管理',
        'job3.bullet2': '保障托福/GRE 等大型考试系统稳定运行',

        'projects.title': '精选项目',
        'project1.category': '工业物联网',
        'project1.name': '加氢站云端预警系统',
        'project1.desc': '搭建从边缘传感器到云端的全链路数据管道，开发实时可视化看板。利用多 Agent 架构分别负责数据采集、清洗、分析和告警，大幅提升开发效率。',
        'project1.highlight': '$> 异常响应 ↓ 80%',
        'project1.note': '// 企业内部系统 — 可在面试中讲解架构',
        'project2.category': '机器学习 × 化工',
        'project2.name': '压缩机预测性维护',
        'project2.desc': '将 TensorFlow 预测模型与化工领域知识融合，构建隔膜压缩机故障预测系统。通过多 Agent 协作快速迭代模型，显著减少非计划停机。',
        'project2.highlight': '$> 故障率 ↓ 35%',
        'project2.note': '// 与高校联合研究 — 可在面试中讲解方法论',
        'project3.category': '开源 / Agent 构建',
        'project3.name': '本站 — Matrix 演绎版',
        'project3.desc': '这个页面本身就是工作样本：由多 Agent 流水线（规划 → 设计 → 内容 → 评审）完成规格设计与构建，Matrix 风格独立演绎，经人工验证后部署。仓库即工作流的证明。',
        'project3.highlight': '$> 由 AI Agent 构建',
        'project3.link': '查看源码与构建记录',

        'skills.fullTitle': '技能栈',
        'skills.title': '核心技能栈',
        'stack1.label': '工程与数据',
        'stack1.items': 'Python · SQL · MATLAB · TensorFlow / scikit-learn · Tableau（2019 至今）',
        'stack2.label': '工业与云端',
        'stack2.items': 'IoT 数据管道 · 边缘到云实时传输 · 实时看板 · Linux · Docker',
        'stack3.label': 'AI 工作流',
        'stack3.items': 'Claude / Claude Code · Cursor · GitHub Copilot · 多 Agent 编排 · 生产环境日常使用',
        'stack4.label': '语言能力',
        'stack4.items': '中文（母语）· 英文（专业级，旅美 8 年）',
        'skillcard1.label': '数据 & 机器学习',
        'skillcard2.label': '工业系统',
        'skillcard3.label': 'AI 工程',
        'skillcard4.label': '语言能力',
        'skillcard4.zh': '中文（母语）',
        'skillcard4.en': '英文（专业级，旅美 8 年）',

        'opento.label': '求职意向',
        'opento.text': '数据工程师 · AI 工程师 · 制造业智能化相关职位（半导体 / 先进制造业优先）',

        'education.title': '教育背景',
        'edu1.school': '耶希瓦大学',
        'edu1.degree': '理学硕士，数据分析与可视化',
        'edu1.time': '2019 — 2021 | 纽约',
        'edu2.school': '加尔文大学',
        'edu2.degree': '理学学士，数学（辅修工程/化学）',
        'edu2.time': '2012 — 2017 | 密歇根',

        'footer.headline': 'Wake up, Neo… 一起构建未来。',
        'footer.subtext': '如果您正在寻找一位懂工业系统、懂数据管道、更懂 AI 协作的工程师，欢迎联系。',
        'footer.copyright': '2026 张志鸿 · 人类设计与验证，AI 智能体加速。'
    },

    en: {
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'nav.pdf': 'Resume',

        'hero.name': 'ZHIHONG_ZHANG',
        'hero.tagline': 'Industrial Data & AI Engineer',
        'hero.subtitle': 'IoT pipelines · predictive maintenance · edge-to-cloud systems for manufacturing',
        'hero.status': '● AVAILABLE / OPEN TO WORK',
        'hero.location': 'Shanghai, China',

        'impact.label': 'Selected Impact',
        'impact.item1': 'faster anomaly response — H2 station IoT warning system',
        'impact.item2': 'lower equipment failure rate via predictive dashboards',
        'impact.item3': 'prototyping cycle via agentic AI workflows',

        'philosophy.title': 'Core Beliefs',
        'philosophy.quote': 'AI doesn\'t replace engineering judgment — it multiplies it. My job is to bring the domain knowledge, the verification, and the taste.',
        'philosophy.card1.title': 'AI-Assisted Engineering',
        'philosophy.card1.desc': 'Spec-driven development with AI agents: I define intent, constraints, and tests; agents implement; I review and verify every line that ships.',
        'philosophy.card2.title': 'Multi-Agent',
        'philosophy.card2.desc': 'Decompose complex tasks into roles — research, build, review — and orchestrate specialized agents in parallel. Measured result: 2-week prototypes in 3 days.',
        'philosophy.card3.title': 'Domain × AI',
        'philosophy.card3.desc': 'Deep chemical engineering knowledge × modern AI tools = unique competitive edge for real industrial problems.',

        'experience.title': 'Experience',
        'job1.company': 'Sinopec Hydrogen Energy (Shanghai)',
        'job1.role': 'IT Operations & Data Analyst',
        'job1.bullet1': 'Built edge sensor data platform with real-time cloud streaming, cutting anomaly detection response by 80%',
        'job1.bullet2': 'Led university collaboration on diaphragm compressor predictive maintenance, fusing ML models with chemical domain knowledge',
        'job1.bullet3': 'Introduced agentic AI workflows (multi-agent pipelines, AI pair-programming), compressing prototyping from 2 weeks to 3 days',
        'job1.bullet4': 'Built real-time dashboards for operations teams, reducing equipment failure rates by 35%',
        'job2.company': 'Yeshiva University',
        'job2.role': 'Data Science Researcher',
        'job2.bullet1': 'Capstone: optimized CNN speaker recognition model, improving test accuracy by 10%',
        'job2.bullet2': 'Insurance prediction: built Sklearn/TensorFlow models, boosting accuracy from 73% to 88%',
        'job2.bullet3': 'AWS Analytics: analyzed COVID-19 stock market impact with Tableau visualization',
        'job3.company': 'SUFE Overseas Exam Center',
        'job3.role': 'Proctor & IT Maintenance',
        'job3.bullet1': 'Managed daily IT equipment maintenance and network administration',
        'job3.bullet2': 'Ensured stable operation of systems for TOEFL/GRE large-scale exams',

        'projects.title': 'Featured Projects',
        'project1.category': 'Industrial IoT',
        'project1.name': 'H2 Station Cloud Warning System',
        'project1.desc': 'Built end-to-end data pipeline from edge sensors to cloud with a real-time dashboard. Leveraged multi-agent architecture for data collection, cleaning, analysis, and alerting.',
        'project1.highlight': '$> Anomaly response ↓ 80%',
        'project1.note': '// Proprietary system — architecture walkthrough available in interview',
        'project2.category': 'ML × Chemical Engineering',
        'project2.name': 'Compressor Predictive Maintenance',
        'project2.desc': 'Fused TensorFlow predictive models with chemical domain knowledge. Accelerated model iteration through multi-agent collaboration, significantly reducing unplanned downtime.',
        'project2.highlight': '$> Failure rate ↓ 35%',
        'project2.note': '// Joint research with university partner — methodology in interview',
        'project3.category': 'Open Source / Agentic Build',
        'project3.name': 'This Site — Matrix Edition',
        'project3.desc': 'This page is itself a work sample: spec\'d, designed, and built with a multi-agent pipeline (planner → designer → content → review), re-imagined in a Matrix style, human-verified, and deployed. The repo proves the workflow.',
        'project3.highlight': '$> Built with AI Agents',
        'project3.link': 'View source & build log',

        'skills.fullTitle': 'Skills',
        'skills.title': 'Core Stack',
        'stack1.label': 'Engineering & Data',
        'stack1.items': 'Python · SQL · MATLAB · TensorFlow / scikit-learn · Tableau (2019 – present)',
        'stack2.label': 'Industrial & Cloud',
        'stack2.items': 'IoT data pipelines · edge-to-cloud streaming · real-time dashboards · Linux · Docker',
        'stack3.label': 'AI Workflow',
        'stack3.items': 'Claude / Claude Code · Cursor · GitHub Copilot · multi-agent orchestration · production, daily',
        'stack4.label': 'Languages',
        'stack4.items': 'Mandarin (native) · English (professional, 8 yrs in the US)',
        'skillcard1.label': 'Data & ML',
        'skillcard2.label': 'Industrial Systems',
        'skillcard3.label': 'AI Engineering',
        'skillcard4.label': 'Languages',
        'skillcard4.zh': 'Mandarin (native)',
        'skillcard4.en': 'English (professional, 8 yrs in the US)',

        'opento.label': 'Open to',
        'opento.text': 'Data Engineer · AI Engineer · Manufacturing Intelligence roles in semiconductor / advanced manufacturing',

        'education.title': 'Education',
        'edu1.school': 'Yeshiva University',
        'edu1.degree': 'M.S. Data Analytics and Visualization',
        'edu1.time': '2019 — 2021 | New York, USA',
        'edu2.school': 'Calvin University',
        'edu2.degree': 'B.S. Mathematics (Minors: Engineering/Chemistry)',
        'edu2.time': '2012 — 2017 | Michigan, USA',

        'footer.headline': 'Wake up, Neo… Let\'s build the future.',
        'footer.subtext': 'If you\'re looking for an engineer who understands industrial systems, data pipelines, and AI collaboration — let\'s talk.',
        'footer.copyright': '2026 Zhihong Zhang · Designed and verified by a human, accelerated by AI agents.'
    }
};

// ════════════════════════════════════════════════════════════
// State
// ════════════════════════════════════════════════════════════

let currentLang = 'zh';
const typedTexts = {
    zh: 'cat identity.conf > 化工×数学×AI 交叉背景工程师；\n> 深度领域知识 + AI 智能体工作流；\n> 最近专注：制造业大规模 IoT。',
    en: 'cat identity.conf > ChemE × Math × AI engineer;\n> deep domain knowledge + agentic AI workflows;\n> most recently: manufacturing IoT at scale.'
};

// ════════════════════════════════════════════════════════════
// MATRIX RAIN
// ════════════════════════════════════════════════════════════

function initRain() {
    const canvas = document.getElementById('rainCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let w, h, columns, drops, fontSize = 16;
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFXYZ<>{}[]$/\\|+*=';

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        columns = Math.floor(w / fontSize);
        drops = Array(columns).fill(1).map(() => Math.random() * h / fontSize);
    }

    resize();
    window.addEventListener('resize', resize);

    function draw() {
        ctx.fillStyle = 'rgba(2, 6, 4, 0.08)';
        ctx.fillRect(0, 0, w, h);
        ctx.font = fontSize + 'px "Share Tech Mono", monospace';

        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            ctx.fillStyle = '#00ff41';
            ctx.shadowColor = '#00ff41';
            ctx.shadowBlur = 6;
            ctx.fillText(char, x, y);

            // Head brighter
            ctx.fillStyle = '#b8ffd4';
            ctx.shadowBlur = 10;
            ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, y - fontSize);

            if (y > h && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
        ctx.shadowBlur = 0;
        requestAnimationFrame(draw);
    }

    draw();
}

// ════════════════════════════════════════════════════════════
// BOOT SEQUENCE
// ════════════════════════════════════════════════════════════

function initBoot() {
    const boot = document.getElementById('boot');
    const log = document.getElementById('bootLog');
    if (!boot || !log) return;

    const lines = [
        { text: '> INITIALIZING MATRIX CORE SYSTEM ............ ', cls: 'log-cyan', delay: 200 },
        { text: '[ OK ]', cls: 'log-ok' },
        { text: '> LOADING NEURAL INTERFACE .................... ', cls: 'log-cyan' },
        { text: '[ OK ]', cls: 'log-ok' },
        { text: '> DECRYPTING IDENTITY: ' + i18n[currentLang]['hero.name'] + ' .......... ', cls: 'log-cyan' },
        { text: '[ OK ]', cls: 'log-ok' },
        { text: '> CALIBRATING SKILL MATRIX .................... ', cls: 'log-cyan' },
        { text: '[ OK ]', cls: 'log-ok' },
        { text: '> PIPELINE STATUS: IoT → CLOUD → DASHBOARD ..... ', cls: 'log-cyan' },
        { text: '[ RUNNING ]', cls: 'log-warn' },
        { text: '> ACCESS GRANTED — FOLLOW THE WHITE RABBIT', cls: 'log-ok' }
    ];

    let i = 0;
    function nextLine() {
        if (i >= lines.length) {
            setTimeout(() => boot.classList.add('hidden'), 350);
            return;
        }
        const { text, cls, delay } = lines[i];
        const line = document.createElement('div');
        line.className = 'log-line ' + cls;
        line.textContent = text;
        log.appendChild(line);
        i++;
        setTimeout(nextLine, (delay || 160) + Math.random() * 80);
    }

    setTimeout(nextLine, 300);
}

// ════════════════════════════════════════════════════════════
// TYPEWRITER EFFECT
// ════════════════════════════════════════════════════════════

function typeWriter(el, text, speed = 28, callback) {
    if (!el) { if (callback) callback(); return; }
    let i = 0;
    el.textContent = '';
    const lines = text.split('\n');

    function type() {
        if (i < text.length) {
            el.textContent = text.slice(0, i + 1);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

function initTyping() {
    const el = document.getElementById('typedLine');
    typeWriter(el, typedTexts[currentLang], 20, () => {
        const openTo = document.getElementById('openToTyped');
        if (openTo) {
            const greeting = currentLang === 'zh'
                ? 'waiting for next mission...'
                : 'waiting for the next mission...';
            setTimeout(() => typeWriter(openTo, greeting, 45), 300);
        }
    });
}

// ════════════════════════════════════════════════════════════
// NAVIGATION
// ════════════════════════════════════════════════════════════

function initNavigation() {
    const nav = document.getElementById('nav');
    let ticking = false;

    function updateNav() {
        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        updateActiveLink();
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNav);
            ticking = true;
        }
    });
    updateNav();
}

function updateActiveLink() {
    const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 120) {
            current = id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
}

function initMobileMenu() {
    const hamburger = document.getElementById('navHamburger');
    const navLinks = document.getElementById('navLinks');
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ════════════════════════════════════════════════════════════
// SCROLL REVEAL
// ════════════════════════════════════════════════════════════

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

    document.querySelectorAll('.phil-card, .job, .project-card, .skill-card, .sidebar-block, .section-title, .footer-headline, .footer-subtext, .footer-contact, .footer-copyright, .stat-panel').forEach((el, index) => {
        el.classList.add('reveal');
        if (el.classList.contains('phil-card') || el.classList.contains('job') || el.classList.contains('project-card')) {
            el.classList.add(`reveal-delay-${Math.min((index % 5) + 1, 5)}`);
        }
        observer.observe(el);
    });
}

// ════════════════════════════════════════════════════════════
// LANGUAGE TOGGLE
// ════════════════════════════════════════════════════════════

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) {
            el.textContent = i18n[lang][key];
        }
    });

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh'
        ? 'ZZ://matrix — 工业数据 × AI'
        : 'ZZ://matrix — Industrial Data × AI';

    const heroBreadcrumb = document.getElementById('heroBreadcrumb');
    if (heroBreadcrumb) {
        heroBreadcrumb.textContent = lang === 'zh' ? '~$ whoami' : '~$ whoami';
    }

    const heroName = document.getElementById('heroName');
    if (heroName && i18n[lang]['hero.name']) {
        heroName.setAttribute('data-text', i18n[lang]['hero.name']);
    }

    const toggle = document.getElementById('langToggle');
    if (toggle) {
        const span = toggle.querySelector('.lang-text');
        if (span) span.textContent = lang === 'zh' ? '中 / EN' : 'EN / 中';
    }
}

function initLanguageToggle() {
    const toggle = document.getElementById('langToggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'zh' : 'en';

        const container = document.querySelector('main') || document.body;
        container.classList.add('lang-fade-out');

        setTimeout(() => {
            applyLanguage(newLang);
            currentLang = newLang;

            // Re-type terminal lines
            const typed = document.getElementById('typedLine');
            const openTo = document.getElementById('openToTyped');
            if (typed) typeWriter(typed, typedTexts[currentLang], 18);
            if (openTo) {
                const greeting = currentLang === 'zh'
                    ? 'waiting for next mission...'
                    : 'waiting for the next mission...';
                setTimeout(() => typeWriter(openTo, greeting, 40), 500);
            }

            container.classList.remove('lang-fade-out');
            container.classList.add('lang-fade-in');
            setTimeout(() => container.classList.remove('lang-fade-in'), 250);
        }, 250);
    });
}

// ════════════════════════════════════════════════════════════
// PDF / SMOOTH SCROLL
// ════════════════════════════════════════════════════════════

function initPdfButton() {
    const btn = document.getElementById('pdfBtn');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const file = currentLang === 'zh' ? 'resume-zh.pdf' : 'resume-en.pdf';
        const a = document.createElement('a');
        a.href = file;
        a.download = file;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navH = document.getElementById('nav').offsetHeight;
                const pos = target.getBoundingClientRect().top + window.scrollY - navH;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });
    });
}

// ════════════════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    initRain();
    initBoot();
    applyLanguage('zh');

    initNavigation();
    initMobileMenu();
    initScrollReveal();
    initLanguageToggle();
    initPdfButton();
    initSmoothScroll();

    // Start typing after boot sequence completes (~2.5s)
    setTimeout(initTyping, 2400);
});
