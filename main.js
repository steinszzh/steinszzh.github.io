/**
 * ZHIHONG ZHANG — AI-Native Engineer Resume
 * Main JavaScript — Interactions, i18n, Animations, Charts
 */

// ============================================
// I18N — Bilingual Content Store
// ============================================

const i18n = {
    en: {
        // Nav
        'nav.logo': 'ZZ.',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'nav.pdf': '<i class="fas fa-download"></i> Save PDF',

        // Hero
        'hero.tagline': 'AI-Native Engineer & Data Analyst',
        'hero.name': 'Zhihong Zhang',
        'hero.subtitle': 'Building data-driven industrial intelligence with AI',
        'hero.summary': 'At the intersection of Chemical Engineering, Mathematics, and AI. I ship industrial IoT and predictive-maintenance systems faster by pairing deep domain knowledge with agentic AI workflows (Claude Code, Cursor, multi-agent pipelines). Currently in the hydrogen energy sector.',
        'impact.label': 'Selected Impact',
        'impact.item1': 'faster anomaly response — hydrogen station IoT early-warning system',
        'impact.item2': 'lower equipment failure rate via predictive maintenance dashboards',
        'impact.item3': 'prototyping cycle, using agentic AI engineering workflows',
        'hero.status': '● AVAILABLE / OPEN TO WORK',
        'hero.location': 'Shanghai, China',

        // Philosophy
        'philosophy.quote': 'AI doesn\'t replace engineering judgment — it multiplies it. My job is to bring the domain knowledge, the verification, and the taste.',
        'philosophy.card1.title': 'AI-Assisted Engineering',
        'philosophy.card1.desc': 'Spec-driven development with AI agents: I define intent, constraints, and tests; agents implement; I review and verify every line that ships.',
        'philosophy.card2.title': 'Multi-Agent',
        'philosophy.card2.desc': 'Decompose complex tasks into roles — research, build, review — and orchestrate specialized agents in parallel. Measured result: 2-week prototypes in 3 days.',
        'philosophy.card3.title': 'Domain × AI',
        'philosophy.card3.desc': 'Deep chemical engineering knowledge × modern AI tools = unique competitive edge for real industrial problems.',

        // Experience
        'experience.title': 'Experience',

        // Job 1
        'job1.company': 'Sinopec Hydrogen Energy (Shanghai)',
        'job1.time': '2023.01 — Present',
        'job1.role': 'IT Operations & Data Analyst',
        'job1.bullet1': 'Led IoT early warning system for hydrogen stations, achieving real-time cloud data streaming with 80% faster anomaly detection response',
        'job1.bullet2': 'Spearheaded university collaboration on diaphragm compressor predictive maintenance, integrating ML models with chemical domain knowledge',
        'job1.bullet3': 'Introduced agentic AI development workflows (multi-agent pipelines, AI pair-programming), compressing prototyping cycles from 2 weeks to 3 days',
        'job1.bullet4': 'Built real-time dashboards for operations teams, reducing equipment failure rates by 35%',

        // Job 2
        'job2.company': 'Yeshiva University',
        'job2.time': '2019.08 — 2021.01',
        'job2.role': 'Data Science Researcher',
        'job2.bullet1': 'Capstone: Optimized CNN speaker recognition model, improving test accuracy by 10%',
        'job2.bullet2': 'Insurance prediction: Built Sklearn/TensorFlow models, boosting accuracy from 73% to 88%',
        'job2.bullet3': 'AWS Analytics: Analyzed COVID-19 stock market impact with Tableau visualization',

        // Job 3
        'job3.company': 'SUFE Overseas Exam Center',
        'job3.time': '2017.12 — 2019.07',
        'job3.role': 'Proctor & IT Maintenance',
        'job3.bullet1': 'Managed daily IT equipment maintenance and network administration',
        'job3.bullet2': 'Ensured stable operation of systems for TOEFL/GRE large-scale exams',

        // Projects
        'projects.title': 'Featured Projects',
        'project1.category': 'Industrial IoT',
        'project1.name': 'H2 Station Cloud Warning System',
        'project1.desc': 'Built end-to-end data pipeline from edge sensors to cloud with real-time dashboard. Leveraged multi-agent architecture for data collection, cleaning, analysis, and alerting.',
        'project1.highlight': 'Anomaly response ↓ 80%',
        'project2.category': 'ML × Chemical Engineering',
        'project2.name': 'Compressor Predictive Maintenance',
        'project2.desc': 'Fused TensorFlow predictive models with chemical domain knowledge. Accelerated model iteration through multi-agent collaboration, significantly reducing unplanned downtime.',
        'project2.highlight': 'Failure rate ↓ 35%',
        'project3.category': 'Open Source / Agentic Build',
        'project3.name': 'This Site — Agentic Build Pipeline',
        'project3.desc': 'This page is itself a work sample: spec\'d, designed, and built with a multi-agent pipeline (planner → designer → content → review), then human-verified and deployed to GitHub Pages. The repo shows the full workflow.',
        'project3.highlight': 'Repo = proof of workflow',
        'project3.link': 'View source & build log',
        'project1.note': 'Proprietary system — architecture walkthrough available in interview',
        'project2.note': 'Joint research with university partner — methodology available in interview',

        // Skills
        'skills.title': 'Core Stack',
        'skills.fullTitle': 'Skills',
        'stack1.label': 'Engineering & Data',
        'stack1.items': 'Python · SQL · MATLAB · TensorFlow / scikit-learn · Tableau · 6+ yrs data work',
        'stack2.label': 'Industrial & Cloud',
        'stack2.items': 'IoT data pipelines · edge-to-cloud streaming · real-time dashboards · Linux · Docker',
        'stack3.label': 'AI Workflow',
        'stack3.items': 'Claude / Claude Code · Cursor · GitHub Copilot · multi-agent orchestration · production use, daily',
        'stack4.label': 'Languages',
        'stack4.items': 'Mandarin (native) · English (professional, 8 yrs in the US)',

        // Skill Tags
        'tags.primaryLabel': 'Primary',
        'tags.secondaryLabel': 'Secondary',
        'tags.aiLabel': 'AI Tools',

        // Education
        'education.title': 'Education',
        'edu1.school': 'Yeshiva University',
        'edu1.degree': 'M.S. Data Analytics and Visualization',
        'edu1.time': '2019 — 2021 | New York, USA',
        'edu2.school': 'Calvin University',
        'edu2.degree': 'B.S. Mathematics (Minors: Engineering/Chemistry)',
        'edu2.time': '2012 — 2017 | Michigan, USA',

        // Footer
        'footer.headline': "Let's build the future.",
        'footer.subtext': "If you're looking for an engineer who understands chemicals, data, and AI collaboration — let's talk.",
        'footer.copyright': '2026 Zhihong Zhang · Designed and verified by a human, accelerated by AI agents.'
    },

    zh: {
        // Nav
        'nav.logo': 'ZZ.',
        'nav.about': '关于',
        'nav.experience': '经历',
        'nav.projects': '项目',
        'nav.skills': '技能',
        'nav.contact': '联系',
        'nav.pdf': '<i class="fas fa-download"></i> 下载 PDF',

        // Hero
        'hero.tagline': 'AI-Native Engineer & Data Analyst',
        'hero.name': '张志鸿',
        'hero.subtitle': '用 AI 构建数据驱动的工业智能系统',
        'hero.summary': '化工 × 数学 × AI 的交叉背景。通过深度领域知识 + AI 智能体工作流（Claude Code、Cursor、多 Agent 流水线），更快地交付工业 IoT 与预测性维护系统。目前深耕氢能源行业。',
        'impact.label': '关键成果',
        'impact.item1': '异常响应提速 —— 加氢站 IoT 预警系统',
        'impact.item2': '设备故障率下降 —— 预测性维护看板',
        'impact.item3': '原型周期压缩 —— AI 智能体工程工作流',
        'hero.status': '● 求职中 / OPEN TO WORK',
        'hero.location': '中国 · 上海',

        // Philosophy
        'philosophy.quote': 'AI 不是替代工程判断，而是放大它。我的价值在于提供领域知识、验证把关和品味。',
        'philosophy.card1.title': 'AI 辅助工程',
        'philosophy.card1.desc': '规格驱动的 AI 开发：我定义意图、约束与测试，由 Agent 实现，每一行上线代码经我审查验证。',
        'philosophy.card2.title': 'Multi-Agent',
        'philosophy.card2.desc': '将复杂任务拆解为研究、构建、评审等角色，并行编排专业 Agent。实测：2 周原型压缩到 3 天。',
        'philosophy.card3.title': 'Domain × AI',
        'philosophy.card3.desc': '化工领域的深度知识 × 现代AI工具 = 解决真实工业问题的独特竞争力。',

        // Experience
        'experience.title': '工作经历',

        // Job 1
        'job1.company': '中石化氢能源（上海）有限责任公司',
        'job1.time': '2023.01 — 至今',
        'job1.role': 'IT运维工程师 & 数据分析师',
        'job1.bullet1': '主导加氢站 IoT 预警系统建设，实现传感器数据实时上云，异常检测响应时间缩短 80%',
        'job1.bullet2': '作为技术负责人与高校联合研发隔膜压缩机预测性维护系统，融合 ML 模型与化工领域知识',
        'job1.bullet3': '引入 AI 智能体开发工作流（多 Agent 流水线 + AI 结对编程），将原型开发周期从 2 周压缩至 3 天',
        'job1.bullet4': '搭建数据可视化看板，为运营团队提供实时决策支持，设备故障率降低 35%',

        // Job 2
        'job2.company': '耶希瓦大学 (Yeshiva University)',
        'job2.time': '2019.08 — 2021.01',
        'job2.role': '数据科学项目研究员',
        'job2.bullet1': 'Capstone 项目：优化 CNN 语音识别模型，测试集准确率提升 10%',
        'job2.bullet2': '保险预测项目：使用 Sklearn/TensorFlow 构建预测模型，准确率从 73% 提升至 88%',
        'job2.bullet3': 'AWS 数据分析：分析 COVID-19 对股市影响，Tableau 可视化展示',

        // Job 3
        'job3.company': '上海财经大学海外考试中心',
        'job3.time': '2017.12 — 2019.07',
        'job3.role': '监考及机房维护',
        'job3.bullet1': '负责考试中心 IT 设备日常维护与网络管理',
        'job3.bullet2': '保障托福/GRE 等大型考试系统稳定运行',

        // Projects
        'projects.title': '精选项目',
        'project1.category': '工业物联网',
        'project1.name': '加氢站云端预警系统',
        'project1.desc': '搭建从边缘传感器到云端的全链路数据管道，开发实时可视化看板。利用多Agent架构分别负责数据采集、清洗、分析和告警，大幅提升开发效率。',
        'project1.highlight': '异常响应 ↓ 80%',
        'project2.category': '机器学习 × 化工',
        'project2.name': '压缩机预测性维护',
        'project2.desc': '将 TensorFlow 预测模型与化工领域知识融合，构建隔膜压缩机故障预测系统。通过多Agent协作快速迭代模型，显著减少非计划停机。',
        'project2.highlight': '故障率 ↓ 35%',
        'project3.category': '开源 / Agent 构建',
        'project3.name': '本站 —— Agent 构建流水线',
        'project3.desc': '这个页面本身就是工作样本：由多 Agent 流水线（规划 → 设计 → 内容 → 评审）完成规格设计与构建，经人工验证后部署到 GitHub Pages。仓库即工作流的证明。',
        'project3.highlight': '仓库 = 工作流证明',
        'project3.link': '查看源码与构建记录',
        'project1.note': '企业内部系统 —— 可在面试中讲解架构',
        'project2.note': '与高校联合研究 —— 可在面试中讲解方法论',

        // Skills
        'skills.title': '核心技能栈',
        'skills.fullTitle': '技能栈',
        'stack1.label': '工程与数据',
        'stack1.items': 'Python · SQL · MATLAB · TensorFlow / scikit-learn · Tableau · 6 年以上数据经验',
        'stack2.label': '工业与云端',
        'stack2.items': 'IoT 数据管道 · 边缘到云实时传输 · 实时看板 · Linux · Docker',
        'stack3.label': 'AI 工作流',
        'stack3.items': 'Claude / Claude Code · Cursor · GitHub Copilot · 多 Agent 编排 · 生产环境日常使用',
        'stack4.label': '语言能力',
        'stack4.items': '中文（母语）· 英文（专业级，旅美 8 年）',

        // Skill Tags
        'tags.primaryLabel': '主要',
        'tags.secondaryLabel': '次要',
        'tags.aiLabel': 'AI 工具',

        // Education
        'education.title': '教育背景',
        'edu1.school': '耶希瓦大学 (Yeshiva University)',
        'edu1.degree': '理学硕士，数据分析与可视化',
        'edu1.time': '2019 — 2021 | 纽约，美国',
        'edu2.school': '加尔文大学 (Calvin University)',
        'edu2.degree': '理学学士，数学（辅修工程/化学）',
        'edu2.time': '2012 — 2017 | 密歇根，美国',

        // Footer
        'footer.headline': '一起构建未来。',
        'footer.subtext': '如果您正在寻找一位懂化工、懂数据、更懂AI协作的工程师，欢迎联系。',
        'footer.copyright': '2026 张志鸿 · 人类设计与验证，AI 智能体加速。'
    }
};

