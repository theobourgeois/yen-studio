// The clips: each loads when it's nearly on screen and plays while it's on screen. A click stops or starts it, and a
// button only the keyboard reaches does the same. Asked for reduced motion or less data, they stay still until then.
// A phone gets its own cut of each, not a smaller copy: it's the part of the frame that reads at that size.
// Nothing pops in: a clip fades in once its poster is decoded (fetched well ahead), and plays on from the poster's
// moment, so the swap from picture to video doesn't jump.

const still = matchMedia("(prefers-reduced-motion: reduce)").matches || navigator.connection?.saveData === true;
const phone = matchMedia("(max-width: 640px)");

const NAMES = {
  assistant: "assistant", song: "playlist", rack: "channel rack", piano: "piano roll", mixer: "mixer", stems: "stems",
  serum: "Serum", "fx-eq": "Y-EQ", "fx-compressor": "Y-C", "fx-limiter": "Y-L", "fx-reverb": "Y-R", "fx-delay": "Y-Delay",
  "fx-multiband": "Y-Multiband", "fx-time": "Y-Time", "fx-tune": "Y-Tune", "fx-pan": "Y-Pan", "fx-pitch": "Y-Pitch",
};

// When each poster is in its clip, as `scripts/site-cuts.ts` (`CUTS`, a fraction of the clip) and
// `scripts/site-effects.ts` (the effects': 0.3 of it, at most 2.5 s) take them. Recut one there, change it here.
const POSTER_AT = { hero: 0.9, serum: 0.415, rack: 0.7, song: 0.72, stems: 0.8, assistant: 0.93 };
const posterSeconds = (video) => {
  const fraction = POSTER_AT[video.dataset.clip];
  return fraction === undefined ? Math.min(video.duration * 0.3, 2.5) : video.duration * fraction;
};

// A page further down (the docs) says where the site's root is from it.
const root = document.documentElement.dataset.root ?? "";
const file = (video) => `${root}clips/${video.dataset.clip}-${phone.matches ? "phone" : "wide"}`;

function show(video) {
  video.classList.add("shown");
}

function dress(video) {
  const url = `${file(video)}.webp`;
  if (video.getAttribute("poster") === url) return;
  const picture = new Image();
  picture.src = url;
  const put = () => {
    video.poster = url;
    show(video);
  };
  picture.decode().then(put, put);
}

function load(video) {
  if (video.getAttribute("src")) return;
  video.src = `${file(video)}.mp4`;
}

function setLabel(video) {
  const name = NAMES[video.dataset.clip];
  video.toggle.textContent = video.paused ? "Play" : "Pause";
  video.toggle.setAttribute("aria-label", `${video.paused ? "Play" : "Pause"} the ${name} clip`);
}

// Posters come well ahead of the clips, which are bigger.
const ahead = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    dress(entry.target);
    ahead.unobserve(entry.target);
  }
}, { rootMargin: "1600px 0px" });

const near = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    dress(entry.target);
    if (!still) load(entry.target);
    near.unobserve(entry.target);
  }
}, { rootMargin: "800px 0px" });

const seen = new IntersectionObserver((entries) => {
  for (const { target: video, isIntersecting } of entries) {
    video.onScreen = isIntersecting;
    if (!isIntersecting) video.pause();
    else if (!video.stopped) {
      // The other observer may not have run yet, and setting a source afterwards would cancel the play.
      dress(video);
      load(video);
      video.play().catch(() => undefined);
    }
  }
}, { threshold: 0.2 });

const videos = [...document.querySelectorAll("video[data-clip]")];

for (const video of videos) {
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "toggle";
  video.toggle = toggle;
  video.stopped = still;
  video.parentElement.append(toggle);
  const flip = () => {
    video.stopped = !video.paused;
    if (video.stopped) video.pause();
    else {
      load(video);
      video.play().catch(() => undefined);
    }
  };
  toggle.addEventListener("click", flip);
  video.addEventListener("click", flip);
  // Each new source (a phone turned too) starts where its poster is.
  video.addEventListener("loadedmetadata", () => {
    if (Number.isFinite(video.duration)) video.currentTime = posterSeconds(video);
  });
  video.addEventListener("loadeddata", () => show(video));
  video.addEventListener("play", () => setLabel(video));
  video.addEventListener("pause", () => setLabel(video));
  setLabel(video);
  ahead.observe(video);
  near.observe(video);
  seen.observe(video);
}

// The landing page's sections rise into place as they come on screen, once. What's already on screen stays put, and
// so does everything for someone who asked for less motion.
const rising = still ? [] : [...document.querySelectorAll("main.col > section :is(.head, h2, .more > div, .fx figure), main.col > section > .cut")]
  .filter((element) => !element.matches(".head h2") && element.getBoundingClientRect().top > innerHeight);
const rise = new IntersectionObserver((entries) => {
  for (const { target, isIntersecting } of entries) {
    if (!isIntersecting) continue;
    target.classList.add("risen");
    rise.unobserve(target);
  }
}, { rootMargin: "0px 0px -8% 0px" });
for (const element of rising) {
  element.classList.add("rise");
  rise.observe(element);
}

// A window narrowed past the line, or a phone turned: the clips it has already loaded change to that shape's cut.
phone.addEventListener("change", () => {
  for (const video of videos) {
    if (video.getAttribute("poster")) dress(video);
    if (!video.getAttribute("src")) continue;
    video.src = `${file(video)}.mp4`;
    if (video.onScreen && !video.stopped) video.play().catch(() => undefined);
  }
});
