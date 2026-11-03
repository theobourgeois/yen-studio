// The docs: Markdown in docs-src/pages, made into plain pages under docs/docs/ (GitHub Pages serves docs/ as it is), then
// indexed by Pagefind for the search, which runs in the reader's browser. `npm run docs` after any change, and commit
// what it writes: the site has no build on GitHub's side.
//
// Beyond Markdown: `![alt](shot:name "caption")` is a picture from docs/docs/shots (made by shots.mjs), `::clip name` is
// one of the landing page's clips (its shapes and description are read from there), `> **Tip:**` and `> **Note:**` are
// callouts, and a link to `slug` or `slug#heading` is another page. Anything that doesn't resolve fails the build.

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { Marked } from "marked";
import { NAV } from "./nav.mjs";

const here = import.meta.dirname;
const site = path.resolve(here, "../docs");
const out = path.join(site, "docs");
const SITE_URL = "https://theobourgeois.github.io/yen-studio/";
const DOWNLOAD = "https://github.com/theobourgeois/yen-studio/releases/latest/download/Yen-Studio-arm64.dmg";

const problems = [];
/** `--draft`: build what's written so far, leaving out the pages that aren't. */
const draft = process.argv.includes("--draft");
const fail = (page, message) => problems.push(`${page}: ${message}`);

