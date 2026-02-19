// =======================================================================
//  main.js  —  Site rendering & interactivity
//  You should not need to edit this file; update js/data.js instead.
// =======================================================================

document.addEventListener('DOMContentLoaded', () => {
  populatePersonalInfo();
  renderProjects();
  renderBlog();
  renderResume();

  initNav();
  initScrollSpy();
  initScrollAnimations();
  initFilterSystem();
  initModal();
  initMobileMenu();
});

// ─────────────────────────────────────────────────────────────────────────
//  PERSONAL INFO
// ─────────────────────────────────────────────────────────────────────────
function populatePersonalInfo() {
  const d = DATA;

  setText('heroName',        d.name);
  setText('heroTitle',       d.title);
  setText('heroBio',         d.bio);
  setText('portraitInitials', d.initials);
  setText('navName',         d.name);
  setText('footerCopy',
    `\u00A9 ${new Date().getFullYear()} ${d.name}. All rights reserved.`);

  // Skills
  const cloud = document.getElementById('skillCloud');
  if (cloud && d.skills) {
    cloud.innerHTML = d.skills
      .map(s => `<span class="skill-pill">${esc(s)}</span>`)
      .join('');
  }

  // Stat card
  if (d.stats && d.stats.length >= 2) {
    setText('stat0Num', d.stats[0].number);
    setText('stat0Lbl', d.stats[0].label);
    setText('stat1Num', d.stats[1].number);
    setText('stat1Lbl', d.stats[1].label);
  }

  // Footer links
  const fl = document.getElementById('footerLinks');
  if (fl) {
    const links = [];
    if (d.github)   links.push(socialLink(d.github,   'GitHub',   true));
    if (d.linkedin) links.push(socialLink(d.linkedin, 'LinkedIn', true));
    if (d.email)    links.push(socialLink(`mailto:${d.email}`, 'Email', false));
    fl.innerHTML = links.join('');
  }

  // Nav contact
  const navContact = document.getElementById('navContact');
  if (navContact && d.email) navContact.href = `mailto:${d.email}`;
}

function socialLink(href, label, external) {
  const attrs = external ? ' target="_blank" rel="noopener"' : '';
  return `<a href="${href}" class="footer-link"${attrs}>${esc(label)}</a>`;
}

// ─────────────────────────────────────────────────────────────────────────
//  PROJECTS
// ─────────────────────────────────────────────────────────────────────────
function renderProjects() {
  const grid      = document.getElementById('projectsGrid');
  const filterBar = document.getElementById('filterBar');
  if (!grid || !DATA.projects) return;

  // Collect unique tags
  const allTags = new Set();
  DATA.projects.forEach(p => (p.tags || []).forEach(t => allTags.add(t)));

  // Build filter buttons
  [...allTags].sort().forEach(tag => {
    const btn = document.createElement('button');
    btn.className    = 'filter-btn';
    btn.dataset.filter = tag;
    btn.textContent  = tag;
    filterBar.appendChild(btn);
  });

  // Render cards
  grid.innerHTML = DATA.projects.map((p, i) => {
    const delay     = `${(i % 3) * 0.08}s`;
    const tagStr    = (p.tags || []).join(',');
    const featured  = p.featured ? ' featured' : '';
    const color     = p.color || 'var(--blue)';
    const tagPills  = (p.tags || []).map(t => `<span class="project-tag">${esc(t)}</span>`).join('');
    const links     = buildProjectLinks(p);

    return `
<article class="project-card fade-in${featured}"
         data-tags="${esc(tagStr)}"
         style="--delay: ${delay}">
  <div class="project-thumb"
       style="background: linear-gradient(135deg, ${color}dd 0%, ${color}88 100%);">
    <span class="project-thumb-icon">&#x1F4CA;</span>
  </div>
  <div class="project-body">
    <h3 class="project-title">${esc(p.title)}</h3>
    <p class="project-desc">${esc(p.desc)}</p>
    <div class="project-tags">${tagPills}</div>
    ${links ? `<div class="project-links">${links}</div>` : ''}
  </div>
</article>`;
  }).join('');
}

