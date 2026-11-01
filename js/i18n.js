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
      btnCv: "CV",
      avatarLabel: "yasser · casablanca"
    },

    // Pipeline
    pipeline: {
      label: "comment je travaille",
      title: "Mon pipeline<br>de bout en bout.",
      statusIdle: "inactif · 0/5 étapes",
      statusRunning: "en cours · {n}/5 étapes",
      statusDone: "terminé · 5/5 étapes",
      statusPaused: "en pause · {n}/5 étapes",
      btnRun: "lancer le pipeline",
      btnStop: "arrêter",
      btnRerun: "relancer le pipeline",
      placeholder: "Cliquez sur une étape pour en savoir plus, ou lancez le pipeline complet.",
      steps: [
        { name: "Sources", desc: "Collecte des données brutes" },
        { name: "Ingestion", desc: "ETL / ELT vers les couches de données" },
        { name: "Transformation", desc: "Nettoyage, qualité, fiabilité" },
        { name: "Déploiement", desc: "Conteneurisation, CI/CD, orchestration" },
        { name: "Monitoring", desc: "Suivi et détection des problèmes" }
      ],
      details: [
        {
          title: "Sources — Collecte des données",
          items: [
            "Identification et connexion aux sources (BDD SQL, APIs, fichiers, flux streaming)",
            "Mise en place de connecteurs fiables et reproductibles",
            "Gestion des schémas et versionning des données entrantes",
            "Validation initiale du volume et de la cohérence"
          ]
        },
        {
          title: "Ingestion — ETL / ELT",
          items: [
            "Conception de pipelines ETL/ELT pour charger les données vers les couches cibles",
            "Orchestration des flux de chargement (incrémental ou full-load)",
            "Gestion des erreurs, reprises et idempotence des traitements",
            "Documentation des flux de données pour la traçabilité"
          ]
        },
        {
          title: "Transformation — Qualité & Fiabilité",
          items: [
            "Nettoyage et normalisation des données (déduplication, valeurs manquantes)",
            "Application des règles métier et enrichissement des données",
            "Tests de qualité et contraintes d'intégrité automatisés",
            "Production de données fiables et prêtes à l'analyse"
          ]
        },
        {
          title: "Déploiement — CI/CD & Conteneurisation",
          items: [
            "Conteneurisation des pipelines et applications (Docker)",
            "Mise en place de chaînes CI/CD pour un déploiement automatisé",
            "Orchestration des applications cloud-native",
            "Gestion des environnements (dev / staging / prod)"
          ]
        },
        {
          title: "Monitoring — Suivi en production",
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
      aria: "Expériences professionnelles",
      marsa: {
        date: "Mars – Juil. 2026",
        company: "Marsa Maroc",
        title: "Stage Data Engineering & Développement",
        badge: "en cours · stage",
        badgeAria: "Stage en cours",
        listAria: "Missions chez Marsa Maroc",
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
        listAria: "Missions chez Jisr",
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
      zoomHint: "Cliquez sur le schéma pour l'agrandir",
      list: [
        {
          label: "Streaming Temps Réel",
          name: "Plateforme Data Engineering Temps Réel (Kafka & Spark Streaming)",
          context: "Projet Phare · Big Data Streaming & Architecture Distribuée",
          desc: "Construction d'une plateforme distribuée capable d'ingérer des flux d'événements continus à haut débit avec Apache Kafka, de les traiter en micro-batches avec Spark Structured Streaming et de les persister dans des couches analytiques avec tableaux de bord de monitoring temps réel.",
          features: [
            "Ingestion d'événements en continu via des topics Apache Kafka",
            "Traitement, agrégations fenêtrées et filtrage en continu avec Spark Streaming",
            "Routage automatique des données invalides et gestion de dead-letter queue",
            "Stockage optimisé dans PostgreSQL et Delta sink",
            "Tableaux de bord de surveillance et télémétrie des flux avec Streamlit et Grafana"
          ]
        },
        {
          label: "Pipeline ETL Airflow",
          name: "Pipeline ETL Production-Ready avec Apache Airflow & dbt",
          context: "Projet Phare · Orchestration & Data Warehousing",
          desc: "Automatisation complète d'un pipeline ETL moderne extrayant des données multi-sources (APIs REST, CSV), orchestré par Apache Airflow avec gestion des retries, modélisation et tests de qualité stricts via dbt, et chargement vers un Data Warehouse d'entreprise.",
          features: [
            "Extraction automatisée depuis des APIs REST et des fichiers CSV par lots",
            "Orchestration et planification robuste avec Apache Airflow (DAGs idempotents)",
            "Transformation, nettoyage et tests de qualité stricts avec dbt",
            "Gestion automatique des erreurs, alertes Slack et reprises sur incident",
            "Chargement structuré vers Data Warehouse (Snowflake / PostgreSQL)"
          ]
        },
        {
          label: "Databricks Lakehouse",
          name: "Data Lakehouse d'Entreprise avec Databricks & Delta Lake",
          context: "Projet Phare · Architecture Médaillon & Unity Catalog",
          desc: "Conception et déploiement d'une architecture Lakehouse d'entreprise appliquant le pattern Médaillon (Bronze, Silver, Gold) sur Databricks avec garanties ACID Delta Lake, gouvernance unifiée via Unity Catalog et détection de transactions suspectes.",
          features: [
            "Ingestion brute des transactions financières à haut débit dans la couche Bronze",
            "Nettoyage, déduplication et détection d'anomalies / fraudes dans la couche Silver",
            "Agrégations d'indicateurs clés métier et data marts analytiques dans la couche Gold",
            "Gouvernance des données, lignage et contrôle d'accès centralisés avec Unity Catalog",
            "Optimisation des requêtes (Z-Ordering) et time-travel Delta Lake"
          ]
        },
        {
          label: "Morocco DataHub",
          name: "Morocco DataHub — Plateforme API Unifiée des Données Marocaines",
          context: "Projet Phare · DataTech & APIs Open Data Nationales",
          desc: "Projet DataTech d'envergure visant à centraliser, traiter, standardiser et distribuer les jeux de données publics marocains (HCP, Open Data, Bank Al-Maghrib) via des pipelines ETL automatisés et une suite d'APIs REST modernes avec FastAPI.",
          features: [
            "Ingestion automatisée depuis les sources officielles marocaines (HCP, data.gov.ma, etc.)",
            "Pipelines automatisés de nettoyage, standardisation et contrôle de qualité",
            "Modélisation relationnelle structurée et persistance dans PostgreSQL",
            "Endpoints REST sécurisés, ultra-rapides et documentés OpenAPI avec FastAPI",
            "Mise à disposition pour développeurs, chercheurs et entreprises de données marocaines fiables"
          ]
        },
        {
          label: "Bibliothèque microservices",
          name: "Système de Gestion de Bibliothèque en Microservices",
          context: "FSBM · Casablanca · Projet académique",
          desc: "Conception et développement d'une application de gestion de bibliothèque avec une interface intuitive et une architecture facilitant la maintenance et l'évolutivité du système. Conçue en microservices pour garantir scalabilité et indépendance.",
          features: [
            "Découpage en microservices indépendants (catalogue, emprunts, utilisateurs)",
            "API Gateway et découverte de services via l'écosystème Spring Cloud",
            "Conteneurisation complète avec Docker et persistance PostgreSQL",
            "Communication sécurisée et endpoints REST documentés"
          ]
        },
        {
          label: "Documents administratifs",
          name: "Système de Gestion et de Vérification des Documents Administratifs",
          context: "FSBM · Casablanca · Projet académique",
          desc: "Solution web permettant aux citoyens et administrations de soumettre, consulter et vérifier des documents administratifs de manière sécurisée et transparente, avec suivi en temps réel de l'état d'avancement.",
          features: [
            "Soumission et vérification sécurisées des dossiers administratifs",
            "Authentification robuste et contrôle d'accès basé sur les rôles (JWT)",
            "Suivi de statut en temps réel et journal d'audit transparent",
            "Frontend réactif en Angular et backend Java Spring Boot"
          ]
        },
        {
          label: "Maintenance prédictive",
          name: "Plateforme de Données pour la Maintenance Prédictive",
          context: "FSBM · Casablanca · Projet académique",
          desc: "Conception d'une solution collectant et centralisant les données d'équipements industriels pour surveiller leur état, détecter les anomalies et anticiper les pannes grâce au streaming temps réel.",
          features: [
            "Ingestion et centralisation des métriques de capteurs IoT industriels",
            "Détection d'anomalies en temps réel sur les vibrations et températures",
            "Stockage de séries temporelles optimisé avec InfluxDB",
            "Déclencheurs d'alertes automatisées et tableaux de bord Grafana en direct"
          ]
        },
        {
          label: "Transactions bancaires",
          name: "Système de Traitement et d'Analyse de Transactions Bancaires",
          context: "FSBM · Casablanca · Projet académique",
          desc: "Solution centralisant et traitant les flux de transactions financières afin de suivre les opérations, détecter les comportements inhabituels et produire des indicateurs clés d'aide à la décision.",
          features: [
            "Pipeline de traitement de données transactionnelles à haut débit",
            "Détection basée sur des règles pour repérer les activités bancaires inhabituelles",
            "Agrégation d'indicateurs opérationnels et reporting financier réglementaire",
            "Génération automatisée de rapports d'analyse et tableaux de bord décisionnels"
          ]
        }
      ]
    },

    // Skills
    skills: {
      label: "compétences",
      title: "Ma boîte à outils.",
      intro: "Architecture data, modélisation SQL, transformations et infrastructure cloud — visualisés sous forme de réservoirs de stockage de données.",
      filters: {
        all: "Tous (16)",
        data: "Data Engineering",
        dev: "Développement & BDD",
        cloud: "Cloud & DevOps"
      },
      legendExpert: "Expert (~90%)",
      legendAdvanced: "Avancé (~80%)",
      legendIntermediate: "Intermédiaire (~65%)",
      levels: {
        expert: "expert",
        advanced: "avancé",
        intermediate: "intermédiaire"
      },
      items: {
        sql: {
          title: "SQL",
          level: "expert",
          tags: "query tuning · stored procs · modélisation",
          tooltip: "Niveau Expert (90%) : requêtes complexes, CTEs, fenêtrage, indexation et optimisation"
        },
        snowflake: {
          title: "Snowflake",
          level: "expert",
          tags: "star schema · SCD · data warehouse",
          tooltip: "Niveau Expert (88%) : architecture cloud, virtual warehouses, Time Travel, modélisation dimensionnelle"
        },
        python: {
          title: "Python",
          level: "avancé",
          tags: "PySpark · data processing · OOP",
          tooltip: "Niveau Avancé (85%) : traitement de données, POO, scripts et intégration PySpark"
        },
        etl: {
          title: "Pipelines ETL / ELT",
          level: "avancé",
          tags: "ingestion · transformation · flux",
          tooltip: "Niveau Avancé (82%) : pipelines robustes, incrémentaux, idempotence et automatisation"
        },
        adf: {
          title: "Azure Data Factory",
          level: "avancé",
          tags: "ETL · pipelines · triggers",
          tooltip: "Niveau Avancé (80%) : orchestration de flux cloud, copy activities, linked services"
        },
        dbt: {
          title: "dbt",
          level: "avancé",
          tags: "transformations · SQL · lineage",
          tooltip: "Niveau Avancé (78%) : modélisation analytique, tests automatisés et traçabilité"
        },
        powerbi: {
          title: "Power BI",
          level: "avancé",
          tags: "dashboards · DAX · datamarts",
          tooltip: "Niveau Avancé (78%) : modélisation relationnelle, mesures DAX et reporting interactif"
        },
        spark: {
          title: "Spark / Databricks",
          level: "intermédiaire",
          tags: "PySpark · big data · clusters",
          tooltip: "Niveau Intermédiaire (65%) : calcul distribué, DataFrames PySpark et jobs Big Data"
        },
        dbms: {
          title: "MySQL · PostgreSQL",
          level: "expert",
          tags: "ACID · indexation · réplication",
          tooltip: "Niveau Expert (90%) : certifié Oracle MySQL 8.0 OCP, administration et transactions ACID"
        },
        java: {
          title: "Java (Spring Boot)",
          level: "avancé",
          tags: "Spring Boot · APIs REST · JPA",
          tooltip: "Niveau Avancé (82%) : certifié Oracle Java SE 17 OCP, microservices et POO avancée"
        },
        microservices: {
          title: "APIs & Microservices",
          level: "avancé",
          tags: "REST APIs · DTOs · distribution",
          tooltip: "Niveau Avancé (80%) : conception d'APIs REST modulaires, découplage et sécurité"
        },
        docker: {
          title: "Docker",
          level: "intermédiaire",
          tags: "conteneurisation · Dockerfile · compose",
          tooltip: "Niveau Intermédiaire (68%) : création d'images, Docker Compose et isolation d'environnements"
        },
        cloud: {
          title: "Microsoft Azure & OCI",
          level: "intermédiaire",
          tags: "OCI DevOps · Azure ADLS · compute",
          tooltip: "Niveau Intermédiaire (68%) : certifié OCI 2025 DevOps Professional, services cloud Azure & OCI"
        },
        git: {
          title: "Git & Versioning",
          level: "avancé",
          tags: "branches · pull requests · workflows",
          tooltip: "Niveau Avancé (85%) : gestion de branches, revues de code, rebase et collaboration GitHub"
        },
        cicd: {
          title: "Automatisation CI/CD",
          level: "intermédiaire",
          tags: "GitHub Actions · tests · déploiement",
          tooltip: "Niveau Intermédiaire (65%) : pipelines d'intégration continue, tests automatisés et déploiement"
        },
        quality: {
          title: "Qualité & Monitoring",
          level: "intermédiaire",
          tags: "intégrité flux · métriques · alertes",
          tooltip: "Niveau Intermédiaire (62%) : validation de schémas, détection d'anomalies et observabilité"
        }
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
      langTitle: "Langues",
      softTitle: "Soft skills",
      arabic: { name: "Arabe", level: "Langue maternelle" },
      french: { name: "Français", level: "Courant" },
      english: { name: "Anglais", level: "Intermédiaire" },
      softSkills: [
        "Travail d'équipe",
        "Ponctualité",
        "Proactivité",
        "Gestion du temps",
        "Adaptabilité"
      ]
    },

    // CV
    cv: {
      label: "curriculum vitae",
      title: "Envie de l'avoir sur papier ?",
      subtitle: "Choisissez votre version préférée — Français ou Anglais, au format PDF.",
      tabFr: "Version Française",
      tabEn: "English Version",
      cardFr: {
        badge: "CV Français",
        title: "Curriculum Vitae — Français",
        desc: "Profil Data Engineer Junior & Développeur Full-Stack · Format PDF A4 · 1 page.",
        details: "Formation Master Big Data · Stages Marsa Maroc & Jisr · Certifications Oracle",
        btnDownload: "Télécharger le CV Français (PDF)",
        btnPreview: "Aperçu dans le navigateur"
      },
      cardEn: {
        badge: "English Resume",
        title: "Curriculum Vitae — English",
        desc: "Junior Data Engineer & Full-Stack Developer · Format PDF A4 · 1 page.",
        details: "Master's in Data Science & Big Data · Marsa Maroc & Jisr · Oracle Certifications",
        btnDownload: "Download English Resume (PDF)",
        btnPreview: "Open in browser"
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
      formTitle: "Envoyez-moi un message",
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
      copy: "© 2026 Mohammed Yasser Rachih · Fait avec passion et beaucoup de pipelines"
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
      btnCv: "CV",
      avatarLabel: "yasser · casablanca"
    },

    // Pipeline
    pipeline: {
      label: "how I work",
      title: "My end-to-end<br>pipeline.",
      statusIdle: "idle · 0/5 steps",
      statusRunning: "running · {n}/5 steps",
      statusDone: "completed · 5/5 steps",
      statusPaused: "paused · {n}/5 steps",
      btnRun: "run pipeline",
      btnStop: "pause",
      btnRerun: "rerun pipeline",
      placeholder: "Click on any step to learn more, or trigger the full pipeline.",
      steps: [
        { name: "Sources", desc: "Raw data collection & connectors" },
        { name: "Ingestion", desc: "ETL / ELT to target storage layers" },
        { name: "Transformation", desc: "Cleaning, quality, reliability" },
        { name: "Deployment", desc: "Containerization, CI/CD, orchestration" },
        { name: "Monitoring", desc: "Production tracking & issue detection" }
      ],
      details: [
        {
          title: "Sources — Data Collection",
          items: [
            "Identification and connection to diverse sources (SQL databases, APIs, files, streams)",
            "Implementation of reliable, repeatable connectors",
            "Schema management and incoming data versioning",
            "Initial validation of volume, format, and consistency"
          ]
        },
        {
          title: "Ingestion — ETL / ELT",
          items: [
            "Design of robust ETL/ELT pipelines loading data to target layers",
            "Orchestration of ingestion workflows (incremental or full-load)",
            "Error handling, retries, and processing idempotency",
            "Comprehensive data flow documentation for lineage and traceability"
          ]
        },
        {
          title: "Transformation — Quality & Reliability",
          items: [
            "Data cleansing and normalization (deduplication, handling null values)",
            "Business logic application and data enrichment",
            "Automated data quality checks and integrity constraints",
            "Delivery of analysis-ready, high-trust datasets"
          ]
        },
        {
          title: "Deployment — CI/CD & Containerization",
          items: [
            "Containerization of data pipelines and services (Docker)",
            "CI/CD automation pipelines for reliable, automated deployment",
            "Orchestration of cloud-native applications",
            "Environment separation and configuration management (dev / staging / prod)"
          ]
        },
        {
          title: "Monitoring — Production Observability",
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
      aria: "Professional experience",
      marsa: {
        date: "Mar – Jul 2026",
        company: "Marsa Maroc",
        title: "Internship – Data Engineering & Development",
        badge: "current · internship",
        badgeAria: "Current internship",
        listAria: "Missions at Marsa Maroc",
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
        listAria: "Missions at Jisr",
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
      zoomHint: "Click diagram to expand",
      list: [
        {
          label: "Real-Time Streaming",
          name: "Real-Time Data Engineering Platform (Kafka & Spark Streaming)",
          context: "Flagship Project · Big Data Streaming & Distributed Architecture",
          desc: "Building a distributed event-driven platform capable of ingesting high-throughput real-time streams with Apache Kafka, processing and aggregating them in micro-batches with Spark Structured Streaming, and storing them for live analytics and dashboarding.",
          features: [
            "Continuous live event ingestion via Apache Kafka topics",
            "Real-time processing, windowed aggregations, and filtering with Spark Streaming",
            "Automated invalid data routing and dead-letter queue handling",
            "Optimized persistent sink into PostgreSQL and Delta Lake",
            "Live stream health and telemetry monitoring dashboards with Streamlit & Grafana"
          ]
        },
        {
          label: "Airflow ETL Pipeline",
          name: "Production-Ready ETL Pipeline with Apache Airflow & dbt",
          context: "Flagship Project · Orchestration & Data Warehousing",
          desc: "End-to-end automation of a modern ETL data pipeline extracting multi-source datasets (REST APIs, CSV files), orchestrated by Apache Airflow with automatic retries, transformed and quality-tested using dbt, and loaded into an enterprise Data Warehouse.",
          features: [
            "Automated extraction from REST APIs and batch CSV files",
            "Robust dependency orchestration and scheduling using Apache Airflow DAGs",
            "Data transformation, cleaning, and dimensional modeling with dbt",
            "Automated retries, error recovery, and Slack alert notifications",
            "Structured loading into Data Warehouse (Snowflake / PostgreSQL)"
          ]
        },
        {
          label: "Databricks Lakehouse",
          name: "Enterprise Data Lakehouse with Databricks & Delta Lake",
          context: "Flagship Project · Medallion Architecture & Unity Catalog",
          desc: "Design and deployment of an enterprise Lakehouse platform implementing the Medallion architecture (Bronze, Silver, Gold) on Databricks with ACID compliance on Delta Lake, centralized Unity Catalog governance, and suspicious transaction detection.",
          features: [
            "Raw ingestion of high-volume transactional data into the Bronze layer",
            "Cleansing, deduplication, and anomaly/fraud detection in the Silver layer",
            "Business KPI aggregations and analytical data marts in the Gold layer",
            "Centralized data governance, lineage tracking, and access control with Unity Catalog",
            "Query performance optimization (Z-Ordering) and Delta Lake time-travel"
          ]
        },
        {
          label: "Morocco DataHub",
          name: "Morocco DataHub — Unified Moroccan Data API Platform",
          context: "Flagship Project · DataTech & National Open Data APIs",
          desc: "An ambitious DataTech project aimed at centralizing, processing, standardizing, and distributing Moroccan public datasets (HCP, Open Data, Bank Al-Maghrib) through automated ETL pipelines and a unified, modern FastAPI REST suite.",
          features: [
            "Automated ingestion from official Moroccan sources (HCP, data.gov.ma, etc.)",
            "Automated pipelines for data cleansing, standardization, and quality validation",
            "Structured relational modeling and persistence in PostgreSQL",
            "Secure, high-performance, and OpenAPI-documented REST endpoints with FastAPI",
            "Empowering developers, researchers, and enterprises with structured Moroccan data"
          ]
        },
        {
          label: "Microservices Library",
          name: "Library management system built on microservices",
          context: "FSBM · Casablanca · Academic Project",
          desc: "Designed and developed a library management application with a user-friendly interface and an architecture that eases maintenance and system evolution. Built on microservices to ensure scalability and component independence.",
          features: [
            "Decoupled independent microservices (Catalog, Borrowing, User Management)",
            "API Gateway and service discovery powered by Spring Cloud ecosystem",
            "Full containerization with Docker and PostgreSQL database persistence",
            "Secure communication and documented REST endpoints"
          ]
        },
        {
          label: "Administrative Documents",
          name: "Administrative document management and verification system",
          context: "FSBM · Casablanca · Academic Project",
          desc: "Web solution allowing citizens and administrations to submit, view and verify administrative documents in a secure and transparent way, with an intuitive interface for document management and real-time status tracking.",
          features: [
            "Secure submission and verification of administrative records",
            "Robust authentication and role-based access control (JWT)",
            "Real-time status tracking and transparent audit trail",
            "Responsive frontend built with Angular and Java Spring Boot backend"
          ]
        },
        {
          label: "Predictive Maintenance",
          name: "Data platform for predictive maintenance",
          context: "FSBM · Casablanca · Academic Project",
          desc: "Designed a solution that collects and centralizes data from industrial equipment in order to monitor its condition, detect anomalies and anticipate maintenance needs using real-time streaming data.",
          features: [
            "Ingestion and centralization of industrial IoT sensor metrics",
            "Real-time vibration and temperature anomaly detection",
            "Optimized time-series storage with InfluxDB",
            "Automated alerting triggers and live Grafana monitoring dashboards"
          ]
        },
        {
          label: "Banking Transactions",
          name: "Banking transaction processing and analysis system",
          context: "FSBM · Casablanca · Academic Project",
          desc: "Solution that centralizes and processes financial transactions to track operations, detect unusual behavior and produce key indicators for decision support and activity analytics.",
          features: [
            "High-throughput transactional data processing pipeline",
            "Rule-based detection for unusual or high-risk banking activity",
            "Aggregated operational indicators and regulatory financial reporting",
            "Automated analytics reporting and decision-making dashboards"
          ]
        }
      ]
    },

    // Skills
    skills: {
      label: "skills",
      title: "My technical toolbox.",
      intro: "Data architecture, SQL modeling, transformations, and cloud infrastructure — visualized as data storage reservoir cylinders.",
      filters: {
        all: "All (16)",
        data: "Data Engineering",
        dev: "Development & DB",
        cloud: "Cloud & DevOps"
      },
      legendExpert: "Expert (~90%)",
      legendAdvanced: "Advanced (~80%)",
      legendIntermediate: "Intermediate (~65%)",
      levels: {
        expert: "expert",
        advanced: "advanced",
        intermediate: "intermediate"
      },
      items: {
        sql: {
          title: "SQL",
          level: "expert",
          tags: "query tuning · stored procs · modeling",
          tooltip: "Expert level (90%): complex queries, CTEs, window functions, indexing and optimization"
        },
        snowflake: {
          title: "Snowflake",
          level: "expert",
          tags: "star schema · SCD · data warehouse",
          tooltip: "Expert level (88%): cloud architecture, virtual warehouses, Time Travel, dimensional modeling"
        },
        python: {
          title: "Python",
          level: "advanced",
          tags: "PySpark · data processing · OOP",
          tooltip: "Advanced level (85%): data wrangling, OOP, automation scripts and PySpark integration"
        },
        etl: {
          title: "ETL / ELT Pipelines",
          level: "advanced",
          tags: "ingestion · transformation · streams",
          tooltip: "Advanced level (82%): robust pipelines, incremental loads, idempotency and monitoring"
        },
        adf: {
          title: "Azure Data Factory",
          level: "advanced",
          tags: "ETL · pipelines · triggers",
          tooltip: "Advanced level (80%): cloud pipeline orchestration, copy activities, linked services"
        },
        dbt: {
          title: "dbt",
          level: "advanced",
          tags: "transformations · SQL · lineage",
          tooltip: "Advanced level (78%): analytical modeling, automated testing and data lineage"
        },
        powerbi: {
          title: "Power BI",
          level: "advanced",
          tags: "dashboards · DAX · datamarts",
          tooltip: "Advanced level (78%): tabular modeling, complex DAX formulas and interactive reporting"
        },
        spark: {
          title: "Spark / Databricks",
          level: "intermediate",
          tags: "PySpark · big data · clusters",
          tooltip: "Intermediate level (65%): distributed computing, PySpark DataFrames and Big Data workloads"
        },
        dbms: {
          title: "MySQL · PostgreSQL",
          level: "expert",
          tags: "ACID · indexing · replication",
          tooltip: "Expert level (90%): Oracle MySQL 8.0 OCP certified, database administration and ACID transactions"
        },
        java: {
          title: "Java (Spring Boot)",
          level: "advanced",
          tags: "Spring Boot · REST APIs · JPA",
          tooltip: "Advanced level (82%): Oracle Java SE 17 OCP certified, microservices architecture and advanced OOP"
        },
        microservices: {
          title: "APIs & Microservices",
          level: "advanced",
          tags: "REST APIs · DTOs · distribution",
          tooltip: "Advanced level (80%): modular REST API design, decoupling and security best practices"
        },
        docker: {
          title: "Docker",
          level: "intermediate",
          tags: "containerization · Dockerfile · compose",
          tooltip: "Intermediate level (68%): image building, multi-stage builds, Docker Compose and environment isolation"
        },
        cloud: {
          title: "Microsoft Azure & OCI",
          level: "intermediate",
          tags: "OCI DevOps · Azure ADLS · compute",
          tooltip: "Intermediate level (68%): OCI 2025 DevOps Professional certified, Azure & OCI cloud infrastructure"
        },
        git: {
          title: "Git & Versioning",
          level: "advanced",
          tags: "branches · pull requests · workflows",
          tooltip: "Advanced level (85%): branch management, code reviews, rebasing and GitHub collaboration"
        },
        cicd: {
          title: "CI/CD Automation",
          level: "intermediate",
          tags: "GitHub Actions · testing · deployment",
          tooltip: "Intermediate level (65%): continuous integration pipelines, automated tests and automated deployment"
        },
        quality: {
          title: "Quality & Monitoring",
          level: "intermediate",
          tags: "stream integrity · metrics · alerts",
          tooltip: "Intermediate level (62%): schema validation, proactive anomaly detection and observability"
        }
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
      langTitle: "Languages",
      softTitle: "Soft Skills",
      arabic: { name: "Arabic", level: "Native" },
      french: { name: "French", level: "Fluent" },
      english: { name: "English", level: "Intermediate" },
      softSkills: [
        "Teamwork",
        "Punctuality",
        "Proactivity",
        "Time management",
        "Adaptability"
      ]
    },

    // CV
    cv: {
      label: "curriculum vitae",
      title: "Looking for a printable copy?",
      subtitle: "Choose your preferred version — French or English, in high-quality PDF format.",
      tabFr: "French Version",
      tabEn: "English Version",
      cardFr: {
        badge: "French Resume",
        title: "Curriculum Vitae — French",
        desc: "Junior Data Engineer & Full-Stack Developer · A4 PDF · 1 page.",
        details: "Master's in Big Data · Marsa Maroc & Jisr Internships · Oracle Certifications",
        btnDownload: "Download French Resume (PDF)",
        btnPreview: "Preview in browser"
      },
      cardEn: {
        badge: "English Resume",
        title: "Curriculum Vitae — English",
        desc: "Junior Data Engineer & Full-Stack Developer · A4 PDF · 1 page.",
        details: "Master's in Big Data & Data Science · Marsa Maroc & Jisr · Oracle Certifications",
        btnDownload: "Download English Resume (PDF)",
        btnPreview: "Open in browser"
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
      formTitle: "Send me a message",
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
      copy: "© 2026 Mohammed Yasser Rachih · Built with passion and lots of pipelines"
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
  const heroCvText = document.getElementById('hero-cv-btn-text');
  if (heroCvBtn) {
    if (heroCvText) {
      heroCvText.textContent = 'CV';
    } else {
      heroCvBtn.textContent = 'CV';
    }
    heroCvBtn.href = '#cv';
    heroCvBtn.setAttribute('aria-label', lang === 'en' ? 'View and choose CV version' : 'Consulter et choisir la version du CV');
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
