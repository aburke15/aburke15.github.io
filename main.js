(function () {
  const slides = document.getElementById("slides");
  const dots = Array.from(document.querySelectorAll(".dot"));

  function setCurrentDot(index) {
    dots.forEach((d, i) => d.setAttribute("aria-current", i === index ? "true" : "false"));
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const i = Number(dot.dataset.slide);
      slides.scrollTo({ left: slides.clientWidth * i, behavior: "smooth" });
      setCurrentDot(i);
    });
  });

  let ticking = false;
  slides.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      const idx = Math.round(slides.scrollLeft / slides.clientWidth);
      setCurrentDot(Math.max(0, Math.min(idx, dots.length - 1)));
      ticking = false;
    });
  });
})();
