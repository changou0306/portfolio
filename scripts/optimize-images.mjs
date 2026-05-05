import sharp from "sharp";
import { readdir, stat, rename } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(here, "..", "public");

const TARGETS = [
  { file: "profile.png", maxWidth: 800, quality: 80 },
  { file: "lp/dashboard.png", maxWidth: 1600, quality: 80 },
  { file: "lp/automation-flow.png", maxWidth: 1600, quality: 80 },
  { file: "demo/restaurant/hero.png", maxWidth: 1600, quality: 80 },
  { file: "demo/restaurant/concept.png", maxWidth: 1600, quality: 80 },
  { file: "demo/salon/hero.png", maxWidth: 1600, quality: 80 },
  { file: "demo/salon/concept.png", maxWidth: 1600, quality: 80 },
  { file: "works/lp.png", maxWidth: 1200, quality: 78 },
  { file: "works/restaurant.png", maxWidth: 1200, quality: 78 },
  { file: "works/salon.png", maxWidth: 1200, quality: 78 },
];

const fmt = (n) => `${(n / 1024).toFixed(0)} KB`;

for (const { file, maxWidth, quality } of TARGETS) {
  const abs = path.join(PUBLIC_DIR, file);
  const before = (await stat(abs)).size;

  const tmp = abs + ".tmp.png";
  await sharp(abs)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .png({ quality, compressionLevel: 9, palette: true })
    .toFile(tmp);

  const after = (await stat(tmp)).size;

  if (after < before) {
    await rename(tmp, abs);
    const ratio = ((1 - after / before) * 100).toFixed(0);
    console.log(`✓ ${file}  ${fmt(before)} → ${fmt(after)}  (-${ratio}%)`);
  } else {
    const { unlink } = await import("node:fs/promises");
    await unlink(tmp);
    console.log(`- ${file}  ${fmt(before)} (skip: optimization not smaller)`);
  }
}
