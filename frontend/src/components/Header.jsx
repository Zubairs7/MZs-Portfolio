import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[rgb(17,17,19)]/95 backdrop-blur-lg border-b border-[rgba(255,255,255,0.1)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-[rgb(218,255,1)]" />
              <span className="text-white font-bold text-xl font-mono">MZ.dev</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-[rgb(218,218,218)] hover:text-[rgb(218,255,1)] font-mono text-sm transition-colors duration-200 hover:bg-[rgb(26,28,30)] rounded-lg"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-[rgb(218,255,1)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] font-semibold rounded-xl transition-all duration-200 hover:shadow-[0_4px_15px_rgba(218,255,1,0.3)]"
              >
                Connect
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[rgb(218,255,1)] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-[73px] left-0 right-0 z-30 bg-[rgb(17,17,19)]/98 backdrop-blur-lg border-b border-[rgba(255,255,255,0.1)] md:hidden"
        >
          <nav className="flex flex-col p-6 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-3 text-left text-[rgb(218,218,218)] hover:text-[rgb(218,255,1)] font-mono text-base transition-colors duration-200 hover:bg-[rgb(26,28,30)] rounded-lg"
              >
                <span className="text-[rgb(218,255,1)] mr-2">&gt;</span>
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="mt-4 bg-[rgb(218,255,1)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] font-semibold rounded-xl transition-all duration-200"
            >
              Connect
            </Button>
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Header;