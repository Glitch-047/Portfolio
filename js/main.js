/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     THEME TOGGLE (LIGHT / DARK)
     ========================================================= */

  function loadTheme() {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const icon = document.getElementById("theme-icon");

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.body.classList.add("dark-mode");
      icon?.classList.add("fa-sun");
    } else {
      icon?.classList.add("fa-moon");
    }
  }

  function toggleTheme() {
    const icon = document.getElementById("theme-icon");
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      icon?.classList.remove("fa-moon");
      icon?.classList.add("fa-sun");
      localStorage.setItem("theme", "dark");
    } else {
      icon?.classList.remove("fa-sun");
      icon?.classList.add("fa-moon");
      localStorage.setItem("theme", "light");
    }
  }

  /* Expose for HTML onclick */
  window.toggleTheme = toggleTheme;

  loadTheme();

  /* =========================================================
     NAVBAR (MOBILE TOGGLE)
     ========================================================= */

  function toggleMenu() {
    document.getElementById("navbarMenu")?.classList.toggle("show");
  }

  window.toggleMenu = toggleMenu;

  /* =========================================================
     TYPEWRITER EFFECT (FIXED & STABLE)
     ========================================================= */

  const typeTarget = document.getElementById("typewriter");
  if (typeTarget) {
    const phrases = [
      "📚 Student",
      "💡 Creative Thinker",
      "🌐 Web Explorer",
      "🕶 Innovator",
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriterLoop() {
      const currentText = phrases[phraseIndex];
      typeTarget.textContent = currentText.substring(0, charIndex);

      if (!isDeleting) {
        charIndex++;
        if (charIndex > currentText.length) {
          setTimeout(() => (isDeleting = true), 1000);
        }
      } else {
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }

      const speed = isDeleting ? 80 : 120;
      setTimeout(typeWriterLoop, speed);
    }

    typeWriterLoop();
  }

  /* =========================================================
     REVEAL ON SCROLL
     ========================================================= */

  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.2 });

    revealElements.forEach(el => observer.observe(el));
  }

  /* =========================================================
     SCROLL TO TOP BUTTON
     ========================================================= */

  const scrollBtn = document.querySelector(".scroll-top");

  window.addEventListener("scroll", () => {
    if (!scrollBtn) return;
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

});
