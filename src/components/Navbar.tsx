"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Skills", href: "#skills" },
  { text: "Experience", href: "#experience" },
  { text: "Projects", href: "#projects" },
  { text: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-surface/80 backdrop-blur-md border-[--color-border-glow] py-3 shadow-lg"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <a href="#home" className="text-xl font-bold font-mono text-text-main flex items-center group">
          <span className="text-accent">&gt;</span> AK
          <span className="text-accent animate-pulse">_</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent relative py-1 ${
                activeSection === link.href.substring(1) ? "text-accent" : "text-text-muted"
              }`}
            >
              {link.text}
              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent rounded" />
              )}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-surface transition-colors font-medium text-sm"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-text-main focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-[--color-border-glow] shadow-xl py-4 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium ${
                activeSection === link.href.substring(1) ? "text-accent" : "text-text-muted"
              }`}
            >
              {link.text}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="px-6 py-2 mt-2 border border-accent rounded-full text-accent font-medium hover:bg-accent hover:text-surface transition-colors"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
