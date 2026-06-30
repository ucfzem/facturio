# Facturio - Session Backup

**Date:** 30 Juin 2026

## Objectif
Créer et déployer Facturio, une app de facturation 1-clic pour freelances marocains (React + Vite + TypeScript).

## Actions réalisées

### Refactoring du code
- Split de `App.tsx` monolithique en composants séparés : `Nav`, `Hero`, `Features`, `CTA`, `Footer`
- Création d'un fichier `types.ts` pour les types partagés
- Mise en forme du code (indentation, espaces)
- Ajout de `.gitignore`

### Configuration
- `vite.config.ts` : `base: '/facturio/'` pour GitHub Pages
- `package.json` : ajout homepage et scripts
- `vercel.json` : SPA rewrites pour Vercel
- Workflow GitHub Actions : déploiement automatique via `actions/deploy-pages`

### Déploiement
- **GitHub** : repo `ucfzem/facturio` créé, code pushé sur `main`
- **GitHub Pages** : activé via API, URL `https://ucfzem.github.io/facturio/`
- **Vercel** : déployé sur `https://frontend-five-ecru-61.vercel.app`
  - _Note : renommer le projet en "facturio" dans le dashboard Vercel_

### Palette
- Dark : `#1A1410` / `#231B15` / or `#C4A030` → `#D4AF37` → `#E8C547`
- Light : `#FBF7F0` / `#F5EDE0` / marron `#2D241C`

### Arborescence
```
facturio/
├── .github/workflows/deploy.yml
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
│       └── components/
│           ├── Nav.tsx
│           ├── Hero.tsx
│           ├── Features.tsx
│           ├── CTA.tsx
│           └── Footer.tsx
```

### Sécurité
- Tokens GitHub et Vercel utilisés en session, retirés des URLs distantes après chaque push
- Bash history effacé après chaque push

## Développement local
```bash
cd frontend && npm install && npm run dev
```
