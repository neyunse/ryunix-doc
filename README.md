# RyunixJS Documentation

[Español](./README.es.md)

Official documentation site for **RyunixJS**, a modern JavaScript framework for building fast, lightweight static sites and SPAs.

![RyunixJS documentation site homepage](./public/screenshot.png)

## About this project

This repository contains the source code for the RyunixJS docs: guides, API reference, and examples. It is built with RyunixJS itself, using MDX for content and Tailwind CSS for styling.

## Requirements

- [Node.js](https://nodejs.org/) **22** (see `engines` in `package.json`)
- [pnpm](https://pnpm.io/)

## Installation

```bash
git clone <repository-url>
cd ryunix-doc
pnpm install
```

### RyunixJS packages from npm

`@unsetsoft/ryunixjs` and `@unsetsoft/ryunix-presets` are installed from the **npm registry** (latest published releases), not linked to a local monorepo. The docs site uses pnpm; `@unsetsoft/ryunix-presets` must be a release that supports pnpm (currently a canary tag until the next stable). Run `pnpm install` inside `ryunix-doc` only.

To try a local framework checkout instead, temporarily point those dependencies at your `Ryunixjs` packages and reinstall.

## Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Documentation lives at `/en/docs/...` (English) and `/es/docs/...` (Spanish). Visiting `/` redirects to `/en` or your saved locale cookie.

## Available scripts

Scripts defined in `package.json` (Ryunix CLI via `ryunix`):

| Script     | Command         | Description                                         |
| ---------- | --------------- | --------------------------------------------------- |
| `clean`    | `pnpm clean`    | Remove `.ryunix` build cache                        |
| `dev`      | `pnpm dev`      | Development server (`ryunix dev`)                   |
| `build`    | `pnpm build`    | Production build (`ryunix build`)                   |
| `start`    | `pnpm start`    | Production server (`ryunix start`; run after build) |
| `lint`     | `pnpm lint`     | Lint the project (`ryunix lint`)                    |
| `lint:fix` | `pnpm lint:fix` | Auto-fix lint issues (`ryunix lint --fix`)          |
| `typecheck`| `pnpm typecheck`| Type-check `src/**/*.ts` and `ryunix.config.ts`     |

## Project structure

```txt
src/
├── app/                      # Rutas file-based (wrappers finos)
│   ├── [locale]/             # Shell localizado
│   │   └── docs/[...slug]/   # Catch-all MDX
│   └── index.ryx             # Hub de idioma (redirect por cookie)
├── content/docs/             # MDX por locale (en/, es/)
├── components/
├── features/
├── i18n/                     # docPageRegistry, settings, i18n runtime
├── styles/
└── resources/
public/
├── index.html
middleware.js
```

## Configuration

- **`ryunix.config.ts`** — RyunixJS settings (MDX, SSR, webpack aliases, ESLint)
- **`tsconfig.json`** — TypeScript for `src/**/*.ts` and typed `src/**/*.ryx`

### Troubleshooting

If dev shows `Can't resolve '.ryunix/server/app/main.ryx'` (often after changing `rootDir` or moving `app/`), the generated router cache is stale. Regenerate it:

```bash
pnpm clean && pnpm dev
```

> **Warning — `webpack.production`:** During local development (`ryunix dev`), the CLI sets `RYUNIX_MODE=development` so builds stay unminified for faster iteration. For production deploys (Vercel), keep `webpack.production: true` in `ryunix.config.ts`.

Site-wide Open Graph / Twitter images use `public/screenshot.png` via `export const Metatags` in `src/app/layout.ryx` (RyunixJS App Router metadata).
- **`postcss.config.cjs`** + symlink **`postcss.config.js`** — Tailwind/PostCSS (Ryunix webpack `require()`s the `.js` symlink; keep `"type": "module"` in `package.json` for hydration). Do not replace with a plain ESM `export default` file.
- **`vercel.json`** — Vercel deployment (build output: `.ryunix/static`)

## Deployment

The project is configured for [Vercel](https://vercel.com/):

- **Build command:** `pnpm build`
- **Output directory:** `.ryunix/static`

## Contributors

[![Contributors](https://contrib.rocks/image?repo=neyunse/ryunix-doc)](https://github.com/neyunse/ryunix-doc/graphs/contributors)

## License

[MIT](./LICENSE) © [UnSetSoft](https://github.com/UnSetSoft)
