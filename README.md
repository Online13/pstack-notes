# pstack notes

My notes and synthesis of [pstack](https://github.com/cursor/plugins/tree/main/pstack), Lauren Tan's skill kit
for shipping quality code with agents: notes to read in order, one card per situation, and a catalog of every skill
with the graph of what calls what. The home page searches all of it.

## Getting started

Requirements: [bun](https://bun.sh) and Node.js 22.23.4 or later.

```sh
bun install
bun run dev      # http://localhost:4321
bun run build    # builds ./dist/
bun run check    # type checks
bun run lint     # ESLint (strict type-aware rules)
bun run format   # Prettier
```

The site is published at https://pstack-notes.nekena-rayane.com (`site` in `astro.config.mjs`, overridden by `SITE_URL`).

## Deployment

The site is served by a Cloudflare Worker (static files from `./dist`, configuration in `wrangler.jsonc`):

```sh
bunx wrangler login
bun run deploy
```

## Structure

Static [Astro](https://astro.build) site. The code lives in `src/`:

- `pages/`: the routes;
- `components/`: shared components;
- `modules/`: one feature per folder (home search, about, getting started notes, use cases, reference, item details);
- `services/`: access to external tools (data, translations, SEO, graph);
- `helpers/`: logic with no external tool;
- `types/`: shared types;
- `services/content/data/`: the content, in YAML.

Detailed conventions are in [AGENTS.md](./AGENTS.md).

## Contributing

1. Open an issue for a content error or an idea before any large change.
2. Create a branch from `main`.
3. Before opening the PR, check that `bun run lint`, `bun run check`, `bun run format:check` and `bun run build` pass.
4. A content change must cite its source: a file of the pstack repository or a talk.

## License

Code under the [MIT](./LICENSE) license. The content summarized here comes from Lauren Tan's work on pstack:
this site is not affiliated with Cursor or the author.
