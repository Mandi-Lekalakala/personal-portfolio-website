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

// ======================================
// 2. FOOTER
// ======================================

const footerText = document.querySelector(".footer-content p");

const currentYear = new Date().getFullYear();

if (footerText) {
  footerText.textContent =
    "© " + currentYear + " Mandi Lekalakala. All rights reserved.";
}

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

// =================
// Hamburger Menu
// =================

const hamburger = document.getElementById("hamburger");
const navSite = document.querySelector(".nav-site");

if (hamburger) {
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    navSite.classList.toggle("open");
    if (navSite.classList.contains("open")) {
      hamburger.innerHTML = '<i data-lucide="x"></i>';
    } else {
      hamburger.innerHTML = '<i data-lucide="menu"></i>';
    }
    lucide.createIcons();
  });

  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      hamburger.classList.remove("open");
      navSite.classList.remove("open");
      hamburger.innerHTML = '<i data-lucide="menu"></i>';
      lucide.createIcons();
    });
  });
}
