// The docs' pictures: the PNGs the app's `scripts/site-shots.ts` takes (at twice the page's size), as WebP in
// docs/docs/shots, with their sizes in shots.json for the build (so nothing moves as they load).
//
//   node docs-src/shots.mjs <folder of PNGs>

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const here = import.meta.dirname;
const from = process.argv[2];
if (!from) {
  console.error("usage: node docs-src/shots.mjs <folder of PNGs>");
  process.exit(1);
}
const out = path.resolve(here, "../docs/docs/shots");
const list = path.join(here, "shots.json");
const shots = fs.existsSync(list) ? JSON.parse(fs.readFileSync(list, "utf8")) : {};
/** Wider than this is more than any screen shows the column at, twice over. */
const MAX = 2400;

fs.mkdirSync(out, { recursive: true });
for (const file of fs.readdirSync(from).filter((f) => f.endsWith(".png")).sort()) {
  const name = file.replace(/\.png$/, "");
  const source = path.join(from, file);
  const size = (key) => Number(execFileSync("sips", ["-g", key, source], { encoding: "utf8" }).match(/: (\d+)/)[1]);
  let [width, height] = [size("pixelWidth"), size("pixelHeight")];
  const resize = width > MAX ? ["-resize", String(MAX), "0"] : [];
  if (width > MAX) [width, height] = [MAX, Math.round((height * MAX) / width)];
  execFileSync("cwebp", ["-quiet", "-q", "86", "-m", "6", ...resize, source, "-o", path.join(out, `${name}.webp`)]);
  // The page's size: they're taken at twice it.
  shots[name] = { width: Math.round(width / 2), height: Math.round(height / 2) };
  console.log(name, width, height);
}
fs.writeFileSync(list, `${JSON.stringify(Object.fromEntries(Object.entries(shots).sort()), null, 2)}\n`);
