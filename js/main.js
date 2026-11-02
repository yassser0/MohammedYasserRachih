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

  // Tap anywhere on intro once CTA is ready to quickly enter
  intro.addEventListener('click', (e) => {
    if (cta.classList.contains('show') && e.target === intro) {
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
    function toggleMobileMenu(forceClose = false) {
      const shouldOpen = forceClose ? false : !mobileNav.classList.contains('open');
      mobileNav.classList.toggle('open', shouldOpen);
      burger.classList.toggle('open', shouldOpen);
      burger.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
      document.body.style.overflow = shouldOpen ? 'hidden' : '';
    }

    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => toggleMobileMenu(true));
    });

    // Close on click outside mobile menu
    mobileNav.addEventListener('click', (e) => {
      if (e.target === mobileNav) toggleMobileMenu(true);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        toggleMobileMenu(true);
      }
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

    // Auto-scroll step into view on mobile
    if (idx >= 0 && steps[idx]) {
      const container = document.querySelector('.pipeline-steps');
      if (container && container.scrollWidth > container.clientWidth) {
        const step = steps[idx];
        const cRect = container.getBoundingClientRect();
        const sRect = step.getBoundingClientRect();
        const offset = (sRect.left - cRect.left) - (container.clientWidth / 2) + (step.clientWidth / 2);
        container.scrollBy({ left: offset, behavior: 'smooth' });
      }
    }
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

    // Auto-scroll active sketch item into view on mobile
    if (sketches[idx]) {
      const rail = document.querySelector('.sketch-rail');
      if (rail && rail.scrollWidth > rail.clientWidth) {
        const item = sketches[idx];
        const rRect = rail.getBoundingClientRect();
        const iRect = item.getBoundingClientRect();
        const offset = (iRect.left - rRect.left) - (rail.clientWidth / 2) + (item.clientWidth / 2);
        rail.scrollBy({ left: offset, behavior: 'smooth' });
      }
    }
  }

  sketches.forEach((s, i) => {
    s.addEventListener('click', () => showProject(i));
  });

  if (prevBtn) prevBtn.addEventListener('click', () => showProject(currentProject - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showProject(currentProject + 1));

  // Touch swipe support on project card for mobile users
  const projectDetail = document.querySelector('.project-detail');
  if (projectDetail) {
    let touchStartX = 0;
    let touchStartY = 0;

    projectDetail.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    projectDetail.addEventListener('touchend', (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        const diffX = e.changedTouches[0].clientX - touchStartX;
        const diffY = e.changedTouches[0].clientY - touchStartY;
        // Horizontal swipe detected (diffX > 40px, and clearly horizontal)
        if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY) * 1.3) {
          if (diffX < 0) {
            showProject(currentProject + 1); // Swipe left -> next
          } else {
            showProject(currentProject - 1); // Swipe right -> prev
          }
        }
      }
    }, { passive: true });
  }

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
    }, { threshold: 0.1 });

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

// ─── CLIPBOARD COPY (EMAIL & PHONE) ──────────────────────────────────────────
(function initCopy() {
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise((resolve, reject) => {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (ok) resolve();
        else reject(new Error('execCommand failed'));
      } catch (err) {
        reject(err);
      }
    });
  }

  function setupCopyBtn(btnId, textToCopy) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      copyText(textToCopy).then(() => {
        const lang = (typeof currentLang !== 'undefined') ? currentLang : (localStorage.getItem('portfolio_lang') || 'fr');
        const copiedTxt = (lang === 'en') ? 'copied!' : 'copié !';
        const defaultTxt = (lang === 'en') ? 'copy' : 'copier';
        btn.textContent = copiedTxt;
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = defaultTxt;
          btn.classList.remove('copied');
        }, 2000);
      }).catch(err => {
        console.warn('Clipboard write failed:', err);
      });
    });
  }

  setupCopyBtn('copy-email-btn', 'yassirach17@gmail.com');
  setupCopyBtn('copy-phone-btn', '+212 716-972238');
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

