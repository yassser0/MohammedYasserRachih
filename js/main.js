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
            ? 'terminé · 5/5 étapes ✓'
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
      if (t) {
        if (isRunning) {
          runBtn.textContent = t.btnStop;
        } else {
          const done = document.querySelectorAll('.pipeline-step.done').length;
          runBtn.textContent = (done === 5) ? t.btnRerun : t.btnRun;
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
        runBtn.textContent = t ? t.btnRun : '▶ lancer le pipeline';
        updateStatus();
        return;
      }

      // Reset
      steps.forEach(s => { s.classList.remove('done', 'active'); });
      doneCount = 0;
      isRunning = true;
      runBtn.textContent = t ? t.btnStop : '⏸ arrêter';
      updateStatus();

      let current = 0;
      setActive(0);

      runInterval = setInterval(() => {
        if (current >= steps.length) {
          clearInterval(runInterval);
          isRunning = false;
          runBtn.textContent = t ? t.btnRerun : '▶ relancer le pipeline';
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
      setStatus('error', isEn
        ? '⚠️ Please fill in all required fields marked with *.'
        : '⚠️ Veuillez remplir tous les champs obligatoires marqués d\'une *.');
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
      submitBtn.textContent = isEn ? '⏳ Sending message...' : '⏳ Envoi en cours...';
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
        setStatus('success', isEn
          ? `✅ <strong>Message sent successfully!</strong> Thank you ${name}, I will reply to <em>${email}</em> very soon.`
          : `✅ <strong>Message envoyé avec succès !</strong> Merci ${name}, je vous répondrai à l'adresse <em>${email}</em> très prochainement.`);
        form.reset();
        if (fallbackBox) fallbackBox.style.display = 'none';
      } else if (data.message && data.message.includes('Activation')) {
        setStatus('info', isEn
          ? `📬 <strong>Form connected!</strong> FormSubmit sent an activation email to <strong>yassirach17@gmail.com</strong>. Please open your Gmail and click <em>"Activate Form"</em> once to receive all future messages.`
          : `📬 <strong>Formulaire connecté !</strong> FormSubmit vous a envoyé un e-mail d'activation à <strong>yassirach17@gmail.com</strong>. Ouvrez votre boîte Gmail et cliquez sur <em>« Activate Form »</em> pour valider la réception automatique de vos messages.`);
        if (fallbackBox) fallbackBox.style.display = 'block';
      } else {
        setStatus('info', isEn
          ? `✓ Your message has been prepared! You can also click below to send it directly via email.`
          : `✓ Votre message a été préparé ! Vous pouvez aussi cliquer ci-dessous pour l'envoyer directement par email.`);
        if (fallbackBox) fallbackBox.style.display = 'block';
      }
    } catch (err) {
      console.warn('FormSubmit AJAX fallback:', err);
      setStatus('info', isEn
        ? `⚠️ Click below to send directly via your email app:`
        : `⚠️ Cliquez ci-dessous pour envoyer directement depuis votre messagerie :`);
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