function buildProjectLinks(p) {
  const out = [];
  if (p.github)  out.push(`<a href="${p.github}"  target="_blank" rel="noopener" class="project-link">&#x2197; GitHub</a>`);
  if (p.demo)    out.push(`<a href="${p.demo}"    target="_blank" rel="noopener" class="project-link">&#x2197; Live Demo</a>`);
  if (p.report)  out.push(`<a href="${p.report}"  target="_blank" rel="noopener" class="project-link">&#x2197; Report</a>`);
  return out.join('');
}

// ─────────────────────────────────────────────────────────────────────────
//  BLOG
// ─────────────────────────────────────────────────────────────────────────
function renderBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid || !DATA.posts) return;

  grid.innerHTML = DATA.posts.map((post, i) => {
    const delay    = `${(i % 3) * 0.08}s`;
    const tagPills = (post.tags || []).map(t => `<span class="blog-tag">${esc(t)}</span>`).join('');

    return `
<article class="blog-card fade-in"
         data-post-id="${post.id}"
         style="--delay: ${delay}">
  <div class="blog-meta">
    <span>${esc(post.date)}</span>
    <span class="blog-meta-dot"></span>
    <span>${esc(post.readTime)}</span>
  </div>
  <h3 class="blog-title">${esc(post.title)}</h3>
  <p class="blog-excerpt">${esc(post.excerpt)}</p>
  <div class="blog-tags">${tagPills}</div>
  <span class="blog-read-more">Read article &#x2192;</span>
</article>`;
  }).join('');
}

// ─────────────────────────────────────────────────────────────────────────
//  RESUME
// ─────────────────────────────────────────────────────────────────────────
function renderResume() {
  const grid = document.getElementById('resumeGrid');
  if (!grid || !DATA.resume) return;

  const r = DATA.resume;
  let html = '';

  // Education
  html += `
<div class="resume-section fade-in">
  <h3 class="resume-section-title">&#x1F393; Education</h3>
  ${(r.education || []).map(e => `
  <div class="resume-item">
    <div class="resume-item-header">
      <div>
        <div class="resume-item-title">${esc(e.degree)}</div>
        <div class="resume-item-sub">${esc(e.school)}</div>
      </div>
      <span class="resume-item-period">${esc(e.period)}</span>
    </div>
    <p class="resume-item-details">${esc(e.details)}</p>
  </div>`).join('')}
</div>`;

  // Experience
  html += `
<div class="resume-section fade-in" style="--delay: 0.1s">
  <h3 class="resume-section-title">&#x1F4BC; Experience</h3>
  ${(r.experience || []).map(e => `
  <div class="resume-item">
    <div class="resume-item-header">
      <div>
        <div class="resume-item-title">${esc(e.title)}</div>
        <div class="resume-item-sub">${esc(e.company)}</div>
      </div>
      <span class="resume-item-period">${esc(e.period)}</span>
    </div>
    <ul class="resume-bullets">
      ${(e.bullets || []).map(b => `<li>${esc(b)}</li>`).join('')}
    </ul>
  </div>`).join('')}
</div>`;

  // Skills
  html += `
<div class="resume-section fade-in" style="--delay: 0.2s">
  <h3 class="resume-section-title">&#x26A1; Technical Skills</h3>
  <div class="skills-grid">
    ${Object.entries(r.skills || {}).map(([cat, items]) => `
    <div>
      <div class="skill-category-name">${esc(cat)}</div>
      <div class="skill-tags">
        ${items.map(s => `<span class="skill-tag-item">${esc(s)}</span>`).join('')}
      </div>
    </div>`).join('')}
  </div>
</div>`;

  // Publications (only if non-empty)
  if (r.publications && r.publications.length > 0) {
    html += `
<div class="resume-section resume-full-span fade-in" style="--delay: 0.3s">
  <h3 class="resume-section-title">&#x1F4C4; Publications</h3>
  ${r.publications.map(p => `
  <div class="resume-item">
    <div class="resume-item-header">
      <div>
        <div class="resume-item-title">
          ${p.link
            ? `<a href="${p.link}" target="_blank" rel="noopener">${esc(p.title)}</a>`
            : esc(p.title)}
        </div>
        <div class="resume-item-sub">${esc(p.venue)}</div>
      </div>
      <span class="resume-item-period">${esc(p.year)}</span>
    </div>
  </div>`).join('')}
</div>`;
  }

  grid.innerHTML = html;
}

