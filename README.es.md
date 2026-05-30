# Documentación de RyunixJS

[English](./README.md)

Sitio oficial de documentación de **RyunixJS**, un framework JavaScript moderno para crear sitios estáticos y SPAs rápidos y ligeros.

![Página de inicio del sitio de documentación de RyunixJS](./public/screenshot.png)

## Sobre este proyecto

Este repositorio contiene el código fuente de la documentación de RyunixJS: guías, referencia de la API y ejemplos. Está construido con el propio RyunixJS, usando MDX para el contenido y Tailwind CSS para los estilos.

## Requisitos

- [Node.js](https://nodejs.org/) **22** (ver `engines` en `package.json`)
- [pnpm](https://pnpm.io/)

## Instalación

```bash
git clone <repository-url>
cd ryunix-doc
pnpm install
```

### Paquetes RyunixJS desde npm

`@unsetsoft/ryunixjs` y `@unsetsoft/ryunix-presets` se instalan desde el **registro npm** (últimas versiones publicadas), sin enlace al monorepo local. El sitio usa pnpm; `@unsetsoft/ryunix-presets` debe ser una versión que lo soporte (hoy un tag canary hasta el próximo estable). Ejecuta `pnpm install` solo dentro de `ryunix-doc`.

Para probar un checkout local del framework, apunta temporalmente esas dependencias a tus paquetes en `Ryunixjs` y vuelve a instalar.

## Desarrollo

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador. La documentación está en `/en/docs/...` (inglés) y `/es/docs/...` (español). Al visitar `/` redirige a `/en` o al idioma guardado en la cookie.

## Scripts disponibles

Scripts definidos en `package.json` (CLI Ryunix vía `ryunix`):

| Script     | Comando         | Descripción                                            |
| ---------- | --------------- | ------------------------------------------------------ |
| `clean`    | `pnpm clean`    | Elimina la caché de build `.ryunix`                    |
| `dev`      | `pnpm dev`      | Servidor de desarrollo (`ryunix dev`)                  |
| `build`    | `pnpm build`    | Build de producción (`ryunix build`)                   |
| `start`    | `pnpm start`    | Servidor de producción (`ryunix start`; tras el build) |
| `lint`     | `pnpm lint`     | Linter del proyecto (`ryunix lint`)                    |
| `lint:fix` | `pnpm lint:fix` | Corrige el lint automáticamente (`ryunix lint --fix`)  |

## Estructura del proyecto

```txt
src/
├── app/
│   ├── [locale]/
│   │   └── docs/[...slug]/
│   └── index.ryx
├── content/docs/
├── components/
├── features/
├── i18n/
├── styles/
└── resources/
public/
├── index.html
middleware.js
```

## Configuración

- **`ryunix.config.js`** — Ajustes de RyunixJS (MDX, SSR, alias de webpack, ESLint)

### Solución de problemas

Si en dev aparece `Can't resolve '.ryunix/server/app/main.ryx'` (común tras cambiar `rootDir` o mover `app/`), la caché del router generado está desactualizada:

```bash
pnpm clean && pnpm dev
```

> **Aviso — `webpack.production`:** En desarrollo local (`ryunix dev`), el CLI usa `RYUNIX_MODE=development` y el build no se minifica para iterar más rápido. En deploys de producción (Vercel), mantén `webpack.production: true` en `ryunix.config.js`.

La imagen Open Graph / Twitter del sitio es `public/screenshot.png`, declarada con `export const Metatags` en `src/app/layout.ryx` (metadatos del App Router de RyunixJS).
- **`postcss.config.cjs`** + enlace **`postcss.config.js`** — Tailwind/PostCSS (Ryunix hace `require()` del `.js` enlazado; mantén `"type": "module"` en `package.json` para la hidratación). No sustituyas por un `.js` ESM con `export default`.
- **`vercel.json`** — Despliegue en Vercel (salida del build: `.ryunix/static`)

## Despliegue

El proyecto está configurado para [Vercel](https://vercel.com/):

- **Comando de build:** `pnpm build`
- **Directorio de salida:** `.ryunix/static`

## Contribuidores

[![Contributors](https://contrib.rocks/image?repo=neyunse/ryunix-doc)](https://github.com/neyunse/ryunix-doc/graphs/contributors)

## Licencia

[MIT](./LICENSE) © [UnSetSoft](https://github.com/UnSetSoft)
