/* global lucide, emailjs */

(function () {
  const ERROR_IMG_SRC =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

  const PROJECTS_JSON_PATH = "./projects.json";

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

  function hydrateIcons() {
    if (!window.lucide || !window.lucide.createIcons) return;

    // Lucide v1 dropped some brand icons (e.g. github/linkedin). Provide them
    // locally so `data-lucide="github"` works the same as built-in icons.
    const icons = window.lucide.icons
      ? { ...window.lucide.icons, ...brandIcons }
      : brandIcons;

    window.lucide.createIcons({ icons });
  }

  function wireImageFallbacks(root) {
    const scope = root || document;
    scope.querySelectorAll("img[data-fallback]").forEach((img) => {
      if (img.dataset.fallbackWired === "1") return;
      img.dataset.fallbackWired = "1";
      img.addEventListener(
        "error",
        () => {
          img.setAttribute("data-original-url", img.src);
          img.src = ERROR_IMG_SRC;
        },
        { once: true },
      );
    });
  }

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
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      dotEl.classList.remove("bg-red-400");
      dotEl.classList.add("bg-fuchsia-400");
    } else {
      titleEl.textContent = "Error";
      toastEl.setAttribute("role", "alert");
      toastEl.setAttribute("aria-live", "assertive");
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

    // Do not disable inputs/textarea here.
    // Disabled fields are excluded from FormData, and EmailJS `sendForm` uses
    // FormData under the hood. Disabling them would send an empty payload.
    const submit = document.getElementById("contactSubmit");
    if (submit) submit.disabled = isLoading;

    // Prevent edits while sending without breaking FormData serialization.
    form
      .querySelectorAll("input, textarea")
      .forEach((el) => (el.readOnly = isLoading));

    form.setAttribute("aria-busy", String(isLoading));
    normal.classList.toggle("hidden", isLoading);
    loading.classList.toggle("hidden", !isLoading);
    loading.classList.toggle("flex", isLoading);
  }

  function init() {
    // Icons
    hydrateIcons();

    // Current year
    const yearEl = document.getElementById("currentYear");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Image fallbacks
    wireImageFallbacks(document);

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
        menu.setAttribute("aria-hidden", String(!open));
      }
      if (l1) l1.classList.toggle("rotate-45", open);
      if (l1) l1.classList.toggle("translate-y-2", open);
      if (l2) l2.classList.toggle("opacity-0", open);
      if (l2) l2.classList.toggle("scale-x-0", open);
      if (l3) l3.classList.toggle("-rotate-45", open);
      if (l3) l3.classList.toggle("-translate-y-2", open);

      // Prevent background scroll while the mobile menu is open.
      document.body.classList.toggle("overflow-hidden", open);
    }
    if (btn) {
      btn.addEventListener("click", () => setOpen(!open));
    }
    document.querySelectorAll("#mobileMenu a[href^='#']").forEach((a) => {
      a.addEventListener("click", () => setOpen(false));
    });

    // Close menu on Escape.
    document.addEventListener("keydown", (e) => {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
    });

    // Close menu when clicking outside the nav.
    const navEl = btn ? btn.closest("nav") : document.querySelector("nav");
    document.addEventListener("click", (e) => {
      if (!open) return;
      if (!navEl) return;
      if (e.target && navEl.contains(e.target)) return;
      setOpen(false);
    });

    // Toast close
    const toastClose = document.getElementById("toastClose");
    const toastEl = document.getElementById("toast");
    if (toastClose && toastEl) {
      toastClose.addEventListener("click", () =>
        toastEl.classList.add("hidden"),
      );
    }

    // Reveal on scroll
    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealObs = reduceMotion
      ? null
      : new IntersectionObserver(
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

    function wireReveals(root) {
      const scope = root || document;
      if (reduceMotion) {
        scope
          .querySelectorAll(".reveal")
          .forEach((el) => el.classList.add("is-visible"));
        return;
      }
      if (!revealObs) return;
      scope.querySelectorAll(".reveal").forEach((el) => {
        if (el.dataset.revealWired === "1") return;
        el.dataset.revealWired = "1";
        revealObs.observe(el);
      });
    }

    wireReveals(document);

    function createProjectCard(project, index) {
      const wrap = document.createElement("div");
      wrap.className = "reveal group";

      const grid = document.createElement("div");
      grid.className =
        "grid grid-cols-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.85fr)] gap-8 lg:gap-10 xl:gap-12 items-center";

      const imgWrap = document.createElement("div");
      imgWrap.className =
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_12px_28px_rgba(0,0,0,0.1)]";

      const imgSrc =
        project && project.image && project.image.src
          ? project.image.src
          : "";

      const blurBg = document.createElement("img");
      blurBg.className =
        "absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-35 blur-3xl saturate-125";
      blurBg.setAttribute("data-fallback", "");
      blurBg.setAttribute("aria-hidden", "true");
      blurBg.alt = "";
      blurBg.src = imgSrc;

      const img = document.createElement("img");
      img.className =
        "relative z-[1] w-full aspect-[16/9] object-cover object-top transform transition-transform duration-500 group-hover:scale-[1.01]";
      img.setAttribute("data-fallback", "");
      img.alt =
        project && project.image && typeof project.image.alt === "string"
          ? project.image.alt
          : project && typeof project.name === "string"
            ? project.name
            : "";
      img.src = imgSrc;

      const overlay = document.createElement("div");
      overlay.className =
        "absolute inset-0 z-[2] bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none";

      imgWrap.appendChild(blurBg);
      imgWrap.appendChild(img);
      imgWrap.appendChild(overlay);

      const content = document.createElement("div");
      content.className = "space-y-5";

      if (index % 2 === 1) {
        imgWrap.classList.add("lg:order-2");
        content.classList.add("lg:order-1");
      }

      const h4 = document.createElement("h4");
      h4.className = "font-libre text-white text-3xl xl:text-[3rem] font-bold leading-none";
      h4.textContent = project && project.name ? String(project.name) : "";

      const description = document.createElement("p");
      description.className =
        "text-white/72 font-libre text-lg leading-relaxed max-w-xl";
      description.textContent =
        project && project.description
          ? String(project.description)
          : project && project.summary
            ? String(project.summary)
            : "";

      const tags = document.createElement("div");
      tags.className = "flex flex-wrap gap-2 pt-1";
      (Array.isArray(project && project.tags) ? project.tags : []).forEach(
        (t) => {
          const span = document.createElement("span");
          span.className =
            "px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-white/68 text-xs font-nav tracking-wide";
          span.textContent = String(t);
          tags.appendChild(span);
        },
      );

      const links = document.createElement("div");
      links.className = "flex flex-wrap gap-4 pt-1";

      function addLink(href, icon, label) {
        if (!href) return;
        const a = document.createElement("a");
        a.href = href;
        a.className =
          label === "Website"
            ? "inline-flex items-center justify-center gap-2 rounded-full bg-fuchsia-600 px-5 py-3 text-sm font-nav font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-fuchsia-700"
            : "inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-nav font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:border-fuchsia-500/25 hover:text-fuchsia-300";
        a.target = "_blank";
        a.rel = "noopener noreferrer";

        const i = document.createElement("i");
        i.setAttribute("data-lucide", icon);
        i.className = "w-4 h-4";

        const span = document.createElement("span");
        span.textContent = label;

        a.appendChild(i);
        a.appendChild(span);
        links.appendChild(a);
      }

      addLink(
        project && project.codeUrl ? String(project.codeUrl) : "",
        "github",
        "Source",
      );
      addLink(
        project && project.liveUrl ? String(project.liveUrl) : "",
        "external-link",
        "Website",
      );

      content.appendChild(h4);
      if (description.textContent) content.appendChild(description);
      if (tags.childNodes.length) content.appendChild(tags);
      if (links.childNodes.length) content.appendChild(links);

      grid.appendChild(imgWrap);
      grid.appendChild(content);
      wrap.appendChild(grid);
      return wrap;
    }

    async function loadAndRenderProjects() {
      const container = document.getElementById("projectsList");
      if (!container) return;

      try {
        const res = await fetch(PROJECTS_JSON_PATH, { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load projects (${res.status})`);

        const data = await res.json();
        const projects = Array.isArray(data && data.projects)
          ? data.projects
          : [];

        container.textContent = "";
        projects.forEach((proj, idx) => {
          container.appendChild(createProjectCard(proj, idx));
        });

        // The DOM was injected after init; wire up the same runtime hooks.
        hydrateIcons();
        wireImageFallbacks(container);
        wireReveals(container);
      } catch (err) {
        console.error(err);
        toast("error", "Failed to load projects.");
      }
    }

    void loadAndRenderProjects();

    // Scroll spy for navbar anchors
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    if (sections.length) {
      let activeId = null;
      const setActive = (id) => {
        if (!id || id === activeId) return;
        activeId = id;
        setActiveNav(id);
      };

      // Set initial state from hash (if present), otherwise default to first.
      const initialFromHash =
        window.location.hash && window.location.hash.slice(1);
      if (initialFromHash && document.getElementById(initialFromHash)) {
        setActive(initialFromHash);
      } else {
        setActive(sections[0].id);
      }

      // Update active item when the section is in the middle-ish of the viewport.
      const spyObs = new IntersectionObserver(
        (entries) => {
          const inView = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          if (inView[0] && inView[0].target && inView[0].target.id) {
            setActive(inView[0].target.id);
          }
        },
        {
          rootMargin: "-35% 0px -55% 0px",
          threshold: [0.05, 0.1, 0.2, 0.3, 0.4, 0.5],
        },
      );
      sections.forEach((s) => spyObs.observe(s));

      // Keep state in sync on click (also closes mobile menu if open).
      document.querySelectorAll("a[data-nav][href^='#']").forEach((a) => {
        a.addEventListener("click", () => {
          const id = a.getAttribute("data-target");
          if (id) setActive(id);
          setOpen(false);
        });
      });
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
