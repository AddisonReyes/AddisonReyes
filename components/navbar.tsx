"use client";

import { useEffect, useState } from "react";

const navItems = [
  ["HOME", "home"],
  ["ABOUT", "about"],
  ["EXPERIENCE", "experience"],
  ["PROJECTS", "projects"],
  ["CLIENT WORK", "client-work"],
  ["CONTACT", "contact"]
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
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
        threshold: [0.05, 0.1, 0.2, 0.3, 0.4, 0.5]
      }
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
    <nav className="fixed top-0 left-0 w-full bg-[#171717]/90 backdrop-blur border-b border-white/5 text-white z-50 font-nav">
      <div className="hidden md:flex items-center justify-center gap-16 px-8 py-5">
        {navItems.map(([label, target]) => (
          <NavLink
            key={target}
            label={label}
            target={target}
            active={active === target}
            onClick={() => setActive(target)}
          />
        ))}
      </div>

      <div className="md:hidden">
        <div className="flex items-center justify-between px-6 py-4">
          <span className="tracking-widest text-sm font-bold opacity-80">MENU</span>

          <button
            className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
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
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!open}
        >
          <div className="flex flex-col items-center gap-6 py-6 border-t border-white/10">
            {navItems.map(([label, target]) => (
              <NavLink
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
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  label,
  target,
  active,
  onClick
}: {
  label: string;
  target: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <a
      href={`#${target}`}
      className={`${active ? "opacity-100" : "opacity-60"} hover:opacity-100 transition-opacity tracking-widest text-sm font-bold`}
      onClick={onClick}
    >
      {label}
    </a>
  );
}
