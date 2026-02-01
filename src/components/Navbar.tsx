import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur bg-slate-950/70 border-b border-white/5">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#home" className="text-white text-lg font-semibold tracking-wide">
                    Sabbir Sheikh
                </a>
                <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
                    <a href="#about" className="hover:text-white transition">About</a>
                    <a href="#projects" className="hover:text-white transition">Projects</a>
                    <a href="#skills" className="hover:text-white transition">Skills</a>
                    <a href="#contact" className="hover:text-white transition">Contact</a>
                </div>
                <a
                    href="#contact"
                    className="hidden md:inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-100 transition"
                >
                    Let’s Talk
                </a>
                <a
                    href="#contact"
                    className="md:hidden inline-flex items-center bg-white text-slate-900 px-3 py-1.5 rounded-full text-xs font-semibold"
                >
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default Navbar;