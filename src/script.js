// ======================================
// 1. HEADER
// ======================================

const header = document.querySelector(".header-section");
window.addEventListener("scroll", function () {
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

// ======================================
// 3. INTERSECTION OBSERVER
// ======================================

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); //
      }
    });
  },
  { threshold: 0.15 },
);

const sections = document.querySelectorAll(
  ".about-section, .projects-section, .skills-section, .contact-section",
);

sections.forEach(function (section) {
  section.classList.add("fade-section");
  observer.observe(section);
});

// ======================================
// 4. EMAILJS
// ======================================

emailjs.init("VyeV_phkOQNIE8RUI");

const sendBtn = document.querySelector(".send-btn");

if (sendBtn) {
  sendBtn.addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    sendBtn.disabled = true;
    sendBtn.textContent = "Sending...";

    emailjs
      .send("service_rsimo99", "template_29ufl9d", {
        name: name,
        email: email,
        message: message,
      })

      .then(function () {
        sendBtn.textContent = "Message Sent!";

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        setTimeout(function () {
          sendBtn.disabled = false;
          sendBtn.innerHTML = "Send Message";
          lucide.createIcons();
        }, 3000);
      })

      .catch(function (error) {
        console.error("EmailJS error:", error);
        sendBtn.textContent = "Failed to send. Try again.";

        setTimeout(function () {
          sendBtn.disabled = false;
          sendBtn.innerHTML = "Send Message";
          lucide.createIcons();
        }, 3000);
      });
  });
}

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
