/* ===== i18n.js — Système bilingue Français / English ===== */

const translations = {
  fr: {
    // Meta & Document
    pageTitle: "Mohammed Yasser Rachih · Data Engineer Junior",
    metaDesc: "Portfolio de Mohammed Yasser Rachih — Data Engineer Junior & Développeur Full-Stack basé à Casablanca, Maroc. Java Spring Boot, Python, ETL/ELT, microservices, CI/CD.",
    skipLink: "Aller au contenu principal",

    // Terminal Intro
    terminal: {
      title: "bash — profil.sh",
      cmd: "./profil.sh --query \"qui est Mohammed Yasser ?\"",
      muted1: "# Connexion à la base de données...",
      muted2: "> chargement du profil ",
      ok1: "Data Engineer Junior · Casablanca, Maroc",
      ok2: "Java · Python · ETL/ELT · Microservices · CI/CD",
      cmdOpen: "open profile",
      btnOpen: "ouvrir le profil ↓",
      enterHint: "ou appuyer sur Entrée ↵"
    },

    // Navbar
    nav: {
      pipeline: "pipeline",
      experience: "expérience",
      projects: "projets",
      skills: "compétences",
      cv: "cv",
      contact: "contact"
    },

    // Hero
    hero: {
      title: "Je construis les pipelines<br>qui font <span class=\"hero-highlight\">parler les données.</span>",
      desc: "Data Engineer Junior basé à Casablanca — je conçois des architectures data robustes, du pipeline ETL/ELT jusqu'au monitoring en production.",
      tags: ["Java · Spring Boot", "Python", "ETL / ELT", "Microservices", "CI/CD"],
      btnPipeline: "voir mon pipeline →",
      btnContact: "me contacter",
      btnCv: "CV (FR) ↓",
      avatarLabel: "yasser · casablanca"
    },

    // Pipeline
    pipeline: {
      label: "comment je travaille",
      title: "Mon pipeline<br>de bout en bout.",
      statusIdle: "inactif · 0/5 étapes",
      statusRunning: "en cours · {n}/5 étapes",
      statusDone: "terminé · 5/5 étapes ✓",
      statusPaused: "en pause · {n}/5 étapes",
      btnRun: "▶ lancer le pipeline",
      btnStop: "⏸ arrêter",
      btnRerun: "▶ relancer le pipeline",
      placeholder: "← Cliquez sur une étape pour en savoir plus, ou lancez le pipeline complet ▶",
      steps: [
        { name: "Sources", desc: "Collecte des données brutes" },
        { name: "Ingestion", desc: "ETL / ELT vers les couches de données" },
        { name: "Transformation", desc: "Nettoyage, qualité, fiabilité" },
        { name: "Déploiement", desc: "Conteneurisation, CI/CD, orchestration" },
        { name: "Monitoring", desc: "Suivi et détection des problèmes" }
      ],
      details: [
        {
          title: "🗄️ Sources — Collecte des données",
          items: [
            "Identification et connexion aux sources (BDD SQL, APIs, fichiers, flux streaming)",
            "Mise en place de connecteurs fiables et reproductibles",
            "Gestion des schémas et versionning des données entrantes",
            "Validation initiale du volume et de la cohérence"
          ]
        },
        {
          title: "⬆️ Ingestion — ETL / ELT",
          items: [
            "Conception de pipelines ETL/ELT pour charger les données vers les couches cibles",
            "Orchestration des flux de chargement (incrémental ou full-load)",
            "Gestion des erreurs, reprises et idempotence des traitements",
            "Documentation des flux de données pour la traçabilité"
          ]
        },
        {
          title: "⚙️ Transformation — Qualité & Fiabilité",
          items: [
            "Nettoyage et normalisation des données (déduplication, valeurs manquantes)",
            "Application des règles métier et enrichissement des données",
            "Tests de qualité et contraintes d'intégrité automatisés",
            "Production de données fiables et prêtes à l'analyse"
          ]
        },
        {
          title: "🚀 Déploiement — CI/CD & Conteneurisation",
          items: [
            "Conteneurisation des pipelines et applications (Docker)",
            "Mise en place de chaînes CI/CD pour un déploiement automatisé",
            "Orchestration des applications cloud-native",
            "Gestion des environnements (dev / staging / prod)"
          ]
        },
        {
          title: "📊 Monitoring — Suivi en production",
          items: [
            "Mise en place de tableaux de bord de suivi des traitements",
            "Alertes automatiques en cas d'échec ou d'anomalie",
            "Analyse des logs et détection proactive des problèmes",
            "Optimisation continue des performances des pipelines"
          ]
        }
      ]
    },

    // Experience
    experience: {
      label: "expérience",
      title: "Où j'ai travaillé.",
      marsa: {
        date: "Mars – Juil. 2026",
        company: "Marsa Maroc",
        title: "Stage Data Engineering & Développement",
        badge: "en cours · stage",
        items: [
          "Participation à la conception et à la gestion de solutions dédiées aux données",
          "Développement de traitements permettant de collecter, organiser et exploiter les données",
          "Contribution à l'amélioration de la qualité, de la fiabilité et des performances des données",
          "Mise en place de solutions pour suivre les traitements et détecter les éventuels problèmes",
          "Participation au développement d'une plateforme de gestion et de suivi des opérations portuaires"
        ]
      },
      jisr: {
        date: "Juil. – Sept. 2025",
        company: "Jisr",
        title: "Stage Développement",
        items: [
          "Conception et développement de fonctionnalités pour des applications web",
          "Participation au développement des interfaces et des fonctionnalités côté serveur",
          "Correction des problèmes et amélioration des applications existantes",
          "Contribution à la conception de solutions adaptées aux besoins des utilisateurs"
        ]
      }
    },

    // Projects
    projects: {
      label: "projets",
      title: "Ce que j'ai construit.",
      navHint: "<kbd>←</kbd> <kbd>→</kbd> les flèches clavier fonctionnent aussi",
      btnPrev: "← préc.",
      btnNext: "suiv. →",
      list: [
        {
          label: "Bibliothèque microservices",
          name: "Système de gestion de bibliothèque en microservices",
          context: "FSBM · Casablanca · Projet académique",
          desc: "Conception et développement d'une application de gestion de bibliothèque avec interface adaptée aux utilisateurs et organisation facilitant la maintenance et l'évolution du système. Architecture microservices moderne garantissant scalabilité et résilience."
        },
        {
          label: "Documents administratifs",
          name: "Système de gestion et de vérification des documents administratifs",
          context: "FSBM · Casablanca · Projet académique",
          desc: "Solution web permettant aux citoyens et aux administrations de déposer, consulter et vérifier des documents administratifs de manière sécurisée et transparente, avec une interface intuitive pour la gestion et le suivi du statut des documents."
        },
        {
          label: "Maintenance prédictive",
          name: "Plateforme de données pour la maintenance prédictive",
          context: "FSBM · Casablanca · Projet académique",
          desc: "Conception d'une solution collectant et centralisant les données issues d'équipements industriels afin de suivre leur état, détecter les anomalies et anticiper les besoins de maintenance grâce à des flux temps réel."
        },
        {
          label: "Transactions bancaires",
          name: "Système de traitement et d'analyse des transactions bancaires",
          context: "FSBM · Casablanca · Projet académique",
          desc: "Solution centralisant et traitant des transactions financières pour suivre les opérations, détecter les comportements inhabituels et produire des indicateurs clés pour l'aide à la décision et l'analyse d'activité."
        }
      ]
    },

    // Skills
    skills: {
      label: "compétences",
      title: "Ma boîte à outils.",
      legendExpert: "Expert",
      legendAdvanced: "Avancé",
      legendIntermediate: "Intermédiaire",
      catDev: "💻 Développement",
      catDevOps: "☁️ DevOps & Cloud",
      catData: "📊 Data Engineering",
      levels: {
        expert: "Expert",
        advanced: "Avancé",
        intermediate: "Intermédiaire"
      },
      items: {
        java: "Java (Spring Boot)",
        python: "Python (programmation orientée data)",
        microservices: "Architectures web distribuées (microservices)",
        rest: "APIs REST",
        sql: "SQL · Modélisation relationnelle",
        cicd: "Automatisation CI/CD",
        docker: "Conteneurisation (Docker)",
        oci: "Oracle Cloud Infrastructure",
        git: "Git · Gestion de versions",
        etl: "Pipelines de données (ETL/ELT)",
        quality: "Qualité & intégrité des données",
        monitoring: "Surveillance & suivi des flux de données",
        dbms: "MySQL · PostgreSQL"
      }
    },

    // Certifications
    certifications: {
      label: "certifications",
      title: "Validé par Oracle."
    },

    // Education
    education: {
      label: "formation",
      title: "Mon parcours académique.",
      items: [
        {
          period: "2024 – 2026",
          degree: "Master Big Data & Data Science · spécialité Big Data",
          school: "FSBM – Faculté des Sciences Ben M'Sick, Casablanca"
        },
        {
          period: "2023 – 2024",
          degree: "Licence Mathématiques et Informatique · parcours Bases de données",
          school: "FSBM – Faculté des Sciences Ben M'Sick, Casablanca"
        },
        {
          period: "2020 – 2021",
          degree: "Baccalauréat Scientifique · Sciences Physiques",
          school: "École Oued Dahab, Casablanca, Maroc"
        }
      ]
    },

    // Languages
    languages: {
      label: "langues & qualités",
      title: "Au-delà du code.",
      langTitle: "🌐 Langues",
      softTitle: "✨ Soft skills",
      arabic: { name: "🇲🇦 Arabe", level: "Langue maternelle" },
      french: { name: "🇫🇷 Français", level: "Courant" },
      english: { name: "🇬🇧 Anglais", level: "Intermédiaire" },
      softSkills: [
        "🤝 Travail d'équipe",
        "⏰ Ponctualité",
        "💡 Proactivité",
        "⚡ Gestion du temps",
        "🔄 Adaptabilité"
      ]
    },

    // CV
    cv: {
      label: "curriculum vitae",
      title: "Envie de l'avoir sur papier ?",
      subtitle: "Choisissez votre version préférée — Français ou Anglais, au format PDF.",
      tabFr: "🇫🇷 Version Française",
      tabEn: "🇬🇧 English Version",
      cardFr: {
        badge: "🇫🇷 CV Français",
        title: "Curriculum Vitae — Français",
        desc: "Profil Data Engineer Junior & Développeur Full-Stack · Format PDF A4 · 1 page.",
        details: "Formation Master Big Data · Stages Marsa Maroc & Jisr · Certifications Oracle",
        btnDownload: "↓ Télécharger le CV Français (PDF)",
        btnPreview: "👁️ Aperçu dans le navigateur"
      },
      cardEn: {
        badge: "🇬🇧 English Resume",
        title: "Curriculum Vitae — English",
        desc: "Junior Data Engineer & Full-Stack Developer · Format PDF A4 · 1 page.",
        details: "Master's in Data Science & Big Data · Marsa Maroc & Jisr · Oracle Certifications",
        btnDownload: "↓ Download English Resume (PDF)",
        btnPreview: "👁️ Open in browser"
      }
    },

    // Contact
    contact: {
      label: "contact",
      title: "Construisons quelque chose<br>ensemble.",
      emailLabel: "E-mail",
      phoneLabel: "Téléphone",
      linkedinLabel: "LinkedIn",
      locationLabel: "Localisation",
      locationVal: "Casablanca, Maroc",
      btnCopy: "copier",
      btnCopied: "copié !",
      formTitle: "Envoyez-moi un message 👋",
      reasonLabel: "Motif du message *",
      reasonPlaceholder: "Choisir un motif...",
      reasons: {
        cdi: "Poste CDI",
        stage: "Stage",
        collab: "Collaboration / freelance",
        feedback: "Feedback"
      },
      nameLabel: "Nom *",
      namePlaceholder: "Votre nom",
      companyLabel: "Entreprise",
      companyPlaceholder: "Votre entreprise",
      emailInputLabel: "E-mail *",
      emailPlaceholder: "votre@email.com",
      messageLabel: "Message *",
      messagePlaceholder: "Décrivez votre projet ou votre opportunité...",
      btnSubmit: "Envoyer le message →"
    },

    // Footer
    footer: {
      tagline: "Data Engineer Junior & Développeur Full-Stack · Casablanca, Maroc",
      quote: "\"Les données ne mentent pas — encore faut-il bien les écouter.\"",
      copy: "© 2026 Mohammed Yasser Rachih · Fait avec ☕ et beaucoup de pipelines"
    }
  },

  en: {
    // Meta & Document
    pageTitle: "Mohammed Yasser Rachih · Junior Data Engineer",
    metaDesc: "Portfolio of Mohammed Yasser Rachih — Junior Data Engineer & Full-Stack Developer based in Casablanca, Morocco. Java Spring Boot, Python, ETL/ELT, microservices, CI/CD.",
    skipLink: "Skip to main content",

    // Terminal Intro
    terminal: {
      title: "bash — profile.sh",
      cmd: "./profile.sh --query \"who is Mohammed Yasser ?\"",
      muted1: "# Connecting to database...",
      muted2: "> loading profile ",
      ok1: "Junior Data Engineer · Casablanca, Morocco",
      ok2: "Java · Python · ETL/ELT · Microservices · CI/CD",
      cmdOpen: "open profile",
      btnOpen: "open profile ↓",
      enterHint: "or press Enter ↵"
    },

    // Navbar
    nav: {
      pipeline: "pipeline",
      experience: "experience",
      projects: "projects",
      skills: "skills",
      cv: "resume",
      contact: "contact"
    },

    // Hero
    hero: {
      title: "I build the pipelines<br>that make <span class=\"hero-highlight\">data speak.</span>",
      desc: "Junior Data Engineer based in Casablanca — designing robust data architectures, from ETL/ELT pipelines to production monitoring.",
      tags: ["Java · Spring Boot", "Python", "ETL / ELT", "Microservices", "CI/CD"],
      btnPipeline: "view my pipeline →",
      btnContact: "contact me",
      btnCv: "Resume (EN) ↓",
      avatarLabel: "yasser · casablanca"
    },

    // Pipeline
    pipeline: {
      label: "how I work",
      title: "My end-to-end<br>pipeline.",
      statusIdle: "idle · 0/5 steps",
      statusRunning: "running · {n}/5 steps",
      statusDone: "completed · 5/5 steps ✓",
      statusPaused: "paused · {n}/5 steps",
      btnRun: "▶ run pipeline",
      btnStop: "⏸ pause",
      btnRerun: "▶ rerun pipeline",
      placeholder: "← Click on any step to learn more, or trigger the full pipeline ▶",
      steps: [
        { name: "Sources", desc: "Raw data collection & connectors" },
        { name: "Ingestion", desc: "ETL / ELT to target storage layers" },
        { name: "Transformation", desc: "Cleaning, quality, reliability" },
        { name: "Deployment", desc: "Containerization, CI/CD, orchestration" },
        { name: "Monitoring", desc: "Production tracking & issue detection" }
      ],
      details: [
        {
          title: "🗄️ Sources — Data Collection",
          items: [
            "Identification and connection to diverse sources (SQL databases, APIs, files, streams)",
            "Implementation of reliable, repeatable connectors",
            "Schema management and incoming data versioning",
            "Initial validation of volume, format, and consistency"
          ]
        },
        {
          title: "⬆️ Ingestion — ETL / ELT",
          items: [
            "Design of robust ETL/ELT pipelines loading data to target layers",
            "Orchestration of ingestion workflows (incremental or full-load)",
            "Error handling, retries, and processing idempotency",
            "Comprehensive data flow documentation for lineage and traceability"
          ]
        },
        {
          title: "⚙️ Transformation — Quality & Reliability",
          items: [
            "Data cleansing and normalization (deduplication, handling null values)",
            "Business logic application and data enrichment",
            "Automated data quality checks and integrity constraints",
            "Delivery of analysis-ready, high-trust datasets"
          ]
        },
        {
          title: "🚀 Deployment — CI/CD & Containerization",
          items: [
            "Containerization of data pipelines and services (Docker)",
            "CI/CD automation pipelines for reliable, automated deployment",
            "Orchestration of cloud-native applications",
            "Environment separation and configuration management (dev / staging / prod)"
          ]
        },
        {
          title: "📊 Monitoring — Production Observability",
          items: [
            "Dashboards for monitoring job execution and system health",
            "Automated alerting on processing failures or data drift",
            "Log analysis and proactive troubleshooting",
            "Continuous pipeline performance and query tuning"
          ]
        }
      ]
    },

    // Experience
    experience: {
      label: "experience",
      title: "Where I've worked.",
      marsa: {
        date: "Mar – Jul 2026",
        company: "Marsa Maroc",
        title: "Internship – Data Engineering & Development",
        badge: "current · internship",
        items: [
          "Took part in the design and management of data-focused solutions",
          "Developed processes to collect, organize and exploit data",
          "Contributed to improving data quality, reliability and performance",
          "Implemented solutions to monitor processing jobs and detect potential issues",
          "Took part in the development of a platform for managing and tracking port operations"
        ]
      },
      jisr: {
        date: "Jul – Sep 2025",
        company: "Jisr",
        title: "Internship – Development",
        items: [
          "Designed and developed features for web applications",
          "Contributed to the development of user interfaces and server-side features",
          "Fixed issues and improved existing applications",
          "Contributed to designing solutions tailored to users' needs"
        ]
      }
    },

    // Projects
    projects: {
      label: "projects",
      title: "What I've built.",
      navHint: "<kbd>←</kbd> <kbd>→</kbd> arrow keys also work",
      btnPrev: "← prev.",
      btnNext: "next →",
      list: [
        {
          label: "Microservices Library",
          name: "Library management system built on microservices",
          context: "FSBM · Casablanca · Academic Project",
          desc: "Designed and developed a library management application with a user-friendly interface and an architecture that eases maintenance and system evolution. Built on microservices to ensure scalability and component independence."
        },
        {
          label: "Administrative Documents",
          name: "Administrative document management and verification system",
          context: "FSBM · Casablanca · Academic Project",
          desc: "Web solution allowing citizens and administrations to submit, view and verify administrative documents in a secure and transparent way, with an intuitive interface for document management and real-time status tracking."
        },
        {
          label: "Predictive Maintenance",
          name: "Data platform for predictive maintenance",
          context: "FSBM · Casablanca · Academic Project",
          desc: "Designed a solution that collects and centralizes data from industrial equipment in order to monitor its condition, detect anomalies and anticipate maintenance needs using real-time streaming data."
        },
        {
          label: "Banking Transactions",
          name: "Banking transaction processing and analysis system",
          context: "FSBM · Casablanca · Academic Project",
          desc: "Solution that centralizes and processes financial transactions to track operations, detect unusual behavior and produce key indicators for decision support and activity analytics."
        }
      ]
    },

    // Skills
    skills: {
      label: "skills",
      title: "My technical toolbox.",
      legendExpert: "Expert",
      legendAdvanced: "Advanced",
      legendIntermediate: "Intermediate",
      catDev: "💻 Development",
      catDevOps: "☁️ DevOps & Cloud",
      catData: "📊 Data Engineering",
      levels: {
        expert: "Expert",
        advanced: "Advanced",
        intermediate: "Intermediate"
      },
      items: {
        java: "Java (Spring Boot)",
        python: "Python (data-oriented programming)",
        microservices: "Distributed web architectures (microservices)",
        rest: "REST APIs",
        sql: "SQL · Relational modeling",
        cicd: "CI/CD automation",
        docker: "Containerization (Docker)",
        oci: "Oracle Cloud Infrastructure",
        git: "Git · Version control",
        etl: "Data pipelines (ETL/ELT)",
        quality: "Data quality & governance",
        monitoring: "Data flow monitoring & observability",
        dbms: "MySQL · PostgreSQL"
      }
    },

    // Certifications
    certifications: {
      label: "certifications",
      title: "Validated by Oracle."
    },

    // Education
    education: {
      label: "education",
      title: "My academic background.",
      items: [
        {
          period: "2024 – 2026",
          degree: "Master's in Big Data & Data Science, Big Data specialization",
          school: "FSBM – Faculty of Sciences Ben M'Sick, Casablanca"
        },
        {
          period: "2023 – 2024",
          degree: "Bachelor's in Mathematics and Computer Science (Databases track)",
          school: "FSBM, Casablanca"
        },
        {
          period: "2020 – 2021",
          degree: "Scientific Baccalaureate, Physical Sciences",
          school: "Oued Dahab School, Casablanca, Morocco"
        }
      ]
    },

    // Languages
    languages: {
      label: "languages & soft skills",
      title: "Beyond code.",
      langTitle: "🌐 Languages",
      softTitle: "✨ Soft Skills",
      arabic: { name: "🇲🇦 Arabic", level: "Native" },
      french: { name: "🇫🇷 French", level: "Fluent" },
      english: { name: "🇬🇧 English", level: "Intermediate" },
      softSkills: [
        "🤝 Teamwork",
        "⏰ Punctuality",
        "💡 Proactivity",
        "⚡ Time management",
        "🔄 Adaptability"
      ]
    },

    // CV
    cv: {
      label: "curriculum vitae",
      title: "Looking for a printable copy?",
      subtitle: "Choose your preferred version — French or English, in high-quality PDF format.",
      tabFr: "🇫🇷 French Version",
      tabEn: "🇬🇧 English Version",
      cardFr: {
        badge: "🇫🇷 French Resume",
        title: "Curriculum Vitae — French",
        desc: "Junior Data Engineer & Full-Stack Developer · A4 PDF · 1 page.",
        details: "Master's in Big Data · Marsa Maroc & Jisr Internships · Oracle Certifications",
        btnDownload: "↓ Télécharger le CV Français (PDF)",
        btnPreview: "👁️ Preview in browser"
      },
      cardEn: {
        badge: "🇬🇧 English Resume",
        title: "Curriculum Vitae — English",
        desc: "Junior Data Engineer & Full-Stack Developer · A4 PDF · 1 page.",
        details: "Master's in Big Data & Data Science · Marsa Maroc & Jisr · Oracle Certifications",
        btnDownload: "↓ Download English Resume (PDF)",
        btnPreview: "👁️ Open in browser"
      }
    },

    // Contact
    contact: {
      label: "contact",
      title: "Let's build something<br>together.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      linkedinLabel: "LinkedIn",
      locationLabel: "Location",
      locationVal: "Casablanca, Morocco",
      btnCopy: "copy",
      btnCopied: "copied!",
      formTitle: "Send me a message 👋",
      reasonLabel: "Reason for contact *",
      reasonPlaceholder: "Select a reason...",
      reasons: {
        cdi: "Full-Time Position",
        stage: "Internship",
        collab: "Collaboration / Freelance",
        feedback: "Feedback"
      },
      nameLabel: "Name *",
      namePlaceholder: "Your name",
      companyLabel: "Company",
      companyPlaceholder: "Your company",
      emailInputLabel: "Email *",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message *",
      messagePlaceholder: "Tell me about your project or opportunity...",
      btnSubmit: "Send message →"
    },

    // Footer
    footer: {
      tagline: "Junior Data Engineer & Full-Stack Developer · Casablanca, Morocco",
      quote: "\"Data doesn't lie — as long as you listen carefully.\"",
      copy: "© 2026 Mohammed Yasser Rachih · Built with ☕ and lots of pipelines"
    }
  }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'fr';

function getTranslation(path, lang = currentLang) {
  const parts = path.split('.');
  let obj = translations[lang];
  for (const part of parts) {
    if (!obj || obj[part] === undefined) return null;
    obj = obj[part];
  }
  return obj;
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  document.documentElement.lang = lang;

  const t = translations[lang];

  // Update page title & meta
  document.title = t.pageTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t.metaDesc);

  // Update toggle buttons active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update text nodes with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = getTranslation(key, lang);
    if (val !== null) {
      el.innerHTML = val;
    }
  });

  // Update attributes: placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = getTranslation(key, lang);
    if (val !== null) el.placeholder = val;
  });

  // Update attributes: aria-label
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const val = getTranslation(key, lang);
    if (val !== null) el.setAttribute('aria-label', val);
  });

  // Update hero CV button text and target
  const heroCvBtn = document.getElementById('hero-cv-btn');
  if (heroCvBtn) {
    heroCvBtn.textContent = lang === 'en' ? 'Resume (EN) ↓' : 'CV (FR) ↓';
    heroCvBtn.href = lang === 'en' ? 'assets/CV_Mohammed_Yasser_Rachih_EN.pdf' : 'assets/CV_Mohammed_Yasser_Rachih_FR.pdf';
    heroCvBtn.setAttribute('aria-label', lang === 'en' ? 'Download English Resume (PDF)' : 'Télécharger le CV Français (PDF)');
  }

  // Update select options in contact form
  const motifSelect = document.getElementById('motif');
  if (motifSelect) {
    const options = motifSelect.options;
    if (options[0]) options[0].text = t.contact.reasonPlaceholder;
    if (options[1]) options[1].text = t.contact.reasons.cdi;
    if (options[2]) options[2].text = t.contact.reasons.stage;
    if (options[3]) options[3].text = t.contact.reasons.collab;
    if (options[4]) options[4].text = t.contact.reasons.feedback;
  }

  // Update pipeline interactive texts
  window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
}

// Attach event listeners to all language switcher buttons
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.dataset.lang;
      if (lang && lang !== currentLang) {
        setLanguage(lang);
      }
    });
  });

  // Apply initial language
  setLanguage(currentLang);
});
