const d = document;

d.addEventListener("keydown", (e) => {
  const $audio = d.querySelector(`audio[data-key="${e.code}"]`);
  const $key = d.querySelector(`section[data-key="${e.code}"]`);

  if (!$audio) return;

  $audio.currentTime = 0;
  $audio.play();
});
