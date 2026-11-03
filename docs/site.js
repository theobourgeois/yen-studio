// The clips: each loads when it's nearly on screen and plays while it's on screen. A click stops or starts it, and a
// button only the keyboard reaches does the same. Asked for reduced motion or less data, they stay still until then.
// A phone gets its own cut of each, not a smaller copy: it's the part of the frame that reads at that size.

const still = matchMedia("(prefers-reduced-motion: reduce)").matches || navigator.connection?.saveData === true;
const phone = matchMedia("(max-width: 640px)");

const NAMES = {
  assistant: "assistant", song: "playlist", rack: "channel rack", piano: "piano roll", mixer: "mixer", stems: "stems",
  serum: "Serum", "fx-eq": "Y-EQ", "fx-compressor": "Y-C", "fx-limiter": "Y-L", "fx-reverb": "Y-R", "fx-delay": "Y-Delay",
  "fx-multiband": "Y-Multiband", "fx-time": "Y-Time", "fx-tune": "Y-Tune", "fx-pan": "Y-Pan", "fx-pitch": "Y-Pitch",
};

const file = (video) => `clips/${video.dataset.clip}-${phone.matches ? "phone" : "wide"}`;

function dress(video) {
  video.poster = `${file(video)}.webp`;
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

const near = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    dress(entry.target);
    if (!still) load(entry.target);
    near.unobserve(entry.target);
  }
}, { rootMargin: "600px 0px" });

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
  video.addEventListener("play", () => setLabel(video));
  video.addEventListener("pause", () => setLabel(video));
  setLabel(video);
  near.observe(video);
  seen.observe(video);
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
