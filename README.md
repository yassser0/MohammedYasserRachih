# Mohammed Yasser Rachih — Portfolio

> Data Engineer Junior & Developpeur Full-Stack · Casablanca, Maroc

Site portfolio single-page inspire du style sketch/blueprint du site riyasinghh19.github.io/Profile_resume/

---

## Structure du projet

`
MohammedYasserRachih/
  index.html          # Page principale (single-page)
  css/
    style.css         # Feuille de style principale
  js/
    main.js           # Logique interactive (terminal, pipeline, projets, skills...)
  assets/
    favicon.svg       # Icone du site
    CV_Mohammed_Yasser_Rachih.pdf   # Votre CV (a ajouter manuellement)
  README.md           # Ce fichier
`

---

## Lancer en local

1. Cloner ou telecharger le depot :
   `ash
   git clone https://github.com/VOTRE_USERNAME/portfolio.git
   cd portfolio
   `

2. Ouvrir directement dans le navigateur (pas besoin de serveur) :
   - Double-cliquer sur index.html
   - OU utiliser un serveur local (recommande pour eviter les restrictions CORS) :
     `ash
     # Avec Python
     python -m http.server 3000
     # Puis ouvrir http://localhost:3000
     
     # Avec Node.js (npx)
     npx serve .
     # Puis ouvrir http://localhost:3000
     `

---

## Ajouter votre CV

Placez votre fichier CV dans le dossier ssets/ avec exactement ce nom :
`
assets/CV_Mohammed_Yasser_Rachih.pdf
`

---

## Deployer sur GitHub Pages

1. Creer un depot GitHub nomme username.github.io (remplacez username par votre identifiant)
2. Pousser le code :
   `ash
   git init
   git add .
   git commit -m "feat: portfolio initial"
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   `
3. Activer GitHub Pages dans Settings > Pages > Source : main / / (root)
4. Votre site sera disponible sur https://username.github.io/

---

## Personnaliser

- **Formspree** : Creez un compte sur formspree.io et remplacez l'action du formulaire de contact dans index.html (ction="https://formspree.io/f/VOTRE_ID")
- **LinkedIn** : Verifiez l'URL de profil dans la section contact
- **Couleurs** : Modifiez les variables CSS dans :root de css/style.css

---

## Technologies utilisees

- **HTML5** — Semantique, accessible (ARIA)
- **CSS3 Vanilla** — Variables CSS, Grid, Flexbox, animations
- **JavaScript Vanilla** — Sans framework, ES2020+
- **Google Fonts** — Caveat (manuscrit), Inter (sans-serif), JetBrains Mono
- **Formspree** — Backend formulaire de contact (sans serveur)

---

*Site concu pour un score Lighthouse > 90 en performance, accessibilite et SEO.*
