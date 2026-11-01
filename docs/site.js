// The clips: each loads when it's nearly on screen, plays while it's on screen, and has a button to stop it.
// Asked for reduced motion or less data, they stay still pictures until that button is pressed.

const still = matchMedia("(prefers-reduced-motion: reduce)").matches || navigator.connection?.saveData === true;
const small = Math.min(screen.width, innerWidth) * devicePixelRatio <= 1300;

const NAMES = { assistant: "assistant", song: "playlist", rack: "channel rack", piano: "piano roll", mixer: "mixer", stems: "stems", notes: "notes" };

function load(video) {
  if (video.src) return;
  video.src = `clips/${video.dataset.clip}${small ? "-small" : ""}.mp4`;
}

function setLabel(video) {
  const name = NAMES[video.dataset.clip];
  video.toggle.textContent = video.paused ? "Play" : "Pause";
  video.toggle.setAttribute("aria-label", `${video.paused ? "Play" : "Pause"} the ${name} clip`);
}

const near = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    load(entry.target);
    near.unobserve(entry.target);
  }
}, { rootMargin: "600px 0px" });

const seen = new IntersectionObserver((entries) => {
  for (const { target: video, isIntersecting } of entries) {
    if (!isIntersecting) video.pause();
    else if (!video.stopped) {
      // The other observer may not have run yet, and setting a source afterwards would cancel the play.
      load(video);
      video.play().catch(() => undefined);
    }
  }
}, { threshold: 0.2 });

for (const video of document.querySelectorAll("video[data-clip]")) {
  // Under the clip, at the end of its words: never over the picture.
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "toggle";
  video.toggle = toggle;
  video.stopped = still;
  video.parentElement.querySelector(".words")?.append(toggle);
  toggle.addEventListener("click", () => {
    video.stopped = !video.paused;
    if (video.stopped) video.pause();
    else {
      load(video);
      video.play().catch(() => undefined);
    }
  });
  video.addEventListener("play", () => setLabel(video));
  video.addEventListener("pause", () => setLabel(video));
  setLabel(video);
  if (!still) near.observe(video);
  seen.observe(video);
}
