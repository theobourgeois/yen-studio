// The site's motion. No libraries: a page this size doesn't need any, and it stays a file you can read.
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const $ = (selector, within = document) => within.querySelector(selector);
const $$ = (selector, within = document) => [...within.querySelectorAll(selector)];
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/* Reveal things as they arrive. */
const reveal = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("seen");
      reveal.unobserve(entry.target);
    }
  },
  { rootMargin: "0px 0px -8% 0px" },
);
$$("[data-reveal]").forEach((el) => {
  // A row of them comes in one after another.
  const before = [...el.parentElement.children].filter((c) => c.hasAttribute("data-reveal")).indexOf(el);
  el.style.transitionDelay = `${Math.max(0, before) * 70}ms`;
  reveal.observe(el);
});

/* The page is a song at 140: the ruler's markers are its sections, the playhead and the counter are the scroll. */
const ruler = $("[data-ruler]");
const playhead = $("[data-playhead]");
const position = $("[data-position]");
const BARS = 64;
for (let bar = 0; bar < BARS; bar += 4) {
  const tick = document.createElement("i");
  tick.className = "tick";
  tick.style.left = `${(bar / BARS) * 100}%`;
  ruler.append(tick);
}
const markers = $$("[data-marker]").map((section) => {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = section.dataset.marker;
  button.addEventListener("click", () => section.scrollIntoView());
  ruler.append(button);
  return { section, button };
});
const tiltFrame = $("[data-tilt] .frame");

function placeMarkers() {
  const end = document.documentElement.scrollHeight - innerHeight;
  for (const { section, button } of markers) button.style.left = `${clamp((section.offsetTop - 110) / end, 0, 0.94) * 100}%`;
}
function onScroll() {
  const end = document.documentElement.scrollHeight - innerHeight;
  const at = clamp(scrollY / end, 0, 1);
  playhead.style.transform = `translateX(${at * ruler.clientWidth}px)`;
  const beats = at * BARS * 4;
  const bar = Math.floor(beats / 4) + 1;
  const beat = Math.floor(beats % 4) + 1;
  const ticks = Math.floor((beats % 1) * 100);
  position.innerHTML = `<b>${bar}:${String(beat).padStart(2, "0")}</b><small>:${String(ticks).padStart(2, "0")}</small>`;
  let here = null;
  for (const marker of markers) if (marker.section.offsetTop - 200 <= scrollY) here = marker;
  for (const marker of markers) marker.button.classList.toggle("here", marker === here);
  if (!calm) {
    // The first picture leans back, and stands up as you scroll to it.
    const lean = clamp(scrollY / (innerHeight * 0.55), 0, 1);
    tiltFrame.style.setProperty("--tilt", `${14 * (1 - lean)}deg`);
    tiltFrame.style.setProperty("--grow", `${0.94 + 0.06 * lean}`);
  }
}
let queued = false;
addEventListener("scroll", () => {
  if (queued) return;
  queued = true;
  requestAnimationFrame(() => {
    queued = false;
    onScroll();
  });
}, { passive: true });
addEventListener("resize", () => {
  placeMarkers();
  onScroll();
});
// Pictures arriving move the sections, and so the markers.
new ResizeObserver(placeMarkers).observe(document.body);
placeMarkers();
onScroll();

/* The studio's parts play through themselves until you pick one. */
{
  const deck = $("[data-deck]");
  const tabs = $$("[data-slide]", deck);
  const pictures = $$(".deck-view img", deck);
  const SLIDE = 7000;
  deck.style.setProperty("--slide", `${SLIDE}ms`);
  let current = 0;
  let timer = 0;
  let chosen = false;
  const show = (index) => {
    current = index;
    tabs.forEach((tab, i) => tab.setAttribute("aria-selected", String(i === index)));
    pictures.forEach((picture, i) => picture.classList.toggle("on", i === index));
    clearTimeout(timer);
    if (!chosen && !calm) timer = setTimeout(() => show((current + 1) % tabs.length), SLIDE);
  };
  tabs.forEach((tab, i) =>
    tab.addEventListener("click", () => {
      chosen = true;
      deck.classList.add("paused");
      show(i);
    }),
  );
  // Only runs once it's on screen.
  new IntersectionObserver(([entry], observer) => {
    if (!entry.isIntersecting) return;
    observer.disconnect();
    show(0);
  }).observe(deck);
  tabs[0].setAttribute("aria-selected", "true");
}