// ─── DATA MESH / DAG PIPELINE BACKGROUND ANIMATION ────────────────────────────
(function initDataMesh() {
  const canvas = document.getElementById('bg-data-mesh');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let nodes = [];
  let packets = [];
  let animId = null;
  let isTabActive = true;

  // Mouse / Touch tracking
  const pointer = {
    x: -9999,
    y: -9999,
    radius: 160,
    isActive: false
  };

  const NODE_TYPES = {
    STANDARD: 'standard',
    STREAM: 'stream',
    WAREHOUSE: 'warehouse'
  };

  function getTargetNodeCount() {
    const area = window.innerWidth * window.innerHeight;
    if (window.innerWidth < 640) return 22;
    if (window.innerWidth < 1024) return 35;
    return Math.min(55, Math.floor(area / 28000));
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    initNodes();
  }

  function initNodes() {
    const count = getTargetNodeCount();
    nodes = [];
    packets = [];

    for (let i = 0; i < count; i++) {
      const rand = Math.random();
      let type = NODE_TYPES.STANDARD;
      let radius = 2.2 + Math.random() * 1.4;
      let color = 'rgba(100, 116, 139, 0.45)';

      if (rand < 0.16) {
        type = NODE_TYPES.STREAM;
        radius = 3.5;
        color = 'rgba(37, 99, 235, 0.75)'; // Blue
      } else if (rand < 0.32) {
        type = NODE_TYPES.WAREHOUSE;
        radius = 3.2;
        color = 'rgba(217, 119, 6, 0.75)'; // Amber
      }

      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        baseRadius: radius,
        radius: radius,
        type: type,
        color: color
      });
    }
  }

  function trySpawnPacket() {
    if (packets.length >= 6 || nodes.length < 2) return;
    if (Math.random() > 0.04) return;

    const sourceIdx = Math.floor(Math.random() * nodes.length);
    const source = nodes[sourceIdx];

    let nearest = null;
    let nearestDist = 140;
    for (let i = 0; i < nodes.length; i++) {
      if (i === sourceIdx) continue;
      const target = nodes[i];
      const dist = Math.hypot(target.x - source.x, target.y - source.y);
      if (dist < nearestDist) {
        nearest = target;
        nearestDist = dist;
      }
    }

    if (nearest) {
      packets.push({
        from: source,
        to: nearest,
        progress: 0,
        speed: 0.015 + Math.random() * 0.015,
        color: (source.type === NODE_TYPES.STREAM || nearest.type === NODE_TYPES.STREAM)
          ? 'rgba(37, 99, 235, 0.9)'
          : (source.type === NODE_TYPES.WAREHOUSE || nearest.type === NODE_TYPES.WAREHOUSE)
            ? 'rgba(217, 119, 6, 0.9)'
            : 'rgba(16, 185, 129, 0.85)'
      });
    }
  }

  function update() {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0) { node.x = 0; node.vx *= -1; }
      else if (node.x > width) { node.x = width; node.vx *= -1; }
      if (node.y < 0) { node.y = 0; node.vy *= -1; }
      else if (node.y > height) { node.y = height; node.vy *= -1; }

      if (pointer.isActive) {
        const dx = node.x - pointer.x;
        const dy = node.y - pointer.y;
        const dist = Math.hypot(dx, dy);

        if (dist < pointer.radius && dist > 0) {
          const force = (pointer.radius - dist) / pointer.radius;
          node.x += (dx / dist) * force * 1.2;
          node.y += (dy / dist) * force * 1.2;
        }
      }
    }

    for (let i = packets.length - 1; i >= 0; i--) {
      const p = packets[i];
      p.progress += p.speed;
      if (p.progress >= 1) {
        packets.splice(i, 1);
      }
    }

    trySpawnPacket();
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const maxDist = 135;

    // 1. Draw DAG Pipeline edges
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dist = Math.hypot(b.x - a.x, b.y - a.y);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.28;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);

          if (a.type === NODE_TYPES.STREAM || b.type === NODE_TYPES.STREAM) {
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha * 1.25})`;
            ctx.lineWidth = 1;
          } else if (a.type === NODE_TYPES.WAREHOUSE || b.type === NODE_TYPES.WAREHOUSE) {
            ctx.strokeStyle = `rgba(217, 119, 6, ${alpha * 1.15})`;
            ctx.lineWidth = 0.9;
          } else {
            ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
            ctx.lineWidth = 0.75;
          }
          ctx.stroke();
        }
      }

      // Interaction connection to cursor
      if (pointer.isActive) {
        const mdist = Math.hypot(a.x - pointer.x, a.y - pointer.y);
        if (mdist < pointer.radius) {
          const mAlpha = (1 - mdist / pointer.radius) * 0.35;
          ctx.beginPath();
          ctx.moveTo(pointer.x, pointer.y);
          ctx.lineTo(a.x, a.y);
          ctx.strokeStyle = `rgba(37, 99, 235, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // 2. Draw active data packets
    for (let i = 0; i < packets.length; i++) {
      const p = packets[i];
      const px = p.from.x + (p.to.x - p.from.x) * p.progress;
      const py = p.from.y + (p.to.y - p.from.y) * p.progress;

      ctx.beginPath();
      ctx.arc(px, py, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 4;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // 3. Draw nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      if (node.type === NODE_TYPES.STREAM) {
        // Stream / Kafka Node (diamond with blue outline)
        const sz = node.radius * 1.4;
        ctx.save();
        ctx.translate(node.x, node.y);
        ctx.rotate(Math.PI / 4);
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 1.5;
        ctx.fillRect(-sz / 2, -sz / 2, sz, sz);
        ctx.strokeRect(-sz / 2, -sz / 2, sz, sz);
        ctx.restore();
      } else if (node.type === NODE_TYPES.WAREHOUSE) {
        // Warehouse / Storage Node (amber square)
        const sz = node.radius * 1.5;
        ctx.fillStyle = node.color;
        ctx.fillRect(node.x - sz / 2, node.y - sz / 2, sz, sz);
      } else {
        // Standard data point (circle)
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      }
    }
  }

  function loop() {
    if (!isTabActive) return;
    update();
    draw();
    animId = requestAnimationFrame(loop);
  }

  function onPointerMove(e) {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.isActive = true;
  }

  function onPointerLeave() {
    pointer.isActive = false;
    pointer.x = -9999;
    pointer.y = -9999;
  }

  function onTouchMove(e) {
    if (e.touches && e.touches[0]) {
      pointer.x = e.touches[0].clientX;
      pointer.y = e.touches[0].clientY;
      pointer.isActive = true;
    }
  }

  function onTouchEnd() {
    pointer.isActive = false;
    pointer.x = -9999;
    pointer.y = -9999;
  }

  function onVisibilityChange() {
    if (document.hidden) {
      isTabActive = false;
      if (animId) cancelAnimationFrame(animId);
    } else {
      isTabActive = true;
      animId = requestAnimationFrame(loop);
    }
  }

  let resizeTimer = null;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  }

  window.addEventListener('resize', onResize);
  window.addEventListener('mousemove', onPointerMove, { passive: true });
  window.addEventListener('mouseleave', onPointerLeave, { passive: true });
  window.addEventListener('touchmove', onTouchMove, { passive: true });
  window.addEventListener('touchend', onTouchEnd, { passive: true });
  document.addEventListener('visibilitychange', onVisibilityChange);

  resize();

  if (!prefersReducedMotion) {
    animId = requestAnimationFrame(loop);
  } else {
    draw();
  }
})();
