/**
 * CareerScan - Professional ATS & Skill Analyzer
 * Application Logic & Dynamic Analysis Engine
 */

const AppState = {
  activeView: 'dashboard',
  currentRoleKey: 'data-analyst',
  
  // Role benchmark database
  roles: {
    'data-analyst': {
      title: 'Data Analyst',
      company: 'Stripe',
      badgeText: 'Target: Data Analyst @ Stripe',
      score: 82,
      scoreDelta: '↑ 6 points vs last scan',
      skillMatch: '87%',
      missingCount: 4,
      scoreCategory: 'Strong Match',
      subScores: {
        keywords: 86,
        skills: 84,
        experience: 78,
        education: 92
      },
      matchedSkills: ['Python', 'SQL', 'Excel', 'Power BI', 'Git', 'Statistics', 'Data Cleaning'],
      improveSkills: ['Machine Learning', 'Tableau', 'ETL Pipelines'],
      missingSkills: ['AWS', 'Docker', 'Apache Airflow', 'Snowflake'],
      skillGaps: [
        { name: 'Python', pct: 95, status: 'success' },
        { name: 'SQL', pct: 88, status: 'success' },
        { name: 'Power BI', pct: 75, status: 'success' },
        { name: 'Tableau', pct: 60, status: 'warning' },
        { name: 'AWS Cloud', pct: 35, status: 'danger' },
        { name: 'Docker & Containers', pct: 20, status: 'danger' }
      ],
      keywords: [
        { name: 'Python', inResume: true, inJob: true, importance: 'High', status: 'Matched' },
        { name: 'SQL', inResume: true, inJob: true, importance: 'High', status: 'Matched' },
        { name: 'Excel', inResume: true, inJob: true, importance: 'Medium', status: 'Matched' },
        { name: 'Power BI', inResume: true, inJob: true, importance: 'High', status: 'Matched' },
        { name: 'AWS', inResume: false, inJob: true, importance: 'High', status: 'Missing' },
        { name: 'Docker', inResume: false, inJob: true, importance: 'Medium', status: 'Missing' },
        { name: 'Airflow', inResume: false, inJob: true, importance: 'Medium', status: 'Missing' },
        { name: 'Snowflake', inResume: false, inJob: true, importance: 'Medium', status: 'Missing' }
      ],
      suggestedSummary: 'Data analytics student with experience in Python, SQL and Power BI, with hands-on academic projects in data visualization and analysis.',
      suggestedBullet: 'Engineered automated SQL queries and dynamic Power BI dashboards, reducing recurring weekly reporting cycle time by 34% across 5 stakeholder teams.',
      jobDescriptionText: `We are seeking a talented Data Analyst to join our Revenue Operations team. 

Key Responsibilities:
• Build and maintain robust SQL queries, data models, and automated reporting pipelines.
• Partner with stakeholders to create executive Power BI and Tableau dashboards.
• Conduct exploratory data analysis using Python and statistical methodologies.
• Deploy scalable ETL workflows on cloud platforms including AWS and Docker containers.
• Collaborate with data engineering on Snowflake data warehousing.

Requirements:
• 2–4 years of demonstrated experience in data analytics, business intelligence, or quantitative analysis.
• Bachelor's degree in Computer Science, Statistics, Mathematics, or related field.
• Deep proficiency in SQL, Python, Excel, and Power BI.
• Hands-on familiarity with AWS cloud services, Docker, and Airflow orchestration is strongly preferred.
• Excellent written and verbal communication skills.`
    },

    'business-analyst': {
      title: 'Business Analyst',
      company: 'McKinsey',
      badgeText: 'Target: Business Analyst @ McKinsey',
      score: 76,
      scoreDelta: '↑ 2 points vs last scan',
      skillMatch: '79%',
      missingCount: 5,
      scoreCategory: 'Moderate Match',
      subScores: {
        keywords: 78,
        skills: 80,
        experience: 72,
        education: 90
      },
      matchedSkills: ['Excel', 'SQL', 'Power BI', 'Financial Modeling', 'Stakeholder Presentations'],
      improveSkills: ['Agile Methodology', 'Process Mapping'],
      missingSkills: ['Jira', 'Strategic Roadmapping', 'BPMN', 'Market Sizing', 'Tableau'],
      skillGaps: [
        { name: 'Excel & Modeling', pct: 90, status: 'success' },
        { name: 'SQL Querying', pct: 82, status: 'success' },
        { name: 'Power BI', pct: 75, status: 'success' },
        { name: 'Jira & Agile', pct: 40, status: 'warning' },
        { name: 'Market Sizing & Case Frameworks', pct: 25, status: 'danger' }
      ],
      keywords: [
        { name: 'Excel', inResume: true, inJob: true, importance: 'High', status: 'Matched' },
        { name: 'SQL', inResume: true, inJob: true, importance: 'High', status: 'Matched' },
        { name: 'Power BI', inResume: true, inJob: true, importance: 'Medium', status: 'Matched' },
        { name: 'Stakeholder Management', inResume: true, inJob: true, importance: 'High', status: 'Matched' },
        { name: 'Jira', inResume: false, inJob: true, importance: 'High', status: 'Missing' },
        { name: 'BPMN', inResume: false, inJob: true, importance: 'Medium', status: 'Missing' },
        { name: 'Agile', inResume: false, inJob: true, importance: 'Medium', status: 'Missing' },
        { name: 'Tableau', inResume: false, inJob: true, importance: 'Medium', status: 'Missing' }
      ],
      suggestedSummary: 'Analytical professional adept in quantitative financial modeling, SQL-driven insight generation, and executive stakeholder communication.',
      suggestedBullet: 'Conducted cross-functional business process audits and cost-benefit modeling, uncovering $180K in operational cost savings.',
      jobDescriptionText: `McKinsey is hiring a Business Analyst for Client Operations.

Responsibilities:
• Deliver quantitative business intelligence, operational reporting, and strategic financial models.
• Interface directly with enterprise stakeholders to synthesize complex business requirements.
• Manage agile sprint backlogs and user stories within Jira.
• Build executive slide decks and interactive Power BI presentations.

Requirements:
• Bachelor's degree in Economics, Finance, Engineering, or Business.
• Advanced Excel and SQL proficiency.
• Experience in Agile/Scrum workflows and stakeholder presentations.`
    },

    'python-dev': {
      title: 'Python Developer',
      company: 'Spotify',
      badgeText: 'Target: Python Developer @ Spotify',
      score: 71,
      scoreDelta: '↓ 3 points vs last scan',
      skillMatch: '73%',
      missingCount: 6,
      scoreCategory: 'Needs Optimization',
      subScores: {
        keywords: 70,
        skills: 72,
        experience: 68,
        education: 88
      },
      matchedSkills: ['Python', 'SQL', 'Git', 'Linux Basics', 'REST APIs'],
      improveSkills: ['FastAPI', 'PyTest Unit Testing'],
      missingSkills: ['Docker', 'Kubernetes', 'Redis', 'Kafka', 'CI/CD Pipelines', 'AWS'],
      skillGaps: [
        { name: 'Python Core', pct: 90, status: 'success' },
        { name: 'SQL & Database', pct: 85, status: 'success' },
        { name: 'FastAPI / Flask', pct: 55, status: 'warning' },
        { name: 'Docker / Microservices', pct: 30, status: 'danger' },
        { name: 'Kafka / Redis', pct: 15, status: 'danger' }
      ],
      keywords: [
        { name: 'Python', inResume: true, inJob: true, importance: 'High', status: 'Matched' },
        { name: 'SQL', inResume: true, inJob: true, importance: 'Medium', status: 'Matched' },
        { name: 'Git', inResume: true, inJob: true, importance: 'Medium', status: 'Matched' },
        { name: 'FastAPI', inResume: false, inJob: true, importance: 'High', status: 'Missing' },
        { name: 'Docker', inResume: false, inJob: true, importance: 'High', status: 'Missing' },
        { name: 'Kubernetes', inResume: false, inJob: true, importance: 'High', status: 'Missing' },
        { name: 'Redis', inResume: false, inJob: true, importance: 'Medium', status: 'Missing' },
        { name: 'Kafka', inResume: false, inJob: true, importance: 'High', status: 'Missing' }
      ],
      suggestedSummary: 'Python Software Developer with practical knowledge in backend service architecture, relational databases, and test-driven development.',
      suggestedBullet: 'Architected high-throughput Python REST APIs processing 50k+ daily requests with optimized SQL indexing, improving query response time by 42%.',
      jobDescriptionText: `Spotify is looking for a Backend Python Developer to scale core streaming services.

Responsibilities:
• Develop robust Python microservices utilizing FastAPI and asyncio.
• Optimize caching layers with Redis and message queues using Apache Kafka.
• Containerize and deploy services via Docker and Kubernetes on AWS.

Requirements:
• 3+ years experience with Python backend systems.
• Deep understanding of distributed architecture and containerized deployments.`
    },

    'frontend-eng': {
      title: 'Senior Frontend Engineer',
      company: 'Vercel',
      badgeText: 'Target: Senior Frontend @ Vercel',
      score: 68,
      scoreDelta: '— Baseline scan',
      skillMatch: '65%',
      missingCount: 6,
      scoreCategory: 'Moderate Gap',
      subScores: {
        keywords: 64,
        skills: 66,
        experience: 70,
        education: 85
      },
      matchedSkills: ['JavaScript', 'HTML5/CSS3', 'Git', 'Responsive Design'],
      improveSkills: ['React', 'Web Performance Optimization'],
      missingSkills: ['TypeScript', 'Next.js', 'TailwindCSS', 'GraphQL', 'Jest / Cypress', 'CI/CD'],
      skillGaps: [
        { name: 'JavaScript / HTML5', pct: 85, status: 'success' },
        { name: 'React', pct: 60, status: 'warning' },
        { name: 'TypeScript', pct: 40, status: 'warning' },
        { name: 'Next.js Framework', pct: 25, status: 'danger' },
        { name: 'Testing (Jest/Cypress)', pct: 20, status: 'danger' }
      ],
      keywords: [
        { name: 'JavaScript', inResume: true, inJob: true, importance: 'High', status: 'Matched' },
        { name: 'Git', inResume: true, inJob: true, importance: 'Medium', status: 'Matched' },
        { name: 'TypeScript', inResume: false, inJob: true, importance: 'High', status: 'Missing' },
        { name: 'Next.js', inResume: false, inJob: true, importance: 'High', status: 'Missing' },
        { name: 'React', inResume: false, inJob: true, importance: 'High', status: 'Missing' },
        { name: 'GraphQL', inResume: false, inJob: true, importance: 'Medium', status: 'Missing' },
        { name: 'Performance Optimization', inResume: false, inJob: true, importance: 'Medium', status: 'Missing' }
      ],
      suggestedSummary: 'Frontend Engineer focused on modern web applications, responsive user interfaces, and component performance optimization.',
      suggestedBullet: 'Engineered modular React component library, accelerating team design velocity and reducing bundle payload by 28%.',
      jobDescriptionText: `Vercel is seeking a Senior Frontend Engineer to build web application experiences.

Responsibilities:
• Build performant web interfaces with Next.js, React, and TypeScript.
• Optimize Core Web Vitals and clientside rendering performance.
• Write comprehensive integration and end-to-end tests using Jest and Cypress.

Requirements:
• 4+ years frontend development experience with TypeScript and modern React.
• Deep understanding of browser architecture, state management, and modern CSS.`
    }
  },

  historyList: [
    { date: 'Sep 29', role: 'Data Analyst', company: 'Stripe', score: 82, match: '87%', status: 'Strong Match', roleKey: 'data-analyst' },
    { date: 'Sep 27', role: 'Business Analyst', company: 'McKinsey', score: 76, match: '79%', status: 'Moderate Match', roleKey: 'business-analyst' },
    { date: 'Sep 24', role: 'Python Developer', company: 'Spotify', score: 71, match: '73%', status: 'Needs Optimization', roleKey: 'python-dev' }
  ]
};