const escape = (text) => String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const plain = (html) => html.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
/** A heading's id: its words, lower-cased, joined by hyphens. */
const slugify = (text) =>
  plain(text)
    .toLowerCase()
    .replace(/[‘’'"“”]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");

/** The pages, in the order the contents list them. */
const order = NAV.flatMap((section) => section.pages.map((slug) => ({ slug, section: section.title })));
const pages = new Map();
for (const { slug, section } of order) {
  const file = path.join(here, "pages", `${slug}.md`);
  if (!fs.existsSync(file)) {
    if (draft) continue;
    fail(slug, "listed in nav.mjs but docs-src/pages has no such file");
    continue;
  }
  const source = fs.readFileSync(file, "utf8");
  const match = source.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    fail(slug, "no front matter");
    continue;
  }
  const meta = Object.fromEntries(
    match[1].split("\n").filter(Boolean).map((line) => {
      const at = line.indexOf(":");
      return [line.slice(0, at).trim(), line.slice(at + 1).trim().replace(/^"(.*)"$/, "$1")];
    }),
  );
  if (!meta.title || !meta.description) fail(slug, "front matter needs a title and a description");
  pages.set(slug, { slug, section, title: meta.title, description: meta.description, body: source.slice(match[0].length) });
}
for (const file of fs.readdirSync(path.join(here, "pages"))) {
  if (!pages.has(file.replace(/\.md$/, ""))) fail(file, "not listed in nav.mjs");
}

const shots = JSON.parse(fs.readFileSync(path.join(here, "shots.json"), "utf8"));
const landing = fs.readFileSync(path.join(site, "index.html"), "utf8");
/** The landing page's clips by name: their shapes and what they show. */
const clips = new Map(
  [...landing.matchAll(/<video class="clip" data-clip="([^"]+)" style="([^"]+)"[^>]*aria-label="([^"]+)"/g)].map(([, name, style, label]) => [name, { style, label }]),
);

/** Where a page is from another: every page is a folder, the home page the docs' own. */
const href = (slug) => (slug === "index" ? "./" : `${slug}/`);
const up = (slug) => (slug === "index" ? "" : "../");

function render(page) {
  const headings = [];
  const links = [];
  const used = new Set();
  const marked = new Marked({ gfm: true });
  marked.use({
    extensions: [
      {
        name: "clip",
        level: "block",
        start: (src) => src.match(/^::clip /m)?.index,
        tokenizer(src) {
          const match = src.match(/^::clip ([\w-]+)[^\n]*(?:\n|$)/);
          if (match) return { type: "clip", raw: match[0], name: match[1] };
        },
        renderer({ name }) {
          const clip = clips.get(name);
          if (!clip) {
            fail(page.slug, `no clip called ${name}`);
            return "";
          }
          return `<div class="cut"><video class="clip" data-clip="${name}" style="${clip.style}" muted playsinline loop preload="none" aria-label="${clip.label}"></video></div>\n`;
        },
      },
    ],
    renderer: {
      heading({ tokens, depth }) {
        const html = this.parser.parseInline(tokens);
        let id = slugify(html);
        for (let n = 2; used.has(id); n++) id = `${slugify(html)}-${n}`;
        used.add(id);
        if (depth === 2) headings.push({ id, text: plain(html) });
        return `<h${depth} id="${id}"><a class="anchor" href="#${id}">${html}</a></h${depth}>\n`;
      },
      image({ href: src, title, text }) {
        const name = src.startsWith("shot:") ? src.slice(5) : null;
        if (!name || !shots[name]) {
          fail(page.slug, `no picture called ${src}`);
          return "";
        }
        const { width, height } = shots[name];
        const img = `<img src="${up(page.slug)}shots/${name}.webp" width="${width}" height="${height}" alt="${escape(text)}" loading="lazy" decoding="async">`;
        return `<figure class="shot" style="--w:${width}">${img}${title ? `<figcaption>${escape(title)}</figcaption>` : ""}</figure>`;
      },
      link({ href: target, title, tokens }) {
        const text = this.parser.parseInline(tokens);
        if (/^(https?:|mailto:|#)/.test(target)) {
          if (target.startsWith("#")) links.push({ slug: page.slug, anchor: target.slice(1) });
          const outside = /^https?:/.test(target) && !target.startsWith(SITE_URL);
          return `<a href="${escape(target)}"${title ? ` title="${escape(title)}"` : ""}${outside ? ' rel="noopener"' : ""}>${text}</a>`;
        }
        const [slug, anchor] = target.split("#");
        links.push({ slug, anchor });
        return `<a href="${up(page.slug)}${href(slug)}${anchor ? `#${anchor}` : ""}">${text}</a>`;
      },
      blockquote({ tokens }) {
        const html = this.parser.parse(tokens);
        const kind = html.match(/^<p><strong>(Tip|Note|Warning):<\/strong>/)?.[1];
        return kind ? `<aside class="callout ${kind.toLowerCase()}">${html}</aside>\n` : `<blockquote>${html}</blockquote>\n`;
      },
      table(token) {
        // Wide tables scroll on their own rather than the page.
        return `<div class="table">${marked.Renderer.prototype.table.call(this, token)}</div>\n`;
      },
    },
  });
  const body = page.body.replace(/^::index\s*$/m, () => contents());
  const html = marked.parse(body);
  return { html, headings, links, ids: used };
}

/** The home page's list of every page, by section. */
function contents() {
  return NAV.filter((section) => section.pages.some((slug) => slug !== "index"))
    .map(
      (section) =>
        `<section class="area"><h2 id="${slugify(section.title)}">${escape(section.title)}</h2><ul class="cards">${section.pages
          .filter((slug) => slug !== "index" && pages.has(slug))
          .map((slug) => `<li><a href="${href(slug)}"><b>${escape(pages.get(slug).title)}</b><span>${escape(pages.get(slug).description)}</span></a></li>`)
          .join("")}</ul></section>`,
    )
    .join("\n");
}

function nav(current) {
  return NAV.map(
    (section) =>
      `<li><span class="group">${escape(section.title)}</span><ul>${section.pages
        .filter((slug) => pages.has(slug))
        .map((slug) => `<li><a href="${up(current)}${href(slug)}"${slug === current ? ' aria-current="page"' : ""}>${escape(slug === "index" ? "Overview" : pages.get(slug).title)}</a></li>`)
        .join("")}</ul></li>`,
  ).join("");
}

function document(page, rendered) {
  const root = `${up(page.slug)}../`;
  const at = order.findIndex((entry) => entry.slug === page.slug);
  const before = order.slice(0, at).reverse().find((entry) => pages.has(entry.slug));
  const after = order.slice(at + 1).find((entry) => pages.has(entry.slug));
  const step = (entry, rel) =>
    entry ? `<a class="${rel}" rel="${rel}" href="${up(page.slug)}${href(entry.slug)}"><span>${rel === "prev" ? "Previous" : "Next"}</span>${escape(pages.get(entry.slug).title)}</a>` : "<span></span>";
  const home = page.slug === "index";
  const title = home ? "Yen Studio docs" : `${page.title}: Yen Studio docs`;
  const url = `${SITE_URL}docs/${home ? "" : `${page.slug}/`}`;
  const toc = !home && rendered.headings.length > 2
    ? `<nav class="toc" aria-label="On this page"><span class="group">On this page</span><ul>${rendered.headings.map((h) => `<li><a href="#${h.id}">${escape(h.text)}</a></li>`).join("")}</ul></nav>`
    : "";
  return `<!doctype html>
<html lang="en" data-root="${root}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(title)}</title>
<meta name="description" content="${escape(page.description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:title" content="${escape(home ? "Yen Studio docs" : page.title)}">
<meta property="og:description" content="${escape(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE_URL}og.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#5a2ee6">
<link rel="icon" type="image/png" href="${root}favicon.png?v=2">
<link rel="preload" href="${root}fonts/archivo.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${root}fonts/bricolage.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${root}style.css">
<link rel="stylesheet" href="${root}docs.css">
<script src="${root}site.js" defer></script>
<script src="${root}docs.js" type="module"></script>
</head>
<body class="docs">
<a class="skip" href="#doc">Skip to the page</a>
<div class="col wide">
<header class="bar">
  <span class="where"><a class="brand" href="${root}"><img src="${root}logo.svg" alt="" width="44" height="44">Yen Studio</a><a class="section" href="${up(page.slug)}">Docs</a></span>
  <a class="get" href="${DOWNLOAD}">Download</a>
</header>
</div>
<div class="shell col wide">
<div class="side">
  <div class="search" role="search">
    <label class="visually-hidden" for="find">Search the docs</label>
    <input id="find" type="search" placeholder="Search the docs" autocomplete="off" spellcheck="false" aria-controls="found" aria-expanded="false">
    <kbd class="hint" aria-hidden="true">/</kbd>
    <div id="found" class="found" hidden></div>
  </div>
  <details class="contents" open>
    <summary>Contents</summary>
    <nav aria-label="Docs"><ul>${nav(page.slug)}</ul></nav>
  </details>
</div>
<main id="doc" class="doc${home ? " home" : ""}" data-pagefind-body data-pagefind-meta="section:${escape(home ? "Start" : page.section)}">
${home ? "" : `<p class="crumb" data-pagefind-ignore>${escape(page.section)}</p>`}
<h1 data-pagefind-meta="title">${escape(home ? "Yen Studio docs" : page.title)}</h1>
${rendered.html}
<nav class="steps" aria-label="Pages" data-pagefind-ignore>${step(before, "prev")}${step(after, "next")}</nav>
<p class="fix" data-pagefind-ignore>Something here wrong or missing? <a href="https://github.com/theobourgeois/yen-studio/issues/new?title=${encodeURIComponent(`Docs: ${page.title}`)}">Tell us</a>.</p>
</main>
${toc}
</div>
</body>
</html>
`;
}

const built = new Map([...pages.values()].map((page) => [page.slug, render(page)]));
for (const [slug, rendered] of built) {
  for (const link of rendered.links) {
    const target = built.get(link.slug);
    if (!target) {
      if (!draft) fail(slug, `links to ${link.slug}, which isn't a page`);
    }
    else if (link.anchor && !target.ids.has(link.anchor)) fail(slug, `links to ${link.slug}#${link.anchor}, which isn't a heading there`);
  }
}
if (problems.length) {
  console.error(problems.join("\n"));
  if (!draft) process.exit(1);
}

// Pages are written fresh each time; the pictures beside them are shots.mjs's.
for (const entry of fs.readdirSync(out, { withFileTypes: true })) {
  if (entry.name !== "shots") fs.rmSync(path.join(out, entry.name), { recursive: true, force: true });
}
for (const [slug, rendered] of built) {
  const dir = slug === "index" ? out : path.join(out, slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), document(pages.get(slug), rendered));
}
execFileSync(path.resolve(here, "../node_modules/.bin/pagefind"), ["--site", out, "--glob", "**/index.html", "--quiet"], { stdio: "inherit" });
console.log(`${built.size} pages`);
