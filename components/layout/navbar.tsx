"use client";

import { FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { hero, navItems, primaryLinks } from "@/data/profile";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    );
    if (!sections.length) return;

    const fromHash = window.location.hash.slice(1);
    if (fromHash && sections.some((section) => section.id === fromHash)) {
      setActive(fromHash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = inView[0]?.target.id;
        if (id) setActive(id);
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

  return (
    <nav className="site-nav fixed top-0 left-0 w-full text-white z-50 font-nav">
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

        <div className="flex items-center justify-center gap-6">
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
            aria-label="Toggle menu"
            aria-expanded={open}
            type="button"
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-[38rem] opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!open}
        >
          <div className="mobile-nav-panel mx-4 mb-4">
            <div className="mobile-nav-kicker">Navigation</div>
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
