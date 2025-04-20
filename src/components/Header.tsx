import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'
        }`}
    >
      <div className="relative w-full">
        {/* Navbar Content */}
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold text-teal-900 dark:text-teal-400 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Abdullah<span className="text-amber-500">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`text-sm font-medium transition-all duration-300 hover:text-amber-500 relative ${activeSection === link.id
                        ? 'text-amber-500'
                        : 'text-slate-800 dark:text-slate-200'
                      }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500 rounded-full"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <button
              aria-label="Toggle dark mode"
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors duration-300"
              onClick={toggleDarkMode}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              aria-label="Toggle dark mode"
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors duration-300"
              onClick={toggleDarkMode}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              aria-label="Toggle mobile menu"
              className="p-2 text-slate-800 dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (OUTSIDE .container) */}
        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 right-0 w-full bg-white dark:bg-slate-900 shadow-lg px-4 sm:px-6 md:hidden z-40 transition-all duration-300 overflow-hidden ${mobileMenuOpen
              ? 'max-h-screen opacity-100 scale-y-100 py-4'
              : 'max-h-0 opacity-0 scale-y-95 py-0 pointer-events-none'
            }`}
          style={{ transformOrigin: 'top' }}
        >
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`block py-2 text-base font-medium transition-colors duration-300 ${activeSection === link.id
                      ? 'text-amber-500'
                      : 'text-slate-800 dark:text-slate-200'
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </header>
  );
};

export default Header;
