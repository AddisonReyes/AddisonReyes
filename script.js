/* global lucide, emailjs */

(function () {
  const ERROR_IMG_SRC =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

  function setActiveNav(targetId) {
    const navLinks = document.querySelectorAll("[data-nav]");
    navLinks.forEach((a) => {
      const isActive = a.getAttribute("data-target") === targetId;
      a.classList.toggle("opacity-100", isActive);
      a.classList.toggle("opacity-60", !isActive);
    });
  }

  function toast(type, message) {
    const toastEl = document.getElementById("toast");
    const titleEl = document.getElementById("toastTitle");
    const msgEl = document.getElementById("toastMessage");
    const dotEl = document.getElementById("toastDot");
    if (!toastEl || !titleEl || !msgEl || !dotEl) return;

    if (type === "success") {
      titleEl.textContent = "Success";
      dotEl.classList.remove("bg-red-400");
      dotEl.classList.add("bg-fuchsia-400");
    } else {
      titleEl.textContent = "Error";
      dotEl.classList.remove("bg-fuchsia-400");
      dotEl.classList.add("bg-red-400");
    }

    msgEl.textContent = message;
    toastEl.classList.remove("hidden");

    window.clearTimeout(toastEl.__hideTimer);
    toastEl.__hideTimer = window.setTimeout(() => {
      toastEl.classList.add("hidden");
    }, 3500);
  }

  function setContactLoading(isLoading) {
    const form = document.getElementById("contactForm");
    const normal = document.getElementById("contactSubmitContent");
    const loading = document.getElementById("contactLoadingContent");
    if (!form || !normal || !loading) return;

    const fields = form.querySelectorAll("input, textarea, button");
    fields.forEach((el) => (el.disabled = isLoading));
    normal.classList.toggle("hidden", isLoading);
    loading.classList.toggle("hidden", !isLoading);
    loading.classList.toggle("flex", isLoading);
  }

  function init() {
    // Icons
    if (window.lucide && window.lucide.createIcons) {
      // Lucide v1 dropped some brand icons (e.g. github/linkedin). Provide them
      // locally so `data-lucide="github"` works the same as built-in icons.
      const brandIcons = {
        Github: [
          [
            "path",
            {
              d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            },
          ],
          ["path", { d: "M9 18c-4.51 2-5-2-7-2" }],
        ],
        Linkedin: [
          [
            "path",
            {
              d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            },
          ],
          ["rect", { width: "4", height: "12", x: "2", y: "9" }],
          ["circle", { cx: "4", cy: "4", r: "2" }],
        ],
      };

      const icons = window.lucide.icons
        ? { ...window.lucide.icons, ...brandIcons }
        : brandIcons;

      window.lucide.createIcons({ icons });
    }

    // Current year
    const yearEl = document.getElementById("currentYear");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Image fallbacks
    document.querySelectorAll("img[data-fallback]").forEach((img) => {
      img.addEventListener(
        "error",
        () => {
          img.setAttribute("data-original-url", img.src);
          img.src = ERROR_IMG_SRC;
        },
        { once: true },
      );
    });

    // Mobile menu
    const btn = document.getElementById("mobileMenuButton");
    const menu = document.getElementById("mobileMenu");
    const l1 = document.getElementById("mobileLine1");
    const l2 = document.getElementById("mobileLine2");
    const l3 = document.getElementById("mobileLine3");
    let open = false;
    function setOpen(next) {
      open = next;
      if (btn) btn.setAttribute("aria-expanded", String(open));
      if (menu) {
        menu.classList.toggle("max-h-64", open);
        menu.classList.toggle("opacity-100", open);
        menu.classList.toggle("max-h-0", !open);
        menu.classList.toggle("opacity-0", !open);
      }
      if (l1) l1.classList.toggle("rotate-45", open);
      if (l1) l1.classList.toggle("translate-y-2", open);
      if (l2) l2.classList.toggle("opacity-0", open);
      if (l2) l2.classList.toggle("scale-x-0", open);
      if (l3) l3.classList.toggle("-rotate-45", open);
      if (l3) l3.classList.toggle("-translate-y-2", open);
    }
    if (btn) {
      btn.addEventListener("click", () => setOpen(!open));
    }
    document.querySelectorAll("#mobileMenu a[href^='#']").forEach((a) => {
      a.addEventListener("click", () => setOpen(false));
    });

    // Toast close
    const toastClose = document.getElementById("toastClose");
    const toastEl = document.getElementById("toast");
    if (toastClose && toastEl) {
      toastClose.addEventListener("click", () => toastEl.classList.add("hidden"));
    }

    // Scroll spy
    const sections = ["home", "about", "skills", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (sections.length) {
      const obs = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible && visible.target && visible.target.id) {
            setActiveNav(visible.target.id);
          }
        },
        { threshold: [0.2, 0.35, 0.5, 0.65] },
      );
      sections.forEach((s) => obs.observe(s));
    }
    setActiveNav("home");

    // Reveal on scroll
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("is-visible"));
    } else {
      const revealObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              revealObs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15 },
      );
      document
        .querySelectorAll(".reveal")
        .forEach((el) => revealObs.observe(el));
    }

    // EmailJS
    const form = document.getElementById("contactForm");
    if (form && window.emailjs) {
      try {
        window.emailjs.init({ publicKey: "iM1w4zGIgdSjeeCCS" });
      } catch (e) {
        // init can be called only once; ignore
      }

      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Let the browser show required-field UI.
        if (!form.reportValidity()) return;

        setContactLoading(true);
        try {
          await window.emailjs.sendForm(
            "service_qvau6u1",
            "template_5dq69oy",
            form,
          );
          toast("success", "Message sent successfully!");
          form.reset();
        } catch (err) {
          console.error(err);
          toast("error", "Something went wrong. Please try again.");
        } finally {
          setContactLoading(false);
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