// ─────────────────────────────────────────────────────────────────────────
//  NAVIGATION — transparent → white on scroll
// ─────────────────────────────────────────────────────────────────────────
function initNav() {
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 55);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ─────────────────────────────────────────────────────────────────────────
//  SCROLL SPY — highlight active nav link
// ─────────────────────────────────────────────────────────────────────────
function initScrollSpy() {
  const links    = document.querySelectorAll('.nav-link[data-nav]');
  const sections = ['about', 'projects', 'blog', 'resume'];

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[data-nav="${entry.target.id}"]`);
      if (active) active.classList.add('active');
    });
  }, { rootMargin: '-25% 0px -65% 0px' });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) obs.observe(el);
  });
}

// ─────────────────────────────────────────────────────────────────────────
//  SCROLL ANIMATIONS — fade-in on viewport entry
// ─────────────────────────────────────────────────────────────────────────
function initScrollAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  // Watch all current .fade-in elements
  const observe = () =>
    document.querySelectorAll('.fade-in:not([data-observed])').forEach(el => {
      el.setAttribute('data-observed', '1');
      obs.observe(el);
    });

  observe();

  // Also watch dynamically rendered elements
  new MutationObserver(observe).observe(document.body, {
    childList: true, subtree: true
  });
}

// ─────────────────────────────────────────────────────────────────────────
//  FILTER SYSTEM
// ─────────────────────────────────────────────────────────────────────────
function initFilterSystem() {
  document.getElementById('filterBar')?.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    const filter = btn.dataset.filter;

    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.project-card').forEach(card => {
      if (filter === 'all') {
        card.classList.remove('hidden');
      } else {
        const tags = (card.dataset.tags || '').split(',');
        card.classList.toggle('hidden', !tags.includes(filter));
      }
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────
//  BLOG MODAL
// ─────────────────────────────────────────────────────────────────────────
function initModal() {
  const overlay  = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  const body     = document.getElementById('modalBody');

  // Open modal when a blog card is clicked
  document.getElementById('blogGrid')?.addEventListener('click', e => {
    const card = e.target.closest('.blog-card');
    if (!card) return;

    const postId = parseInt(card.dataset.postId, 10);
    const post   = (DATA.posts || []).find(p => p.id === postId);
    if (!post) return;

    const tagPills = (post.tags || [])
      .map(t => `<span class="blog-tag">${esc(t)}</span>`).join('');

    body.innerHTML = `
      <h2>${esc(post.title)}</h2>
      <div class="modal-meta">${esc(post.date)} &nbsp;&middot;&nbsp; ${esc(post.readTime)}</div>
      ${post.content}
      <div class="blog-tags" style="margin-top: 2rem;">${tagPills}</div>`;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    overlay.querySelector('.modal').scrollTop = 0;
  });

  const close = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', close);
  overlay?.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

// ─────────────────────────────────────────────────────────────────────────
//  MOBILE HAMBURGER MENU
// ─────────────────────────────────────────────────────────────────────────
function initMobileMenu() {
  const hamburger = document.getElementById('navHamburger');
  const menu      = document.getElementById('navMenu');

  hamburger?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close menu when any link is clicked
  document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────
//  UTILITIES
// ─────────────────────────────────────────────────────────────────────────
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// Escape special HTML characters (used for user-supplied text in attributes/text nodes)
function esc(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
