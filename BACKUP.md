# Facturio - Session Backup

**Date:** 30 Juin 2026

## Objectif
Créer et déployer Facturio, une app de facturation 1-clic pour freelances marocains (React + Vite + TypeScript).

## Fonctionnalités
- **Page d'accueil** : carte "Personnalise ton expérience" avec choix langue (FR/EN/ES/AR) + thème (Sombre/Clair)
- **i18n complet** : toutes les traductions FR/EN/ES/AR avec `LangProvider` React
- **RTL** : support arabe avec `dir="rtl"`
- **Landing page** : Hero, Features (6 cartes), CTA, Footer
- **Thème Claude Sonnet** : palette gold (#c9a24b), polices Cinzel (titres) + DM Sans (corps)
- **Boutons interactifs** : Nav "Essai gratuit" → scroll CTA, Hero "Commencer" → scroll Features, cartes → scroll CTA, CTA submit → confirmation "Merci !"

## Actions réalisées

### Session 1 - Setup & Refactoring
- Split de `App.tsx` monolithique en composants : `Nav`, `Hero`, `Features`, `CTA`, `Footer`
- Création de `types.ts` (Theme, Lang, Page)
- Ajout `.gitignore`, `vite.config.ts` avec base dynamique (Vercel vs GitHub Pages)
- `package.json` avec homepage et scripts

### Session 2 - Préférences & Design
- Création composant `Preferences.tsx` avec design élégant (Cinzel, or #c9a24b)
- Variables CSS : `--gold`, `--gold-light`, `--bg-card`, `--muted`
- Palette harmonisée Dark/Light

### Session 3 - i18n
- `frontend/src/i18n/translations.ts` : 4 langues (FR/EN/ES/AR), ~40 clés chacune
- `LangContext.tsx` + `LangProvider.tsx` pour propagation
- `t()` pour texte simple, `tHtml()` pour texte avec `<gradient>` tags
- Tous les composants migrés vers les clés de traduction

### Session 4 - Entry page & Finalisation
- Page d'accueil = carte Préférences (au lieu du ⚙️ dans la nav)
- `localStorage.setItem('configured', 'true')` → retour direct au site
- Nav simplifiée sans bouton ⚙️

### Déploiement
- **GitHub** : repo `ucfzem/facturio`, push sur `main`
- **GitHub Pages** : activé via API, workflow Actions
- **Vercel** : déploiement manuel avec token

### Palette finale
| Rôle | Dark | Light |
|------|------|-------|
| Fond page | `#1a1410` | `#f3ead9` |
| Fond carte | `#241b14` | `#fffaf0` |
| Texte | `#f3e9d2` | `#2b2014` |
| Muet | `#9c8c6f` | `#7a6a52` |
| Bordure | `#3a2e20` | `#ddc9a3` |
| Or | `#c9a24b` | `#c9a24b` |
| Or clair | `#e8cd86` | `#e8cd86` |

### Polices
- Titres (h1-h6) : **Cinzel** (Google Fonts)
- Corps : **DM Sans** (Google Fonts)

### Arborescence finale
```
facturio/
├── .github/workflows/deploy.yml
├── .gitignore
├── BACKUP.md
├── README.md
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vercel.json
│   ├── vite.config.ts
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── style.css
│       ├── types.ts
│       ├── i18n/
│       │   ├── LangContext.tsx
│       │   ├── LangProvider.tsx
│       │   └── translations.ts
│       └── components/
│           ├── Nav.tsx
│           ├── Hero.tsx
│           ├── Features.tsx
│           ├── CTA.tsx
│           ├── Footer.tsx
│           └── Preferences.tsx
```

### Sécurité
- Tokens GitHub et Vercel utilisés en session, retirés des URLs distantes après chaque push
- Bash history effacé après chaque push

## Développement local
```bash
cd frontend && npm install && npm run dev
```

## Liens
- **GitHub** : https://github.com/ucfzem/facturio
- **GitHub Pages** : https://ucfzem.github.io/facturio
- **Vercel** : https://frontend-five-ecru-61.vercel.app
