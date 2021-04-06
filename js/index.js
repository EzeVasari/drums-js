const d = document;

d.addEventListener("keydown", (e) => {
  const $audio = d.querySelector(`audio[data-key="${e.code}"]`);
  const $key = d.querySelector(`section[data-key="${e.code}"]`);

  if ($key) $key.classList.toggle("active");

  if (!$audio) return;

  $audio.currentTime = 0;
  $audio.play();
});

const $keys = d.querySelectorAll(".key");

function removeActive(e) {
  console.log(e.propertyName);
  if (e.propertyName !== "transform") return;
  this.classList.remove("active");
}

$keys.forEach((key) => key.addEventListener("transitionend", removeActive));
