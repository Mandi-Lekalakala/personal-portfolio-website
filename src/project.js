// ============================================
//   HEADER SCROLL EFFECT
// ============================================

const header = document.querySelector(".header-section");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ============================================
//   INTERSECTION OBSERVER
// ============================================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

const fadeElements = document.querySelectorAll(
  ".project-tags, .project-block, .project-btns",
);

fadeElements.forEach((el) => {
  el.classList.add("fade-up");
  observer.observe(el);
});
