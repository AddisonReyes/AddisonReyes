import React from 'react';
import { NavLink } from 'react-router';

export const Navbar = () => {
  return (
    <nav className="bg-black text-white py-6 px-6 fixed top-0 w-full z-50 border-b border-white/5">
      <div className="max-w-6xl mx-auto flex justify-center gap-12 md:gap-24 font-['Libre_Baskerville'] text-sm uppercase tracking-widest font-bold">
        <NavLink to="/" className={({ isActive }) => isActive ? "opacity-100" : "opacity-60 hover:opacity-100 transition-opacity"}>
          Home
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "opacity-100" : "opacity-60 hover:opacity-100 transition-opacity"}>
          Projects
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "opacity-100" : "opacity-60 hover:opacity-100 transition-opacity"}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "opacity-100" : "opacity-60 hover:opacity-100 transition-opacity"}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};
