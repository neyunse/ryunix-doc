# RyunixJS Documentation

[Español](./README.es.md)

Official documentation site for **RyunixJS**, a modern JavaScript framework for building fast, lightweight static sites and SPAs.

![RyunixJS documentation site homepage](./public/screenshot.png)

## About this project

This repository contains the source code for the RyunixJS docs: guides, API reference, and examples. It is built with RyunixJS itself, using MDX for content and Tailwind CSS for styling.

## Requirements

- [Node.js](https://nodejs.org/) **20**, **22** or **24** (see `engines` in `package.json`)
- [pnpm](https://pnpm.io/)

## Installation

```bash
git clone <repository-url>
cd ryunix-doc
pnpm install
```

### Local link to the RyunixJS monorepo

When this repo sits next to [`Ryunixjs`](https://github.com/UnSetSoft/Ryunixjs) (e.g. `ryx/ryunix-doc` + `ryx/Ryunixjs`), `package.json` uses `workspace:*` for `@unsetsoft/ryunixjs` and `@unsetsoft/ryunix-presets`. Install from the **monorepo root**, not only inside `ryunix-doc`:

```bash
cd ../Ryunixjs
pnpm install
pnpm run build:core
pnpm run dev:doc
```

Or from `ryunix-doc` after a root install: `pnpm dev`.

For **Vercel** or a standalone clone without the monorepo, replace `workspace:*` with published canary versions from npm before `pnpm install`.

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
├── app/                # File-based routes only (thin wrappers)
│   ├── en/docs/        # English MDX pages
│   ├── es/docs/        # Spanish MDX pages
│   └── index.tsx       # Locale hub (redirects via cookie)
├── components/         # Shared UI (Icon, CodeTabs, layout header/footer)
├── features/           # Domain modules (docs shell, home, marketing layout)
├── i18n/               # Locale config and cookie helpers (TypeScript)
├── styles/
└── resources/
public/
├── index.html          # HTML template with locale redirect script
middleware.js           # Vercel Edge redirect for /
```

## Configuration

- **`ryunix.config.ts`** — RyunixJS settings (MDX, SSR, webpack aliases, ESLint)
- **`tsconfig.json`** — TypeScript for `src/**/*.ts` and `src/**/*.tsx`

### Troubleshooting

If dev shows `Can't resolve '.ryunix/server/app/main.ryx'` (often after changing `rootDir` or moving `app/`), the generated router cache is stale. Regenerate it:

```bash
pnpm clean && pnpm dev
```

> **Warning — `webpack.production`:** During local development (`ryunix dev`), the CLI sets `RYUNIX_MODE=development` so builds stay unminified for faster iteration. For production deploys (Vercel), keep `webpack.production: true` in `ryunix.config.ts`.

Site-wide Open Graph / Twitter images use `public/screenshot.png` via `export const Metatags` in `src/app/layout.tsx` (RyunixJS App Router metadata).
- **`postcss.config.js`** — PostCSS / Tailwind CSS
- **`vercel.json`** — Vercel deployment (build output: `.ryunix/static`)

## Deployment

The project is configured for [Vercel](https://vercel.com/):

- **Build command:** `pnpm build`
- **Output directory:** `.ryunix/static`

## Contributors

[![Contributors](https://contrib.rocks/image?repo=neyunse/ryunix-doc)](https://github.com/neyunse/ryunix-doc/graphs/contributors)

## License

[MIT](./LICENSE) © [UnSetSoft](https://github.com/UnSetSoft)