/* The assistant, staged: each example's steps are the app's own names for them, and each changes the board on the right. */
const BOARD_BARS = 8;
const notes = (seed, count, audio) => {
  if (audio) {
    const peaks = Array.from({ length: 90 }, (_, i) => {
      const v = (Math.sin(i * seed) * 0.5 + 0.5) * (Math.sin(i * 0.9 + seed) * 0.4 + 0.6);
      return `M${i + 0.5} ${12 - v * 11}V${12 + v * 11}`;
    });
    return `<svg viewBox="0 0 90 24" preserveAspectRatio="none"><path d="${peaks.join("")}" stroke="#bfe8d6" stroke-width=".7" opacity=".85" vector-effect="non-scaling-stroke"/></svg>`;
  }
  const bars = Array.from({ length: count }, (_, i) => {
    const y = 3 + (Math.abs(Math.sin(seed * (i + 1) * 1.7)) * 19) | 0;
    const x = (i / count) * 100;
    return `<rect x="${x}" y="${y}" width="${(100 / count) * 0.8}" height="1.800" fill="#c8d6f5"/>`;
  });
  return `<svg viewBox="0 0 100 24" preserveAspectRatio="none">${bars.join("")}</svg>`;
};
const clip = (name, start, length, extra = {}) => ({ name, start, length, count: 16, seed: name.length + start + 1.3, ...extra });
const EXAMPLES = [
  {
    tab: "Write a part",
    you: "Give the second half a new 808 line, same key. Leave the chords.",
    rows: [
      { name: "Chords", clips: [clip("Chords", 0, 4, { count: 10 }), clip("Chords", 4, 4, { count: 10 })] },
      { name: "Melody", clips: [clip("Melody", 0, 4, { count: 22 })] },
      { name: "808", clips: [clip("808", 0, 4, { count: 8 })] },
      { name: "Drums", clips: [clip("Drums", 0, 8, { count: 48 })] },
    ],
    steps: [
      { label: "Read the song" },
      { label: "Add a pattern" },
      { label: "Write a channel's notes" },
      { label: "Place clips on the playlist", adds: { row: 2, clip: clip("808 B", 4, 4, { count: 11 }) } },
    ],
    reply: "Added an 808 B pattern in A minor and put it on bars 5 to 8. The chords haven't moved.",
    review: "1 pattern, 1 clip",
  },
  {
    tab: "Fix the mix",
    you: "The kick is getting lost. Make some room for it.",
    rows: [
      { name: "Kick", clips: [clip("Kick", 0, 8, { count: 32 })] },
      { name: "808", clips: [clip("808", 0, 8, { count: 14 })] },
      { name: "Chords", clips: [clip("Chords", 0, 8, { count: 16 })] },
    ],
    steps: [
      { label: "Read the mixer" },
      { label: "Shape a Y-EQ", tag: { row: 1, text: "Y-EQ" } },
      { label: "Duck a track to another", tag: { row: 1, text: "Ducked to Kick" } },
      { label: "Change a mixer track", tag: { row: 2, text: "−2 dB" } },
    ],
    reply: "Cut the 808 a little at 90 Hz and ducked it to the kick. The chords are down 2 dB. Tell me if the low end now feels thin.",
    review: "3 tracks changed",
  },
  {
    tab: "Use your plugins",
    you: "Put my pad synth on a new channel and write something soft under the melody.",
    rows: [
      { name: "Melody", clips: [clip("Melody", 0, 8, { count: 40 })] },
      { name: "808", clips: [clip("808", 0, 8, { count: 14 })] },
      { name: "New", clips: [] },
    ],
    steps: [
      { label: "List the plugins" },
      { label: "Add a channel", renames: { row: 2, name: "Your synth" } },
      { label: "A plugin's presets" },
      { label: "Write a channel's notes" },
      { label: "Place clips on the playlist", adds: { row: 2, clip: clip("Pad", 0, 8, { count: 9 }) } },
    ],
    reply: "Your pad synth is on a new channel with a warm preset, holding long chords under the melody for all 8 bars.",
    review: "1 channel, 1 clip",
  },
  {
    tab: "Pull apart a loop",
    you: "Split this loop and give me the bass as notes I can edit.",
    rows: [
      { name: "Loop", clips: [clip("Loop", 0, 8, { audio: true })] },
      { name: "Drums", clips: [] },
      { name: "Bass", clips: [] },
      { name: "Bass notes", clips: [] },
    ],
    steps: [
      { label: "Extract stems", adds: [{ row: 1, clip: clip("Loop - Drums", 0, 8, { audio: true }) }, { row: 2, clip: clip("Loop - Bass", 0, 8, { audio: true, seed: 0.4 }) }], mutes: { row: 0 } },
      { label: "Convert audio to notes" },
      { label: "Place clips on the playlist", adds: { row: 3, clip: clip("Bass notes", 0, 8, { count: 14 }) } },
    ],
    reply: "The loop's muted with its stems under it, and the bass is now a pattern on its own channel.",
    review: "2 stems, 1 pattern",
  },
];

