import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectsPage } from './components/ProjectsPage';
import { useEffect } from 'react';
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};
const HomePage = () => (_jsxs("main", { className: "bg-[#121212] flex-grow", children: [_jsx(Hero, {}), _jsx(About, {}), _jsx(Skills, {}), _jsx(FeaturedProjects, {}), _jsx(Contact, {})] }));
const AboutPage = () => (_jsxs("main", { className: "bg-[#121212] pt-32 pb-20 flex-grow", children: [_jsx(About, {}), _jsxs("div", { className: "max-w-4xl mx-auto px-6 py-12", children: [_jsx("h3", { className: "font-['Libre_Baskerville'] text-fuchsia-500 text-3xl mb-10", children: "My Story" }), _jsxs("div", { className: "space-y-6 text-white/90 text-lg font-['Libre_Baskerville'] leading-relaxed italic", children: [_jsx("p", { children: "I started my journey into software development with a passion for building interactive digital experiences. Over the years, I've honed my skills in the JavaScript ecosystem, moving from basic frontend development to architecting complex full-stack applications." }), _jsx("p", { children: "My focus on performance optimization and robust data structures comes from my interest in web gaming. I believe that a great user experience starts with a solid foundation, which is why I spend considerable time on API design and database efficiency." }), _jsx("p", { children: "When I'm not coding, I'm usually exploring new web technologies or experimenting with different design patterns. I value clean code, documentation, and the power of collaborative problem-solving." })] })] })] }));
const ContactPage = () => (_jsx("main", { className: "bg-[#121212] pt-32 flex-grow min-h-[calc(100vh-80px)]", children: _jsx(Contact, {}) }));
export default function App() {
    return (_jsxs(Router, { children: [_jsx(ScrollToTop, {}), _jsxs("div", { className: "min-h-screen flex flex-col bg-[#121212]", children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/projects", element: _jsx(ProjectsPage, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutPage, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactPage, {}) })] }), _jsx(Footer, {}), _jsx(Toaster, { position: "bottom-right", theme: "dark" })] })] }));
}
//# sourceMappingURL=App.js.map