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

  function getLang() {
    return (typeof currentLang !== 'undefined') ? currentLang : (localStorage.getItem('portfolio_lang') || 'fr');
  }

  const iconPlay = '<svg class="btn-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
  const iconStop = '<svg class="btn-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
  const iconRerun = '<svg class="btn-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>';

  function setRunBtnState(type, text) {
    if (!runBtn) return;
    const icon = type === 'stop' ? iconStop : type === 'rerun' ? iconRerun : iconPlay;
    runBtn.innerHTML = `${icon}<span>${text}</span>`;
  }

  function updateStatus() {
    if (statusText) {
      const lang = getLang();
      const t = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang].pipeline : null;
      const done = document.querySelectorAll('.pipeline-step.done').length;
      if (t) {
        statusText.textContent = isRunning
          ? t.statusRunning.replace('{n}', done)
          : done === 5
            ? t.statusDone
            : done > 0
              ? t.statusPaused.replace('{n}', done)
              : t.statusIdle;
      } else {
        statusText.textContent = isRunning
          ? `en cours · ${done}/5 étapes`
          : done === 5
            ? 'terminé · 5/5 étapes'
            : done > 0
              ? `en pause · ${done}/5 étapes`
              : 'inactif · 0/5 étapes';
      }
    }
    if (statusDot) {
      statusDot.classList.toggle('running', isRunning);
    }
  }

  window.addEventListener('languagechange', () => {
    updateStatus();
    if (runBtn) {
      const lang = getLang();
      const t = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang].pipeline : null;
      if (isRunning) {
        setRunBtnState('stop', t ? t.btnStop : 'arrêter');
      } else {
        const done = document.querySelectorAll('.pipeline-step.done').length;
        if (done === 5) {
          setRunBtnState('rerun', t ? t.btnRerun : 'relancer le pipeline');
        } else {
          setRunBtnState('play', t ? t.btnRun : 'lancer le pipeline');
        }
      }
    }
  });

  steps.forEach((step, i) => {
    step.addEventListener('click', () => {
      if (isRunning) return;
      setActive(activeIndex === i ? -1 : i);
    });
  });

  if (runBtn) {
    runBtn.addEventListener('click', () => {
      const lang = getLang();
      const t = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang].pipeline : null;

      if (isRunning) {
        // Stop
        clearInterval(runInterval);
        isRunning = false;
        setRunBtnState('play', t ? t.btnRun : 'lancer le pipeline');
        updateStatus();
        return;
      }

      // Reset
      steps.forEach(s => { s.classList.remove('done', 'active'); });
      doneCount = 0;
      isRunning = true;
      setRunBtnState('stop', t ? t.btnStop : 'arrêter');
      updateStatus();

      let current = 0;
      setActive(0);

      runInterval = setInterval(() => {
        if (current >= steps.length) {
          clearInterval(runInterval);
          isRunning = false;
          setRunBtnState('rerun', t ? t.btnRerun : 'relancer le pipeline');
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

// ─── SKILL CYLINDERS & FILTERS ──────────────────────────────────────────────
(function initSkills() {
  const cards = document.querySelectorAll('.skill-card');
  const fills = document.querySelectorAll('.skill-fill');

  // Animate cylinder liquid levels when visible
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('animated');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(c => obs.observe(c));

    // Backward compatibility for standard progress bars if any
    const fillObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const target = e.target.dataset.width;
          setTimeout(() => { e.target.style.width = target + '%'; }, 200);
          fillObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    fills.forEach(f => fillObs.observe(f));
  } else {
    cards.forEach(c => c.classList.add('animated'));
    fills.forEach(f => { f.style.width = (f.dataset.width || 75) + '%'; });
  }

  // Interactive Card Selection (like the SQL card in target design)
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const wasActive = card.classList.contains('active');
      cards.forEach(c => c.classList.remove('active'));
      if (!wasActive) card.classList.add('active');
    });
  });

  // Category Filtering
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter || 'all';

      cards.forEach(card => {
        const categories = (card.dataset.category || '').split(' ');
        const matches = (filter === 'all') || categories.includes(filter);

        if (matches) {
          card.classList.remove('is-hidden');
          // re-trigger animation if entering view
          setTimeout(() => card.classList.add('animated'), 50);
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
})();

// ─── EMAIL COPY ────────────────────────────────────────────────────────────────
(function initCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('yassirach17@gmail.com').then(() => {
      const lang = (typeof currentLang !== 'undefined') ? currentLang : 'fr';
      const copiedTxt = (lang === 'en') ? 'copied!' : 'copié !';
      const defaultTxt = (lang === 'en') ? 'copy' : 'copier';
      copyBtn.textContent = copiedTxt;
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = defaultTxt;
        copyBtn.classList.remove('copied');
      }, 2000);
    });
  });
})();

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────
(function initForm() {
  const form = document.getElementById('contact-form');
  const statusBox = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit-btn');
  const fallbackBox = document.getElementById('form-fallback-mailto');
  const fallbackLink = document.getElementById('mailto-fallback-link');

  if (!form) return;

  function setStatus(type, html) {
    if (!statusBox) return;
    statusBox.className = 'form-status ' + type;
    statusBox.innerHTML = html;
    statusBox.style.display = 'block';
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const honeypot = form.querySelector('[name="_honey"]');
    if (honeypot && honeypot.value) return;

    const lang = (typeof currentLang !== 'undefined') ? currentLang : 'fr';
    const isEn = lang === 'en';

    // Basic client validation
    const motif = form.motif ? form.motif.value.trim() : '';
    const name = form.name ? form.name.value.trim() : '';
    const email = form.email ? form.email.value.trim() : '';
    const message = form.message ? form.message.value.trim() : '';
    const company = form.company ? form.company.value.trim() : '';

    if (!motif || !name || !email || !message) {
      const alertIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" style="vertical-align:-2px;margin-right:6px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
      setStatus('error', isEn
        ? `${alertIcon}Please fill in all required fields marked with *.`
        : `${alertIcon}Veuillez remplir tous les champs obligatoires marqués d'une *.`);
      return;
    }

    // Prepare mailto link for direct fallback
    const mailtoSubject = encodeURIComponent(`[Portfolio] ${motif} - ${name}`);
    const mailtoBody = encodeURIComponent(`Bonjour Mohammed Yasser,\n\nNom: ${name}\nEntreprise: ${company || 'N/A'}\nEmail: ${email}\nMotif: ${motif}\n\nMessage:\n${message}`);
    if (fallbackLink) {
      fallbackLink.href = `mailto:yassirach17@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    }

    // Set loading state
    const originalBtnText = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<svg class="btn-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>' + (isEn ? 'Sending message...' : 'Envoi en cours...') + '</span>';
    }

    try {
      const payload = {
        name,
        email,
        company: company || 'N/A',
        motif,
        message,
        _subject: `[Portfolio] Nouveau message de ${name} (${motif})`
      };

      const response = await fetch('https://formsubmit.co/ajax/yassirach17@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (data.success === 'true' || data.success === true) {
        const checkIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" style="vertical-align:-3px;margin-right:6px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
        setStatus('success', isEn
          ? `${checkIcon}<strong>Message sent successfully!</strong> Thank you ${name}, I will reply to <em>${email}</em> very soon.`
          : `${checkIcon}<strong>Message envoyé avec succès !</strong> Merci ${name}, je vous répondrai à l'adresse <em>${email}</em> très prochainement.`);
        form.reset();
        if (fallbackBox) fallbackBox.style.display = 'none';
      } else if (data.message && data.message.includes('Activation')) {
        const mailIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" style="vertical-align:-3px;margin-right:6px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>';
        setStatus('info', isEn
          ? `${mailIcon}<strong>Form connected!</strong> FormSubmit sent an activation email to <strong>yassirach17@gmail.com</strong>. Please open your Gmail and click <em>"Activate Form"</em> once to receive all future messages.`
          : `${mailIcon}<strong>Formulaire connecté !</strong> FormSubmit vous a envoyé un e-mail d'activation à <strong>yassirach17@gmail.com</strong>. Ouvrez votre boîte Gmail et cliquez sur <em>« Activate Form »</em> pour valider la réception automatique de vos messages.`);
        if (fallbackBox) fallbackBox.style.display = 'block';
      } else {
        const checkIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" style="vertical-align:-3px;margin-right:6px;"><polyline points="20 6 9 17 4 12"/></svg>';
        setStatus('info', isEn
          ? `${checkIcon}Your message has been prepared! You can also click below to send it directly via email.`
          : `${checkIcon}Votre message a été préparé ! Vous pouvez aussi cliquer ci-dessous pour l'envoyer directement par email.`);
        if (fallbackBox) fallbackBox.style.display = 'block';
      }
    } catch (err) {
      console.warn('FormSubmit AJAX fallback:', err);
      const alertIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" style="vertical-align:-2px;margin-right:6px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
      setStatus('info', isEn
        ? `${alertIcon}Click below to send directly via your email app:`
        : `${alertIcon}Cliquez ci-dessous pour envoyer directement depuis votre messagerie :`);
      if (fallbackBox) fallbackBox.style.display = 'block';
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    }
  });
})();

