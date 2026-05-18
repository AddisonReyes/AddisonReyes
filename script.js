(function () {
  const ERROR_IMG_SRC =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

  const PROJECTS_JSON_PATH = "./projects.json";
  const EMAILJS_PUBLIC_KEY = "iM1w4zGIgdSjeeCCS";
  const EMAILJS_SERVICE_ID = "service_qvau6u1";
  const EMAILJS_TEMPLATE_ID = "template_5dq69oy";

  const iconPaths = {
    github: [
      '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>',
      '<path d="M9 18c-4.51 2-5-2-7-2"/>',
    ],
    linkedin: [
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>',
      '<rect width="4" height="12" x="2" y="9"/>',
      '<circle cx="4" cy="4" r="2"/>',
    ],
    "file-text": [
      '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/>',
      '<path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
      '<path d="M10 9H8"/>',
      '<path d="M16 13H8"/>',
      '<path d="M16 17H8"/>',
    ],
    "external-link": [
      '<path d="M15 3h6v6"/>',
      '<path d="M10 14 21 3"/>',
      '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    ],
    mail: [
      '<rect width="20" height="16" x="2" y="4" rx="2"/>',
      '<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    ],
    send: ['<path d="m22 2-7 20-4-9-9-4Z"/>', '<path d="M22 2 11 13"/>'],
  };

  function getString(value, fallback) {
    return typeof value === "string" && value.trim() ? value : fallback || "";
  }

  function createElement(tag, className, textContent) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (textContent !== undefined) el.textContent = textContent;
    return el;
  }

  function appendIf(parent, child, condition) {
    if (condition) parent.appendChild(child);
  }

  function getProjectImage(project) {
    const image = project && project.image ? project.image : {};
    return {
      src: getString(image.src),
      alt: getString(image.alt, getString(project && project.name)),
    };
  }

  function hydrateIcons() {
    document.querySelectorAll("i[data-lucide]").forEach((el) => {
      const name = el.getAttribute("data-lucide") || "";
      const paths = iconPaths[name];
      if (!paths) return;

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("stroke-width", "2");
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-linejoin", "round");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("data-lucide", name);
      svg.setAttribute("class", el.className);
      svg.innerHTML = paths.join("");
      el.replaceWith(svg);
    });
  }

  function loadEmailJs() {
    if (window.emailjs) return Promise.resolve(window.emailjs);

    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
      script.async = true;
      script.defer = true;
      script.dataset.emailjs = "true";
      script.addEventListener("load", () => resolve(window.emailjs), {
        once: true,
      });
      script.addEventListener("error", reject, { once: true });
      document.head.appendChild(script);
    });
  }

  function wireImageFallbacks(root) {
    const scope = root || document;
    scope.querySelectorAll("img[data-fallback]").forEach((img) => {
      if (img.dataset.fallbackWired === "1") return;
      img.dataset.fallbackWired = "1";
      img.addEventListener(
        "error",
        () => {
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

  function initCurrentYear() {
    const yearEl = document.getElementById("currentYear");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  function initMobileMenu() {
    const btn = document.getElementById("mobileMenuButton");
    const menu = document.getElementById("mobileMenu");
    const l1 = document.getElementById("mobileLine1");
    const l2 = document.getElementById("mobileLine2");
    const l3 = document.getElementById("mobileLine3");
    const navEl = btn ? btn.closest("nav") : document.querySelector("nav");
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
      if (l1) {
        l1.classList.toggle("rotate-45", open);
        l1.classList.toggle("translate-y-2", open);
      }
      if (l2) {
        l2.classList.toggle("opacity-0", open);
        l2.classList.toggle("scale-x-0", open);
      }
      if (l3) {
        l3.classList.toggle("-rotate-45", open);
        l3.classList.toggle("-translate-y-2", open);
      }

      document.body.classList.toggle("overflow-hidden", open);
    }

    if (btn) btn.addEventListener("click", () => setOpen(!open));

    document.querySelectorAll("#mobileMenu a[href^='#']").forEach((a) => {
      a.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (e) => {
      if (open && e.key === "Escape") setOpen(false);
    });

    document.addEventListener("click", (e) => {
      if (!open || !navEl) return;
      if (e.target && navEl.contains(e.target)) return;
      setOpen(false);
    });

    return setOpen;
  }

  function initToastClose() {
    const toastClose = document.getElementById("toastClose");
    const toastEl = document.getElementById("toast");
    if (!toastClose || !toastEl) return;
    toastClose.addEventListener("click", () => toastEl.classList.add("hidden"));
  }

  function createRevealManager() {
    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = reduceMotion
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            });
          },
          { threshold: 0.15 },
        );

    return function wireReveals(root) {
      const scope = root || document;
      if (reduceMotion) {
        scope
          .querySelectorAll(".reveal")
          .forEach((el) => el.classList.add("is-visible"));
        return;
      }
      if (!observer) return;
      scope.querySelectorAll(".reveal").forEach((el) => {
        if (el.dataset.revealWired === "1") return;
        el.dataset.revealWired = "1";
        observer.observe(el);
      });
    };
  }

  function initScrollSpy(closeMobileMenu) {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    if (!sections.length) return;

    let activeId = null;
    const setActive = (id) => {
      if (!id || id === activeId) return;
      activeId = id;
      setActiveNav(id);
    };

    const initialFromHash =
      window.location.hash && window.location.hash.slice(1);
    if (initialFromHash && document.getElementById(initialFromHash)) {
      setActive(initialFromHash);
    } else {
      setActive(sections[0].id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
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

    sections.forEach((section) => observer.observe(section));
    document.querySelectorAll("a[data-nav][href^='#']").forEach((link) => {
      link.addEventListener("click", () => {
        const id = link.getAttribute("data-target");
        if (id) setActive(id);
        closeMobileMenu(false);
      });
    });
  }

  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;

      setContactLoading(true);
      try {
        const emailjs = await loadEmailJs();
        if (!emailjs) throw new Error("EmailJS did not load");

        try {
          emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
        } catch (initError) {
          // EmailJS throws if it has already been initialized.
        }

        await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
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

  function init() {
    hydrateIcons();
    initCurrentYear();
    wireImageFallbacks(document);
    const closeMobileMenu = initMobileMenu();
    initToastClose();

    const wireReveals = createRevealManager();
    wireReveals(document);
    initProjects(wireReveals);
    initScrollSpy(closeMobileMenu);
    initContactForm();
  }

  function initProjects(wireReveals) {
    function createProjectMedia(project) {
      const image = getProjectImage(project);
      const media = createElement(
        "div",
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_12px_28px_rgba(0,0,0,0.1)]",
      );

      if (image.src) {
        const blurBg = createElement(
          "img",
          "absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-35 blur-3xl saturate-125",
        );
        blurBg.setAttribute("data-fallback", "");
        blurBg.setAttribute("aria-hidden", "true");
        blurBg.loading = "lazy";
        blurBg.decoding = "async";
        blurBg.alt = "";
        blurBg.src = image.src;

        const img = createElement(
          "img",
          "relative z-[1] w-full object-contain object-center transform transition-transform duration-500 group-hover:scale-[1.01]",
        );
        img.setAttribute("data-fallback", "");
        img.loading = "lazy";
        img.decoding = "async";
        img.width = 1280;
        img.alt = image.alt;
        img.src = image.src;

        media.appendChild(blurBg);
        media.appendChild(img);
      } else {
        media.appendChild(createProjectPlaceholder(project));
      }

      media.appendChild(
        createElement(
          "div",
          "absolute inset-0 z-[2] bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none",
        ),
      );

      return media;
    }

    function createProjectPlaceholder(project) {
      const placeholder = createElement(
        "div",
        "relative z-[1] flex aspect-[16/9] w-full flex-col justify-between bg-gradient-to-br from-white/[0.05] via-fuchsia-950/20 to-white/[0.02] p-8 md:p-10",
      );
      placeholder.appendChild(
        createElement(
          "div",
          "text-xs uppercase tracking-[0.3em] text-fuchsia-300/80 font-nav font-semibold",
          "Client Project",
        ),
      );
      placeholder.appendChild(
        createElement(
          "div",
          "max-w-[16rem] font-libre text-3xl md:text-4xl leading-tight text-white",
          getString(project && project.name, "Project"),
        ),
      );
      placeholder.appendChild(
        createElement(
          "div",
          "h-px w-20 bg-gradient-to-r from-fuchsia-400/60 to-transparent",
        ),
      );
      return placeholder;
    }

    function createProjectTags(project) {
      const tags = createElement("div", "flex flex-wrap gap-2 pt-1");
      const tagList = Array.isArray(project && project.tags) ? project.tags : [];

      tagList.forEach((tag) => {
        tags.appendChild(
          createElement(
            "span",
            "px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-white/68 text-xs font-nav tracking-wide",
            String(tag),
          ),
        );
      });

      return tags;
    }

    function createProjectLink(href, icon, label, isPrimary) {
      if (!href) return null;

      const link = createElement(
        "a",
        isPrimary
          ? "inline-flex items-center justify-center gap-2 rounded-full bg-fuchsia-600 px-5 py-3 text-sm font-nav font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-fuchsia-700"
          : "inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-nav font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:border-fuchsia-500/25 hover:text-fuchsia-300",
      );
      link.href = href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      const linkIcon = createElement("i", "w-4 h-4");
      linkIcon.setAttribute("data-lucide", icon);

      link.appendChild(linkIcon);
      link.appendChild(createElement("span", "", label));
      return link;
    }

    function createProjectLinks(project) {
      const links = createElement("div", "flex flex-wrap gap-4 pt-1");
      const sourceLink = createProjectLink(
        getString(project && project.codeUrl),
        "github",
        "Source",
        false,
      );
      const websiteLink = createProjectLink(
        getString(project && project.liveUrl),
        "external-link",
        "Website",
        true,
      );

      appendIf(links, sourceLink, sourceLink);
      appendIf(links, websiteLink, websiteLink);
      return links;
    }

    function createProjectContent(project) {
      const content = createElement("div", "space-y-4");
      const title = createElement(
        "h4",
        "font-libre text-white text-3xl xl:text-[3rem] font-bold leading-none",
        getString(project && project.name),
      );
      const description = createElement(
        "p",
        "text-white/72 font-libre text-lg leading-relaxed max-w-xl",
        getString(
          project && project.description,
          getString(project && project.summary),
        ),
      );
      const tags = createProjectTags(project);
      const links = createProjectLinks(project);

      content.appendChild(title);
      appendIf(content, description, description.textContent);
      appendIf(content, tags, tags.childNodes.length);
      appendIf(content, links, links.childNodes.length);
      return content;
    }

    function createProjectCard(project, index) {
      const card = createElement("div", "reveal group");
      const grid = createElement(
        "div",
        "grid grid-cols-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.85fr)] gap-8 lg:gap-10 xl:gap-12 items-center",
      );
      const media = createProjectMedia(project);
      const content = createProjectContent(project);

      if (index % 2 === 1) {
        media.classList.add("lg:order-2");
        content.classList.add("lg:order-1");
      }

      grid.appendChild(media);
      grid.appendChild(content);
      card.appendChild(grid);
      return card;
    }

    function renderProjectsInto(container, projects) {
      if (!container) return;

      container.textContent = "";
      projects.forEach((proj, idx) => {
        container.appendChild(createProjectCard(proj, idx));
      });

      hydrateIcons();
      wireImageFallbacks(container);
      wireReveals(container);
    }

    async function loadAndRenderProjects() {
      const featuredContainer = document.getElementById("projectsList");
      const externalContainer = document.getElementById("clientWorkList");
      if (!featuredContainer && !externalContainer) return;

      try {
        const res = await fetch(PROJECTS_JSON_PATH);
        if (!res.ok) throw new Error(`Failed to load projects (${res.status})`);

        const data = await res.json();
        const projects = Array.isArray(data && data.projects)
          ? data.projects
          : [];
        const externalProjects = Array.isArray(data && data.externalProjects)
          ? data.externalProjects
          : [];

        if (featuredContainer) {
          renderProjectsInto(featuredContainer, projects);
        }
        if (externalContainer) {
          renderProjectsInto(externalContainer, externalProjects);
        }
      } catch (err) {
        console.error(err);
        toast("error", "Failed to load projects.");
      }
    }

    void loadAndRenderProjects();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
