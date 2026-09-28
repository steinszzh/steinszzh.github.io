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
        'nav.shelf': '书架',

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

        // Job Freelance
        'jobf.company': '自由数据分析师（独立接单）',
        'jobf.role': '数据分析与金融建模',
        'jobf.bullet1': '为多家初创客户提供数据分析服务：股票市场信号研究、回测框架搭建与金融时序分析',
        'jobf.bullet2': '搭建自动化数据管道与可视化看板，交付可直接使用的投资组合风险评估与市场趋势报告',
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
        'footer.copyright': '2026 张志鸿 · 人类设计与验证，AI 智能体加速。',

        // Bookshelf
        'shelf.title': '书架',
        'shelf.desc': '书架是比简历更诚实的自我介绍。以下全部来自我的微信读书：真实在读、真实划线。点开任意一本，看它们怎么塑造我的工作方式。',
        'shelf.stat_shelf': '在架',
        'shelf.stat_read': '读过',
        'shelf.stat_finish': '读完',
        'shelf.stat_notes': '笔记',
        'shelf.f_all': '全部',
        'shelf.f_taleb': '塔勒布',
        'shelf.f_feynman': '费曼',
        'shelf.f_kk': '凯文·凯利',
        'shelf.f_sys': '系统与智能',
        'shelf.g_taleb': '不确定性五部曲 · 全部读完',
        'shelf.g_feynman': '好奇者的科学精神',
        'shelf.g_kk': '技术预言三十年',
        'shelf.g_sys': '工程师的另一半书架',
        'shelf.finished': '读完',
        'shelf.reading': '在读',
        'shelf.myhighlight': '我的划线',
        'shelf.famousquote': '书中金句',
        'shelf.coreidea': '核心命题',
        'shelf.mynote': '我的想法',
        'shelf.whymatters': '为什么它塑造了我',
        'shelf.src': '数据来源：我的微信读书 · 划线与想法均为真实记录',
        'book1.title': '反脆弱',
        'book1.note': '积极拖延。',
        'book1.why': '越压越强的系统观是我的工作方法论：引入 AI 工作流时不搞大爆炸迁移——每周小改动、失败就回滚，一年下来系统自己长出了能力。',
        'book2.title': '黑天鹅',
        'book2.quote': '「历史不会爬行，只会跳跃。」',
        'book2.why': '承认预测不了，才建得出预警。加氢站 IoT 系统的哲学：不赌哪次异常是真事故，只保证响应时间压缩 80%。',
        'book3.title': '随机漫步的傻瓜',
        'book3.quote': '「如果失败的代价过于沉重，那么这件事成功的概率有多高，根本无关紧要。」',
        'book3.why': '自由职业做量化回测的第一课：先问输家去哪了。幸存者偏差从此刻进脑子——看设备故障数据时，我先看哪些异常根本没被记录。',
        'book4.title': '非对称风险',
        'book4.why': '没有切身利害的人不参与决策。驻场交付三年，我签字的每个技术方案都自己兜底——Skin in the Game 是职业底线。',
        'book5.title': '智慧与魔咒',
        'book5.why': '系统该适应人，而不是人适应系统。做数据看板同理：运营团队用不顺手，先改看板，绝不怪用户"不会看数据"。',
        'book6.title': '费曼讲演录',
        'book6.quote': '「第一原则是：你不能欺骗自己——而你恰恰是最容易被自己欺骗的人。」',
        'book6.why': '这本书的英文原版就叫 The Pleasure of Finding Things Out（《发现的乐趣》）。它是我的工程诚实教材：AI 生成的代码，能验证的才合并。',
        'book7.title': '费曼讲物理：入门',
        'book7.why': '化工加物理背景给我的最大资产：模型输出再漂亮，也要过一遍物理常识——费曼管这个叫"知道"和"理解"的区别。',
        'book8.title': '失控',
        'book8.quote': '「机器正在生物化，而生物正在工程化。」',
        'book8.why': '1994 年写透了我 2026 年的日常：分布式智能、自组织、蜂群思维。我的多 Agent 编排工作流，哲学全在这本书里。',
        'book9.title': '必然',
        'book9.quote': '「当复制品免费时，你就得出售无法复制的东西。」',
        'book9.why': '科技有自己的方向，人只能顺势而为。这是我 2026 年全力押注 AI 工程化的底气之一。',
        'book10.title': '科技想要什么',
        'book10.why': '在读中。KK 问"科技想要什么"——我也在用同样的问题审视自己的工作流：它想长成什么样，而不是我想让它长成什么样。',
        'book11.title': '心智社会',
        'book11.quote': '「大脑不是单一智能，而是无数各司其职的小智能体的社会。」',
        'book11.why': 'AI 奠基人 1986 年就说透了：智能来自大量简单智能体的协作。我今天的多 Agent 编排工作流不是追热点——是这本书的工程化实现。',
        'book12.title': '系统之美',
        'book12.quote': '「系统的行为方式，取决于它的结构，而不是系统里的某个部件。」',
        'book12.why': '工业系统思维的教科书。流量、存量、反馈回路——加氢站的故障率不是哪个零件的问题，是系统结构的必然产物；要降故障，先改结构。',
        'book13.title': 'AI 3.0',
        'book13.quote': '「今天的 AI 在狭义任务上超越人类，却依然缺乏人类幼儿都有的常识。」',
        'book13.why': '复杂科学家给 AI 热泼的一盆冷水。这决定了我的使用原则：生成归生成，验证归验证——LLM 负责起草，我负责签字。',
        'book14.title': '黑客与画家',
        'book14.quote': '「黑客与画家的共同之处是，他们都是创作者。」',
        'book14.why': '程序员是创作者，不是码农。我写代码的方式更像画画：快速起稿、反复修改、保留手感——工具链和作品都在 GitHub 上。',
        'book15.title': '芯片战争',
        'book15.why': '半导体七十年的产业史。面试存储与半导体公司之前先读完——面试官聊起行业格局的来龙去脉，我得接得上话。',
    },

    en: {
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'nav.pdf': 'Resume',
        'nav.shelf': 'Shelf',

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

        // Job Freelance
        'jobf.company': 'Freelance Data Analyst (Independent)',
        'jobf.role': 'Data Analysis & Financial Modeling',
        'jobf.bullet1': 'Delivered data analysis services for startup clients: stock market signal research, backtesting frameworks, and financial time-series analysis',
        'jobf.bullet2': 'Built automated data pipelines and dashboards; delivered portfolio risk assessment and market trend reports',
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
        'footer.copyright': '2026 Zhihong Zhang · Designed and verified by a human, accelerated by AI agents.',

        // Bookshelf
        'shelf.title': 'Bookshelf',
        'shelf.desc': 'A bookshelf is a more honest self-introduction than a résumé. Everything below is synced from my WeRead — real books, real highlights. Open any of them to see how they shaped how I work.',
        'shelf.stat_shelf': 'On shelf',
        'shelf.stat_read': 'Started',
        'shelf.stat_finish': 'Finished',
        'shelf.stat_notes': 'Notes',
        'shelf.f_all': 'All',
        'shelf.f_taleb': 'Taleb',
        'shelf.f_feynman': 'Feynman',
        'shelf.f_kk': 'Kevin Kelly',
        'shelf.f_sys': 'Systems & AI',
        'shelf.g_taleb': 'The Incerto series · all five finished',
        'shelf.g_feynman': 'A curious mind\'s science',
        'shelf.g_kk': 'Thirty years of tech prophecy',
        'shelf.g_sys': 'The engineer\'s other half of the shelf',
        'shelf.finished': 'Finished',
        'shelf.reading': 'Reading',
        'shelf.myhighlight': 'My highlight',
        'shelf.famousquote': 'From the book',
        'shelf.coreidea': 'Core thesis',
        'shelf.mynote': 'My note',
        'shelf.whymatters': 'Why it shaped me',
        'shelf.src': 'Source: my WeRead · highlights and notes are genuine records',
        'book1.title': 'Antifragile',
        'book1.note': 'Positive procrastination.',
        'book1.why': 'Systems that gain from stress are my working method: rolling out AI workflows with no big-bang migration — small weekly changes, rollback on failure, and the system grew capabilities on its own within a year.',
        'book2.title': 'The Black Swan',
        'book2.quote': '"History does not crawl, it jumps."',
        'book2.why': 'Admitting you can\'t predict is what makes early warning possible. The H2-station IoT philosophy: don\'t bet on which anomaly is the real accident — compress response time by 80%.',
        'book3.title': 'Fooled by Randomness',
        'book3.quote': '"If the cost of failure is too heavy, it hardly matters how likely the failure is."',
        'book3.why': 'Lesson one from quant backtesting in my freelancing days: ask where the losers went first. Survivorship bias became permanent — when reading equipment failure data, I first check which anomalies were never recorded at all.',
        'book4.title': 'Skin in the Game',
        'book4.why': 'No skin in the game, no say in the decision. Three years on-site delivery: I backstopped every technical plan I signed — it\'s a professional bottom line.',
        'book5.title': 'The Bed of Procrustes',
        'book5.why': 'Systems should fit people, not the reverse. Same with dashboards: if the ops team struggles, I fix the dashboard — never blame the user for "not getting data".',
        'book6.title': 'The Pleasure of Finding Things Out',
        'book6.quote': '"The first principle is that you must not fool yourself — and you are the easiest person to fool."',
        'book6.why': 'The Chinese edition is 费曼讲演录, literally Feynman\'s lecture collection. My textbook on engineering honesty: AI-generated code gets merged only if I can verify it.',
        'book7.title': 'The Feynman Lectures: Introduction',
        'book7.why': 'The biggest asset from my chemistry + physics background: no matter how pretty a model\'s output, it must pass a physics-common-sense check — Feynman called this the difference between "knowing" and "understanding".',
        'book8.title': 'Out of Control',
        'book8.quote': '"Machines are becoming biological, and biology is becoming engineered."',
        'book8.why': 'Written in 1994, it describes my 2026: distributed intelligence, self-organization, swarm thinking. The philosophy behind my multi-agent orchestration workflows is all in this book.',
        'book9.title': 'The Inevitable',
        'book9.quote': '"When copies are free, you sell what cannot be copied."',
        'book9.why': 'Technology has its own direction and we can only surf it. Part of my confidence for going all-in on AI engineering in 2026.',
        'book10.title': 'What Technology Wants',
        'book10.why': 'Currently reading. KK asks what technology wants — I ask my own workflows the same question: what do they want to become, rather than what I want them to become.',
        'book11.title': 'The Society of Mind',
        'book11.quote': '"The brain is not one single mind, but a society of countless small, specialized agents."',
        'book11.why': 'The AI founding father nailed it in 1986: intelligence emerges from large numbers of simple agents collaborating. My multi-agent orchestration workflows aren\'t trend-chasing — they\'re this book, implemented.',
        'book12.title': 'Thinking in Systems',
        'book12.quote': '"A system\'s behavior depends on its structure — not on any single component inside it."',
        'book12.why': 'The textbook of industrial systems thinking. Stocks, flows, feedback loops — the H2 station failure rate wasn\'t a component problem but a structural inevitability; to cut failures, change the structure.',
        'book13.title': 'AI 3.0',
        'book13.quote': '"Today\'s AI surpasses humans at narrow tasks, yet still lacks the common sense of a human toddler."',
        'book13.why': 'A complexity scientist\'s cold water on AI hype. It set my usage rule: generation is generation, verification is verification — the LLM drafts, I sign off.',
        'book14.title': 'Hackers & Painters',
        'book14.quote': '"What hackers and painters have in common is that they\'re both makers."',
        'book14.why': 'Programmers are creators, not code laborers. I write code like painting: fast sketches, constant revision, keeping the hand feel — toolchain and work all on GitHub.',
        'book15.title': 'Chip War (CN ed.)',
        'book15.why': 'Seventy years of semiconductor industry history. I finished it before interviewing at memory and semiconductor companies — when interviewers trace the industry landscape, I can keep up.'
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

    document.querySelectorAll('.phil-card, .job, .project-card, .skill-card, .sidebar-block, .section-title, .footer-headline, .footer-subtext, .footer-contact, .footer-copyright, .stat-panel, .shelf-desc, .shelf-stat, .shelf-group').forEach((el, index) => {
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
        const file = currentLang === 'zh' ? 'resume_zh.pdf' : 'resume_en.pdf';
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