// Radar chart labels per language
const radarLabels = {
    en: ['Coding', 'AI/ML', 'Domain Knowledge', 'Communication', 'Cloud/IoT', 'AI Collaboration'],
    zh: ['编程能力', 'AI/ML', '化工领域知识', '沟通协作', '云端/IoT', 'AI 协作']
};

// Radar chart data
const radarData = [95, 85, 90, 80, 78, 92];

// ============================================
// State
// ============================================

let currentLang = 'zh';
let heroChart = null;
let skillsChart = null;

// ============================================
// DOM Ready
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollReveal();
    initSkillBars();
    initProgressBar();
    initLanguageToggle();
    initPdfButton();
    initMobileMenu();
    initCharts();

    // Default to Chinese — set content directly without fade animation
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n['zh'][key]) {
            el.innerHTML = i18n['zh'][key];
        }
    });
    document.documentElement.lang = 'zh';
    document.title = `${i18n['zh']['hero.name']} — AI-Native Engineer & Data Analyst`;
    updateRadarChart('zh');
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        const langText = langToggle.querySelector('.lang-text');
        if (langText) langText.textContent = '中 / EN';
    }
});

// ============================================
// Navigation — Scroll Background
// ============================================

function initNavigation() {
    const nav = document.getElementById('nav');
    let ticking = false;

    function updateNav() {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNav);
            ticking = true;
        }
    });

    // Initial check
    updateNav();
}