{
  const root = $("[data-agent]");
  const tabs = $("[data-agent-tabs]");
  const log = $("[data-chat]");
  const board = $("[data-board]");
  const review = $("[data-review]");
  const reviewText = $("[data-review-text]");
  const boardRuler = $("[data-board-ruler]");
  for (let bar = 0; bar < BOARD_BARS; bar++) {
    const span = document.createElement("span");
    span.textContent = bar + 1;
    span.style.left = `${(bar / BOARD_BARS) * 100}%`;
    boardRuler.append(span);
  }
  let run = 0;
  let current = 0;
  let chosen = false;

  const drawClip = (lane, data, fresh) => {
    const el = document.createElement("div");
    el.className = `clip${data.audio ? " audio" : ""}${fresh ? " new grow" : ""}`;
    el.style.left = `${(data.start / BOARD_BARS) * 100}%`;
    el.style.width = `calc(${(data.length / BOARD_BARS) * 100}% - 2px)`;
    el.innerHTML = `<b>${data.name}</b>${notes(data.seed, data.count, data.audio)}`;
    lane.append(el);
    return el;
  };
  const drawBoard = (example) => {
    board.innerHTML = "";
    return example.rows.map((row) => {
      const el = document.createElement("div");
      el.className = "row";
      el.innerHTML = `<div class="row-name">${row.name}</div><div class="row-lane"></div>`;
      board.append(el);
      const lane = $(".row-lane", el);
      row.clips.forEach((c) => drawClip(lane, c, false));
      return { el, lane, nameEl: $(".row-name", el) };
    });
  };
  const applyStep = (rows, step, fresh) => {
    for (const add of [step.adds ?? []].flat()) drawClip(rows[add.row].lane, add.clip, fresh);
    if (step.renames) rows[step.renames.row].nameEl.textContent = step.renames.name;
    if (step.mutes) $$(".clip", rows[step.mutes.row].lane).forEach((el) => el.classList.add("muted"));
    if (step.tag) {
      const lane = rows[step.tag.row].lane;
      $$(".clip", lane).forEach((el) => el.classList.add("new"));
      const b = $(".clip b", lane);
      if (b && !b.textContent.includes(step.tag.text)) b.textContent += ` · ${step.tag.text}`;
    }
  };
  const say = (className, text) => {
    const el = document.createElement("div");
    el.className = `${className} enter`;
    el.textContent = text;
    log.append(el);
    return el;
  };

  async function play(index) {
    const mine = ++run;
    current = index;
    const alive = () => mine === run;
    const example = EXAMPLES[index];
    $$("button", tabs).forEach((b, i) => b.setAttribute("aria-selected", String(i === index)));
    log.innerHTML = "";
    review.classList.remove("on");
    const rows = drawBoard(example);
    if (calm) {
      say("msg-you", example.you);
      const steps = document.createElement("div");
      steps.className = "steps";
      steps.innerHTML = example.steps.map((s) => `<div class="step done"><i></i>${s.label}</div>`).join("");
      log.append(steps);
      say("msg-it", example.reply);
      example.steps.forEach((s) => applyStep(rows, s, false));
      reviewText.textContent = example.review;
      review.classList.add("on");
      return;
    }
    await wait(350);
    if (!alive()) return;
    say("msg-you", example.you);
    await wait(750);
    const steps = document.createElement("div");
    steps.className = "steps";
    log.append(steps);
    for (const step of example.steps) {
      if (!alive()) return;
      const el = document.createElement("div");
      el.className = "step enter";
      el.innerHTML = `<i></i>${step.label}`;
      steps.append(el);
      await wait(750 + step.label.length * 14);
      if (!alive()) return;
      el.classList.add("done");
      applyStep(rows, step, true);
      await wait(180);
    }
    await wait(300);
    if (!alive()) return;
    say("msg-it", example.reply);
    await wait(400);
    if (!alive()) return;
    reviewText.textContent = example.review;
    review.classList.add("on");
    await wait(4800);
    if (alive() && !chosen) play((current + 1) % EXAMPLES.length);
  }
  EXAMPLES.forEach((example, i) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("role", "tab");
    button.textContent = example.tab;
    button.addEventListener("click", () => {
      chosen = true;
      play(i);
    });
    tabs.append(button);
  });
  new IntersectionObserver(([entry], observer) => {
    if (!entry.isIntersecting) return;
    observer.disconnect();
    play(0);
  }, { threshold: 0.3 }).observe(root);
}
