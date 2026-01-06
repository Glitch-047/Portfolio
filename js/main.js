
document.addEventListener("DOMContentLoaded", () => {

    function loadTheme() {
      const storedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
        document.body.classList.add("dark-mode");
        document.getElementById("theme-icon").classList.add("fa-sun");
      } else {
        document.getElementById("theme-icon").classList.add("fa-moon");
      }
    }

    function toggleTheme() {
      document.body.classList.toggle("dark-mode");
      const icon = document.getElementById("theme-icon");
      if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
      } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
      }
    }

    function toggleMenu() {
      document.getElementById("navbarMenu").classList.toggle("show");
    }

    window.onload = loadTheme;
  </script>

  <script>
  // Typewriter phrases – add more below as desired
  const phrases = [
    "📚 Student",
    "💡 Creative Thinker",
    "🌐 Web Explorer",
    "🕶 Innovator",
    // 👉 Add more phrases here
  ];

  let i = 0;
  let j = 0;
  let currentPhrase = [];
  let isDeleting = false;
  let isEnd = false;

  function loop() {
    document.getElementById('typewriter').innerHTML = currentPhrase.join('');

    if (i < phrases.length) {

      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j]);
        j++;
        document.getElementById('typewriter').innerHTML = currentPhrase.join('');
      }

      if (isDeleting && j <= phrases[i].length) {
        currentPhrase.pop();
        j--;
        document.getElementById('typewriter').innerHTML = currentPhrase.join('');
      }

      if (j == phrases[i].length) {
        isEnd = true;
        isDeleting = true;
      }

      if (isDeleting && j === 0) {
        currentPhrase = [];
        isDeleting = false;
        i++;
        if (i === phrases.length) {
          i = 0;
        }
      }
    }
    const speedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200;
    const time = isEnd ? 1000 : isDeleting ? speedUp : normalSpeed;
    isEnd = false;
    setTimeout(loop, time);
  }

  loop();
</script>

  <!-- Reveal on scroll script -->
  <script>
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  </script>

  <script>
    window.addEventListener('scroll', () => {
      const btn = document.querySelector('.scroll-top');
      if (!btn) return;
      if (window.scrollY > 300) {
        btn.style.display = 'block';
      } else {
        btn.style.display = 'none';
      }
    });
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }


