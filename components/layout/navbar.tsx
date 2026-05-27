"use client";

import { FileText, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { hero, navItems, primaryLinks } from "@/data/profile";

const activeSectionMap: Record<string, string> = {
  "client-work": "projects",
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [hiddenOnMobile, setHiddenOnMobile] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    );
    if (!sections.length) return;

    const fromHash = window.location.hash.slice(1);
    if (fromHash && sections.some((section) => section.id === fromHash)) {
      setActive(activeSectionMap[fromHash] ?? fromHash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = inView[0]?.target.id;
        if (id) setActive(activeSectionMap[id] ?? id);
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.05, 0.1, 0.2, 0.3, 0.4, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, [open]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbarVisibility = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const shouldHide = scrollingDown && currentScrollY > 96 && !open;

      setHiddenOnMobile(shouldHide);
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbarVisibility);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <nav
      ref={navRef}
      className={`site-nav fixed top-0 left-0 w-full text-white z-50 font-nav ${
        hiddenOnMobile ? "site-nav-mobile-hidden" : ""
      }`}
    >
      <div className="hidden md:flex nav-inner mx-auto items-center justify-between gap-8 px-8 py-4">
        <a
          href="#home"
          className="nav-brand"
          onClick={() => setActive("home")}
          aria-label="Go to home"
        >
          <span className="nav-brand-name">Addison Reyes</span>
          <span className="nav-brand-role">{hero.role}</span>
        </a>

        <div className="flex items-center justify-center gap-8">
          {navItems.map(({ label, target }) => (
            <NavLink
              key={target}
              label={label}
              target={target}
              active={active === target}
              onClick={() => setActive(target)}
            />
          ))}
        </div>

        <a
          href={primaryLinks.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-resume"
        >
          <FileText className="w-4 h-4" />
          <span>Resume</span>
        </a>
      </div>

      <div className="md:hidden">
        <div className="flex items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="nav-brand"
            onClick={() => {
              setActive("home");
              setOpen(false);
            }}
            aria-label="Go to home"
          >
            <span className="nav-brand-name">Addison Reyes</span>
            <span className="nav-brand-role">{hero.role}</span>
          </a>

          <button
            className="nav-menu-button flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            type="button"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-[38rem] opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!open}
        >
          <div className="mobile-nav-panel mx-4 mb-4">
            <div className="mobile-nav-links">
              {navItems.map(({ label, target }) => (
                <MobileNavLink
                  key={target}
                  label={label}
                  target={target}
                  active={active === target}
                  onClick={() => {
                    setActive(target);
                    setOpen(false);
                  }}
                />
              ))}
            </div>
            <a
              href={primaryLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume mobile-nav-resume"
              onClick={() => setOpen(false)}
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MobileNavLink({
  label,
  target,
  active,
  onClick,
}: {
  label: string;
  target: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <a
      href={`#${target}`}
      className={`mobile-nav-link ${active ? "mobile-nav-link-active" : ""}`}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
    >
      <span>{label}</span>
    </a>
  );
}

function NavLink({
  label,
  target,
  active,
  onClick,
}: {
  label: string;
  target: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <a
      href={`#${target}`}
      className={`nav-link ${active ? "nav-link-active" : ""}`}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
    >
      {label}
    </a>
  );
}
