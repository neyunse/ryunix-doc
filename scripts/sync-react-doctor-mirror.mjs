/**
 * React Doctor only lints .jsx / .tsx. Ryunix UI lives in .ryx — mirror copies
 * into react-doctor-mirror/ as .tsx (paths map 1:1 under src/).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "src");
const mirrorRoot = path.join(root, "react-doctor-mirror");

function collectRyxFiles(dir, out = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, name.name);
    if (name.isDirectory()) collectRyxFiles(abs, out);
    else if (name.isFile() && name.name.endsWith(".ryx")) out.push(abs);
  }
  return out;
}

const ryxFiles = collectRyxFiles(srcDir);

fs.rmSync(mirrorRoot, { recursive: true, force: true });

for (const ryxPath of ryxFiles) {
  const rel = path.relative(srcDir, ryxPath);
  const tsxPath = path.join(mirrorRoot, rel.replace(/\.ryx$/, ".tsx"));
  fs.mkdirSync(path.dirname(tsxPath), { recursive: true });
  fs.copyFileSync(ryxPath, tsxPath);
}

console.log(
  `[react-doctor] Mirrored ${ryxFiles.length} .ryx files → react-doctor-mirror/`,
);
