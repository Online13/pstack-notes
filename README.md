# pstack notes

Guide non officiel pour apprendre [pstack](https://github.com/cursor/plugins/tree/main/pstack), le kit de skills
de Lauren Tan pour livrer du code de qualité avec des agents : des leçons, une carte par situation, et un catalogue
de tous les skills avec le graphe de qui appelle quoi.

## Démarrer

Prérequis : [bun](https://bun.sh) et Node.js 22.23.4 ou plus.

```sh
bun install
bun run dev      # http://localhost:4321
bun run build    # génère ./dist/
bun run check    # vérifie les types
bun run lint     # ESLint (règles de typage strictes)
bun run format   # Prettier
```

En production, définir `SITE_URL` (ex. `SITE_URL=https://example.com bun run build`) pour les URLs canoniques,
Open Graph et le sitemap.

## Déploiement

Le site est servi par un Cloudflare Worker (fichiers statiques de `./dist`, configuration dans `wrangler.jsonc`) :

```sh
bunx wrangler login
SITE_URL=https://ton-domaine bun run deploy
```

## Organisation

Site statique [Astro](https://astro.build). Le code est dans `src/` :

- `pages/` : les routes ;
- `components/` : les composants partagés ;
- `modules/` : une fonctionnalité par dossier (accueil, leçons, use cases, référence, fiche d'un élément) ;
- `services/` : accès aux outils externes (données, traductions, SEO, graphe) ;
- `helpers/` : logique sans outil externe ;
- `types/` : types partagés ;
- `services/content/data/` : le contenu, en YAML.

Les conventions détaillées sont dans [AGENTS.md](./AGENTS.md).

## Contribuer

1. Ouvre une issue pour une erreur de contenu ou une idée, avant tout gros changement.
2. Crée une branche depuis `main`.
3. Avant d'ouvrir la PR, vérifie que `bun run lint`, `bun run check`, `bun run format:check` et `bun run build` passent.
4. Un changement de contenu doit citer sa source : un fichier du dépôt pstack ou un talk.

## Licence

Code sous licence [MIT](./LICENSE). Le contenu résumé ici vient du travail de Lauren Tan sur pstack :
ce site n'est pas affilié à Cursor ni à l'autrice.