// ============================================
// Mobile Menu
// ============================================

function initMobileMenu() {
    const hamburger = document.getElementById('navHamburger');
    const navLinks = document.getElementById('navLinks');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ============================================
// Scroll Reveal — IntersectionObserver
// ============================================

function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add reveal class to elements
    const revealSelectors = [
        '.philosophy-quote-wrap',
        '.phil-card',
        '.job',
        '.project-card',
        '.sidebar-block',
        '.skill-tag-group',
        '.section-title',
        '.skills-radar-wrap',
        '.skills-right',
        '.footer-headline',
        '.footer-subtext',
        '.footer-contact',
        '.footer-copyright'
    ];

    revealSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, index) => {
            el.classList.add('reveal');
            if (selector === '.phil-card' || selector === '.job' || selector === '.project-card') {
                el.classList.add(`reveal-delay-${Math.min(index + 1, 5)}`);
            }
            observer.observe(el);
        });
    });
}

// ============================================
// Skill Bars Animation
// ============================================

function initSkillBars() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target.querySelector('.skill-bar-fill');
                if (fill) {
                    // Small delay for visual effect
                    setTimeout(() => {
                        fill.classList.add('animated');
                    }, 200);
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-bar').forEach(bar => {
        observer.observe(bar);
    });
}

// ============================================
// Reading Progress Bar
// ============================================

