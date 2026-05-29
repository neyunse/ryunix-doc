import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    "@tailwindcss/postcss": {
      base: path.join(__dirname, "src"),
    },
    autoprefixer: {},
  },
};
