import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (_jsx("footer", { className: "bg-black text-white/40 py-10 px-6 border-t border-white/10 mt-auto", children: _jsxs("div", { className: "max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-['Libre_Baskerville'] uppercase tracking-widest", children: [_jsxs("p", { children: ["\u00A9 ", currentYear, " Addison Amin Reyes Cedano. All rights reserved."] }), _jsxs("div", { className: "flex gap-8", children: [_jsx("a", { href: "#", className: "hover:text-fuchsia-400 transition-colors", children: "Twitter" }), _jsx("a", { href: "#", className: "hover:text-fuchsia-400 transition-colors", children: "Medium" }), _jsx("a", { href: "#", className: "hover:text-fuchsia-400 transition-colors", children: "RSS" })] })] }) }));
};
//# sourceMappingURL=Footer.js.map