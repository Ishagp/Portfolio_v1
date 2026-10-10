/**
 * Main Application Logic - Isha Gupta Portfolio
 * Dark Cyan & Slate Palette (#1f242d, #323946, #0ef)
 * Synchronized with official Resume details and Screenshot Palette
 * No hyphens in texts except "ROC-AUC"
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderProfileAndStats();
    renderAboutSection();
    renderSkills();
    renderProjects();
    renderEducation();
    renderCertifications();
    setupProjectFilters();
    setupSkillSearch();
    setupModals();
    setupContactForm();
    setupScrollEffects();
    
    if (window.initDashboardWidget) {
        window.initDashboardWidget();
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }
});

function initTheme() {
    // Dark Cyan theme is the default primary aesthetic
    document.documentElement.classList.add('dark');
}

function renderProfileAndStats() {
    const data = window.PORTFOLIO_DATA;
    if (!data) return;

    const statsContainer = document.getElementById('heroStatsContainer');
    if (statsContainer) {
        statsContainer.innerHTML = data.stats.map(stat => `
            <div class="theme-card p-4 text-center flex flex-col items-center justify-center">
                <div class="text-2xl sm:text-3xl font-extrabold text-cyan font-mono">
                    ${stat.value} <span class="text-xs font-normal text-slate-400">${stat.suffix}</span>
                </div>
                <div class="text-xs font-bold text-white mt-1">${stat.label}</div>
                <div class="text-[11px] text-slate-400 mt-0.5">${stat.description}</div>
            </div>
        `).join('');
    }
}

function renderAboutSection() {
    const about = window.PORTFOLIO_DATA.about;
    if (!about) return;

    const aboutTextContainer = document.getElementById('aboutTextContainer');
    if (aboutTextContainer) {
        aboutTextContainer.innerHTML = `
            ${about.headline ? `<h3 class="text-xl sm:text-2xl font-bold text-white mb-4">${about.headline}</h3>` : ''}
            ${about.paragraphs.map(p => `
                <p class="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                    ${p}
                </p>
            `).join('')}
            <div class="mt-6 pt-6 border-t border-slate-700/60">
                <h4 class="text-xs uppercase tracking-wider font-bold text-cyan mb-3">Core Focus Areas</h4>
                <div class="flex flex-wrap gap-2">
                    ${about.interests.map(interest => `
                        <span class="px-3 py-1.5 text-xs font-medium rounded-full bg-[#1f242d] text-cyan border border-[#0ef]/30 shadow-[0_0_8px_rgba(0,238,255,0.15)]">
                            ${interest}
                        </span>
                    `).join('')}
                </div>
            </div>
        `;
    }

    const enjoyContainer = document.getElementById('whatIEnjoyContainer');
    if (enjoyContainer) {
        enjoyContainer.innerHTML = about.whatIEnjoy.map(item => `
            <div class="theme-card p-5 flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-[#1f242d] text-cyan flex items-center justify-center shrink-0 border border-[#0ef]/40 shadow-[0_0_10px_rgba(0,238,255,0.2)]">
                    <i data-lucide="${item.icon}" class="w-5 h-5"></i>
                </div>
                <div>
                    <h4 class="text-base font-bold text-white mb-1">${item.title}</h4>
                    <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">${item.desc}</p>
                </div>
            </div>
        `).join('');
    }
}
function renderSkills(filterKeyword = '') {
    const skills = window.PORTFOLIO_DATA.skills;
    const container = document.getElementById('skillsGrid');
    if (!container || !skills) return;

    const filteredSkills = skills.map(category => {
        if (!filterKeyword) return category;
        const matchingItems = category.items.filter(item => 
            item.name.toLowerCase().includes(filterKeyword.toLowerCase()) ||
            item.badge.toLowerCase().includes(filterKeyword.toLowerCase()) ||
            category.category.toLowerCase().includes(filterKeyword.toLowerCase())
        );
        return { ...category, items: matchingItems };
    }).filter(category => category.items.length > 0);

    if (filteredSkills.length === 0) {
        container.innerHTML = `
            <div class="col-span-full py-12 text-center text-slate-400">
                <i data-lucide="search-x" class="w-8 h-8 mx-auto mb-2 opacity-50 text-cyan"></i>
                <p class="text-sm font-semibold text-white">No skills matching "${filterKeyword}"</p>
                <p class="text-xs mt-1 text-slate-400">Try searching for Python, SQL, Power BI, or React</p>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        return;
    }

    container.innerHTML = filteredSkills.map(cat => `
        <div class="theme-card p-6 flex flex-col justify-between">
            <div>
                <div class="flex items-center gap-3 mb-4 pb-3 border-b border-slate-700/60">
                    <div class="w-8 h-8 rounded-lg bg-[#1f242d] text-cyan flex items-center justify-center border border-[#0ef]/30">
                        <i data-lucide="${cat.icon}" class="w-4 h-4"></i>
                    </div>
                    <h4 class="font-bold text-sm text-white">${cat.category}</h4>
                </div>
                <div class="flex flex-wrap gap-2 pt-1">
                    ${cat.items.map(item => `
                        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1f242d] border border-slate-700 hover:border-[#0ef]/60 text-slate-200 transition">
                            <span class="font-mono text-[10px] text-cyan">${item.iconText}</span>
                            <span>${item.name}</span>
                            <span class="text-[10px] text-slate-400 ml-0.5">• ${item.badge}</span>
                        </span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

function setupSkillSearch() {
    const searchInput = document.getElementById('skillSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderSkills(e.target.value.trim());
        });
    }
}

function renderProjects() {
    const projects = window.PORTFOLIO_DATA.projects;
    const container = document.getElementById('projectsGrid');
    if (!container || !projects) return;

    container.innerHTML = projects.map(proj => `
        <div class="project-card theme-card overflow-hidden flex flex-col" data-category="${proj.category}">
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#1f242d] text-cyan border border-[#0ef]/40">
                            ${proj.categoryLabel}
                        </span>
                        <span class="text-xs font-mono font-semibold text-cyan">
                            ${proj.badge}
                        </span>
                    </div>

                    <h3 class="text-lg font-bold text-white mb-1">
                        ${proj.title}
                    </h3>
                    <p class="text-xs text-slate-400 mb-4">
                        ${proj.subtitle}
                    </p>

                    <div class="bg-[#1f242d] p-3.5 rounded-xl text-xs space-y-2 mb-4 border border-slate-700/60">
                        <div>
                            <span class="font-bold text-cyan">Problem:</span>
                            <span class="text-slate-300 ml-1">${proj.problem}</span>
                        </div>
                        <div>
                            <span class="font-bold text-white">Solution:</span>
                            <span class="text-slate-300 ml-1">${proj.solution}</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-3 gap-2 mb-4">
                        ${proj.metrics.map(m => `
                            <div class="bg-[#1f242d]/80 border border-[#0ef]/20 rounded-lg p-2 text-center">
                                <div class="text-xs font-bold font-mono text-cyan">${m.val}</div>
                                <div class="text-[10px] text-slate-400 truncate">${m.label}</div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="flex flex-wrap gap-1.5 mb-5">
                        ${proj.technologies.map(t => `
                            <span class="px-2 py-0.5 text-[11px] font-mono rounded bg-[#1f242d] text-slate-300 border border-slate-700">
                                ${t}
                            </span>
                        `).join('')}
                    </div>
                </div>

                <div class="pt-4 border-t border-slate-700/60 flex items-center justify-between gap-3">
                    <button onclick="openCaseStudyModal('${proj.id}')" class="text-xs font-semibold text-cyan hover:underline flex items-center gap-1">
                        <i data-lucide="file-text" class="w-3.5 h-3.5"></i> Details
                    </button>
                    <div class="flex items-center gap-2">
                        <a href="${proj.githubUrl}" target="_blank" rel="noopener" class="p-2 rounded-full border border-[#0ef] text-cyan hover:bg-[#0ef] hover:text-[#1f242d] transition" title="View Source Code">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        </a>
                        <a href="${proj.demoUrl}" target="_blank" rel="noopener" class="px-3.5 py-1.5 rounded-full bg-[#0ef] text-[#1f242d] text-xs font-bold flex items-center gap-1.5 shadow-[0_0_10px_rgba(0,238,255,0.4)] hover:shadow-[0_0_20px_rgba(0,238,255,0.8)] transition">
                            <i data-lucide="external-link" class="w-3.5 h-3.5"></i> Live
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

function setupProjectFilters() {
    const buttons = document.querySelectorAll('[data-project-filter]');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-project-filter');

            buttons.forEach(b => {
                b.classList.remove('bg-[#0ef]', 'text-[#1f242d]', 'shadow-[0_0_15px_rgba(0,238,255,0.5)]');
                b.classList.add('bg-transparent', 'text-slate-300', 'border', 'border-[#0ef]/40');
            });
            btn.classList.add('bg-[#0ef]', 'text-[#1f242d]', 'shadow-[0_0_15px_rgba(0,238,255,0.5)]');
            btn.classList.remove('bg-transparent', 'text-slate-300');

            const cards = document.querySelectorAll('.project-card');
            cards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                if (filter === 'all' || cardCat === filter) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });
}

function renderEducation() {
    const education = window.PORTFOLIO_DATA.education;
    const container = document.getElementById('educationTimeline');
    if (!container || !education) return;

    container.innerHTML = education.map((edu, idx) => `
        <div class="relative pl-8 pb-8 ${idx === education.length - 1 ? '' : 'border-l border-slate-700'}">
            <div class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#0ef] shadow-[0_0_8px_#0ef]"></div>

            <div class="theme-card p-5 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 class="text-base sm:text-lg font-bold text-white">${edu.degree}</h3>
                    <span class="text-xs font-mono px-2.5 py-1 rounded bg-[#1f242d] text-cyan border border-[#0ef]/30 mt-1 sm:mt-0 w-fit">
                        ${edu.period}
                    </span>
                </div>
                <div class="text-xs sm:text-sm text-slate-300 mb-1">
                    ${edu.institution} • <span class="text-slate-400">${edu.location}</span>
                </div>
                <div class="flex items-center gap-2 text-xs mb-3 font-semibold text-cyan font-mono">
                    <span>${edu.grade}</span>
                    <span>•</span>
                    <span>${edu.highlight}</span>
                </div>

                <div class="mb-3">
                    <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Key Coursework:</div>
                    <div class="flex flex-wrap gap-1.5">
                        ${edu.coursework.map(c => `
                            <span class="px-2 py-0.5 rounded text-[11px] bg-[#1f242d] text-slate-300 border border-slate-700">${c}</span>
                        `).join('')}
                    </div>
                </div>

                <div class="border-t border-slate-700/60 pt-2.5 text-xs text-slate-400 space-y-1">
                    ${edu.activities.map(act => `
                        <div class="flex items-start gap-2">
                            <span class="text-cyan">•</span>
                            <span>${act}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

function renderCertifications() {
    const certs = window.PORTFOLIO_DATA.certifications;
    const container = document.getElementById('certificationsGrid');
    if (!container || !certs) return;

    container.innerHTML = certs.map(c => `
        <div class="theme-card p-5 flex flex-col justify-between">
            <div>
                <div class="flex justify-between items-start mb-3">
                    <span class="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-[#1f242d] text-cyan border border-[#0ef]/30">
                        ${c.date}
                    </span>
                    <i data-lucide="award" class="w-4 h-4 text-cyan"></i>
                </div>
                <h4 class="text-sm sm:text-base font-bold text-white mb-1">${c.title}</h4>
                <div class="text-xs text-slate-400 mb-3">
                    Issued by <span class="font-medium text-slate-200">${c.issuer}</span>
                </div>
                <div class="flex flex-wrap gap-1 mb-4">
                    ${c.skills.map(s => `
                        <span class="px-2 py-0.5 rounded text-[10px] bg-[#1f242d] text-slate-300 border border-slate-700 font-mono">${s}</span>
                    `).join('')}
                </div>
            </div>
            <div class="pt-3 border-t border-slate-700/60 flex justify-end">
                <a href="${c.link}" target="_blank" rel="noopener" class="text-xs font-semibold text-cyan hover:underline flex items-center gap-1">
                    Verify Certificate <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
                </a>
            </div>
        </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

function setupModals() {
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeAllModals();
            }
        });
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllModals();
    });
}

window.closeAllModals = function() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.classList.add('closed');
        modal.classList.remove('open');
    });
    document.body.classList.remove('overflow-hidden');
};

window.openCaseStudyModal = function(projectId) {
    const project = window.PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('caseStudyModal');
    const title = document.getElementById('caseStudyTitle');
    const category = document.getElementById('caseStudyCategory');
    const content = document.getElementById('caseStudyContent');

    if (title) title.textContent = project.title;
    if (category) category.innerHTML = `${project.categoryLabel} • <span class="text-cyan font-mono">${project.badge}</span>`;

    if (content) {
        content.innerHTML = `
            <div class="space-y-5 text-sm text-slate-300">
                <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-cyan mb-1">Summary</h4>
                    <p class="leading-relaxed">${project.subtitle}</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="p-4 rounded-xl bg-[#1f242d] border border-slate-700/80">
                        <h5 class="font-bold text-cyan text-xs uppercase mb-1">The Problem</h5>
                        <p class="text-xs leading-relaxed text-slate-300">${project.problem}</p>
                    </div>
                    <div class="p-4 rounded-xl bg-[#1f242d] border border-slate-700/80">
                        <h5 class="font-bold text-white text-xs uppercase mb-1">The Solution</h5>
                        <p class="text-xs leading-relaxed text-slate-300">${project.solution}</p>
                    </div>
                </div>

                <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-cyan mb-2">Key Highlights</h4>
                    <ul class="space-y-1.5 text-xs">
                        ${project.features.map(f => `
                            <li class="flex items-start gap-2">
                                <span class="text-cyan">•</span>
                                <span>${f}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-cyan mb-2">Metrics & Results</h4>
                    <div class="grid grid-cols-3 gap-3">
                        ${project.metrics.map(m => `
                            <div class="p-3 rounded-xl bg-[#1f242d] text-center border border-[#0ef]/20">
                                <div class="text-base font-bold font-mono text-cyan">${m.val}</div>
                                <div class="text-[11px] text-slate-400">${m.label}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-cyan mb-2">Technologies Used</h4>
                    <div class="flex flex-wrap gap-1.5">
                        ${project.technologies.map(t => `
                            <span class="px-2.5 py-1 text-xs font-mono rounded bg-[#1f242d] text-slate-200 border border-slate-700">${t}</span>
                        `).join('')}
                    </div>
                </div>

                <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-700/60">
                    <a href="${project.githubUrl}" target="_blank" rel="noopener" class="px-4 py-2 rounded-full border border-[#0ef] text-cyan text-xs font-semibold flex items-center gap-2 hover:bg-[#0ef] hover:text-[#1f242d] transition">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> Repository
                    </a>
                    <a href="${project.demoUrl}" target="_blank" rel="noopener" class="btn-cyan text-xs">
                        <i data-lucide="external-link" class="w-4 h-4"></i> Open Project
                    </a>
                </div>
            </div>
        `;
    }

    modal.classList.remove('closed');
    modal.classList.add('open');
    document.body.classList.add('overflow-hidden');

    if (window.lucide) window.lucide.createIcons();
};

window.openResumeModal = function() {
    const modal = document.getElementById('resumeModal');
    if (!modal) return;
    modal.classList.remove('closed');
    modal.classList.add('open');
    document.body.classList.add('overflow-hidden');
};

function setupContactForm() {
    const form = document.getElementById('portfolioContactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('senderName').value;
            const email = document.getElementById('senderEmail').value;
            const message = document.getElementById('senderMessage').value;

            const recipientEmail = window.PORTFOLIO_DATA?.profile?.email || 'gisha825@gmail.com';
            const mailtoLink = `mailto:${recipientEmail}?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
            window.location.href = mailtoLink;

            showToast(`Thank you, ${name}! Your email client has been opened.`);
            form.reset();
        });
    }
}

window.copyEmailToClipboard = function() {
    const email = window.PORTFOLIO_DATA.profile.email;
    navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard: ' + email);
    }).catch(() => {
        showToast(email);
    });
};

function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast px-4 py-3 rounded-xl bg-[#323946] text-white text-xs font-semibold shadow-[0_0_15px_rgba(0,238,255,0.4)] flex items-center gap-2 border border-[#0ef]';
    toast.innerHTML = `
        <svg class="w-4 h-4 text-cyan shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(8px)';
        toast.style.transition = 'all 0.25s ease';
        setTimeout(() => toast.remove(), 250);
    }, 3200);
}

function setupScrollEffects() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');

    window.addEventListener('scroll', () => {
        if (!backToTopBtn) return;
        if (window.scrollY > 400) {
            backToTopBtn.classList.remove('hidden-btn');
            backToTopBtn.classList.add('visible-btn');
        } else {
            backToTopBtn.classList.add('hidden-btn');
            backToTopBtn.classList.remove('visible-btn');
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (mobileMenuBtn && mobileMenuDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuDrawer.classList.toggle('hidden');
        });

        mobileMenuDrawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuDrawer.classList.add('hidden');
            });
        });
    }
}