class CareerScanApp {
  constructor() {
    this.initElements();
    this.attachEventListeners();
    this.render();
  }

  initElements() {
    // Nav links
    this.navLinks = document.querySelectorAll('.nav-link');
    this.viewSections = document.querySelectorAll('.view-section');
    this.rolePills = document.querySelectorAll('.role-pill');
    this.sidebar = document.getElementById('appSidebar');
    this.mobileMenuBtn = document.getElementById('mobileMenuBtn');
    this.activeJobBadge = document.getElementById('activeJobBadge');

    // Dashboard metrics
    this.dashScoreVal = document.getElementById('dashScoreVal');
    this.dashSkillMatchVal = document.getElementById('dashSkillMatchVal');
    this.dashMissingSkillsVal = document.getElementById('dashMissingSkillsVal');
    this.sidebarMissingCount = document.getElementById('sidebarMissingCount');
    this.dashScoreRing = document.getElementById('dashScoreRing');
    this.dashScoreRingNum = document.getElementById('dashScoreRingNum');
    this.reportScoreRing = document.getElementById('reportScoreRing');
    this.reportScoreVal = document.getElementById('reportScoreVal');
    this.dashScoreBadge = document.getElementById('dashScoreBadge');

    // Progress items
    this.dashProgKeywordVal = document.getElementById('dashProgKeywordVal');
    this.dashProgKeywordBar = document.getElementById('dashProgKeywordBar');
    this.dashProgSkillsVal = document.getElementById('dashProgSkillsVal');
    this.dashProgSkillsBar = document.getElementById('dashProgSkillsBar');
    this.dashProgExpVal = document.getElementById('dashProgExpVal');
    this.dashProgExpBar = document.getElementById('dashProgExpBar');
    this.dashProgEduVal = document.getElementById('dashProgEduVal');
    this.dashProgEduBar = document.getElementById('dashProgEduBar');

    // Skill Badges Wrappers
    this.dashMissingBadgeWrap = document.getElementById('dashMissingBadgeWrap');
    this.dashImproveBadgeWrap = document.getElementById('dashImproveBadgeWrap');
    this.matchedSkillsWrap = document.getElementById('matchedSkillsWrap');
    this.improveSkillsWrap = document.getElementById('improveSkillsWrap');
    this.missingSkillsWrap = document.getElementById('missingSkillsWrap');
    this.matchedSkillsCount = document.getElementById('matchedSkillsCount');
    this.improveSkillsCount = document.getElementById('improveSkillsCount');
    this.missingSkillsCount = document.getElementById('missingSkillsCount');
    this.dashMissingCountBadge = document.getElementById('dashMissingCountBadge');

    // Inputs & Forms
    this.inputJobTitle = document.getElementById('inputJobTitle');
    this.inputCompany = document.getElementById('inputCompany');
    this.inputJobDescription = document.getElementById('inputJobDescription');
    this.detectedTechBadges = document.getElementById('detectedTechBadges');
    this.detectedTechCount = document.getElementById('detectedTechCount');

    // Keyword table
    this.keywordTableBody = document.getElementById('keywordTableBody');
    this.keywordSearchInput = document.getElementById('keywordSearchInput');
    this.keywordFilterBtns = document.getElementById('keywordFilterBtns');

    // Skill Gap Chart
    this.skillGapBarList = document.getElementById('skillGapBarList');

    // Suggestions
    this.suggestedSummaryText = document.getElementById('suggestedSummaryText');
    this.suggestedBulletText = document.getElementById('suggestedBulletText');
    this.resumeSummaryText = document.getElementById('resumeSummaryText');
    this.resumeExperienceText = document.getElementById('resumeExperienceText');

    // Dropzone & File
    this.resumeDropzone = document.getElementById('resumeDropzone');
    this.resumeFileInput = document.getElementById('resumeFileInput');
    this.uploadedFileStatus = document.getElementById('uploadedFileStatus');
    this.uploadedFileName = document.getElementById('uploadedFileName');
    this.uploadedFileSize = document.getElementById('uploadedFileSize');

    // History Table
    this.dashRecentScansTableBody = document.getElementById('dashRecentScansTableBody');
    this.historyTableBody = document.getElementById('historyTableBody');

    // Modals & Toast
    this.profileModal = document.getElementById('profileModal');
    this.userProfileBtn = document.getElementById('userProfileBtn');
    this.btnCloseModal = document.getElementById('btnCloseModal');
    this.btnCancelModal = document.getElementById('btnCancelModal');
    this.btnSaveProfile = document.getElementById('btnSaveProfile');
    this.toastContainer = document.getElementById('toastContainer');
  }

