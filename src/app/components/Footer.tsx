import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-white/40 py-10 px-6 border-t border-white/10 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-['Libre_Baskerville'] uppercase tracking-widest">
        <p>© {currentYear} Addison Amin Reyes Cedano. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-fuchsia-400 transition-colors">Twitter</a>
          <a href="#" className="hover:text-fuchsia-400 transition-colors">Medium</a>
          <a href="#" className="hover:text-fuchsia-400 transition-colors">RSS</a>
        </div>
      </div>
    </footer>
  );
};
