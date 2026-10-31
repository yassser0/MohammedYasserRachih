/* ===== main.js ===== */

// ─── INTRO TERMINAL ANIMATION ───────────────────────────────────────────────
(function initIntro() {
  const intro = document.getElementById('intro');
  const lines = document.querySelectorAll('.terminal-line');
  const cta = document.querySelector('.intro-cta');
  const btnOpen = document.getElementById('btn-open');

  const delays = [0, 800, 1400, 2000, 2800, 3400];
  
  lines.forEach((line, i) => {
    setTimeout(() => {
      line.classList.add('visible');
    }, delays[i] || i * 600);
  });

  setTimeout(() => {
    cta.classList.add('show');
  }, 4200);

  function openProfile() {
    intro.classList.add('hidden');
    document.body.style.overflow = '';
  }

  btnOpen.addEventListener('click', openProfile);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !intro.classList.contains('hidden')) {
      openProfile();
    }
  });

  // Lock scroll while intro visible
  document.body.style.overflow = 'hidden';
})();

// ─── NAV: SCROLL PROGRESS + DIAMOND + ACTIVE LINK ───────────────────────────
(function initNav() {
  const bar = document.querySelector('.nav-progress-bar');
  const diamond = document.querySelector('.nav-diamond');
  const navLinks = document.querySelectorAll('.nav-links a');
  const burger = document.getElementById('nav-burger');
  const mobileNav = document.getElementById('nav-mobile');
  const mobileLinks = document.querySelectorAll('.nav-mobile a');
  const backTop = document.querySelector('.back-top');

  // Scroll progress
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.body.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (scrolled / total) * 100 : 0;
    bar.style.width = pct + '%';
    diamond.style.left = pct + '%';

    // Back to top
    if (backTop) {
      backTop.classList.toggle('visible', scrolled > 400);
    }

    // Active section
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (scrolled >= top) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }, { passive: true });

  // Mobile burger
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
    });
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }

  if (backTop) {
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
})();

// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
})();

// ─── PIPELINE INTERACTIVE ─────────────────────────────────────────────────────
(function initPipeline() {
  const steps = document.querySelectorAll('.pipeline-step');
  const details = document.querySelectorAll('.pipeline-detail-content');
  const detailBox = document.querySelector('.pipeline-detail');
  const statusDot = document.querySelector('.pipeline-status-dot');
  const statusText = document.querySelector('.pipeline-status-text');
  const runBtn = document.getElementById('pipeline-run-btn');

  let activeIndex = -1;
  let isRunning = false;
  let runInterval = null;
  let doneCount = 0;

  function setActive(idx) {
    activeIndex = idx;
    steps.forEach((s, i) => {
      s.classList.toggle('active', i === idx);
    });
    details.forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
    if (detailBox) {
      detailBox.classList.toggle('has-active', idx >= 0);
    }
    const placeholder = document.getElementById('pipeline-placeholder');
    if (placeholder) placeholder.style.display = idx >= 0 ? 'none' : 'block';
  }

  function updateStatus() {
    if (statusText) {
      const done = document.querySelectorAll('.pipeline-step.done').length;
      statusText.textContent = isRunning
        ? `en cours · ${done}/5 étapes`
        : done === 5
          ? 'terminé · 5/5 étapes ✓'
          : done > 0
            ? `en pause · ${done}/5 étapes`
            : 'inactif · 0/5 étapes';
    }
    if (statusDot) {
      statusDot.classList.toggle('running', isRunning);
    }
  }

  steps.forEach((step, i) => {
    step.addEventListener('click', () => {
      if (isRunning) return;
      setActive(activeIndex === i ? -1 : i);
    });
  });

  if (runBtn) {
    runBtn.addEventListener('click', () => {
      if (isRunning) {
        // Stop
        clearInterval(runInterval);
        isRunning = false;
        runBtn.textContent = '▶ lancer le pipeline';
        updateStatus();
        return;
      }

      // Reset
      steps.forEach(s => { s.classList.remove('done', 'active'); });
      doneCount = 0;
      isRunning = true;
      runBtn.textContent = '⏸ arrêter';
      updateStatus();

      let current = 0;
      setActive(0);

      runInterval = setInterval(() => {
        if (current >= steps.length) {
          clearInterval(runInterval);
          isRunning = false;
          runBtn.textContent = '▶ relancer le pipeline';
          setActive(-1);
          updateStatus();
          return;
        }
        steps[current].classList.remove('active');
        steps[current].classList.add('done');
        doneCount++;
        current++;
        if (current < steps.length) {
          setActive(current);
        }
        updateStatus();
      }, 1200);
    });
  }

  updateStatus();
})();

// ─── PROJECT CAROUSEL ────────────────────────────────────────────────────────
(function initProjects() {
  const sketches = document.querySelectorAll('.sketch-item');
  const detailPanels = document.querySelectorAll('.project-detail-panel');
  const counter = document.querySelector('.project-counter');
  const prevBtn = document.getElementById('proj-prev');
  const nextBtn = document.getElementById('proj-next');

  let currentProject = 0;
  const total = sketches.length;

  function showProject(idx) {
    idx = ((idx % total) + total) % total;
    currentProject = idx;

    sketches.forEach((s, i) => s.classList.toggle('active', i === idx));
    detailPanels.forEach((p, i) => {
      p.style.display = i === idx ? 'block' : 'none';
    });
    if (counter) counter.textContent = `0${idx + 1} / 0${total}`;
  }

  sketches.forEach((s, i) => {
    s.addEventListener('click', () => showProject(i));
  });

  if (prevBtn) prevBtn.addEventListener('click', () => showProject(currentProject - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showProject(currentProject + 1));

  document.addEventListener('keydown', (e) => {
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) return;
    const rect = projectsSection.getBoundingClientRect();
    if (rect.top > window.innerHeight || rect.bottom < 0) return;

    if (e.key === 'ArrowLeft') showProject(currentProject - 1);
    if (e.key === 'ArrowRight') showProject(currentProject + 1);
  });

  showProject(0);
})();

// ─── SKILL BARS (animate when in view) ───────────────────────────────────────
(function initSkills() {
  const fills = document.querySelectorAll('.skill-fill');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = e.target.dataset.width;
        setTimeout(() => { e.target.style.width = target + '%'; }, 200);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  fills.forEach(f => obs.observe(f));
})();

// ─── EMAIL COPY ────────────────────────────────────────────────────────────────
(function initCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('yassirach17@gmail.com').then(() => {
      copyBtn.textContent = 'copié !';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = 'copier';
        copyBtn.classList.remove('copied');
      }, 2000);
    });
  });
})();

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────
(function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    const honeypot = form.querySelector('[name="website"]');
    if (honeypot && honeypot.value) {
      e.preventDefault();
      return;
    }
    // Formspree handles submission; just let it go
  });
})();

// ─── AVATAR EASTER EGG ────────────────────────────────────────────────────────
(function initAvatar() {
  const card = document.querySelector('.avatar-card');
  if (!card) return;
  let clicks = 0;
  const messages = ['👋', '😄', '☕', '💻', '🚀', '✨'];
  const initials = card.querySelector('.avatar-initials');
  card.addEventListener('click', () => {
    clicks++;
    if (initials) initials.textContent = messages[clicks % messages.length];
    setTimeout(() => {
      if (initials) initials.textContent = 'MR';
      clicks = 0;
    }, 1500);
  });
})();