// ─── AVATAR INTERACTION ────────────────────────────────────────────────────────
(function initAvatar() {
  const card = document.querySelector('.avatar-card');
  if (!card) return;
  card.addEventListener('click', () => {
    card.style.transform = 'rotate(-3deg) scale(1.05)';
    card.style.boxShadow = '10px 10px 0 var(--blue)';
    setTimeout(() => {
      card.style.transform = '';
      card.style.boxShadow = '';
    }, 400);
  });
})();

// ─── CV SELECTION TABS ─────────────────────────────────────────────────────────
(function initCvTabs() {
  const tabFr = document.getElementById('cv-tab-fr');
  const tabEn = document.getElementById('cv-tab-en');
  const cardFr = document.getElementById('cv-card-fr');
  const cardEn = document.getElementById('cv-card-en');

  function selectCv(lang) {
    if (tabFr) {
      tabFr.classList.toggle('active', lang === 'fr');
      tabFr.setAttribute('aria-selected', lang === 'fr');
    }
    if (tabEn) {
      tabEn.classList.toggle('active', lang === 'en');
      tabEn.setAttribute('aria-selected', lang === 'en');
    }
    if (cardFr) cardFr.classList.toggle('highlighted', lang === 'fr');
    if (cardEn) cardEn.classList.toggle('highlighted', lang === 'en');
  }

  if (tabFr) tabFr.addEventListener('click', () => selectCv('fr'));
  if (tabEn) tabEn.addEventListener('click', () => selectCv('en'));

  window.addEventListener('languagechange', (e) => {
    if (e.detail && e.detail.lang) {
      selectCv(e.detail.lang);
    }
  });

  const initialLang = (typeof currentLang !== 'undefined') ? currentLang : (localStorage.getItem('portfolio_lang') || 'fr');
  selectCv(initialLang);
})();

// ─── ARCHITECTURE DIAGRAM LIGHTBOX ──────────────────────────────────────────
(function initLightbox() {
  const modal = document.getElementById('img-modal');
  const modalImg = document.getElementById('img-modal-view');
  const modalCaption = document.getElementById('img-modal-caption');
  const closeBtn = document.querySelector('.img-modal-close');
  const backdrop = document.querySelector('.img-modal-backdrop');

  if (!modal || !modalImg) return;

  document.querySelectorAll('.project-img-wrap').forEach(wrap => {
    wrap.addEventListener('click', () => {
      const img = wrap.querySelector('.project-img');
      if (!img) return;
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      if (modalCaption) {
        modalCaption.textContent = img.alt || 'Architecture Système';
      }
      modal.classList.add('open');
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }, 200);
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
})();
