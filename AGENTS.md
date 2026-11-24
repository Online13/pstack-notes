# pstack notes

Personal notes and synthesis of pstack, Lauren Tan's skill kit for shipping quality code with agents. Not a guide
or a course: the site summarizes her repository and talks into notes to read in order (Getting started, stored as
"lessons" in the code), one card per situation (Use cases), and a catalog of every skill, playbook, agent and
principle with its call graph (API reference). The home page is a search over all of it; the About page holds the
why, the talk's ideas and the sources. Nothing is made up: every item points to a file of the pstack repository or
to a source.

Static Astro site, all content rendered at build time; the browser only runs small interaction helpers.
Package manager: bun.

## Development

- Start the dev server with `astro dev --background`; manage it with `astro dev stop|status|logs`.
- Before reporting a change as done, all of these must pass with no error: `bun run lint`, `bun run check`,
  `bun run format:check`, `bun run build`. Run `bun run format` to format (Prettier: tabs, width 3).
- The public URL is https://pstack-notes.nekena-rayane.com (`site` in `astro.config.mjs`; the `SITE_URL` env var
  overrides it). Canonical URLs, Open Graph and the sitemap are built from it.
- TypeScript stays on 6.x: `astro check` does not support TypeScript 7 yet.
- Deployment: Cloudflare Worker serving `./dist` as static assets (`wrangler.jsonc`, no Worker code). `bun run deploy`
  builds and deploys; `bun run preview:worker` serves the build locally the way Cloudflare does.

## Structure

```text
src/
├── pages/index.astro     root: redirects to the visitor's language (picked language, then browser, then English)
├── pages/[lang]/         routes only (/fr/, /en/, /es/); each page renders a module's page component
│   └── items/[id].astro  HTML partials loaded into the item details panel
├── components/           shared components, atomic design
│   ├── atoms/  molecules/  organisms/
│   └── templates/        BaseLayout
├── helpers/              project logic with no external tool: DOM, assertions, call trees, Markdown, UI behaviour
├── services/             wrappers around external tools, one folder per service
│   ├── content/          content collections (astro:content, YAML in data/) and the functions that query them
│   ├── i18n/             languages, URLs, translation, shared strings, dictionaries
│   ├── seo/              title, meta, Open Graph, Twitter card, hreflang, JSON-LD, robots.txt
│   ├── graph/ (d3)  clipboard/ (navigator.clipboard)  storage/ (localStorage)
├── types/                types shared across the app, one file per category (i18n, content, seo, graph, ui)
├── modules/              features: home, about, lessons, use-cases, reference, item
│   └── <module>/         components/ helpers/ services/ assets/ messages.ts type.ts (same layout as src/)
├── assets/styles/        shared CSS (tokens, base, layout, components, lightbox)
└── content.config.ts     required by Astro; only re-exports services/content/collections.ts
```

### Rules

- **Shared vs module.** `components/`, `helpers/` and `assets/` hold only what several modules use. Anything specific to a feature lives in that module.
- **No barrel files.** Never add an `index.ts` that re-exports a folder. Import each file directly where it is needed.
- **Services vs helpers.** A service wraps an external tool or system (Astro content collections, d3, the clipboard,
  localStorage, i18n, SEO tags) so it can be swapped. Logic that needs no external tool (formatting, transforming,
  call tree walks, DOM lookups) is a helper. Components and helpers never import `astro:content`, `d3-*` or
  `localStorage` directly. One exception: the inline theme script in `BaseLayout` reads `localStorage` itself,
  because it must run before the first paint.
- **Data only through the content service.** Call `services/content/*` functions (`getItem`, `listItems`, `callersOf`, `stepsOf`, `listUseCaseGroups`, `listLessons`…). They return data already localized. To change the data source, only this service changes.
- **Helpers, not hooks.** This is Astro, not React. Client code lives in `helpers/` and exports `initX()` functions that the component's `<script>` calls. No side effects at import time.
- **SEO.** Layouts call `getPageSeo()` (services/seo) and render what it returns. Pages pass a title without the site name.
- **Opening an item.** Any element with `data-open="<id>"` opens the item panel. Modules use this attribute instead of importing the `item` module. Pages that can open items put `<ItemModal slot="overlays" />` in `BaseLayout`.
- **CSS order.** A module page imports `BaseLayout` first, then its own stylesheet, so module CSS comes after shared CSS in the cascade.
- **Types apart from logic.** A type used by more than one file goes in a type file: app-wide types in `src/types/<category>.ts`,
  module types in `modules/<module>/type.ts`. Type files only import other types, so tests can import them without
  loading services. Props interfaces and types used by a single file stay where they are used.
- **Strict typing.** `bun run lint` runs type-aware rules (typescript-eslint strict). No `any`, no `as` casts (`as const`
  is fine), no non-null `!`: narrow with checks instead (`helpers/assert.ts`, `helpers/dom.ts`, type guards for JSON).
  `noUncheckedIndexedAccess` is on: type fixed-length lists as tuples (`satisfies`). A cast is acceptable only inside a
  very generic function, with an `eslint-disable` comment saying why (e.g. `deriveEs`).
- **Look.** Content sits on flat grey wells (`--well`, `--well-2` for hover or nesting) instead of bordered cards;
  controls are grey pills. Labels are in sentence case, never uppercase. Text in a kind color on a tint or a well uses
  the darker `--k-*-ink` tokens so it passes contrast. Page titles use `.sec-intro` (same size on every page).
- **Strings.** Interface strings go in `messages.ts` with `defineMessages({ fr, en, es? })`: shared ones in `services/i18n/messages.ts`, module ones in `modules/<module>/messages.ts`.

## Content

- Data lives in YAML files in `src/services/content/data/`, validated by the zod schemas in `services/content/collections.ts`.
- Astro returns collection entries sorted by id. Ordered lists get an `order` field from their position in the file (`orderedList` loader), and the service reads them with `getOrdered`. The order in the YAML file is the display order: never sort them by hand.
- A call tree node is either `ref: <catalog id>` or `text: <French phrase>`, with optional `cond:` and `kids:`. The build fails on an unknown `ref` or an unknown use case group.
- A use case is a list of `blocks`. Each block is one thing the reader types on its own: `ref:` (the item), `prompt:`
  (exactly one command, taken from the pstack README or docs/guide), `note:` (what it is for, `{ fr, en }`) and
  `via: poteto-mode` when the command goes through the router. A block with `text:` and `kids:` is a plain step.

## Translations

- Content is written in French with English next to it (`{ fr, en }`). A plain string is the same in every language.
- Call tree phrases are French and translated through `services/i18n/dictionaries/fr-en.ts`.
- Spanish is never written by hand in the content: it is the English text looked up in `dictionaries/en-es.ts`. When you add or change an English string, add its Spanish entry there.
- Every page is under its language (`/fr/`, `/en/`, `/es/`). The root `/` redirects: language picked in the menu,
  else the browser's language, else English (`FALLBACK_LANG`).
- localStorage keys: `pd-theme` (theme), `pd-lang` (language picked in the menu), `pd-cases` (open use cases).
