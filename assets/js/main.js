(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  const revealNodes = document.querySelectorAll(
    ".hero-grid > *, .section h1, .section h2, .section .lead, .card, .timeline-item, .cta-box"
  );

  if (toggle && nav) {
    toggle.setAttribute("aria-expanded", "false");

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (revealNodes.length) {
    revealNodes.forEach((node, index) => {
      node.setAttribute("data-reveal", "");
      node.style.transitionDelay = `${Math.min(index * 42, 280)}ms`;
    });

    const observer = new IntersectionObserver(
      (entries, revealObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -36px 0px"
      }
    );

    revealNodes.forEach((node) => observer.observe(node));
  }
})();
