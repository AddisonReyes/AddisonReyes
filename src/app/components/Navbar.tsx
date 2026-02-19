import React, { useState } from "react";
import { NavLink } from "react-router";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "opacity-100 tracking-widest text-sm font-bold"
      : "opacity-60 hover:opacity-100 transition-opacity tracking-widest text-sm font-bold";

  const links = [
    { to: "/", label: "HOME" },
    { to: "/projects", label: "PROJECTS" },
    { to: "/about", label: "ABOUT" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-[#1a1a1a] text-white z-50"
      style={{ fontFamily: "Georgia, serif" }}
    >
      {/* Desktop nav */}
      <div className="hidden md:flex items-center justify-center gap-16 px-8 py-5">
        {links.map(({ to, label }) => (
          <NavLink key={to} to={to} className={linkClass}>
            {label}
          </NavLink>
        ))}
      </div>

      {/* Mobile nav */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-6 py-4">
          <span className="tracking-widest text-sm font-bold opacity-80">
            MENU
          </span>

          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-6 border-t border-white/10">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