  attachEventListeners() {
    // Sidebar Navigation
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const view = link.getAttribute('data-view');
        this.navigateTo(view);
      });
    });

    // Delegated links with data-view
    document.addEventListener('click', (e) => {
      const targetViewBtn = e.target.closest('[data-view]');
      if (targetViewBtn && !targetViewBtn.classList.contains('nav-link')) {
        e.preventDefault();
        const view = targetViewBtn.getAttribute('data-view');
        this.navigateTo(view);
      }
    });

    // Mobile Menu Toggle
    if (this.mobileMenuBtn) {
      this.mobileMenuBtn.addEventListener('click', () => {
        this.sidebar.classList.toggle('open');
      });
    }

    // Role Presets
    this.rolePills.forEach(pill => {
      pill.addEventListener('click', () => {
        const roleKey = pill.getAttribute('data-role');
        this.switchRole(roleKey);
      });
    });

    // Top Header Buttons
    document.getElementById('btnQuickScan')?.addEventListener('click', () => {
      this.navigateTo('resume-analyzer');
    });

    document.getElementById('btnExportReport')?.addEventListener('click', () => {
      this.showToast('Preparing ATS report export...');
      setTimeout(() => window.print(), 350);
    });

    document.getElementById('btnRunFullAudit')?.addEventListener('click', () => {
      this.showToast('Running comprehensive ATS scan against ' + AppState.roles[AppState.currentRoleKey].company + '...');
      setTimeout(() => {
        this.showToast('Audit complete. Match Score: ' + AppState.roles[AppState.currentRoleKey].score + '/100');
        this.navigateTo('ats-report');
      }, 600);
    });

    // Resume Analyzer Actions
    this.resumeDropzone?.addEventListener('click', () => {
      this.resumeFileInput.click();
    });

    this.resumeDropzone?.addEventListener('dragover', (e) => {
      e.preventDefault();
      this.resumeDropzone.classList.add('dragover');
    });

    this.resumeDropzone?.addEventListener('dragleave', () => {
      this.resumeDropzone.classList.remove('dragover');
    });

    this.resumeDropzone?.addEventListener('drop', (e) => {
      e.preventDefault();
      this.resumeDropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        this.handleFileUpload(e.dataTransfer.files[0]);
      }
    });

    this.resumeFileInput?.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        this.handleFileUpload(e.target.files[0]);
      }
    });

    document.getElementById('btnChangeFile')?.addEventListener('click', () => {
      this.resumeFileInput.click();
    });

    document.getElementById('btnLoadSampleResume')?.addEventListener('click', () => {
      this.uploadedFileName.textContent = 'Alex_Morgan_Verified_CV_2026.docx';
      this.uploadedFileSize.textContent = '1.8 MB';
      this.showToast('Sample Resume loaded successfully');
    });

    document.getElementById('btnTriggerAnalyze')?.addEventListener('click', () => {
      this.showToast('Parsing document semantics & keyword indexing...');
      setTimeout(() => {
        this.showToast('Resume analysis updated!');
        this.navigateTo('ats-report');
      }, 500);
    });

    document.getElementById('btnSaveResumeEdits')?.addEventListener('click', () => {
      this.showToast('Resume draft saved and ATS re-scored');
      this.updateScoreAnimation();
    });

    // Job Description Sync
    document.getElementById('btnSyncJobAnalysis')?.addEventListener('click', () => {
      this.showToast('Re-calculating skill match & keyword frequencies...');
      this.updateScoreAnimation();
    });

    document.getElementById('btnResetJobDefault')?.addEventListener('click', () => {
      const cur = AppState.roles[AppState.currentRoleKey];
      this.inputJobTitle.value = cur.title;
      this.inputCompany.value = cur.company;
      this.inputJobDescription.value = cur.jobDescriptionText;
      this.showToast('Reset to role defaults');
    });

    // Keyword Table Filter & Search
    this.keywordSearchInput?.addEventListener('input', () => {
      this.renderKeywordTable();
    });

    this.keywordFilterBtns?.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.keywordFilterBtns.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.renderKeywordTable();
      });
    });

    // Resume Improvement Actions
    document.getElementById('btnCopySummary')?.addEventListener('click', () => {
      navigator.clipboard.writeText(this.suggestedSummaryText.textContent);
      this.showToast('Summary copied to clipboard');
    });

    document.getElementById('btnApplySummary')?.addEventListener('click', () => {
      this.resumeSummaryText.value = this.suggestedSummaryText.textContent;
      this.showToast('Applied suggestion to active resume draft (+8 pts)');
      this.boostScore(3);
    });

    document.getElementById('btnCopyBullet')?.addEventListener('click', () => {
      navigator.clipboard.writeText(this.suggestedBulletText.textContent);
      this.showToast('Bullet point copied to clipboard');
    });

    document.getElementById('btnApplyBullet')?.addEventListener('click', () => {
      this.resumeExperienceText.value += '\n- ' + this.suggestedBulletText.textContent;
      this.showToast('Applied bullet to active resume draft (+5 pts)');
      this.boostScore(2);
    });

    // Modals
    this.userProfileBtn?.addEventListener('click', () => {
      this.profileModal.classList.add('active');
    });

    this.btnCloseModal?.addEventListener('click', () => {
      this.profileModal.classList.remove('active');
    });

    this.btnCancelModal?.addEventListener('click', () => {
      this.profileModal.classList.remove('active');
    });

    this.btnSaveProfile?.addEventListener('click', () => {
      this.profileModal.classList.remove('active');
      this.showToast('Profile settings saved successfully');
    });
  }

  navigateTo(viewId) {
    AppState.activeView = viewId;

    // Update nav links
    this.navLinks.forEach(link => {
      if (link.getAttribute('data-view') === viewId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update section visibility
    this.viewSections.forEach(section => {
      if (section.id === `view-${viewId}`) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });

    // Close mobile sidebar if open
    this.sidebar.classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  switchRole(roleKey) {
    AppState.currentRoleKey = roleKey;
    
    // Update pills
    this.rolePills.forEach(pill => {
      if (pill.getAttribute('data-role') === roleKey) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    this.render();
    this.showToast(`Switched benchmark target: ${AppState.roles[roleKey].title} (${AppState.roles[roleKey].company})`);
  }

  handleFileUpload(file) {
    this.uploadedFileName.textContent = file.name;
    this.uploadedFileSize.textContent = `${(file.size / (1024 * 1024)).toFixed(1)} MB`;
    this.showToast(`Parsed: ${file.name} successfully`);
    this.updateScoreAnimation();
  }

  boostScore(pts) {
    const role = AppState.roles[AppState.currentRoleKey];
    role.score = Math.min(100, role.score + pts);
    this.renderScores();
  }

  updateScoreAnimation() {
    this.renderScores();
  }

  renderScores() {
    const role = AppState.roles[AppState.currentRoleKey];

    // Primary score numbers
    this.dashScoreVal.textContent = role.score;
    this.dashSkillMatchVal.textContent = role.skillMatch;
    this.dashMissingSkillsVal.textContent = role.missingCount;
    this.sidebarMissingCount.textContent = `${role.missingCount} Missing`;
    this.dashMissingCountBadge.textContent = `${role.missingCount} items`;

    this.dashScoreRingNum.textContent = role.score;
    this.reportScoreVal.textContent = role.score;

    // SVG Circular stroke calculation
    // Circumference = 2 * PI * 54 = 339.292
    const circumference = 339.292;
    const offset = circumference - (role.score / 100) * circumference;
    
    if (this.dashScoreRing) {
      this.dashScoreRing.style.strokeDashoffset = offset;
      this.dashScoreRing.style.stroke = role.score >= 80 ? 'var(--success)' : (role.score >= 70 ? 'var(--warning)' : 'var(--danger)');
    }

    if (this.reportScoreRing) {
      this.reportScoreRing.style.strokeDashoffset = offset;
      this.reportScoreRing.style.stroke = role.score >= 80 ? 'var(--success)' : (role.score >= 70 ? 'var(--warning)' : 'var(--danger)');
    }

    // Progress Bars
    if (this.dashProgKeywordVal) this.dashProgKeywordVal.textContent = `${role.subScores.keywords}%`;
    if (this.dashProgKeywordBar) this.dashProgKeywordBar.style.width = `${role.subScores.keywords}%`;

    if (this.dashProgSkillsVal) this.dashProgSkillsVal.textContent = `${role.subScores.skills}%`;
    if (this.dashProgSkillsBar) this.dashProgSkillsBar.style.width = `${role.subScores.skills}%`;

    if (this.dashProgExpVal) this.dashProgExpVal.textContent = `${role.subScores.experience}%`;
    if (this.dashProgExpBar) this.dashProgExpBar.style.width = `${role.subScores.experience}%`;

    if (this.dashProgEduVal) this.dashProgEduVal.textContent = `${role.subScores.education}%`;
    if (this.dashProgEduBar) this.dashProgEduBar.style.width = `${role.subScores.education}%`;
  }

  render() {
    const role = AppState.roles[AppState.currentRoleKey];

    // Header & Badge
    this.activeJobBadge.textContent = role.badgeText;

    // Scores & Rings
    this.renderScores();

    // Skill Badges
    this.renderSkillBadges();

    // Skill Gap Chart
    this.renderSkillGapChart();

    // Keyword Analysis Table
    this.renderKeywordTable();

    // Job Form values
    this.inputJobTitle.value = role.title;
    this.inputCompany.value = role.company;
    this.inputJobDescription.value = role.jobDescriptionText;

    // Suggestions
    this.suggestedSummaryText.textContent = role.suggestedSummary;
    this.suggestedBulletText.textContent = role.suggestedBullet;

    // Tables
    this.renderRecentScansTable();
    this.renderHistoryTable();
  }

  renderSkillBadges() {
    const role = AppState.roles[AppState.currentRoleKey];

    // Dashboard Missing Wrappers
    if (this.dashMissingBadgeWrap) {
      this.dashMissingBadgeWrap.innerHTML = role.missingSkills
        .map(skill => `<span class="skill-badge skill-badge-missing">＋ ${skill}</span>`)
        .join('');
    }

    if (this.dashImproveBadgeWrap) {
      this.dashImproveBadgeWrap.innerHTML = role.improveSkills
        .map(skill => `<span class="skill-badge skill-badge-improve">◐ ${skill}</span>`)
        .join('');
    }

    // Skill Analysis Page Wrappers
    if (this.matchedSkillsWrap) {
      this.matchedSkillsWrap.innerHTML = role.matchedSkills
        .map(skill => `<span class="skill-badge skill-badge-matched">✓ ${skill}</span>`)
        .join('');
      this.matchedSkillsCount.textContent = `${role.matchedSkills.length} Matched`;
    }

    if (this.improveSkillsWrap) {
      this.improveSkillsWrap.innerHTML = role.improveSkills
        .map(skill => `<span class="skill-badge skill-badge-improve">◐ ${skill}</span>`)
        .join('');
      this.improveSkillsCount.textContent = `${role.improveSkills.length} Skills`;
    }

    if (this.missingSkillsWrap) {
      this.missingSkillsWrap.innerHTML = role.missingSkills
        .map(skill => `<span class="skill-badge skill-badge-missing">＋ ${skill}</span>`)
        .join('');
      this.missingSkillsCount.textContent = `${role.missingSkills.length} Missing`;
    }

    // Detected Requirements Right Column
    if (this.detectedTechBadges) {
      const allSkills = [
        ...role.matchedSkills.slice(0, 4).map(s => ({ name: s, type: 'matched' })),
        ...role.improveSkills.slice(0, 2).map(s => ({ name: s, type: 'improve' })),
        ...role.missingSkills.slice(0, 3).map(s => ({ name: s, type: 'missing' }))
      ];
      this.detectedTechBadges.innerHTML = allSkills
        .map(s => `<span class="skill-badge skill-badge-${s.type}">${s.name}</span>`)
        .join('');
      this.detectedTechCount.textContent = `${allSkills.length} skills`;
    }
  }

  renderSkillGapChart() {
    const role = AppState.roles[AppState.currentRoleKey];
    if (!this.skillGapBarList) return;

    this.skillGapBarList.innerHTML = role.skillGaps
      .map(item => `
        <div class="progress-item">
          <div class="progress-meta">
            <span class="progress-label" style="font-weight: 600;">${item.name}</span>
            <span class="progress-val" style="color: ${item.status === 'danger' ? 'var(--danger)' : (item.status === 'warning' ? 'var(--warning)' : 'var(--color-slate-900)')};">
              ${item.pct}%
            </span>
          </div>
          <div class="progress-bar-bg" style="height: 10px;">
            <div class="progress-bar-fill ${item.status}" style="width: ${item.pct}%; ${item.status === 'danger' ? 'background-color: var(--danger);' : ''}"></div>
          </div>
        </div>
      `).join('');
  }

  renderKeywordTable() {
    const role = AppState.roles[AppState.currentRoleKey];
    if (!this.keywordTableBody) return;

    const searchTerm = this.keywordSearchInput ? this.keywordSearchInput.value.toLowerCase() : '';
    const activeFilterBtn = this.keywordFilterBtns?.querySelector('.btn.active');
    const filter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';

    const filtered = role.keywords.filter(kw => {
      const matchesSearch = kw.name.toLowerCase().includes(searchTerm);
      if (filter === 'matched') return matchesSearch && kw.status === 'Matched';
      if (filter === 'missing') return matchesSearch && kw.status === 'Missing';
      return matchesSearch;
    });

    this.keywordTableBody.innerHTML = filtered.map(kw => `
      <tr>
        <td style="font-weight: 600; color: var(--color-slate-900);">${kw.name}</td>
        <td style="text-align: center; color: ${kw.inResume ? 'var(--success)' : 'var(--color-slate-400)'}; font-weight: 700;">
          ${kw.inResume ? '✓' : '—'}
        </td>
        <td style="text-align: center; color: ${kw.inJob ? 'var(--success)' : 'var(--color-slate-400)'}; font-weight: 700;">
          ${kw.inJob ? '✓' : '—'}
        </td>
        <td>
          <span class="table-badge" style="background: ${kw.status === 'Matched' ? 'var(--success-bg)' : 'var(--danger-bg)'}; color: ${kw.status === 'Matched' ? 'var(--success)' : 'var(--danger)'};">
            ${kw.status}
          </span>
        </td>
        <td>${kw.importance}</td>
      </tr>
    `).join('');
  }

  renderRecentScansTable() {
    if (!this.dashRecentScansTableBody) return;

    this.dashRecentScansTableBody.innerHTML = AppState.historyList.map((item, idx) => `
      <tr>
        <td>${item.date}</td>
        <td style="font-weight: 600; color: var(--color-slate-900);">${item.role}</td>
        <td>${item.company}</td>
        <td class="col-right" style="font-weight: 700; color: ${item.score >= 80 ? 'var(--success)' : 'var(--warning)'};">${item.score}</td>
        <td class="col-right" style="font-weight: 600;">${item.match}</td>
        <td>
          <span class="table-badge" style="background: ${item.score >= 80 ? 'var(--success-bg)' : 'var(--warning-bg)'}; color: ${item.score >= 80 ? 'var(--success)' : 'var(--warning)'};">
            ${item.status}
          </span>
        </td>
        <td class="col-right">
          <button class="btn btn-secondary btn-sm" onclick="app.loadScanHistory(${idx})">View</button>
        </td>
      </tr>
    `).join('');
  }

  renderHistoryTable() {
    if (!this.historyTableBody) return;

    this.historyTableBody.innerHTML = AppState.historyList.map((item, idx) => `
      <tr>
        <td>${item.date}</td>
        <td style="font-weight: 600; color: var(--color-slate-900);">${item.role} &bull; <span style="font-weight: 400; color: var(--color-slate-500);">${item.company}</span></td>
        <td class="col-right" style="font-weight: 700; color: ${item.score >= 80 ? 'var(--success)' : 'var(--warning)'};">${item.score}</td>
        <td class="col-right" style="font-weight: 600;">${item.match}</td>
        <td>
          <span class="table-badge" style="background: ${item.score >= 80 ? 'var(--success-bg)' : 'var(--warning-bg)'}; color: ${item.score >= 80 ? 'var(--success)' : 'var(--warning)'};">
            ${item.status}
          </span>
        </td>
        <td class="col-right">
          <button class="btn btn-secondary btn-sm" onclick="app.loadScanHistory(${idx})">Load</button>
        </td>
      </tr>
    `).join('');
  }

  loadScanHistory(idx) {
    const item = AppState.historyList[idx];
    if (item && item.roleKey) {
      this.switchRole(item.roleKey);
      this.navigateTo('dashboard');
    }
  }

  showToast(message) {
    if (!this.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <span>${message}</span>
    `;

    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 200ms ease';
      setTimeout(() => toast.remove(), 200);
    }, 2800);
  }
}

// Global initialization
let app;
window.addEventListener('DOMContentLoaded', () => {
  app = new CareerScanApp();
});
