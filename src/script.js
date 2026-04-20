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
//   AUTOMATIC FOOTER YEAR
// ============================================

const yearEl = document.querySelector(".footer-content p");

if (yearEl) {
  const currentYear = new Date().getFullYear();
  yearEl.textContent = `© ${currentYear} Mandi Lekalakala. All rights reserved.`;
}

// ============================================
//   INTERSECTION OBSERVER — FADE IN SECTIONS
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

const sections = document.querySelectorAll(
  ".about-section, .projects-section, .skills-section, .contact-section",
);

sections.forEach((section) => {
  section.classList.add("fade-section");
  observer.observe(section);
});
