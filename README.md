# RyunixJS Documentation

[Español](./README.es.md)

Official documentation site for **RyunixJS**, a modern JavaScript framework for building fast, lightweight static sites and SPAs.

![RyunixJS documentation site homepage](./public/screenshot.png)

## About this project

This repository contains the source code for the RyunixJS docs: guides, API reference, and examples. It is built with RyunixJS itself, using MDX for content and Tailwind CSS for styling.

## Requirements

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/)

## Installation

```bash
git clone <repository-url>
cd ryunix-doc
pnpm install
```

## Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

Scripts defined in `package.json` (Ryunix CLI via `ryunix`):

| Script     | Command         | Description                                         |
| ---------- | --------------- | --------------------------------------------------- |
| `dev`      | `pnpm dev`      | Development server (`ryunix dev`)                   |
| `build`    | `pnpm build`    | Production build (`ryunix build`)                   |
| `start`    | `pnpm start`    | Production server (`ryunix start`; run after build) |
| `lint`     | `pnpm lint`     | Lint the project (`ryunix lint`)                    |
| `lint:fix` | `pnpm lint:fix` | Auto-fix lint issues (`ryunix lint --fix`)          |

## Project structure

```txt
app/
├── components/     # Reusable UI components
├── docs/           # Documentation (MDX)
│   ├── introduction/
│   └── api/
├── resources/      # Static assets (logos, etc.)
├── styles/         # Global CSS
├── index.ryx       # Home page
└── layout.ryx      # Root layout
```

## Configuration

- **`ryunix.config.js`** — RyunixJS settings (MDX, SSR, webpack aliases, ESLint)
- **`postcss.config.js`** — PostCSS / Tailwind CSS
- **`vercel.json`** — Vercel deployment (build output: `.ryunix/static`)

## Deployment

The project is configured for [Vercel](https://vercel.com/):

- **Build command:** `pnpm build`
- **Output directory:** `.ryunix/static`

## License

[MIT](./LICENSE) © [UnSetSoft](https://github.com/UnSetSoft)