function initProgressBar() {
    const progressBar = document.getElementById('progressBar');
    if (!progressBar) return;

    let ticking = false;

    function updateProgress() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = progress + '%';
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateProgress);
            ticking = true;
        }
    });
}

// ============================================
// Language Toggle
// ============================================

function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;

    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'zh' : 'en';
        switchLanguage(newLang);
    });
}

function switchLanguage(lang) {
    if (lang === currentLang) return;

    const contentElements = document.querySelectorAll('[data-i18n]');
    const container = document.querySelector('main') || document.body;

    // Fade out
    container.classList.add('lang-fade-out');

    setTimeout(() => {
        // Update all text content
        contentElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang][key]) {
                el.innerHTML = i18n[lang][key];
            }
        });

        // Update page title
        const name = i18n[lang]['hero.name'];
        document.title = `${name} — AI-Native Engineer & Data Analyst`;

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update radar chart labels
        updateRadarChart(lang);

        // Update toggle button text
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            const langText = langToggle.querySelector('.lang-text');
            if (langText) {
                langText.textContent = lang === 'en' ? 'EN / 中' : '中 / EN';
            }
        }

        currentLang = lang;

        // Fade in
        container.classList.remove('lang-fade-out');
        container.classList.add('lang-fade-in');

        setTimeout(() => {
            container.classList.remove('lang-fade-in');
        }, 250);
    }, 250);
}

