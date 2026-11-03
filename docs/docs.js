// The docs' search: Pagefind's index (docs/docs/pagefind, made by `npm run docs`), read in the browser a piece at a
// time, so nothing is sent anywhere. Results show as you type; the arrows move through them, Enter opens one, / finds
// the field from anywhere, Escape puts it away.

const root = document.documentElement.dataset.root ?? "../";
const input = document.getElementById("find");
const found = document.getElementById("found");
const contents = document.querySelector(".contents");

// A phone starts with the contents folded, under the search.
if (contents && matchMedia("(max-width: 860px)").matches) contents.open = false;

let pagefind = null;
async function load() {
  if (!pagefind) {
    pagefind = import(new URL(`${root}docs/pagefind/pagefind.js`, location.href).href).then(async (module) => {
      // Its links are the docs' own, wherever the site is served from.
      await module.options({ baseUrl: new URL(`${root}docs/`, location.href).pathname, excerptLength: 22 });
      module.init();
      return module;
    });
  }
  return pagefind;
}

const escape = (text) => text.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

function show(html) {
  found.innerHTML = html;
  found.hidden = false;
  input.setAttribute("aria-expanded", "true");
}
function hide() {
  found.hidden = true;
  input.setAttribute("aria-expanded", "false");
}

async function search() {
  const query = input.value.trim();
  if (!query) return hide();
  const module = await load();
  const search = await module.debouncedSearch(query, {}, 120);
  if (search === null) return; // a newer one is on its way
  if (input.value.trim() !== query) return;
  if (!search.results.length) return show(`<p class="none">Nothing found for “${escape(query)}”.</p>`);
  const pages = await Promise.all(search.results.slice(0, 8).map((result) => result.data()));
  show(
    `<ol>${pages
      .map((page) => {
        const title = escape(page.meta.title ?? "");
        const section = page.meta.section ? `<span class="where-in">${escape(page.meta.section)}</span>` : "";
        // Up to three of its sections that match, below it, when they aren't just the page's opening.
        const subs = (page.sub_results ?? [])
          .filter((sub) => sub.url !== page.url && sub.title !== page.meta.title)
          .slice(0, 3)
          .map((sub) => `<li><a class="sub" href="${sub.url}"><b>${escape(sub.title)}</b><p>${sub.excerpt}</p></a></li>`)
          .join("");
        return `<li><a href="${page.url}"><b>${title}</b>${section}<p>${page.excerpt}</p></a></li>${subs}`;
      })
      .join("")}</ol>`,
  );
}

input.addEventListener("focus", () => load());
input.addEventListener("input", search);

const links = () => [...found.querySelectorAll("a")];
function select(link) {
  for (const a of links()) a.removeAttribute("aria-selected");
  if (!link) return;
  link.setAttribute("aria-selected", "true");
  link.scrollIntoView({ block: "nearest" });
}

input.addEventListener("keydown", (event) => {
  const all = links();
  const at = all.findIndex((a) => a.getAttribute("aria-selected") === "true");
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    if (!all.length || found.hidden) return;
    event.preventDefault();
    const next = event.key === "ArrowDown" ? Math.min(all.length - 1, at + 1) : Math.max(0, at - 1);
    select(all[next]);
  } else if (event.key === "Enter") {
    const link = all[at] ?? all[0];
    if (link && !found.hidden) {
      event.preventDefault();
      location.href = link.href;
    }
  } else if (event.key === "Escape") {
    if (!found.hidden) hide();
    else {
      input.value = "";
      input.blur();
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
  const target = event.target;
  if (target instanceof HTMLElement && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))) return;
  event.preventDefault();
  input.focus();
  input.select();
});

document.addEventListener("pointerdown", (event) => {
  if (!event.target.closest(".search")) hide();
});
input.addEventListener("focus", () => {
  if (input.value.trim() && found.innerHTML) {
    found.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }
});
