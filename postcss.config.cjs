/**
 * PostCSS/Tailwind config (CommonJS).
 * postcss.config.js is a symlink here so Ryunix webpack can require() it
 * while package.json keeps "type": "module" for the app runtime.
 */
const path = require("node:path");

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {
      base: path.join(__dirname, "src"),
    },
    autoprefixer: {},
  },
};