// ============================================
// PDF / Print Button
// ============================================

function initPdfButton() {
    const pdfBtn = document.getElementById('pdfBtn');
    if (!pdfBtn) return;

    pdfBtn.addEventListener('click', () => {
        window.print();
    });
}

// ============================================
// Chart.js Radar Charts
// ============================================

function initCharts() {
    initHeroChart();
    initSkillsChart();
}

function initHeroChart() {
    const ctx = document.getElementById('radarChart');
    if (!ctx) return;

    Chart.defaults.font.family = '"Inter", sans-serif';
    Chart.defaults.color = 'rgba(255,255,255,0.6)';

    heroChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: radarLabels[currentLang],
            datasets: [{
                label: 'Skills',
                data: radarData,
                backgroundColor: 'rgba(37, 99, 235, 0.15)',
                borderColor: 'rgba(37, 99, 235, 0.8)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(37, 99, 235, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 26, 26, 0.9)',
                    titleFont: { family: '"Inter", sans-serif', size: 13 },
                    bodyFont: { family: '"JetBrains Mono", monospace', size: 12 },
                    padding: 12,
                    cornerRadius: 8,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return context.parsed.r + '%';
                        }
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    min: 0,
                    ticks: {
                        stepSize: 20,
                        font: { size: 10, family: '"JetBrains Mono", monospace' },
                        color: 'rgba(255,255,255,0.3)',
                        backdropColor: 'transparent',
                        showLabelBackdrop: false,
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.1)',
                        lineWidth: 1,
                    },
                    angleLines: {
                        color: 'rgba(255,255,255,0.08)',
                    },
                    pointLabels: {
                        font: { size: 12, family: '"Inter", sans-serif', weight: '500' },
                        color: 'rgba(255,255,255,0.7)',
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeOutQuart'
            }
        }
    });
}

function initSkillsChart() {
    const ctx = document.getElementById('skillsRadarChart');
    if (!ctx) return;

    skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: radarLabels[currentLang],
            datasets: [{
                label: 'Skills',
                data: radarData,
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                borderColor: 'rgba(37, 99, 235, 0.7)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(37, 99, 235, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 26, 26, 0.9)',
                    titleFont: { family: '"Inter", sans-serif', size: 13 },
                    bodyFont: { family: '"JetBrains Mono", monospace', size: 12 },
                    padding: 12,
                    cornerRadius: 8,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return context.parsed.r + '%';
                        }
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    min: 0,
                    ticks: {
                        stepSize: 20,
                        font: { size: 10, family: '"JetBrains Mono", monospace' },
                        color: 'rgba(0,0,0,0.3)',
                        backdropColor: 'transparent',
                        showLabelBackdrop: false,
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.06)',
                        lineWidth: 1,
                    },
                    angleLines: {
                        color: 'rgba(0,0,0,0.05)',
                    },
                    pointLabels: {
                        font: { size: 12, family: '"Inter", sans-serif', weight: '500' },
                        color: 'rgba(0,0,0,0.6)',
                    }
                }
            },
            animation: {
                duration: 1200,
                easing: 'easeOutQuart'
            }
        }
    });
}

function updateRadarChart(lang) {
    if (heroChart) {
        heroChart.data.labels = radarLabels[lang];
        heroChart.update('none');
    }
    if (skillsChart) {
        skillsChart.data.labels = radarLabels[lang];
        skillsChart.update('none');
    }
}

// ============================================
// Smooth scroll for nav links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const navHeight = document.getElementById('nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
