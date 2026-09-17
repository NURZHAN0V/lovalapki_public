(() => {
  const poster = document.getElementById("poster");
  if (!poster) return;

  const reveal = () => poster.classList.add("is-ready");

  if (document.fonts?.ready) {
    document.fonts.ready.then(reveal).catch(reveal);
  } else {
    window.addEventListener("load", reveal, { once: true });
  }

  // Safety: reveal even if fonts hang
  window.setTimeout(reveal, 900);

  poster.querySelectorAll(".cta").forEach((link) => {
    link.addEventListener("pointerdown", () => link.classList.add("is-pressed"));
    link.addEventListener("pointerup", () => link.classList.remove("is-pressed"));
    link.addEventListener("pointerleave", () => link.classList.remove("is-pressed"));
    link.addEventListener("pointercancel", () => link.classList.remove("is-pressed"));
  });
})();
